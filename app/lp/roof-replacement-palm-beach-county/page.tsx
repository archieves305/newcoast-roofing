import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roof Replacement in Palm Beach County',
  description:
    'Full roof replacement in Palm Beach County FL. Hurricane-rated systems with PACE/GreenSky financing. Serving West Palm Beach, Boca Raton, Delray Beach, and Jupiter.',
  path: '/lp/roof-replacement-palm-beach-county',
  noindex: true,
})

export default function RoofReplacementPalmBeachLP() {
  const pageFaqs = getFaqsForPage(['roofing', 'financing', 'estimates'], 4)

  return (
    <LandingPageTemplate
      headline="Roof Replacement in Palm Beach County"
      subheadline="A new roof built for hurricane season — and the next 20 years. NewCoast Roofing installs hurricane-rated roofing systems across Palm Beach County."
      service="Roof Replacement"
      location="Palm Beach County"
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
      localCopy="From West Palm Beach and Palm Beach Gardens to Boca Raton, Delray Beach, Wellington, and Jupiter, Palm Beach County roofs face nonstop UV, salt air, and hurricane-force wind. NewCoast Roofing delivers full roof replacements that meet Florida Building Code, qualify for insurance discounts, and come with PACE or GreenSky financing options to fit your budget."
      faqs={pageFaqs}
      source="lp-roof-replacement-palm-beach"
    />
  )
}
