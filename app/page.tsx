import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import ServicesOverview from '@/components/sections/ServicesOverview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import FinancingSection from '@/components/sections/FinancingSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ServiceAreaPreview from '@/components/sections/ServiceAreaPreview'
import GalleryPreview from '@/components/sections/GalleryPreview'
import Testimonials from '@/components/sections/Testimonials'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { getFaqsForPage } from '@/content/faqs'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'

export default function HomePage() {
  const pageFaqs = getFaqsForPage(['roofing', 'financing', 'estimates'], 5)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: 'Home', url: '/' }])
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
        title="Roofing, Windows & Doors for South Florida Homes"
        subtitle="NewCoast Roofing delivers premium exterior protection across Broward County, Palm Beach County, and Port St. Lucie. Free estimates. Financing available."
        cta1Text="Get a Free Estimate"
        cta1Href="/contact"
        cta2Text="Explore Financing"
        cta2Href="/financing"
      />
      <TrustStrip />
      <ServicesOverview />
      <WhyChooseUs />
      <FinancingSection />
      <ProcessSection />
      <ServiceAreaPreview />
      <GalleryPreview />
      <Testimonials />
      <FAQSection
        title="Common Questions"
        subtitle="Quick answers about our roofing, window, door, and financing services"
        faqs={pageFaqs}
      />
      <CTASection />
    </>
  )
}
