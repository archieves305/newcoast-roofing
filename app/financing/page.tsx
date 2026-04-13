import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Financing Options for Roofing, Windows & Doors',
  description:
    'PACE financing and GreenSky financing for roofing, impact windows, and doors in South Florida. No money down options available. Get started with NewCoast Roofing today.',
  path: '/financing',
})

export default function FinancingPage() {
  const pageFaqs = getFaqsForPage(['financing'], 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Financing', url: '/financing' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(pageFaqs)),
        }}
      />

      <Hero
        title="Flexible Financing for Your Home's Protection"
        subtitle="Don't let cost delay the upgrades your home needs. We offer PACE and GreenSky financing to help you get started with roofing, windows, or doors today."
        cta1Text="Get a Free Estimate"
        cta1Href="/contact"
        cta2Text="Call to Discuss Financing"
        showFinancing={false}
      />
      <TrustStrip />

      {/* Why Finance */}
      <section className="py-20 bg-white">
        <Container narrow>
          <SectionHeading
            title="Why Finance Your Project?"
            subtitle="Financing makes it possible to protect and improve your home now, without the full upfront cost"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: 'Start Now, Not Later',
                desc: 'Delaying roof repairs or window upgrades can lead to bigger problems and higher costs down the road.',
              },
              {
                title: 'Manageable Payments',
                desc: 'Spread the cost over time with monthly payments that fit your budget.',
              },
              {
                title: 'Increase Home Value',
                desc: 'New roofing, windows, and doors increase your property value and curb appeal immediately.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PACE Financing */}
      <section className="py-20 bg-cream" id="pace">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-coastal">
                Financing Option 1
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
                PACE Financing
              </h2>
              <p className="mt-4 text-lg text-slate leading-relaxed">
                Property Assessed Clean Energy (PACE) financing allows you to fund
                energy-efficient and hurricane-protection upgrades with no money
                down. Repayment is made through your annual property tax
                assessment, making it one of the most accessible financing options
                for Florida homeowners.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'No upfront out-of-pocket cost',
                  'Repaid through your property tax bill',
                  'Covers roofing, windows, doors, and more',
                  'Available for qualifying residential properties',
                  'Transfers with the property if you sell',
                  'Long repayment terms available',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon name="check" size={20} className="mt-0.5 shrink-0 text-coastal" />
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
              {/* PLACEHOLDER — replace with actual PACE application URL */}
              <Button href="/contact" variant="primary" className="mt-8">
                Ask About PACE Financing
              </Button>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-navy mb-4">
                How PACE Works
              </h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Apply', desc: 'Check your eligibility with a simple application process.' },
                  { step: '2', title: 'Get Approved', desc: 'Approval is based on your property, not your credit score.' },
                  { step: '3', title: 'Complete Your Project', desc: 'NewCoast handles the installation while financing covers the cost.' },
                  { step: '4', title: 'Repay Through Taxes', desc: 'Payments are added to your property tax bill over time.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-coastal text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{item.title}</h4>
                      <p className="text-sm text-slate">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* GreenSky Financing */}
      <section className="py-20 bg-white" id="greensky">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 rounded-xl bg-cream p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy mb-4">
                GreenSky Loan Features
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Loan Amounts', value: 'Varies by project' },
                  { label: 'Interest Rates', value: 'Competitive rates available' },
                  { label: 'Repayment Terms', value: 'Flexible options' },
                  { label: 'Approval Speed', value: 'Quick online application' },
                  { label: 'Project Types', value: 'Roofing, windows, doors & more' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between border-b border-gray-200 pb-3"
                  >
                    <span className="text-sm font-medium text-navy">
                      {item.label}
                    </span>
                    <span className="text-sm text-slate">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-coastal">
                Financing Option 2
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
                GreenSky Financing
              </h2>
              <p className="mt-4 text-lg text-slate leading-relaxed">
                GreenSky offers flexible home improvement loans with competitive
                interest rates and manageable monthly payments. Apply quickly,
                get approved fast, and finance your roofing, window, or door
                project with confidence.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Competitive interest rates',
                  'Flexible repayment terms',
                  'Quick online application & approval',
                  'Finance any project size',
                  'Use for roofing, windows, doors, or full exterior upgrades',
                  'No prepayment penalties on most plans',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon name="check" size={20} className="mt-0.5 shrink-0 text-coastal" />
                    <span className="text-slate">{item}</span>
                  </li>
                ))}
              </ul>
              {/* PLACEHOLDER — replace with actual GreenSky application URL */}
              <Button href="/contact" variant="primary" className="mt-8">
                Ask About GreenSky Financing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-cream">
        <Container narrow>
          <p className="text-xs text-center text-gray-400 leading-relaxed">
            {/* PLACEHOLDER — add actual financing disclaimers */}
            Financing terms and availability are subject to credit approval and
            may vary based on the applicant&apos;s qualifications and the specific
            financing program. PACE financing availability varies by county and
            property type. Contact NewCoast Roofing for current financing options
            and eligibility requirements.
          </p>
        </Container>
      </section>

      <FAQSection
        title="Financing FAQ"
        subtitle="Common questions about our financing options"
        faqs={pageFaqs}
      />
      <CTASection
        title="Ready to Get Started?"
        subtitle="Request a free estimate and we'll walk you through your financing options. No obligation."
        showFinancing={false}
      />
    </>
  )
}
