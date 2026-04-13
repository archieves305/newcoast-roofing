/**
 * Tracking & Analytics Utilities
 *
 * Integration points for analytics, ad tracking, and call tracking.
 * Replace placeholder IDs with actual values before going live.
 */

// PLACEHOLDER — replace with actual GA4 Measurement ID
export const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'

// PLACEHOLDER — replace with actual Google Ads Conversion ID
export const GOOGLE_ADS_CONVERSION_ID = 'AW-XXXXXXXXXX'

// PLACEHOLDER — replace with actual conversion label for estimate form submissions
export const GOOGLE_ADS_ESTIMATE_LABEL = 'XXXXXXXXXX'

// PLACEHOLDER — replace with actual conversion label for phone calls
export const GOOGLE_ADS_CALL_LABEL = 'XXXXXXXXXX'

// PLACEHOLDER — replace with Meta Pixel ID if needed
export const META_PIXEL_ID = ''

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

/**
 * Fire a GA4 event (requires gtag.js loaded).
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number>
) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      'event',
      eventName,
      params
    )
  }
}

/**
 * Fire Google Ads conversion (requires gtag.js loaded).
 */
export function trackConversion(
  conversionLabel: string,
  value?: number
) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      'event',
      'conversion',
      {
        send_to: `${GOOGLE_ADS_CONVERSION_ID}/${conversionLabel}`,
        value: value || 0,
        currency: 'USD',
      }
    )
  }
}
