import { redirect } from 'next/navigation'

/**
 * The /lp route redirects to home. Individual landing pages
 * should be created as /lp/[slug]/page.tsx files.
 *
 * Example landing pages to create:
 *   /lp/roof-repair-broward-county
 *   /lp/roof-repair-palm-beach-county
 *   /lp/roof-replacement-broward-county
 *   /lp/roof-replacement-palm-beach-county
 *   /lp/impact-windows-broward-county
 *   /lp/impact-windows-palm-beach-county
 *   /lp/impact-doors-broward-county
 *   /lp/impact-doors-palm-beach-county
 *   /lp/roofing-financing-florida
 *   /lp/free-roof-estimate
 *
 * Each landing page uses the LandingPageTemplate component
 * from @/components/landing/LandingPageTemplate.
 *
 * See /lp/roof-repair-broward-county/page.tsx for an example.
 */
export default function LandingPageIndex() {
  redirect('/')
}
