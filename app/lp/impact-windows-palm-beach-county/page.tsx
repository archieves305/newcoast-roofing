import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Impact Windows in Palm Beach County',
  description:
    'Hurricane-rated impact windows in Palm Beach County FL. Energy efficient, insurance-discount eligible. Serving West Palm Beach, Boca Raton, and Delray Beach.',
  path: '/lp/impact-windows-palm-beach-county',
  noindex: true,
})

export default function ImpactWindowsPalmBeachLP() {
  const pageFaqs = getFaqsForPage(['windows', 'financing', 'estimates'], 4)

  return (
    <LandingPageTemplate
      headline="Hurricane Impact Windows in Palm Beach County"
      subheadline="Year-round protection, lower energy bills, and potential insurance savings. NewCoast Roofing installs hurricane impact windows across Palm Beach County."
      service="Impact Windows"
      location="Palm Beach County"
      features={[
        'Hurricane impact-rated glass',
        'Energy-efficient Low-E options',
        'Noise reduction',
        'May qualify for insurance discounts',
        'Single-hung, sliding & casement styles',
        'Professional installation',
        'PACE & GreenSky financing',
        'Permit handling included',
      ]}
      ctaText="Get a Free Impact Window Estimate"
      localCopy="From Boca Raton and Delray Beach to West Palm Beach, Palm Beach Gardens, Wellington, and Jupiter, Palm Beach County homeowners are upgrading to impact windows for storm protection and long-term energy savings. NewCoast Roofing handles permitting, installation, and finishing — and offers PACE and GreenSky financing so you can move forward without writing one big check."
      faqs={pageFaqs}
      source="lp-impact-windows-palm-beach"
    />
  )
}
