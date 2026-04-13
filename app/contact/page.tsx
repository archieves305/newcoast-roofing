import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import EstimateForm from '@/components/forms/EstimateForm'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us | Free Estimate',
  description:
    'Request a free estimate from NewCoast Roofing for roofing, impact windows, or doors in South Florida. Call us or fill out our form. Financing available.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Contact', url: '/contact' },
            ])
          ),
        }}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl font-bold text-navy">
                Get Your Free Estimate
              </h1>
              <p className="mt-4 text-lg text-slate leading-relaxed">
                Ready to start your roofing, window, or door project? Fill out
                the form and a member of our team will reach out to schedule
                your free on-site assessment. Financing options available.
              </p>

              <div className="mt-10 space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-coastal/10">
                    <Icon name="phone" size={24} className="text-coastal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy group-hover:text-coastal transition-colors">
                      Call Us
                    </h3>
                    <p className="text-lg font-semibold text-coastal">
                      {siteConfig.phone}
                    </p>
                    <p className="text-sm text-slate">
                      Mon-Fri, 8AM - 6PM
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-coastal/10">
                    <svg className="h-6 w-6 text-coastal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy group-hover:text-coastal transition-colors">
                      Email Us
                    </h3>
                    <p className="text-coastal">{siteConfig.email}</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-coastal/10">
                    <Icon name="map" size={24} className="text-coastal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Office</h3>
                    <p className="text-slate">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                    </p>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-coastal/10">
                    <Icon name="flag" size={24} className="text-coastal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Service Areas</h3>
                    <p className="text-slate">
                      Broward County &bull; Palm Beach County &bull; Port St. Lucie / St. Lucie County
                    </p>
                  </div>
                </div>

                {/* Financing */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-coastal/10">
                    <Icon name="dollar" size={24} className="text-coastal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">Financing Available</h3>
                    <p className="text-slate">
                      PACE &amp; GreenSky financing to help you get started today.
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="mt-10 aspect-[16/9] rounded-xl bg-gray-200 flex items-center justify-center border border-gray-100">
                {/* PLACEHOLDER — replace with Google Maps embed */}
                <span className="text-sm text-gray-400">
                  Google Map Embed
                </span>
              </div>
            </div>

            {/* Estimate Form */}
            <div>
              <EstimateForm source="contact-page" />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
