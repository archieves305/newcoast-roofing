import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/content/site'

interface CTASectionProps {
  title?: string
  subtitle?: string
  showFinancing?: boolean
}

export default function CTASection({
  title = 'Ready to Protect Your Home?',
  subtitle = 'Get a free, no-obligation estimate for your roofing, window, or door project. Financing options available.',
  showFinancing = true,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-navy">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Estimate
            </Button>
            <Button
              href={`tel:${siteConfig.phoneRaw}`}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Call {siteConfig.phone}
            </Button>
            {showFinancing && (
              <Button
                href="/financing"
                variant="ghost"
                size="lg"
                className="text-coastal-light hover:text-white"
              >
                Explore Financing
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
