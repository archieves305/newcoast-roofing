import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="py-32">
      <Container>
        <div className="text-center">
          <p className="text-6xl font-bold text-coastal">404</p>
          <h1 className="mt-4 text-3xl font-bold text-navy">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-slate max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. Let us help you
            find what you need.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/" variant="primary">
              Go Home
            </Button>
            <Button href="/contact" variant="outline">
              Get a Free Estimate
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
