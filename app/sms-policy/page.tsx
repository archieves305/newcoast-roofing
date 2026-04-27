import type { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { generatePageMetadata } from '@/lib/seo'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = generatePageMetadata({
  title: 'SMS Messaging Policy & Terms',
  description:
    'NewCoast Roofing SMS messaging policy — opt-in, opt-out (STOP), help (HELP), message frequency, and rates information. Required disclosures for our text messaging program.',
  path: '/sms-policy',
})

const EFFECTIVE_DATE = 'April 27, 2026'

export default function SmsPolicyPage() {
  return (
    <section className="py-16 bg-white">
      <Container narrow>
        <h1 className="text-4xl font-bold text-navy">
          SMS Messaging Policy &amp; Terms
        </h1>
        <p className="mt-2 text-sm text-slate/70">
          Effective {EFFECTIVE_DATE}
        </p>

        <div className="mt-10 space-y-8 text-slate leading-relaxed">
          <section>
            <p>
              This SMS Messaging Policy explains how {siteConfig.name}{' '}
              (&quot;NewCoast Roofing,&quot; &quot;we,&quot; &quot;us&quot;)
              uses text messages to communicate with customers and prospective
              customers, what you&apos;re agreeing to when you opt in, and how
              you can stop receiving messages at any time. By opting in, you
              agree to the terms below. If you do not agree, please do not
              opt in to text messages from us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">Program Description</h2>
            <p>
              The {siteConfig.name} SMS program sends conversational and
              transactional text messages to customers who have requested an
              estimate, are scheduled for service, or have an active project
              with us. Message types include:
            </p>
            <ul className="ml-6 mt-3 list-disc space-y-1">
              <li>Estimate confirmations and scheduling</li>
              <li>
                Appointment reminders for on-site assessments and installations
              </li>
              <li>Project updates, crew arrival notifications, and follow-ups</li>
              <li>Replies to questions you send us</li>
              <li>
                Occasional service-related notices (for example, weather-related
                rescheduling)
              </li>
            </ul>
            <p className="mt-3">
              We do not send unsolicited marketing or promotional offers
              through this program. Messages are tied to your project or
              inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">How You Opt In (Consent)</h2>
            <p>
              You must affirmatively opt in to receive text messages. We
              collect SMS consent in the following ways:
            </p>
            <ul className="ml-6 mt-3 list-disc space-y-1">
              <li>
                Checking the SMS consent checkbox on our online estimate form
                at{' '}
                <Link href="/contact" className="text-coastal underline">
                  {siteConfig.url.replace(/^https?:\/\//, '')}/contact
                </Link>{' '}
                or on any of our landing pages
              </li>
              <li>
                Replying with a keyword such as <strong>YES</strong> or{' '}
                <strong>START</strong> to a request from us to opt in
              </li>
              <li>
                Verbally consenting during a call with our team (we will note
                consent in your customer record)
              </li>
            </ul>
            <p className="mt-3">
              When you opt in, you consent to receive recurring text messages
              from {siteConfig.name} at the mobile number you provide, sent via
              an automated system. Consent is not a condition of purchase or of
              receiving an estimate. You can request your estimate by phone or
              email instead.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">Message Frequency</h2>
            <p>
              Message frequency varies based on your project status. Most
              customers receive between 2 and 10 messages per month. Frequency
              may be higher during active scheduling or installation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">
              Message &amp; Data Rates
            </h2>
            <p>
              Message and data rates may apply. The cost of each message is
              determined by your mobile carrier and your plan. {siteConfig.name}{' '}
              does not charge a fee for sending or receiving SMS messages, but
              standard carrier fees apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">
              How to Opt Out (STOP)
            </h2>
            <p>
              You can stop receiving text messages from us at any time. Reply{' '}
              <strong>STOP</strong> to any message we send you. After you reply
              STOP, you will receive one final confirmation message
              acknowledging that you have been unsubscribed. You will not
              receive further messages from this program unless you opt in
              again.
            </p>
            <p className="mt-3">
              We also accept the following opt-out keywords: <strong>STOP</strong>
              , <strong>END</strong>, <strong>CANCEL</strong>,{' '}
              <strong>UNSUBSCRIBE</strong>, <strong>QUIT</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">
              How to Get Help (HELP)
            </h2>
            <p>
              Reply <strong>HELP</strong> to any message we send you for
              assistance. You will receive a reply with our contact information
              and a reminder of how to opt out. You can also contact us
              directly:
            </p>
            <p className="mt-3">
              <strong>{siteConfig.name}</strong>
              <br />
              Phone:{' '}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="text-coastal underline"
              >
                {siteConfig.phone}
              </a>
              <br />
              Email:{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-coastal underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">
              Sample Messages
            </h2>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <em>
                  &quot;NewCoast Roofing: Hi {'{name}'} — thanks for requesting
                  a free estimate. We&apos;re scheduling your on-site
                  assessment for {'{date}'} at {'{time}'}. Reply Y to confirm.
                  Reply STOP to opt out, HELP for help.&quot;
                </em>
              </li>
              <li>
                <em>
                  &quot;NewCoast Roofing: Your crew is on the way to {'{address}'}{' '}
                  and should arrive within 30 minutes. Reply STOP to opt
                  out.&quot;
                </em>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">
              Sharing of Mobile Information
            </h2>
            <p className="font-semibold">
              {siteConfig.name} does not sell, rent, or share mobile phone
              numbers or SMS opt-in data with third parties or affiliates for
              their marketing or promotional purposes.
            </p>
            <p className="mt-3">
              Phone numbers and opt-in data are shared only with the
              service providers we use to deliver text messages on our behalf
              (for example, our SMS platform Telnyx) and only as necessary to
              run the SMS program. Those providers are bound by contract to
              use the data only for that purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">
              Supported Carriers
            </h2>
            <p>
              The {siteConfig.name} SMS program is supported on most major
              U.S. carriers, including AT&amp;T, T-Mobile, Verizon Wireless,
              Sprint, U.S. Cellular, Boost, MetroPCS, Cricket, and Virgin
              Mobile, as well as supported MVNOs. Carriers are not liable for
              delayed or undelivered messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">
              Eligibility
            </h2>
            <p>
              You must be at least 18 years old (or have parental/guardian
              consent) and the account holder or authorized user of the mobile
              phone number you provide in order to opt in. By opting in, you
              represent that you meet these requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">
              Privacy
            </h2>
            <p>
              Information you submit through SMS is handled in accordance with
              our{' '}
              <Link href="/privacy" className="text-coastal underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">
              Changes to This Policy
            </h2>
            <p>
              We may update this SMS Policy from time to time. The
              &quot;Effective&quot; date at the top reflects the most recent
              update. Continued enrollment in the SMS program after changes
              constitutes acceptance of the updated policy. If changes
              materially affect your rights, we will notify you in advance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy">Contact</h2>
            <p>
              Questions about this SMS Policy? Reach us at:
            </p>
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
