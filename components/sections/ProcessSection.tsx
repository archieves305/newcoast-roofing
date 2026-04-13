import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { processSteps } from '@/content/services'

export default function ProcessSection() {
  return (
    <section className="py-20 bg-navy">
      <Container>
        <SectionHeading
          title="What to Expect"
          subtitle="Our simple 5-step process from first contact to project completion"
          light
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-coastal text-xl font-bold text-white">
                {step.step}
              </div>
              <h3 className="font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
