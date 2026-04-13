import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { siteConfig } from '@/content/site'

interface HeroProps {
  title: string
  subtitle: string
  cta1Text?: string
  cta1Href?: string
  cta2Text?: string
  cta2Href?: string
  showFinancing?: boolean
  bgImage?: boolean
}

export default function Hero({
  title,
  subtitle,
  cta1Text = 'Get a Free Estimate',
  cta1Href = '/contact',
  cta2Text = 'Call Now',
  cta2Href = `tel:${siteConfig.phoneRaw}`,
  showFinancing = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />

      {/* PLACEHOLDER — add hero background image */}
      {/* <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover opacity-20" /> */}

      <Container className="relative z-10">
        <div className="py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              {subtitle}
            </p>
            {showFinancing && (
              <p className="mt-3 text-sm font-medium text-coastal-light">
                PACE & GreenSky financing available &mdash; flexible options for every budget
              </p>
            )}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={cta1Href} variant="primary" size="lg">
                {cta1Text}
              </Button>
              <Button href={cta2Href} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                {cta2Text}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
