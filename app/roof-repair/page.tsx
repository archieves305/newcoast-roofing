import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import EstimateForm from '@/components/forms/EstimateForm'
import FinancingSection from '@/components/sections/FinancingSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { getFaqsForPage } from '@/content/faqs'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roof Repair in South Florida',
  description:
    'Fast, reliable roof repair in Broward County, Palm Beach County, and Port St. Lucie. Leak repair, storm damage, and emergency service. Free estimates from NewCoast Roofing.',
  path: '/roof-repair',
})

export default function RoofRepairPage() {
  const pageFaqs = getFaqsForPage(['roofing', 'estimates'], 5)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              'Roof Repair',
              'Fast, reliable roof repair services in South Florida.',
              'https://www.newcoastroofing.com/roof-repair'
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
              { name: 'Roof Repair', url: '/roof-repair' },
            ])
          ),
        }}
      />

      <Hero
        title="Fast, Reliable Roof Repairs in South Florida"
        subtitle="Leaks, storm damage, and wear don't wait — and neither do we. NewCoast Roofing provides professional roof repair across Broward, Palm Beach, and St. Lucie counties."
        cta1Text="Schedule Your Roof Repair"
        cta1Href="#estimate-form"
        cta2Text={`Call Now: ${siteConfig.phone}`}
        cta2Href={`tel:${siteConfig.phoneRaw}`}
      />
      <TrustStrip />

      {/* Repair Types */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title="Roof Repair Services" centered={false} />
              <div className="space-y-6">
                {[
                  {
                    title: 'Emergency Leak Repair',
                    desc: 'Active leaks need immediate attention. We prioritize emergency repairs to stop water intrusion and prevent further damage to your home.',
                  },
                  {
                    title: 'Storm & Wind Damage',
                    desc: 'Florida storms can tear off shingles, crack tiles, and compromise your roof\u2019s integrity. We assess and repair storm damage quickly.',
                  },
                  {
                    title: 'Flashing & Sealant Repair',
                    desc: 'Deteriorated flashing around vents, skylights, and chimneys is a common leak source. We reseal and replace flashing to restore protection.',
                  },
                  {
                    title: 'Shingle & Tile Replacement',
                    desc: 'Missing or damaged shingles and tiles leave your roof vulnerable. We match and replace materials to maintain your roof\u2019s appearance and performance.',
                  },
                  {
                    title: 'Flat Roof Patching',
                    desc: 'Flat roofs require specialized repair techniques. We patch, coat, and reseal flat roof systems for both residential and commercial properties.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <Icon name="check" size={20} className="text-coastal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inline Estimate Form */}
            <div id="estimate-form">
              <EstimateForm source="roof-repair" />
            </div>
          </div>
        </Container>
      </section>

      {/* Fast Response */}
      <section className="py-16 bg-coastal">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Fast Response When You Need It Most
            </h2>
            <p className="mt-3 text-lg text-white/80 max-w-2xl mx-auto">
              Roof damage doesn&apos;t wait for business hours. Contact us for
              priority scheduling on urgent repairs.
            </p>
            <Button
              href={`tel:${siteConfig.phoneRaw}`}
              variant="primary"
              size="lg"
              className="mt-6"
            >
              Call Now: {siteConfig.phone}
            </Button>
          </div>
        </Container>
      </section>

      <FinancingSection compact />
      <FAQSection faqs={pageFaqs} />
      <CTASection
        title="Don\u2019t Wait on Roof Repairs"
        subtitle="Get a free assessment of your roof damage. We\u2019ll provide an honest recommendation and clear pricing."
      />
    </>
  )
}
