import type { MetadataRoute } from 'next'
import { siteConfig } from '@/content/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/lp/'], // PPC landing pages — often excluded from organic indexing
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
