# Deployment & Operations

Production runs on the shared **knuco-droplet** (DigitalOcean, `161.35.0.183`).
Three Next.js services share this droplet behind a single nginx:

| Port | Service                  | URL                          |
|------|--------------------------|------------------------------|
| 4000 | knuco.service            | https://crm.knuconstruction.com |
| 4001 | equifirst-site.service   | https://equifirstproperties.com |
| 4002 | newcoast-roofing.service | https://newcoastroofing.com  |

Don't touch the other two services' files (`/opt/knuco`, `/etc/knuco`,
`/opt/equifirst-site`, `/etc/equifirst-site`, etc.) when working on this site.

## Connecting to the server

SSH alias is preconfigured in `~/.ssh/config`:

```
ssh knuco-droplet
```

You log in as user `knuco`, who has passwordless `sudo`. The newcoast-roofing
files are owned by a separate system user `newcoast` (no shell), so most
commands need `sudo`.

## Where things live on the droplet

| Path                                   | What                                      |
|----------------------------------------|-------------------------------------------|
| `/opt/newcoast-roofing/`               | App source + `node_modules` + `.next`     |
| `/etc/newcoast-roofing/env`            | Runtime env vars (mode 600, owner newcoast) |
| `/etc/systemd/system/newcoast-roofing.service` | systemd unit                      |
| `/etc/nginx/sites-available/newcoast-roofing`  | nginx vhost                       |
| `/etc/letsencrypt/live/newcoastroofing.com/`   | TLS cert + key                    |
| `/var/log/newcoast-roofing/`           | Reserved for app logs (currently unused — service writes to journal) |
| `/var/backups/newcoast-roofing/`       | Reserved for pre-deploy tarballs (currently empty — no deploy.sh yet) |

## Editing environment variables (RESEND_API_KEY, GA IDs, etc.)

```bash
ssh knuco-droplet
sudo nano /etc/newcoast-roofing/env
```

Two classes of vars behave differently:

- **Server-side** (`RESEND_API_KEY`, `LEAD_EMAIL`, `LEAD_FROM_EMAIL`) — read at
  request time. Edit, then:
  ```bash
  sudo systemctl restart newcoast-roofing
  ```
- **`NEXT_PUBLIC_*`** (GA, Google Ads, Meta Pixel IDs) — baked into the JS
  bundle at **build** time. Editing the env file alone does nothing for these.
  You must rebuild and restart (see "Deploying code changes" below).

Values containing `<` `>` `"` or spaces must be **quoted** in the env file.
Example: `LEAD_FROM_EMAIL="NewCoast Website <noreply@newcoastroofing.com>"`.

## Deploying code changes

Workflow from your laptop in this repo:

```bash
# 1. commit + push your changes locally as usual
git add -A && git commit -m "..."
git push

# 2. rsync to droplet (--rsync-path runs rsync as root remotely)
rsync -az --delete \
    --exclude=.git/ --exclude=node_modules/ --exclude=.next/ \
    --exclude=dist/ --exclude=build/ --exclude='.env*' \
    --exclude=.DS_Store --exclude='*.log' \
    --exclude='*.tsbuildinfo' --exclude=next-env.d.ts \
    --rsync-path="sudo rsync" \
    -e ssh ./ knuco-droplet:/opt/newcoast-roofing/

# 3. fix ownership (rsync wrote files as root)
ssh knuco-droplet 'sudo chown -R newcoast:newcoast /opt/newcoast-roofing'

# 4. install + build + restart
ssh knuco-droplet 'cd /opt/newcoast-roofing && \
    sudo -u newcoast bash -c "
        set -a && . /etc/newcoast-roofing/env && set +a && \
        npm ci --include=dev && \
        npm run build
    " && \
    sudo systemctl restart newcoast-roofing'

# 5. smoke-test
curl -sI https://newcoastroofing.com/ | head -1   # expect: HTTP/2 200
```

**Why `--include=dev`:** the env file sets `NODE_ENV=production`, which makes
`npm ci` skip devDependencies by default. Build-time deps (tailwind, typescript,
`@types/*`) live in devDependencies and are required to build, so we have to
re-include them.

There is no `deploy.sh` for this site yet. If/when changes become frequent,
crib one from `/Users/legalassistant/constructioncrm/deploy.sh` (knuco's
script — it has rollback, smoke tests, and a deploy lock).

## Checking status / logs

```bash
# is the service up?
ssh knuco-droplet 'sudo systemctl status newcoast-roofing --no-pager'

# tail logs (live)
ssh knuco-droplet 'sudo journalctl -u newcoast-roofing -f'

# last 200 lines
ssh knuco-droplet 'sudo journalctl -u newcoast-roofing -n 200 --no-pager'

# nginx error log (proxy/SSL issues)
ssh knuco-droplet 'sudo tail -50 /var/log/nginx/error.log'
```

## Rollback (if a deploy breaks the site)

There's no automated rollback. Your options, fastest first:

1. **Revert in git, redeploy.** If you already pushed a bad change, `git revert`
   it on your laptop and redo the rsync + build + restart steps. Usually 60 s.
2. **Restart the service.** If it's a runtime crash and not a code regression,
   `sudo systemctl restart newcoast-roofing` may unstick it.
3. **Stop the service.** If the bad page is worse than nothing,
   `sudo systemctl stop newcoast-roofing` (visitors get a 502 from nginx)
   while you sort it out.

## TLS cert renewal

The Let's Encrypt cert was issued via DNS-01 manual challenge and **does not
auto-renew**. It expires **2026-07-28**. To renew (do this ~2 weeks before
expiry):

```bash
ssh -t knuco-droplet 'sudo certbot certonly --manual --preferred-challenges=dns \
    -d newcoastroofing.com,www.newcoastroofing.com'
```

Certbot will print two TXT record values. At GoDaddy DNS, add:

| Type | Name                  | Value           |
|------|-----------------------|-----------------|
| TXT  | `_acme-challenge`     | (first value)   |
| TXT  | `_acme-challenge.www` | (second value)  |

Wait ~60 s, verify with `dig +short TXT _acme-challenge.newcoastroofing.com @8.8.8.8`,
then press Enter in certbot. The cert files at
`/etc/letsencrypt/live/newcoastroofing.com/` are updated in place — nginx will
pick them up on next reload (`sudo systemctl reload nginx`).

Long-term fix: write a `--manual-auth-hook` script that drives the GoDaddy DNS
API so renewals are unattended. Equifirst has the same setup; one hook can
handle both certs.

## DNS

Domain is at GoDaddy. Both `newcoastroofing.com` and `www.newcoastroofing.com`
are A records pointing at `161.35.0.183`. Don't change them without a plan —
the cert is bound to those names.
