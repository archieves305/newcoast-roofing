'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, navLinks } from '@/content/site'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-navy text-center text-sm text-white py-2 px-4">
        <span className="font-medium">
          Free Estimates &amp; Financing Available
        </span>
        <span className="hidden sm:inline"> &mdash; </span>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="font-bold text-coastal-light hover:text-white transition-colors"
        >
          Call {siteConfig.phone}
        </a>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={siteConfig.logoUrl}
                alt="NewCoast Roofing"
                width={122}
                height={92}
                className="h-12 w-auto lg:h-14"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button className="flex items-center gap-1 text-sm font-medium text-charcoal hover:text-coastal transition-colors">
                      {link.label}
                      <Icon name="chevronDown" size={14} />
                    </button>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="rounded-lg bg-white shadow-lg border border-gray-100 py-2 min-w-48">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-charcoal hover:bg-cream hover:text-coastal transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-charcoal hover:text-coastal transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-coastal transition-colors"
              >
                <Icon name="phone" size={18} />
                {siteConfig.phone}
              </a>
              <Button href="/contact" size="sm">
                Free Estimate
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <Icon name={mobileOpen ? 'x' : 'menu'} size={24} className="text-navy" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      className="flex w-full items-center justify-between py-3 text-base font-medium text-charcoal"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.label}
                      <Icon
                        name="chevronDown"
                        size={16}
                        className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 space-y-1 border-l-2 border-coastal/20 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-slate hover:text-coastal"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-3 text-base font-medium text-charcoal hover:text-coastal"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-navy py-3 text-white font-semibold"
                >
                  <Icon name="phone" size={18} />
                  Call {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-lg bg-amber py-3 text-white font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Free Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
