'use client'

import { useState, useEffect } from 'react'
import { getTrackingParams } from '@/lib/tracking'
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
  const [submitted, setSubmitted] = useState(false)
  const [tracking, setTracking] = useState<Record<string, string>>({})

  useEffect(() => {
    setTracking(getTrackingParams())
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // PLACEHOLDER — wire to your form endpoint (e.g., API route, Zapier, CRM)
    // The form data + hidden tracking fields should be sent to your backend

    // Fire conversion tracking
    // trackConversion(GOOGLE_ADS_ESTIMATE_LABEL)

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`rounded-xl bg-white p-8 text-center shadow-lg ${className}`}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy">Thank You!</h3>
        <p className="mt-2 text-slate">
          Your estimate request has been received. A member of our team will
          reach out within one business day to confirm your details and schedule
          your assessment.
        </p>
        <p className="mt-4 text-sm text-slate/70">
          Need immediate assistance? Call us at{' '}
          <a href={`tel:${siteConfig.phoneRaw}`} className="font-semibold text-coastal">
            {siteConfig.phone}
          </a>
        </p>
      </div>
    )
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

      {/* PLACEHOLDER — add SMS consent checkbox if needed */}

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-amber px-6 py-4 text-lg font-bold text-white shadow-lg shadow-amber/20 transition-all hover:bg-amber-dark hover:shadow-xl"
      >
        Get My Free Estimate
      </button>

      <p className="mt-3 text-center text-xs text-gray-400">
        No obligation. We typically respond within one business day.
      </p>
    </form>
  )
}
