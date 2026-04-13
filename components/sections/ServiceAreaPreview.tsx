import Link from 'next/link'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { serviceAreas } from '@/content/areas'

export default function ServiceAreaPreview() {
  return (
    <section className="py-20 bg-cream">
      <Container>
        <SectionHeading
          title="Serving South Florida"
          subtitle="Roofing, windows, and doors across Broward, Palm Beach, and St. Lucie counties"
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="group rounded-xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:border-coastal/20"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5">
                <Icon name="map" size={20} className="text-navy" />
              </div>
              <h3 className="text-lg font-bold text-navy group-hover:text-coastal transition-colors">
                {area.name}
              </h3>
              <p className="mt-2 text-sm text-slate leading-relaxed line-clamp-3">
                {area.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-coastal">
                View Service Area
                <Icon name="chevronRight" size={14} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
