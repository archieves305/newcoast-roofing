import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Impact Doors in Palm Beach County',
  description:
    'Hurricane-rated impact doors in Palm Beach County FL — entry, French, and sliding glass. Serving West Palm Beach, Boca Raton, Delray Beach, and Jupiter.',
  path: '/lp/impact-doors-palm-beach-county',
  noindex: true,
})

export default function ImpactDoorsPalmBeachLP() {
  const pageFaqs = getFaqsForPage(['doors', 'windows', 'financing', 'estimates'], 4)

  return (
    <LandingPageTemplate
      headline="Impact Doors in Palm Beach County"
      subheadline="Hurricane protection that doesn't compromise on style. NewCoast installs impact-rated entry, French, sliding glass, and garage doors across Palm Beach County."
      service="Impact Doors"
      location="Palm Beach County"
      features={[
        'Impact-rated entry doors',
        'Sliding glass door systems',
        'French door installation',
        'Garage door upgrades',
        'Enhanced security features',
        'May qualify for insurance discounts',
        'Professional installation',
        'PACE & GreenSky financing',
      ]}
      ctaText="Get a Free Impact Door Estimate"
      localCopy="From Boca Raton to West Palm Beach, Delray Beach, Boynton Beach, and Jupiter, Palm Beach County homeowners are upgrading to hurricane-rated impact doors for storm protection, security, and curb appeal. NewCoast Roofing handles permitting, installation, and finish work — and offers PACE and GreenSky financing to make the project manageable."
      faqs={pageFaqs}
      source="lp-impact-doors-palm-beach"
    />
  )
}
