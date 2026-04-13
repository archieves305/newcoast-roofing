import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import Hero from '@/components/sections/Hero'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CTASection from '@/components/sections/CTASection'
import { faqs, getFaqsByCategory } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Get answers to common questions about roofing, impact windows, doors, financing, and the estimate process. NewCoast Roofing serves South Florida.',
  path: '/faq',
})

export default function FAQPage() {
  const roofingFaqs = getFaqsByCategory('roofing')
  const windowFaqs = getFaqsByCategory('windows')
  const doorFaqs = getFaqsByCategory('doors')
  const financingFaqs = getFaqsByCategory('financing')
  const estimateFaqs = getFaqsByCategory('estimates')
  const areaFaqs = getFaqsByCategory('areas')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'FAQ', url: '/faq' },
            ])
          ),
        }}
      />

      <Hero
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our roofing, window, door, and financing services."
        cta1Text="Get a Free Estimate"
        cta1Href="/contact"
        showFinancing={false}
      />

      <section className="py-20 bg-white">
        <Container narrow>
          {roofingFaqs.length > 0 && (
            <div className="mb-16">
              <SectionHeading title="Roofing" centered={false} />
              <FAQAccordion faqs={roofingFaqs} />
            </div>
          )}

          {windowFaqs.length > 0 && (
            <div className="mb-16">
              <SectionHeading title="Windows" centered={false} />
              <FAQAccordion faqs={windowFaqs} />
            </div>
          )}

          {doorFaqs.length > 0 && (
            <div className="mb-16">
              <SectionHeading title="Doors" centered={false} />
              <FAQAccordion faqs={doorFaqs} />
            </div>
          )}

          {financingFaqs.length > 0 && (
            <div className="mb-16">
              <SectionHeading title="Financing" centered={false} />
              <FAQAccordion faqs={financingFaqs} />
            </div>
          )}

          {estimateFaqs.length > 0 && (
            <div className="mb-16">
              <SectionHeading title="Estimates & Process" centered={false} />
              <FAQAccordion faqs={estimateFaqs} />
            </div>
          )}

          {areaFaqs.length > 0 && (
            <div className="mb-16">
              <SectionHeading title="Service Areas" centered={false} />
              <FAQAccordion faqs={areaFaqs} />
            </div>
          )}
        </Container>
      </section>

      <CTASection
        title="Still Have Questions?"
        subtitle="Call us or submit an estimate request and we'll be happy to answer anything."
      />
    </>
  )
}
