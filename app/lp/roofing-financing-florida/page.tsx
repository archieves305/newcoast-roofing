import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import LandingPageTemplate from '@/components/landing/LandingPageTemplate'
import { getFaqsForPage } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Roof & Window Financing in Florida — $0 Down Options',
  description:
    'PACE and GreenSky financing for roofing, impact windows, and doors across South Florida. No money down options available. Free estimate from NewCoast Roofing.',
  path: '/lp/roofing-financing-florida',
  noindex: true,
})

export default function RoofingFinancingLP() {
  const pageFaqs = getFaqsForPage(['financing', 'estimates', 'roofing'], 5)

  return (
    <LandingPageTemplate
      headline="Roof, Window & Door Financing — Built for Florida Homeowners"
      subheadline="PACE financing with $0 down through your property tax bill, plus GreenSky loans with quick approval and competitive rates. Get the project done now and pay over time."
      service="Roofing & Exterior Financing"
      location="Florida"
      features={[
        'PACE financing — no money down',
        'GreenSky loans — quick approval',
        'Competitive rates for qualified applicants',
        'Repayment through property tax (PACE) or fixed monthly (GreenSky)',
        'Use for roofing, windows, doors, or full upgrades',
        'Stack with insurance claims when applicable',
        'Free, no-obligation estimate first',
        'Serving Broward, Palm Beach & St. Lucie counties',
      ]}
      ctaText="See If You Qualify — Free Estimate"
      localCopy="Most South Florida homeowners don't replace a roof or install impact windows out of pocket. NewCoast Roofing offers two strong financing paths: PACE financing, which lets you fund hurricane-protection upgrades with no money down (repaid through your property tax assessment), and GreenSky, which provides traditional home-improvement loans with competitive rates and fast approval. Tell us about your project and we'll walk you through which option fits best."
      faqs={pageFaqs}
      source="lp-financing-florida"
    />
  )
}
