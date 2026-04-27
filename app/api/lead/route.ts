import { NextRequest } from 'next/server'

const LEAD_INBOX = process.env.LEAD_EMAIL || 'leads@newcoastroofing.com'
const FROM_ADDRESS =
  process.env.LEAD_FROM_EMAIL || 'NewCoast Website <noreply@newcoastroofing.com>'

interface LeadPayload {
  name?: string
  phone?: string
  email?: string
  address?: string
  zip?: string
  county?: string
  service?: string
  contact_method?: string
  message?: string
  sms_consent?: boolean
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string
  landing_page?: string
  referrer?: string
  form_source?: string
  company?: string // honeypot
}

function escape(value: string | undefined): string {
  if (!value) return ''
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function buildHtml(lead: LeadPayload): string {
  const rows: [string, string | undefined][] = [
    ['Name', lead.name],
    ['Phone', lead.phone],
    ['Email', lead.email],
    ['Property Address', lead.address],
    ['Zip', lead.zip],
    ['County', lead.county],
    ['Service Needed', lead.service],
    ['Preferred Contact', lead.contact_method],
    ['Message', lead.message],
    ['SMS Consent', lead.sms_consent ? 'Yes' : 'No'],
    ['---', '---'],
    ['Form Source', lead.form_source],
    ['Landing Page', lead.landing_page],
    ['Referrer', lead.referrer],
    ['gclid', lead.gclid],
    ['utm_source', lead.utm_source],
    ['utm_medium', lead.utm_medium],
    ['utm_campaign', lead.utm_campaign],
    ['utm_term', lead.utm_term],
    ['utm_content', lead.utm_content],
  ]

  const tableRows = rows
    .filter(([, v]) => v && v.length)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;color:#0a2540">${escape(
          k
        )}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#1f2937">${escape(
          v
        )}</td></tr>`
    )
    .join('')

  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto">
      <h2 style="color:#0a2540;border-bottom:2px solid #0ea5b7;padding-bottom:8px">
        New Estimate Request — NewCoast Roofing
      </h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${tableRows}</table>
      <p style="margin-top:16px;color:#6b7280;font-size:12px">
        Submitted ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
      </p>
    </div>
  `
}

function buildText(lead: LeadPayload): string {
  const rows: [string, string | undefined][] = [
    ['Name', lead.name],
    ['Phone', lead.phone],
    ['Email', lead.email],
    ['Property Address', lead.address],
    ['Zip', lead.zip],
    ['County', lead.county],
    ['Service Needed', lead.service],
    ['Preferred Contact', lead.contact_method],
    ['Message', lead.message],
    ['SMS Consent', lead.sms_consent ? 'Yes' : 'No'],
    ['Form Source', lead.form_source],
    ['Landing Page', lead.landing_page],
    ['Referrer', lead.referrer],
    ['gclid', lead.gclid],
    ['utm_source', lead.utm_source],
    ['utm_medium', lead.utm_medium],
    ['utm_campaign', lead.utm_campaign],
    ['utm_term', lead.utm_term],
    ['utm_content', lead.utm_content],
  ]

  return rows
    .filter(([, v]) => v && v.length)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
}

async function sendEmail(lead: LeadPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.warn(
      '[lead-api] RESEND_API_KEY not set — lead captured but email NOT sent. ' +
        'Set RESEND_API_KEY in environment to deliver leads to ' +
        LEAD_INBOX
    )
    console.log('[lead-api] Lead payload:\n' + buildText(lead))
    return
  }

  const subject = `New Estimate: ${lead.service || 'Roofing'} — ${
    lead.name || 'Unknown'
  }${lead.county ? ' (' + lead.county + ')' : ''}`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: [LEAD_INBOX],
      reply_to: lead.email,
      subject,
      html: buildHtml(lead),
      text: buildText(lead),
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Resend ${res.status}: ${body}`)
  }
}

export async function POST(request: NextRequest) {
  let payload: LeadPayload

  try {
    payload = (await request.json()) as LeadPayload
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Honeypot — silently accept and discard bot submissions
  if (payload.company && payload.company.trim().length > 0) {
    return Response.json({ ok: true })
  }

  if (!payload.name || !payload.phone || !payload.email || !payload.service) {
    return Response.json(
      { error: 'Missing required fields (name, phone, email, service).' },
      { status: 400 }
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return Response.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  try {
    await sendEmail(payload)
  } catch (err) {
    console.error('[lead-api] Email delivery failed:', err)
    return Response.json(
      { error: 'Could not send your request. Please call us directly.' },
      { status: 502 }
    )
  }

  return Response.json({ ok: true })
}
