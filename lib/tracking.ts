/**
 * Tracking & Analytics Utilities
 *
 * IDs are read from public environment variables so they can be configured
 * per environment without code changes. When unset, the corresponding script
 * is not rendered and the helpers below silently no-op.
 *
 * Required env vars (all optional, set what you use):
 *   NEXT_PUBLIC_GA_ID                 — GA4 measurement ID (e.g. G-XXXXXXXXXX)
 *   NEXT_PUBLIC_GADS_ID               — Google Ads conversion ID (e.g. AW-XXXXXXXXXX)
 *   NEXT_PUBLIC_GADS_ESTIMATE_LABEL   — conversion label for form submissions
 *   NEXT_PUBLIC_GADS_CALL_LABEL       — conversion label for phone calls
 *   NEXT_PUBLIC_META_PIXEL_ID         — Meta (Facebook) Pixel ID
 */

export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''
export const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GADS_ID || ''
export const GOOGLE_ADS_ESTIMATE_LABEL =
  process.env.NEXT_PUBLIC_GADS_ESTIMATE_LABEL || ''
export const GOOGLE_ADS_CALL_LABEL =
  process.env.NEXT_PUBLIC_GADS_CALL_LABEL || ''
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || ''

/**
 * Extracts UTM and tracking parameters from the URL.
 * Call this on page load to capture campaign data for form submissions.
 */
export function getTrackingParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}

  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
    gclid: params.get('gclid') || '',
    landing_page: window.location.pathname,
    referrer: document.referrer || '',
  }
}

type GtagFn = (...args: unknown[]) => void
type FbqFn = (...args: unknown[]) => void

function getGtag(): GtagFn | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as { gtag?: GtagFn }
  return typeof w.gtag === 'function' ? w.gtag : null
}

function getFbq(): FbqFn | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as { fbq?: FbqFn }
  return typeof w.fbq === 'function' ? w.fbq : null
}

/**
 * Fire a GA4 event (no-op if gtag not loaded).
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number>
) {
  const gtag = getGtag()
  if (gtag) gtag('event', eventName, params || {})

  const fbq = getFbq()
  if (fbq) fbq('trackCustom', eventName, params || {})
}

/**
 * Fire a Google Ads conversion (no-op if gtag or IDs missing).
 */
export function trackConversion(conversionLabel: string, value?: number) {
  const gtag = getGtag()
  if (!gtag || !GOOGLE_ADS_CONVERSION_ID || !conversionLabel) return

  gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${conversionLabel}`,
    value: value || 0,
    currency: 'USD',
  })

  const fbq = getFbq()
  if (fbq) fbq('track', 'Lead')
}
