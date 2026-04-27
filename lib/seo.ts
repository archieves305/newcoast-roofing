import type { Metadata } from 'next'
import { siteConfig } from '@/content/site'

interface PageSEO {
  title: string
  description: string
  path: string
  ogTitle?: string
  noindex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogTitle,
  noindex = false,
}: PageSEO): Metadata {
  const fullTitle =
    title === siteConfig.name
      ? title
      : `${title} | ${siteConfig.name}`
  const url = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: ogTitle || fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle || fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
    ...(noindex
      ? { robots: { index: false, follow: false } }
      : {}),
  }
}
