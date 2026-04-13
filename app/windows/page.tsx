import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import FinancingSection from '@/components/sections/FinancingSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { windowTypes } from '@/content/services'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Impact Windows in South Florida',
  description:
    'Hurricane-rated impact windows for Broward County, Palm Beach County, and Port St. Lucie homes. Energy efficient, noise-reducing, and beautiful. Free estimates and financing from NewCoast Roofing.',
  path: '/windows',
})

export default function WindowsPage() {
  const pageFaqs = getFaqsForPage(['windows', 'financing'], 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              'Impact Windows',
              'Hurricane-rated impact window installation in South Florida.',
              'https://www.newcoastroofing.com/windows'
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Impact Windows', url: '/windows' },
            ])
          ),
        }}
      />

      <Hero
        title="Hurricane-Rated Impact Windows for South Florida Homes"
        subtitle="Protect your home, reduce energy costs, and enhance curb appeal with premium impact windows installed by NewCoast Roofing."
        cta1Text="Request a Free Window Estimate"
        cta1Href="/contact"
      />
      <TrustStrip />

      {/* Benefits */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Why Impact Windows?"
            subtitle="More than storm protection — impact windows transform your home"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Hurricane Protection',
                desc: 'Laminated glass and reinforced frames resist hurricane-force winds and flying debris.',
                icon: 'shield',
              },
              {
                title: 'Energy Efficiency',
                desc: 'Reduce cooling costs with insulated glass that blocks heat transfer and UV rays.',
                icon: 'home',
              },
              {
                title: 'Noise Reduction',
                desc: 'Multi-layer glass significantly reduces outside noise for a quieter home.',
                icon: 'window',
              },
              {
                title: 'Insurance Savings',
                desc: 'Many Florida insurers offer premium discounts for homes with impact-rated windows.',
                icon: 'dollar',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-coastal/10">
                  <Icon name={benefit.icon} size={24} className="text-coastal" />
                </div>
                <h3 className="font-bold text-navy">{benefit.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Window Types */}
      <section className="py-20 bg-cream">
        <Container>
          <SectionHeading
            title="Impact Window Styles"
            subtitle="Find the right window style for every room in your home"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {windowTypes.map((type) => (
              <div
                key={type.name}
                className="rounded-xl bg-white p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold text-navy">{type.name}</h3>
                <p className="mt-2 text-slate leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Florida-specific */}
      <section className="py-16 bg-coastal">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Built for Florida. Installed by Experts.
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-lg text-white/80">
              Every impact window we install meets Florida Building Code
              requirements for hurricane zones. We handle measuring, permitting,
              and professional installation across Broward, Palm Beach, and
              St. Lucie counties.
            </p>
          </div>
        </Container>
      </section>

      <FinancingSection />
      <FAQSection faqs={pageFaqs} />
      <CTASection
        title="Upgrade to Impact Windows"
        subtitle="Get a free estimate for impact window installation. We'll measure, recommend, and provide clear pricing with financing options."
      />
    </>
  )
}
