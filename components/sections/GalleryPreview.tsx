import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

// PLACEHOLDER — replace with actual project images
const projects = [
  {
    title: 'Shingle Roof Replacement',
    location: 'Fort Lauderdale, FL',
    category: 'Roofing',
  },
  {
    title: 'Impact Window Installation',
    location: 'Boca Raton, FL',
    category: 'Windows',
  },
  {
    title: 'Tile Roof Restoration',
    location: 'West Palm Beach, FL',
    category: 'Roofing',
  },
  {
    title: 'Impact Entry Door Upgrade',
    location: 'Coral Springs, FL',
    category: 'Doors',
  },
  {
    title: 'Metal Roof Installation',
    location: 'Port St. Lucie, FL',
    category: 'Roofing',
  },
  {
    title: 'Whole-Home Window Replacement',
    location: 'Weston, FL',
    category: 'Windows',
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
          {projects.map((project, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm"
            >
              {/* PLACEHOLDER — replace with actual project images */}
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                <span className="text-sm text-gray-400">
                  Project Photo
                </span>
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
