import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Projects & Gallery',
  description:
    'Browse our completed roofing, impact window, and door projects across South Florida. See the quality of NewCoast Roofing work in Broward, Palm Beach, and St. Lucie counties.',
  path: '/projects',
})

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
