import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { generatePageMetadata } from '@/lib/seo'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy for NewCoast Roofing — how we collect, use, and protect your information when you request an estimate or visit our website.',
  path: '/privacy',
})

const EFFECTIVE_DATE = 'April 27, 2026'

export default function PrivacyPage() {
  return (
    <section className="py-16 bg-white">
      <Container narrow>
        <h1 className="text-4xl font-bold text-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate/70">
          Effective {EFFECTIVE_DATE}
        </p>

        <div className="prose prose-slate mt-10 max-w-none space-y-8 text-slate leading-relaxed">
          <section>
            <p>
              {siteConfig.name} (&quot;NewCoast Roofing,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) respects your privacy. This
              Privacy Policy explains what information we collect when you visit{' '}
              {siteConfig.url} or interact with us, how we use it, and the
              choices you have. By using our website or submitting a form, you
              agree to the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">1. Information We Collect</h2>

            <h3 className="mt-4 text-lg font-bold text-navy">Information you give us</h3>
            <p>
              When you request an estimate, call us, email us, or message us,
              we collect the information you provide — typically your name,
              phone number, email address, property address, ZIP code, county,
              the service you&apos;re interested in, your preferred contact
              method, and any details about your project.
            </p>

            <h3 className="mt-4 text-lg font-bold text-navy">Information collected automatically</h3>
            <p>
              When you visit our website, we and our service providers may
              automatically collect technical information including your IP
              address, browser type, device type, pages viewed, referring URL,
              and the date and time of your visit. We also capture marketing
              attribution parameters (such as <code>utm_source</code>,{' '}
              <code>utm_campaign</code>, and Google&apos;s <code>gclid</code>{' '}
              click identifier) when present in the URL, so we can understand
              which marketing channels drive inquiries.
            </p>

            <h3 className="mt-4 text-lg font-bold text-navy">Cookies and similar technologies</h3>
            <p>
              We use cookies and similar technologies (including pixels and
              tags from Google Analytics, Google Ads, and — where enabled —
              Meta) to operate the site, measure performance, and run
              advertising campaigns. You can control cookies through your
              browser settings. Disabling cookies may limit some site
              functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Respond to your estimate requests and questions</li>
              <li>Schedule and complete on-site assessments and projects</li>
              <li>Send you proposals, project updates, and invoices</li>
              <li>
                Contact you by phone, email, or — with your consent — text
                message about your project
              </li>
              <li>
                Measure the performance of our website and marketing campaigns
              </li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">3. Text Messaging (SMS)</h2>
            <p>
              If you opt in to receive text messages from us, we will use the
              phone number you provide to send messages related to your
              estimate, scheduling, and project. Message and data rates may
              apply, message frequency varies, and you can opt out at any time
              by replying <strong>STOP</strong> or get help by replying{' '}
              <strong>HELP</strong>. We do not share, sell, or rent SMS opt-in
              data or phone numbers to third parties for their marketing.
              Full details are in our{' '}
              <Link href="/sms-policy" className="text-coastal underline">
                SMS Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">4. How We Share Information</h2>
            <p>
              We do not sell your personal information. We share it only with:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <strong>Service providers</strong> who help us run our business
                — for example, our email delivery provider (Resend), our SMS
                provider (Telnyx), our website host, and our customer
                relationship and scheduling tools. These providers are bound by
                contracts that limit how they can use your information.
              </li>
              <li>
                <strong>Advertising and analytics partners</strong> (Google,
                Meta) which receive de-identified usage and conversion data so
                we can measure and optimize our marketing.
              </li>
              <li>
                <strong>Financing partners</strong> (such as PACE administrators
                and GreenSky) only when you ask us to refer you for financing.
              </li>
              <li>
                <strong>Government or legal authorities</strong> when required
                by law, subpoena, or court order, or to protect our rights,
                property, or safety.
              </li>
              <li>
                <strong>Successors</strong> in the event of a merger,
                acquisition, financing, or sale of assets.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">5. Advertising and Conversion Tracking</h2>
            <p>
              We use Google Analytics, Google Ads conversion tracking, and (in
              some campaigns) the Meta Pixel to measure how visitors interact
              with our site and which ads drive estimates. These tools may set
              cookies and collect information about your activity on our site
              and other sites. You can opt out of Google Analytics by
              installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coastal underline"
              >
                Google Analytics opt-out browser add-on
              </a>{' '}
              and adjust Google Ads personalization at{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coastal underline"
              >
                adssettings.google.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">6. Data Retention</h2>
            <p>
              We retain estimate requests and customer records for as long as
              needed to provide our services, comply with our legal
              obligations, resolve disputes, and enforce agreements. When we
              no longer need information, we delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">7. Your Choices and Rights</h2>
            <p>You can:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                Ask us what information we hold about you and request a copy
              </li>
              <li>Ask us to correct or delete your information</li>
              <li>
                Unsubscribe from marketing emails by following the unsubscribe
                link in any email
              </li>
              <li>
                Opt out of text messages at any time by replying{' '}
                <strong>STOP</strong>
              </li>
              <li>
                Adjust browser cookie settings or use the Google opt-outs above
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-coastal underline"
              >
                {siteConfig.email}
              </a>{' '}
              or call{' '}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-coastal underline"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">8. Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed to children under 13.
              We do not knowingly collect personal information from children
              under 13. If you believe a child has given us information,
              contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">9. Security</h2>
            <p>
              We use reasonable administrative, technical, and physical
              safeguards to protect the information we collect. No method of
              transmission or storage is 100% secure, however, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">10. Third-Party Links</h2>
            <p>
              Our site may link to third-party websites (such as Google
              Business, Instagram, or financing partners). We are not
              responsible for the privacy practices of those sites — please
              review their policies separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we&apos;ll update the &quot;Effective&quot; date at the top of
              this page. Material changes will be posted prominently on the
              site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">12. Contact Us</h2>
            <p>Questions about this Privacy Policy? Reach us at:</p>
            <p className="mt-3">
              <strong>{siteConfig.name}</strong>
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}{' '}
              {siteConfig.address.zip}
              <br />
              Email:{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-coastal underline"
              >
                {siteConfig.email}
              </a>
              <br />
              Phone:{' '}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-coastal underline"
              >
                {siteConfig.phone}
              </a>
            </p>
          </section>
        </div>
      </Container>
    </section>
  )
}
