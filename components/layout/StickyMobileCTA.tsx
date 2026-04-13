'use client'

import Link from 'next/link'
import { siteConfig } from '@/content/site'
import Icon from '@/components/ui/Icon'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.1)] md:hidden">
      <div className="grid grid-cols-3 divide-x divide-gray-100">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-navy active:bg-cream transition-colors"
        >
          <Icon name="phone" size={20} />
          <span className="text-xs font-semibold">Call</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-amber text-white active:bg-amber-dark transition-colors"
        >
          <Icon name="clipboard" size={20} />
          <span className="text-xs font-bold">Free Estimate</span>
        </Link>
        <Link
          href="/financing"
          className="flex flex-col items-center justify-center gap-1 py-3 text-navy active:bg-cream transition-colors"
        >
          <Icon name="dollar" size={20} />
          <span className="text-xs font-semibold">Financing</span>
        </Link>
      </div>
    </div>
  )
}
