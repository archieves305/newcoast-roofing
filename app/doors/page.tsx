import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { serviceSchema, breadcrumbSchema } from '@/lib/schema'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import FinancingSection from '@/components/sections/FinancingSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { doorTypes } from '@/content/services'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Impact Doors & Entry Doors in South Florida',
  description:
    'Premium impact doors, entry doors, and sliding glass doors for Broward County, Palm Beach County, and Port St. Lucie homes. Hurricane-rated, stylish, and secure. Free estimates from NewCoast Roofing.',
  path: '/doors',
})

export default function DoorsPage() {
  const pageFaqs = getFaqsForPage(['doors', 'financing'], 5)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              'Impact Doors & Entry Doors',
              'Premium impact door and entry door installation in South Florida.',
              'https://www.newcoastroofing.com/doors'
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
              { name: 'Impact Doors', url: '/doors' },
            ])
          ),
        }}
      />

      <Hero
        title="Premium Impact Doors & Entry Doors for Florida Homes"
        subtitle="Complete your home's exterior protection with hurricane-rated doors that combine security, style, and storm resistance. Professional installation by NewCoast Roofing."
        cta1Text="Request a Free Door Estimate"
        cta1Href="/contact"
      />
      <TrustStrip />

      {/* Door Types */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Door Installation Services"
            subtitle="Impact-rated doors for every entrance of your home"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {doorTypes.map((type) => (
              <div
                key={type.name}
                className="rounded-xl border border-gray-100 p-6 shadow-sm"
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

      {/* Benefits */}
      <section className="py-20 bg-cream">
        <Container>
          <SectionHeading title="Benefits of Impact Doors" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {[
              'Hurricane & storm protection',
              'Enhanced home security',
              'Energy efficiency & insulation',
              'Noise reduction',
              'Improved curb appeal & resale value',
              'Potential insurance premium discounts',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <Icon name="check" size={20} className="shrink-0 text-coastal" />
                <span className="font-medium text-navy">{benefit}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinancingSection />
      <FAQSection faqs={pageFaqs} />
      <CTASection
        title="Upgrade Your Doors"
        subtitle="Get a free estimate for impact door installation. Professional measurement, permitting, and installation included."
      />
    </>
  )
}
