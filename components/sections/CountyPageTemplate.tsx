import type { ServiceArea } from '@/content/areas'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import FinancingSection from '@/components/sections/FinancingSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import EstimateForm from '@/components/forms/EstimateForm'
import { services } from '@/content/services'
import { getFaqsForPage } from '@/content/faqs'
import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/schema'

interface CountyPageTemplateProps {
  area: ServiceArea
}

export default function CountyPageTemplate({ area }: CountyPageTemplateProps) {
  const pageFaqs = getFaqsForPage(['roofing', 'windows', 'financing', 'estimates'], 5)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Service Areas', url: '/service-areas' },
              { name: area.name, url: `/service-areas/${area.slug}` },
            ])
          ),
        }}
      />

      <Hero
        title={area.headline}
        subtitle={`${area.description} Free estimates and financing available for every project.`}
        cta1Text={`Get a Free Estimate in ${area.county}`}
        cta1Href="#estimate"
      />
      <TrustStrip />

      {/* Services in this area */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title={`Our Services in ${area.name}`}
            subtitle={`Complete exterior protection for ${area.county} homes and businesses`}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group rounded-xl border border-gray-100 p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-coastal/10">
                  <Icon name={service.icon} size={20} className="text-coastal" />
                </div>
                <h3 className="font-bold text-navy group-hover:text-coastal transition-colors">
                  {service.shortName}
                </h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {service.tagline} in {area.name}.
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
            {services.slice(3).map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group rounded-xl border border-gray-100 p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-coastal/10">
                  <Icon name={service.icon} size={20} className="text-coastal" />
                </div>
                <h3 className="font-bold text-navy group-hover:text-coastal transition-colors">
                  {service.shortName}
                </h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {service.tagline} in {area.name}.
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Local copy */}
      <section className="py-20 bg-cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-navy">
                Local Expertise in {area.name}
              </h2>
              <p className="mt-4 text-slate leading-relaxed">
                {area.localCopy}
              </p>
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-coastal mb-3">
                  Cities We Serve in {area.county}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {area.cities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full bg-white px-3 py-1.5 text-sm text-slate border border-gray-200"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div id="estimate">
              <EstimateForm source={`county-${area.slug}`} />
            </div>
          </div>
        </Container>
      </section>

      <FinancingSection compact />
      <FAQSection faqs={pageFaqs} />
      <CTASection
        title={`Ready to Start Your Project in ${area.name}?`}
        subtitle={`Get a free, no-obligation estimate for roofing, windows, or doors in ${area.county}. Financing available.`}
      />
    </>
  )
}
