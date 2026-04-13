import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import CountyPageTemplate from '@/components/sections/CountyPageTemplate'
import { serviceAreas } from '@/content/areas'

const area = serviceAreas.find((a) => a.slug === 'broward-county')!

export const metadata: Metadata = generatePageMetadata({
  title: area.metaTitle.replace(' | NewCoast Roofing', ''),
  description: area.metaDescription,
  path: `/service-areas/${area.slug}`,
})

export default function BrowardCountyPage() {
  return <CountyPageTemplate area={area} />
}
