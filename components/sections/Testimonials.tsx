import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { siteConfig } from '@/content/site'

// PLACEHOLDER — replace with real testimonials when available
const testimonials = [
  {
    name: 'Homeowner in Fort Lauderdale',
    text: 'NewCoast replaced our entire roof and the process was seamless from start to finish. Clear communication, professional crew, and the finished product looks amazing.',
    service: 'Roof Replacement',
    rating: 5,
  },
  {
    name: 'Homeowner in Boca Raton',
    text: 'We had impact windows installed throughout our home. The team was punctual, clean, and thorough. Our energy bills have already dropped and we feel much more secure for hurricane season.',
    service: 'Impact Windows',
    rating: 5,
  },
  {
    name: 'Homeowner in Port St. Lucie',
    text: 'After storm damage, NewCoast responded quickly and handled our roof repair professionally. They explained everything clearly and the financing option made it easy to move forward.',
    service: 'Roof Repair',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from South Florida homeowners who trust NewCoast for their exterior projects"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-cream p-6 shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Icon
                    key={j}
                    name="star"
                    size={18}
                    className="text-amber fill-amber"
                  />
                ))}
              </div>
              <p className="text-slate leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 border-t border-gray-200 pt-4">
                <p className="font-semibold text-navy">{t.name}</p>
                <p className="text-sm text-coastal">{t.service}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate mb-3">
            See more reviews on Google
          </p>
          <a
            href={siteConfig.googleReviewsUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-6 py-3 font-semibold text-navy transition-colors hover:bg-cream"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            See Our Google Reviews
          </a>
        </div>
      </Container>
    </section>
  )
}
