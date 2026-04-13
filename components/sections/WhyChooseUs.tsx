import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'

const reasons = [
  {
    title: 'Premium Quality Materials',
    description:
      'We use only high-performance, code-compliant materials built for South Florida conditions — from hurricane-rated roofing to impact-resistant windows and doors.',
    icon: 'shield',
  },
  {
    title: 'Transparent Process',
    description:
      'From your first call to final walkthrough, we keep you informed with clear proposals, honest timelines, and no surprise costs.',
    icon: 'clipboard',
  },
  {
    title: 'Financing That Works',
    description:
      'PACE and GreenSky financing options make it possible to protect your home now without the full upfront investment.',
    icon: 'dollar',
  },
  {
    title: 'Local South Florida Expertise',
    description:
      'We understand Broward, Palm Beach, and St. Lucie County building codes, weather patterns, and what your home needs to perform.',
    icon: 'map',
  },
  {
    title: 'Veteran-Owned Business',
    description:
      'Founded on discipline, integrity, and a commitment to doing the job right. We bring the same standards to every project we take on.',
    icon: 'flag',
  },
  {
    title: 'One Company, Complete Protection',
    description:
      'Roofing, windows, and doors under one roof. One relationship, one point of accountability, one team that handles it all.',
    icon: 'home',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-cream">
      <Container>
        <SectionHeading
          title="Why Choose NewCoast"
          subtitle="What makes us different from other South Florida contractors"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-coastal/10">
                  <Icon name={reason.icon} size={20} className="text-coastal" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-navy">{reason.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
