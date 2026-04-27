import Image from 'next/image'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const projects = [
  {
    title: 'Shingle Roof Replacement',
    location: 'Fort Lauderdale, FL',
    category: 'Roofing',
    image: '/images/project-shingle-roof.jpg',
  },
  {
    title: 'Impact Window Installation',
    location: 'Boca Raton, FL',
    category: 'Windows',
    image: '/images/project-impact-window.jpg',
  },
  {
    title: 'Metal Roof Installation',
    location: 'Port St. Lucie, FL',
    category: 'Roofing',
    image: '/images/project-metal-roof.jpg',
  },
  {
    title: 'Sliding Glass Door Project',
    location: 'Coral Springs, FL',
    category: 'Doors',
    image: '/images/project-modern-glass.jpg',
  },
  {
    title: 'Coastal Home Re-Roof',
    location: 'Pompano Beach, FL',
    category: 'Roofing',
    image: '/images/project-coastal-home.jpg',
  },
  {
    title: 'Whole-Home Window Replacement',
    location: 'Weston, FL',
    category: 'Windows',
    image: '/images/project-modern-pool.jpg',
  },
]

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="Our Work"
          subtitle="Browse recent roofing, window, and door projects across South Florida"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={`${project.title} in ${project.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-coastal">
                  {project.category}
                </span>
                <h3 className="mt-1 font-bold text-navy">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-slate">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/projects" variant="outline">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  )
}
