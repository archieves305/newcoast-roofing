'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getTrackingParams, trackEvent } from '@/lib/tracking'
import { siteConfig } from '@/content/site'

interface EstimateFormProps {
  source?: string
  compact?: boolean
  className?: string
}

const serviceOptions = [
  'Roof Repair',
  'Roof Replacement',
  'Impact Windows',
  'Impact Doors',
  'Roofing + Windows',
  'Roofing + Doors',
  'Full Exterior Upgrade',
  'Other',
]

const countyOptions = [
  'Broward County',
  'Palm Beach County',
  'St. Lucie County',
  'Other',
]

const contactMethods = ['Phone', 'Email', 'Text']

export default function EstimateForm({
  source = 'website',
  compact = false,
  className = '',
}: EstimateFormProps) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [tracking, setTracking] = useState<Record<string, string>>({})

  useEffect(() => {
    setTracking(getTrackingParams())
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting) return

    setErrorMsg(null)
    setSubmitting(true)

    const formEl = e.currentTarget
    const data = new FormData(formEl)
    const payload: Record<string, string | boolean> = {}
    data.forEach((value, key) => {
      payload[key] = typeof value === 'string' ? value : ''
    })
    payload.sms_consent = (data.get('sms_consent') as string) === 'on'

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || 'Submission failed.')
      }

      trackEvent('generate_lead', {
        form_source: source,
        service: String(payload.service || ''),
      })

      const params = new URLSearchParams({
        source,
        service: String(payload.service || ''),
      })
      router.push(`/thank-you?${params.toString()}`)
    } catch (err) {
      setSubmitting(false)
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please call us directly.'
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-xl bg-white p-6 shadow-lg sm:p-8 ${className}`}
    >
      <h3 className="mb-6 text-xl font-bold text-navy">
        Get Your Free Estimate
      </h3>

      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-charcoal placeholder-gray-400 focus:border-coastal focus:ring-2 focus:ring-coastal/20 focus:outline-none"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-charcoal placeholder-gray-400 focus:border-coastal focus:ring-2 focus:ring-coastal/20 focus:outline-none"
            placeholder="(555) 555-5555"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-charcoal placeholder-gray-400 focus:border-coastal focus:ring-2 focus:ring-coastal/20 focus:outline-none"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-charcoal mb-1">
            Property Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="street-address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-charcoal placeholder-gray-400 focus:border-coastal focus:ring-2 focus:ring-coastal/20 focus:outline-none"
            placeholder="123 Main St"
          />
        </div>

        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-charcoal mb-1">
            Zip Code
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            autoComplete="postal-code"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-charcoal placeholder-gray-400 focus:border-coastal focus:ring-2 focus:ring-coastal/20 focus:outline-none"
            placeholder="33301"
          />
        </div>

        <div>
          <label htmlFor="county" className="block text-sm font-medium text-charcoal mb-1">
            County
          </label>
          <select
            id="county"
            name="county"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-charcoal focus:border-coastal focus:ring-2 focus:ring-coastal/20 focus:outline-none"
          >
            <option value="">Select county</option>
            {countyOptions.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-charcoal focus:border-coastal focus:ring-2 focus:ring-coastal/20 focus:outline-none"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact_method" className="block text-sm font-medium text-charcoal mb-1">
            Preferred Contact Method
          </label>
          <select
            id="contact_method"
            name="contact_method"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-charcoal focus:border-coastal focus:ring-2 focus:ring-coastal/20 focus:outline-none"
          >
            <option value="">Select preference</option>
            {contactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>

        <div className={compact ? '' : 'sm:col-span-2'}>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-charcoal placeholder-gray-400 focus:border-coastal focus:ring-2 focus:ring-coastal/20 focus:outline-none"
            placeholder="Tell us about your project..."
          />
        </div>
      </div>

      {/* SMS consent — required for Telnyx 10DLC compliance */}
      <label className="mt-5 flex items-start gap-2 text-xs text-slate cursor-pointer">
        <input
          type="checkbox"
          name="sms_consent"
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-coastal focus:ring-coastal"
        />
        <span>
          I agree to receive text messages from NewCoast Roofing about my
          estimate and project. Message and data rates may apply. Message
          frequency varies. Reply STOP to unsubscribe, HELP for help. See our{' '}
          <Link href="/sms-policy" className="text-coastal underline">
            SMS Policy
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-coastal underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {/* Honeypot — hidden from real users, picked up by bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Hidden tracking fields */}
      <input type="hidden" name="utm_source" value={tracking.utm_source || ''} />
      <input type="hidden" name="utm_medium" value={tracking.utm_medium || ''} />
      <input type="hidden" name="utm_campaign" value={tracking.utm_campaign || ''} />
      <input type="hidden" name="utm_term" value={tracking.utm_term || ''} />
      <input type="hidden" name="utm_content" value={tracking.utm_content || ''} />
      <input type="hidden" name="gclid" value={tracking.gclid || ''} />
      <input type="hidden" name="landing_page" value={tracking.landing_page || ''} />
      <input type="hidden" name="referrer" value={tracking.referrer || ''} />
      <input type="hidden" name="form_source" value={source} />

      {errorMsg && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg} Or call us at{' '}
          <a href={`tel:${siteConfig.phoneRaw}`} className="font-semibold underline">
            {siteConfig.phone}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-lg bg-amber px-6 py-4 text-lg font-bold text-white shadow-lg shadow-amber/20 transition-all hover:bg-amber-dark hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Get My Free Estimate'}
      </button>

      <p className="mt-3 text-center text-xs text-gray-400">
        No obligation. We typically respond within one business day.
      </p>
    </form>
  )
}
