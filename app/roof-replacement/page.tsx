import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import ProcessSection from '@/components/sections/ProcessSection'
import FinancingSection from '@/components/sections/FinancingSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { roofTypes, replacementSigns } from '@/content/services'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roof Replacement in South Florida',
  description:
    'Expert roof replacement in Broward County, Palm Beach County, and Port St. Lucie. Hurricane-rated systems, multiple material options, and financing available. Free estimates from NewCoast Roofing.',
  path: '/roof-replacement',
})

export default function RoofReplacementPage() {
  const pageFaqs = getFaqsForPage(['roofing', 'financing'], 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              'Roof Replacement',
              'Expert full roof replacement in South Florida with hurricane-rated systems.',
              'https://www.newcoastroofing.com/roof-replacement'
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
              { name: 'Roofing', url: '/roofing' },
              { name: 'Roof Replacement', url: '/roof-replacement' },
            ])
          ),
        }}
      />

      <Hero
        title="Protect Your Home with a New Roof Built for Florida"
        subtitle="When repairs aren't enough, a full roof replacement gives your home lasting protection, improved curb appeal, and peace of mind through every hurricane season."
        cta1Text="Get a Free Replacement Estimate"
        cta1Href="/contact"
      />
      <TrustStrip />

      {/* Signs You Need Replacement */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                title="Signs It May Be Time to Replace Your Roof"
                centered={false}
              />
              <ul className="space-y-3">
                {replacementSigns.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <Icon
                      name="check"
                      size={20}
                      className="mt-0.5 shrink-0 text-coastal"
                    />
                    <span className="text-slate">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* PLACEHOLDER — add before/after or project image */}
            <div className="aspect-[4/3] rounded-xl bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Roof Replacement Photo</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Material Options */}
      <section className="py-20 bg-cream">
        <Container>
          <SectionHeading
            title="Roofing Material Options"
            subtitle="Choose the right material for durability, aesthetics, and budget"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roofTypes.map((type) => (
              <div
                key={type.name}
                className="rounded-xl bg-white p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-bold text-navy">{type.name}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSection />
      <FinancingSection />
      <FAQSection faqs={pageFaqs} />
      <CTASection
        title="Ready for a New Roof?"
        subtitle="Get a free estimate with detailed material options and financing information. No obligation."
      />
    </>
  )
}
