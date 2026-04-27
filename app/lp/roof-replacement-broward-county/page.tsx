import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roof Replacement in Broward County',
  description:
    'Full roof replacement in Broward County FL. Hurricane-rated systems, code-compliant installation, and PACE/GreenSky financing. Free estimates from NewCoast Roofing.',
  path: '/lp/roof-replacement-broward-county',
  noindex: true,
})

export default function RoofReplacementBrowardLP() {
  const pageFaqs = getFaqsForPage(['roofing', 'financing', 'estimates'], 4)

  return (
    <LandingPageTemplate
      headline="Roof Replacement in Broward County"
      subheadline="Protect your home with a new roof built for South Florida storms. NewCoast Roofing installs hurricane-rated shingle, tile, and metal systems across Broward County."
      service="Roof Replacement"
      location="Broward County"
      features={[
        'Full tear-off & replacement',
        'Hurricane-rated systems',
        'Shingle, tile, and metal options',
        'Code-compliant installation',
        'Manufacturer warranty support',
        'Free on-site assessment',
        'PACE & GreenSky financing',
        'Permit handling included',
      ]}
      ctaText="Get Your Free Roof Replacement Quote"
      localCopy="A new roof is one of the biggest investments a Broward County homeowner makes. NewCoast Roofing serves Fort Lauderdale, Hollywood, Coral Springs, Pembroke Pines, Weston, Davie, Plantation, and surrounding cities with a roof replacement process built around clear communication, code-compliant installation, and financing options that make the project affordable."
      faqs={pageFaqs}
      source="lp-roof-replacement-broward"
    />
  )
}
