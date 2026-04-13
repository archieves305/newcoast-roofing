import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import FinancingSection from '@/components/sections/FinancingSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { roofTypes } from '@/content/services'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roofing Services in South Florida',
  description:
    'NewCoast Roofing provides expert roof repair, replacement, residential, and commercial roofing services in Broward County, Palm Beach County, and Port St. Lucie. Free estimates and financing available.',
  path: '/roofing',
})

export default function RoofingPage() {
  const pageFaqs = getFaqsForPage(['roofing'], 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              'Roofing Services',
              'Expert roof repair, replacement, residential, and commercial roofing in South Florida.',
              'https://www.newcoastroofing.com/roofing'
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
        title="Complete Roofing Solutions for South Florida"
        subtitle="From repairs to full replacements, NewCoast Roofing delivers expert service built for Florida weather. Residential and commercial. Free estimates."
        cta1Text="Request a Free Roofing Estimate"
        cta1Href="/contact"
      />
      <TrustStrip />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Our Roofing Services"
            subtitle="Comprehensive roofing solutions for every need"
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: 'Roof Repair',
                desc: 'Fast, reliable repairs for leaks, storm damage, and general wear. We respond quickly to protect your home.',
                href: '/roof-repair',
              },
              {
                title: 'Roof Replacement',
                desc: 'When repairs aren\u2019t enough, a full replacement gives your home lasting protection and improved curb appeal.',
                href: '/roof-replacement',
              },
              {
                title: 'Residential Roofing',
                desc: 'Shingle, tile, metal, and flat roofing systems for South Florida homes. Every installation meets Florida code.',
                href: '/roofing',
              },
              {
                title: 'Commercial Roofing',
                desc: 'Durable roofing solutions for commercial properties including flat, metal, and built-up roofing systems.',
                href: '/roofing',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-slate leading-relaxed">{item.desc}</p>
                <Button href={item.href} variant="ghost" size="sm" className="mt-4">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Roof Types */}
      <section className="py-20 bg-cream">
        <Container>
          <SectionHeading
            title="Roofing Materials We Work With"
            subtitle="The right material for your property, budget, and aesthetic"
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

      {/* Local relevance */}
      <section className="py-20 bg-white">
        <Container narrow>
          <SectionHeading title="Roofing Across South Florida" />
          <p className="text-slate leading-relaxed">
            South Florida roofs face unique challenges: intense UV exposure,
            heavy rain, and hurricane-force winds. NewCoast Roofing understands
            what your roof needs to perform in Broward County, Palm Beach County,
            and Port St. Lucie. We use hurricane-rated materials, follow Florida
            Building Code requirements, and handle the full permitting process so
            you can focus on your home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Broward County', 'Palm Beach County', 'Port St. Lucie'].map(
              (area) => (
                <span
                  key={area}
                  className="rounded-full bg-coastal/10 px-4 py-2 text-sm font-medium text-coastal"
                >
                  {area}
                </span>
              )
            )}
          </div>
        </Container>
      </section>

      <FinancingSection compact />
      <FAQSection faqs={pageFaqs} />
      <CTASection title="Need a Roofing Estimate?" subtitle="Get a free, no-obligation assessment of your roof. We\u2019ll provide honest recommendations and clear pricing." />
    </>
  )
}
