import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import EstimateForm from '@/components/forms/EstimateForm'
import FinancingSection from '@/components/sections/FinancingSection'
import FAQSection from '@/components/sections/FAQSection'
import GalleryPreview from '@/components/sections/GalleryPreview'
import CTASection from '@/components/sections/CTASection'
import { siteConfig } from '@/content/site'
import type { FAQ } from '@/content/faqs'

export interface LandingPageConfig {
  headline: string
  subheadline: string
  service: string
  location?: string
  features: string[]
  ctaText: string
  localCopy: string
  faqs: FAQ[]
  source: string
}

export default function LandingPageTemplate({
  headline,
  subheadline,
  service,
  location,
  features,
  ctaText,
  localCopy,
  faqs,
  source,
}: LandingPageConfig) {
  return (
    <>
      {/* PPC Hero — focused, high-converting */}
      <section className="relative bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <Container className="relative z-10">
          <div className="grid gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {headline}
              </h1>
              <p className="mt-4 text-lg text-white/80">
                {subheadline}
              </p>
              <p className="mt-2 text-sm font-medium text-coastal-light">
                PACE & GreenSky financing available
              </p>

              {/* Quick trust signals */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Free Estimates', icon: 'clipboard' },
                  { label: 'Licensed & Insured', icon: 'shield' },
                  { label: 'Financing Available', icon: 'dollar' },
                  { label: 'Veteran Owned', icon: 'flag' },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-sm text-white/80"
                  >
                    <Icon name={badge.icon} size={18} className="text-coastal-light" />
                    {badge.label}
                  </div>
                ))}
              </div>

              {/* Click to call */}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <Icon name="phone" size={20} />
                Call Now: {siteConfig.phone}
              </a>
            </div>

            {/* Inline form */}
            <div>
              <EstimateForm source={source} />
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      {/* Service features */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title={`${service}${location ? ` in ${location}` : ''}`}
          />
          <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <Icon name="check" size={20} className="mt-0.5 shrink-0 text-coastal" />
                <span className="text-slate">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Local copy */}
      {localCopy && (
        <section className="py-16 bg-cream">
          <Container narrow>
            <p className="text-lg text-slate leading-relaxed text-center">
              {localCopy}
            </p>
          </Container>
        </section>
      )}

      <FinancingSection compact />
      <GalleryPreview />
      <FAQSection faqs={faqs} />
      <CTASection title={ctaText} />
    </>
  )
}
