'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  trackConversion,
  trackEvent,
  GOOGLE_ADS_ESTIMATE_LABEL,
} from '@/lib/tracking'

export default function ThankYouTracker() {
  const params = useSearchParams()

  useEffect(() => {
    trackEvent('lead_thank_you_view', {
      source: params.get('source') || '',
      service: params.get('service') || '',
    })
    trackConversion(GOOGLE_ADS_ESTIMATE_LABEL)
  }, [params])

  return null
}
