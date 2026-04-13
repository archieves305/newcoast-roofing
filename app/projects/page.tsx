'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/sections/CTASection'

// PLACEHOLDER — replace with actual project data and images
const projects = [
  { title: 'Shingle Roof Replacement', location: 'Fort Lauderdale, FL', category: 'Roofing' },
  { title: 'Impact Window Installation', location: 'Boca Raton, FL', category: 'Windows' },
  { title: 'Tile Roof Restoration', location: 'West Palm Beach, FL', category: 'Roofing' },
  { title: 'Impact Entry Door Upgrade', location: 'Coral Springs, FL', category: 'Doors' },
  { title: 'Metal Roof Installation', location: 'Port St. Lucie, FL', category: 'Roofing' },
  { title: 'Whole-Home Window Replacement', location: 'Weston, FL', category: 'Windows' },
  { title: 'Flat Roof Repair', location: 'Pompano Beach, FL', category: 'Roofing' },
  { title: 'Sliding Glass Door Installation', location: 'Delray Beach, FL', category: 'Doors' },
  { title: 'Tile Roof Replacement', location: 'Jupiter, FL', category: 'Roofing' },
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

          {/* Filter tabs */}
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

          {/* Project grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-100 shadow-sm"
              >
                {/* PLACEHOLDER — replace with actual images */}
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
