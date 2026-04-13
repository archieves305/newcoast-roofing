'use client'

import { useState } from 'react'
import Icon from './Icon'
import type { FAQ } from '@/content/faqs'

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            className="flex w-full items-center justify-between py-5 text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-semibold text-navy pr-4">
              {faq.question}
            </span>
            <Icon
              name="chevronDown"
              className={`shrink-0 text-coastal transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              size={20}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
            }`}
          >
            <p className="text-slate leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
