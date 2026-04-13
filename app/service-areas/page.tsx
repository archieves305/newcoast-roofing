import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { serviceAreas } from '@/content/areas'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: 'Service Areas in South Florida',
  description:
    'NewCoast Roofing serves Broward County, Palm Beach County, and Port St. Lucie / St. Lucie County with expert roofing, impact windows, and door services. Free estimates.',
  path: '/service-areas',
})

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Service Areas', url: '/service-areas' },
            ])
          ),
        }}
      />

      <Hero
        title="Serving South Florida's Homeowners"
        subtitle="NewCoast Roofing provides expert roofing, impact windows, and exterior doors across Broward County, Palm Beach County, and Port St. Lucie. Free estimates and financing in every area we serve."
      />
      <TrustStrip />

      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Our Service Areas"
            subtitle="Expert exterior services throughout South Florida's top-growing counties"
          />
          <div className="space-y-16">
            {serviceAreas.map((area) => (
              <div
                key={area.slug}
                className="grid gap-8 lg:grid-cols-2 items-start rounded-xl border border-gray-100 p-8 shadow-sm"
              >
                <div>
                  <h3 className="text-2xl font-bold text-navy">
                    {area.name}
                  </h3>
                  <p className="mt-3 text-slate leading-relaxed">
                    {area.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button href={`/service-areas/${area.slug}`} variant="secondary" size="sm">
                      View {area.name} Services
                    </Button>
                    <Button href="/contact" variant="outline" size="sm">
                      Get a Free Estimate
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-coastal mb-3">
                    Cities We Serve
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {area.cities.map((city) => (
                      <span
                        key={city}
                        className="rounded-full bg-cream px-3 py-1 text-sm text-slate"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1 text-navy font-medium">
                      <Icon name="roof" size={16} className="text-coastal" />
                      Roofing
                    </span>
                    <span className="flex items-center gap-1 text-navy font-medium">
                      <Icon name="window" size={16} className="text-coastal" />
                      Windows
                    </span>
                    <span className="flex items-center gap-1 text-navy font-medium">
                      <Icon name="door" size={16} className="text-coastal" />
                      Doors
                    </span>
                    <span className="flex items-center gap-1 text-navy font-medium">
                      <Icon name="dollar" size={16} className="text-coastal" />
                      Financing
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
