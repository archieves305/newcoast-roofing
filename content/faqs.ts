export interface FAQ {
  question: string
  answer: string
  category: string
}

export const faqs: FAQ[] = [
  // Roofing
  {
    question: 'How do I know if I need a roof repair or full replacement?',
    answer:
      'Minor issues like a few missing shingles or small leaks can usually be repaired. However, if your roof is over 15\u201320 years old, has widespread damage, or requires frequent repairs, a full replacement is often the more cost-effective long-term solution. Our team will assess your roof and give you an honest recommendation during your free estimate.',
    category: 'roofing',
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most residential roof replacements in South Florida take 1\u20133 days depending on the size and complexity of the project. Tile roofs and larger commercial projects may take longer. We\u2019ll provide you with a clear timeline before work begins.',
    category: 'roofing',
  },
  {
    question: 'What types of roofing materials do you work with?',
    answer:
      'We install and repair shingle, tile, metal, and flat roofing systems. Each material has distinct advantages for Florida homes, and we\u2019ll help you choose the best option for your property, budget, and aesthetic preferences.',
    category: 'roofing',
  },
  {
    question: 'Do you handle commercial roofing projects?',
    answer:
      'Yes. NewCoast Roofing serves both residential and commercial properties across Broward County, Palm Beach County, and St. Lucie County. We work with flat, metal, and built-up roofing systems common in commercial applications.',
    category: 'roofing',
  },
  {
    question: 'Will my roof hold up during a hurricane?',
    answer:
      'We install hurricane-rated roofing systems that meet or exceed Florida Building Code requirements. Proper installation, quality materials, and code-compliant fastening systems all contribute to how well your roof performs during a storm.',
    category: 'roofing',
  },
  // Windows & Doors
  {
    question: 'What are impact windows and why do I need them?',
    answer:
      'Impact windows are built with laminated glass and reinforced frames designed to resist hurricane-force winds and flying debris. Beyond storm protection, they improve energy efficiency, reduce outside noise, and can lower your homeowner\u2019s insurance premiums.',
    category: 'windows',
  },
  {
    question: 'Can impact windows help lower my insurance costs?',
    answer:
      'In many cases, yes. Florida insurers often offer premium discounts for homes with impact-rated windows and doors. The exact savings depend on your insurer, policy, and the scope of your upgrades. We recommend contacting your insurance agent for a specific quote.',
    category: 'windows',
  },
  {
    question: 'What types of impact doors do you install?',
    answer:
      'We install impact-rated entry doors, sliding glass doors, French doors, and garage doors. Every door we install meets Florida\u2019s hurricane building code requirements and provides enhanced security for your home.',
    category: 'doors',
  },
  {
    question: 'How long does a window or door installation take?',
    answer:
      'Most residential window and door installations are completed in 1\u20133 days depending on the number of openings. Larger whole-home projects may take longer. We\u2019ll provide a clear schedule before beginning work.',
    category: 'windows',
  },
  // Financing
  {
    question: 'What financing options do you offer?',
    answer:
      'We offer PACE financing and GreenSky financing to help make your project affordable. PACE financing requires no upfront cost and is repaid through your property tax bill. GreenSky provides flexible loan options with competitive rates and quick approval.',
    category: 'financing',
  },
  {
    question: 'What is PACE financing?',
    answer:
      'PACE (Property Assessed Clean Energy) financing allows you to fund energy-efficient and hurricane-protection upgrades with no money down. Payments are made through your annual property tax assessment, making it an accessible option for many homeowners.',
    category: 'financing',
  },
  {
    question: 'What is GreenSky financing?',
    answer:
      'GreenSky is a lending platform that offers home improvement loans with competitive interest rates and flexible repayment terms. Approval is quick, and you can finance roofing, window, and door projects with manageable monthly payments.',
    category: 'financing',
  },
  {
    question: 'Can I combine financing with insurance claims?',
    answer:
      'In some cases, financing can cover the portion of your project not covered by insurance. We\u2019ll work with you to understand your options and find the best path forward for your specific situation.',
    category: 'financing',
  },
  // Estimates & Process
  {
    question: 'How do I get a free estimate?',
    answer:
      'You can request a free estimate by calling us, filling out the form on our website, or visiting our contact page. We\u2019ll schedule a convenient time to visit your property, assess the project, and provide a detailed written proposal.',
    category: 'estimates',
  },
  {
    question: 'What happens after I submit the estimate form?',
    answer:
      'After you submit your request, a member of our team will reach out to confirm your details and schedule an on-site assessment. From there, we\u2019ll prepare a clear proposal covering scope, materials, timeline, and pricing.',
    category: 'estimates',
  },
  {
    question: 'Do you offer emergency roof repair?',
    answer:
      'We prioritize urgent roof repairs, especially after storms. If you have an active leak or storm damage, contact us immediately and we\u2019ll work to get a crew to your property as quickly as possible.',
    category: 'roofing',
  },
  // Service Areas
  {
    question: 'What areas do you serve?',
    answer:
      'NewCoast Roofing serves Broward County, Palm Beach County, and Port St. Lucie / St. Lucie County. This includes cities like Fort Lauderdale, West Palm Beach, Boca Raton, Coral Springs, and Port St. Lucie, among many others.',
    category: 'areas',
  },
  {
    question: 'Do you handle permitting?',
    answer:
      'Yes. We handle the permitting process for your project, ensuring everything meets local building code requirements in your county. Permits are a standard part of any roofing, window, or door installation in Florida.',
    category: 'estimates',
  },
  // Warranty
  {
    question: 'Do you offer warranties on your work?',
    answer:
      'Yes. We stand behind our workmanship and the materials we install. Specific warranty details vary by project type and materials selected. We\u2019ll review all warranty information with you during the proposal process.',
    category: 'estimates',
  },
]

export function getFaqsByCategory(category: string): FAQ[] {
  return faqs.filter((faq) => faq.category === category)
}

export function getFaqsForPage(
  categories: string[],
  limit?: number
): FAQ[] {
  const filtered = faqs.filter((faq) => categories.includes(faq.category))
  return limit ? filtered.slice(0, limit) : filtered
}
