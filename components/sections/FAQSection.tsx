import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import FAQAccordion from '@/components/ui/FAQAccordion'
import type { FAQ } from '@/content/faqs'

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs: FAQ[]
}

export default function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle,
  faqs,
}: FAQSectionProps) {
  return (
    <section className="py-20 bg-cream">
      <Container narrow>
        <SectionHeading title={title} subtitle={subtitle} />
        <FAQAccordion faqs={faqs} />
      </Container>
    </section>
  )
}
