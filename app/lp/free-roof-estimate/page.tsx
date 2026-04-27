import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Free Roof Estimate — South Florida Roofing',
  description:
    'Get a free, no-obligation roof estimate from NewCoast Roofing. Serving Broward County, Palm Beach County, and Port St. Lucie. Financing available.',
  path: '/lp/free-roof-estimate',
  noindex: true,
})

export default function FreeRoofEstimateLP() {
  const pageFaqs = getFaqsForPage(['estimates', 'roofing', 'financing'], 5)

  return (
    <LandingPageTemplate
      headline="Free Roof Estimate — South Florida"
      subheadline="No-obligation, on-site roof assessment from a licensed and insured Florida roofing contractor. Same-week scheduling. Financing available if you need it."
      service="Free Roof Estimate"
      features={[
        'Free, no-obligation on-site visit',
        'Honest assessment — repair vs. replace',
        'Clear written proposal',
        'Same-week scheduling available',
        'Licensed roofing contractor (CCC1335024)',
        'Fully insured',
        'PACE & GreenSky financing options',
        'Veteran-owned business',
      ]}
      ctaText="Schedule Your Free Roof Estimate"
      localCopy="A free estimate from NewCoast Roofing means a real on-site visit, a real conversation about what your roof needs, and a real written quote — not a high-pressure sales pitch. We serve Broward County, Palm Beach County, and Port St. Lucie / St. Lucie County, and we'll tell you straight whether you need a repair or a full replacement. If financing makes sense for your project, we'll walk you through PACE and GreenSky options."
      faqs={pageFaqs}
      source="lp-free-estimate"
    />
  )
}
