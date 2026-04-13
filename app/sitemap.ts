import type { MetadataRoute } from 'next'
import { siteConfig } from '@/content/site'
import { serviceAreas } from '@/content/areas'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const staticPages = [
    '',
    '/roofing',
    '/roof-repair',
    '/roof-replacement',
    '/windows',
    '/doors',
    '/financing',
    '/service-areas',
    '/about',
    '/projects',
    '/faq',
    '/contact',
  ]

  const areaPages = serviceAreas.map(
    (area) => `/service-areas/${area.slug}`
  )

  const allPages = [...staticPages, ...areaPages]

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : path.includes('service-areas/') ? 0.7 : 0.8,
  }))
}
