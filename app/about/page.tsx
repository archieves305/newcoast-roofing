import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/schema'
import Hero from '@/components/sections/Hero'
import TrustStrip from '@/components/sections/TrustStrip'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = generatePageMetadata({
  title: 'About NewCoast Roofing',
  description:
    'NewCoast Roofing is a veteran-owned South Florida contractor specializing in roofing, impact windows, and exterior doors. Serving Broward, Palm Beach, and St. Lucie counties.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'About', url: '/about' },
            ])
          ),
        }}
      />

      <Hero
        title="About NewCoast Roofing"
        subtitle="A South Florida exterior contractor built on discipline, quality, and a commitment to doing the job right."
        cta1Text="Get a Free Estimate"
        cta1Href="/contact"
        showFinancing={false}
      />
      <TrustStrip />

      {/* Story */}
      <section className="py-20 bg-white">
        <Container narrow>
          <SectionHeading
            title="Our Story"
            subtitle="How NewCoast Roofing was built"
          />
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate leading-relaxed">
              Founded in 2023, NewCoast Roofing was built to bring a higher
              standard of service to South Florida&apos;s roofing, window, and
              door industry. As a veteran-owned company, we operate with the
              discipline, integrity, and accountability that come from military
              service — and we bring those same values to every project we
              take on.
            </p>
            <p className="text-lg text-slate leading-relaxed mt-4">
              We saw too many homeowners struggling to find contractors they
              could trust — companies that would show up on time, communicate
              clearly, deliver quality work, and stand behind it. That&apos;s the
              gap we set out to fill. NewCoast is built on the belief that
              protecting your home should be straightforward, transparent, and
              professional from start to finish.
            </p>
            <p className="text-lg text-slate leading-relaxed mt-4">
              Today, we serve homeowners across Broward County, Palm Beach
              County, and Port St. Lucie with comprehensive exterior
              services — from roofing repairs and replacements to impact
              windows and hurricane-rated doors. Every project receives the
              same attention to detail, honest pricing, and clean
              communication that defines our approach.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <Container>
          <SectionHeading title="What We Stand For" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              {
                title: 'Quality Workmanship',
                desc: 'Every installation meets code and our own high standards. We don\u2019t cut corners.',
                icon: 'shield',
              },
              {
                title: 'Clear Communication',
                desc: 'You\u2019ll always know what\u2019s happening with your project. No surprises, no runaround.',
                icon: 'clipboard',
              },
              {
                title: 'Honest Pricing',
                desc: 'Detailed proposals with transparent pricing. What we quote is what you pay.',
                icon: 'dollar',
              },
              {
                title: 'Local Commitment',
                desc: 'We live and work in South Florida. Our reputation here matters to us.',
                icon: 'map',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coastal/10">
                  <Icon name={value.icon} size={24} className="text-coastal" />
                </div>
                <h3 className="font-bold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Veteran-Owned */}
      <section className="py-16 bg-navy">
        <Container>
          <div className="text-center">
            <Icon name="flag" size={40} className="mx-auto text-coastal-light" />
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Veteran-Owned & Operated
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-lg text-white/80">
              NewCoast Roofing is proud to be a veteran-owned business. The
              discipline, work ethic, and commitment to service that come from
              military experience are at the core of how we operate every day.
            </p>
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  )
}
