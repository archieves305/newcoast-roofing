import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Impact Windows in Broward County',
  description:
    'Hurricane-rated impact windows in Broward County FL. Energy efficient, noise reducing, insurance-discount eligible. Free estimates and financing from NewCoast Roofing.',
  path: '/lp/impact-windows-broward-county',
  noindex: true,
})

export default function ImpactWindowsBrowardLP() {
  const pageFaqs = getFaqsForPage(['windows', 'financing', 'estimates'], 4)

  return (
    <LandingPageTemplate
      headline="Hurricane Impact Windows in Broward County"
      subheadline="Protect your home, lower your energy bill, and qualify for insurance discounts. NewCoast Roofing installs premium impact windows across Broward County."
      service="Impact Windows"
      location="Broward County"
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
      localCopy="Impact windows are one of the smartest upgrades a Broward County homeowner can make. They protect your home from hurricane debris, lower your cooling bill, reduce outside noise, and often qualify your home for premium discounts on Florida homeowner's insurance. NewCoast Roofing installs impact windows throughout Fort Lauderdale, Coral Springs, Pembroke Pines, Hollywood, Weston, and surrounding cities."
      faqs={pageFaqs}
      source="lp-impact-windows-broward"
    />
  )
}
