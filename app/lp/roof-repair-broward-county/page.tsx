import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roof Repair in Broward County',
  description:
    'Professional roof repair in Broward County FL. Leak repair, storm damage, and emergency service. Free estimates and financing. Call NewCoast Roofing today.',
  path: '/lp/roof-repair-broward-county',
  noindex: true,
})

export default function RoofRepairBrowardLP() {
  const pageFaqs = getFaqsForPage(['roofing', 'estimates'], 4)

  return (
    <LandingPageTemplate
      headline="Professional Roof Repair in Broward County"
      subheadline="Leaks, storm damage, and wear don't wait. NewCoast Roofing provides fast, reliable roof repairs across Broward County — from Fort Lauderdale to Coral Springs."
      service="Roof Repair"
      location="Broward County"
      features={[
        'Emergency leak repair',
        'Storm & wind damage repair',
        'Shingle & tile replacement',
        'Flat roof patching & coating',
        'Flashing & sealant repair',
        'Free on-site assessment',
        'Same-week scheduling available',
        'PACE & GreenSky financing',
      ]}
      ctaText="Schedule Your Free Roof Repair Estimate"
      localCopy="Broward County homeowners face intense weather year-round. From summer storms to hurricane season, your roof takes the hit so your family doesn't. NewCoast Roofing provides fast-response roof repairs throughout Fort Lauderdale, Hollywood, Coral Springs, Pembroke Pines, Weston, Miramar, and surrounding Broward communities. We assess the damage honestly, price it fairly, and get the work done right."
      faqs={pageFaqs}
      source="lp-roof-repair-broward"
    />
  )
}
