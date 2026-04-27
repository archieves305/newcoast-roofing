'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/sections/CTASection'

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
    title: 'Tile Roof Restoration',
    location: 'West Palm Beach, FL',
    category: 'Roofing',
    image: '/images/project-luxury-tuscan.jpg',
  },
  {
    title: 'Sliding Glass Door Installation',
    location: 'Coral Springs, FL',
    category: 'Doors',
    image: '/images/project-modern-glass.jpg',
  },
  {
    title: 'Metal Roof Installation',
    location: 'Port St. Lucie, FL',
    category: 'Roofing',
    image: '/images/project-metal-roof.jpg',
  },
  {
    title: 'Whole-Home Window Replacement',
    location: 'Weston, FL',
    category: 'Windows',
    image: '/images/project-modern-pool.jpg',
  },
  {
    title: 'Residential Re-Roof',
    location: 'Pompano Beach, FL',
    category: 'Roofing',
    image: '/images/project-residential.jpg',
  },
  {
    title: 'Patio & Sliding Door Upgrade',
    location: 'Delray Beach, FL',
    category: 'Doors',
    image: '/images/project-modern-villa.jpg',
  },
  {
    title: 'Coastal Home Renovation',
    location: 'Jupiter, FL',
    category: 'Roofing',
    image: '/images/project-coastal-home.jpg',
  },
]

const categories = ['All', 'Roofing', 'Windows', 'Doors']

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <>
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Our Projects"
            subtitle="Browse our work across roofing, windows, and doors in South Florida"
          />

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-navy text-white'
                    : 'bg-cream text-slate hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
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

          {filtered.length === 0 && (
            <p className="text-center text-slate py-12">
              No projects found in this category yet.
            </p>
          )}
        </Container>
      </section>

      <CTASection
        title="Like What You See?"
        subtitle="Get a free estimate for your roofing, window, or door project. We'll bring the same quality to your home."
      />
    </>
  )
}
