import { trustBadges } from '@/content/site'
import Icon from '@/components/ui/Icon'

export default function TrustStrip() {
  return (
    <div className="border-b border-gray-100 bg-cream py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-sm font-medium text-navy"
            >
              <Icon name={badge.icon} size={20} className="text-coastal" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
