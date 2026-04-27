import type { Metadata } from 'next'
import { Suspense } from 'react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { siteConfig } from '@/content/site'
import ThankYouTracker from './ThankYouTracker'

export const metadata: Metadata = {
  title: 'Thank You — Estimate Request Received',
  description:
    'Your estimate request has been received. A NewCoast Roofing team member will contact you within one business day.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <Suspense fallback={null}>
        <ThankYouTracker />
      </Suspense>

      <section className="py-20 bg-white">
        <Container narrow>
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <h1 className="text-4xl font-bold text-navy sm:text-5xl">
              Thank You!
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Your estimate request has been received. A member of our team
              will reach out within one business day to confirm your details
              and schedule your on-site assessment.
            </p>

            <div className="mt-10 rounded-xl border border-gray-100 bg-cream p-6 text-left">
              <h2 className="text-lg font-bold text-navy">What happens next</h2>
              <ol className="mt-4 space-y-3 text-slate">
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coastal text-sm font-bold text-white">
                    1
                  </span>
                  <span>
                    We review your request and pull together the right
                    estimator for the job.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coastal text-sm font-bold text-white">
                    2
                  </span>
                  <span>
                    A team member calls or emails to confirm your project and
                    schedule a free on-site assessment.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coastal text-sm font-bold text-white">
                    3
                  </span>
                  <span>
                    You receive a clear, written proposal — including financing
                    options if you want them.
                  </span>
                </li>
              </ol>
            </div>

            <div className="mt-10">
              <p className="text-sm text-slate">
                Need to talk sooner? Call us directly:
              </p>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="mt-2 inline-flex items-center gap-2 text-2xl font-bold text-coastal hover:text-navy transition-colors"
              >
                <Icon name="phone" size={24} />
                {siteConfig.phone}
              </a>
              <p className="mt-1 text-xs text-slate/70">Mon–Fri, 8AM–6PM ET</p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/projects" variant="outline" size="md">
                Browse Our Projects
              </Button>
              <Button href="/financing" variant="ghost" size="md">
                Explore Financing Options
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
