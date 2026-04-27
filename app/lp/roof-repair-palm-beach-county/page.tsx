import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roof Repair in Palm Beach County',
  description:
    'Professional roof repair in Palm Beach County FL. Leak repair, storm damage, and emergency service across West Palm Beach, Boca Raton, Delray Beach, and Jupiter. Free estimates.',
  path: '/lp/roof-repair-palm-beach-county',
  noindex: true,
})

export default function RoofRepairPalmBeachLP() {
  const pageFaqs = getFaqsForPage(['roofing', 'estimates'], 4)

  return (
    <LandingPageTemplate
      headline="Professional Roof Repair in Palm Beach County"
      subheadline="Storms, sun, and salt air take a toll on Palm Beach roofs. NewCoast Roofing delivers fast, code-compliant roof repairs from West Palm Beach to Boca Raton."
      service="Roof Repair"
      location="Palm Beach County"
      features={[
        'Emergency leak repair',
        'Storm & wind damage repair',
        'Tile & shingle replacement',
        'Flat roof patching & coating',
        'Flashing & sealant repair',
        'Free on-site assessment',
        'Same-week scheduling available',
        'PACE & GreenSky financing',
      ]}
      ctaText="Schedule Your Free Roof Repair Estimate"
      localCopy="Palm Beach County homeowners deal with year-round sun, hurricane season, and coastal humidity. NewCoast Roofing provides fast-response roof repairs throughout West Palm Beach, Boca Raton, Boynton Beach, Delray Beach, Jupiter, Wellington, and the surrounding communities. We diagnose the real problem, fix it right, and give you a clear written quote before any work starts."
      faqs={pageFaqs}
      source="lp-roof-repair-palm-beach"
    />
  )
}
