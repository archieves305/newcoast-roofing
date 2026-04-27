import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Impact Doors in Broward County',
  description:
    'Hurricane-rated impact doors in Broward County FL — entry, French, and sliding glass. Free estimates and PACE/GreenSky financing from NewCoast Roofing.',
  path: '/lp/impact-doors-broward-county',
  noindex: true,
})

export default function ImpactDoorsBrowardLP() {
  const pageFaqs = getFaqsForPage(['doors', 'windows', 'financing', 'estimates'], 4)

  return (
    <LandingPageTemplate
      headline="Impact Doors in Broward County"
      subheadline="Hurricane-rated entry, French, and sliding glass doors that combine security, style, and storm protection. NewCoast installs impact doors across Broward County."
      service="Impact Doors"
      location="Broward County"
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
      localCopy="Doors are some of the most vulnerable openings on a Broward County home — and the most visible. NewCoast Roofing installs impact-rated entry, French, sliding glass, and garage doors throughout Fort Lauderdale, Coral Springs, Hollywood, Weston, Pembroke Pines, and surrounding cities. Every install meets Florida hurricane code and includes manufacturer warranty support."
      faqs={pageFaqs}
      source="lp-impact-doors-broward"
    />
  )
}
