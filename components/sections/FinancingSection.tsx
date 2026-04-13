import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

interface FinancingSectionProps {
  compact?: boolean
}

export default function FinancingSection({ compact = false }: FinancingSectionProps) {
  return (
    <section className="py-20 bg-white">
      <Container>
        {!compact && (
          <SectionHeading
            title="Flexible Financing Options"
            subtitle="Don't let cost delay the protection your home needs. We offer financing to help you get started today."
          />
        )}
        <div className={`grid gap-8 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'} max-w-4xl mx-auto`}>
          {/* PACE */}
          <div className="rounded-xl border border-gray-100 bg-cream p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-coastal/10">
              <Icon name="dollar" size={24} className="text-coastal" />
            </div>
            <h3 className="text-xl font-bold text-navy">PACE Financing</h3>
            <p className="mt-3 text-slate leading-relaxed">
              No money down. Fund your roofing, window, or door project through
              your property tax bill. PACE financing makes hurricane protection
              and energy-efficient upgrades accessible for qualifying homeowners.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'No upfront cost',
                'Repay through property taxes',
                'Available for qualifying properties',
                'Covers roofing, windows & doors',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-coastal" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              href="/financing"
              variant="secondary"
              size="sm"
              className="mt-6"
            >
              Learn About PACE
            </Button>
          </div>

          {/* GreenSky */}
          <div className="rounded-xl border border-gray-100 bg-cream p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-coastal/10">
              <Icon name="dollar" size={24} className="text-coastal" />
            </div>
            <h3 className="text-xl font-bold text-navy">GreenSky Financing</h3>
            <p className="mt-3 text-slate leading-relaxed">
              Flexible loan options with competitive rates and quick approval.
              Finance your entire exterior project with manageable monthly
              payments that fit your budget.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                'Competitive interest rates',
                'Flexible repayment terms',
                'Quick approval process',
                'Finance any project size',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-coastal" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              href="/financing"
              variant="secondary"
              size="sm"
              className="mt-6"
            >
              Learn About GreenSky
            </Button>
          </div>
        </div>

        {!compact && (
          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Estimate with Financing Options
            </Button>
          </div>
        )}
      </Container>
    </section>
  )
}
