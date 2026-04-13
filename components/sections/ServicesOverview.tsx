import Link from 'next/link'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { services } from '@/content/services'

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Complete exterior protection for South Florida homes and businesses"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-coastal/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-coastal/10">
                <Icon name={service.icon} size={24} className="text-coastal" />
              </div>
              <h3 className="text-xl font-bold text-navy group-hover:text-coastal transition-colors">
                {service.shortName}
              </h3>
              <p className="mt-3 text-slate leading-relaxed">
                {service.description.slice(0, 150)}...
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-coastal">
                Learn More
                <Icon name="arrowRight" size={16} />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto">
          {services.slice(3).map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-coastal/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-coastal/10">
                <Icon name={service.icon} size={24} className="text-coastal" />
              </div>
              <h3 className="text-xl font-bold text-navy group-hover:text-coastal transition-colors">
                {service.shortName}
              </h3>
              <p className="mt-3 text-slate leading-relaxed">
                {service.description.slice(0, 150)}...
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-coastal">
                Learn More
                <Icon name="arrowRight" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
