export interface Service {
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  icon: string
  features: string[]
  cta: string
}

export const services: Service[] = [
  {
    slug: 'roofing',
    name: 'Roofing Services',
    shortName: 'Roofing',
    tagline: 'Complete Roofing Solutions for South Florida',
    description:
      'From routine repairs to full replacements, NewCoast Roofing delivers expert roofing services built for the demands of Florida weather. We work with shingle, tile, metal, and flat roofing systems for both residential and commercial properties.',
    icon: 'roof',
    features: [
      'Residential & commercial roofing',
      'Shingle, tile, metal & flat roof systems',
      'Storm damage assessment & repair',
      'Hurricane-rated roofing solutions',
      'Free inspections & estimates',
      'Financing available',
    ],
    cta: 'Request a Free Roofing Estimate',
  },
  {
    slug: 'roof-repair',
    name: 'Roof Repair',
    shortName: 'Roof Repair',
    tagline: 'Fast, Reliable Roof Repairs Across South Florida',
    description:
      'Leaks, storm damage, and everyday wear take a toll on your roof. NewCoast Roofing responds quickly to protect your home with professional roof repair services throughout Broward County, Palm Beach County, and Port St. Lucie.',
    icon: 'wrench',
    features: [
      'Emergency leak repair',
      'Storm & wind damage repair',
      'Flashing & sealant repair',
      'Tile & shingle replacement',
      'Flat roof patching & coating',
      'Same-week scheduling available',
    ],
    cta: 'Schedule Your Roof Repair',
  },
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    shortName: 'Roof Replacement',
    tagline: 'Protect Your Home with a New Roof Built for Florida',
    description:
      'When repairs are no longer enough, a full roof replacement gives your home lasting protection and improved curb appeal. NewCoast Roofing installs durable, code-compliant roofing systems designed for South Florida conditions.',
    icon: 'home',
    features: [
      'Full tear-off & replacement',
      'Code-compliant installation',
      'Hurricane-rated systems',
      'Multiple material options',
      'Manufacturer warranty support',
      'PACE & GreenSky financing available',
    ],
    cta: 'Get a Free Replacement Estimate',
  },
  {
    slug: 'windows',
    name: 'Impact Windows',
    shortName: 'Windows',
    tagline: 'Hurricane-Rated Impact Windows for South Florida Homes',
    description:
      'Upgrade your home with impact windows that protect against hurricanes, reduce energy costs, and improve curb appeal. NewCoast installs premium impact window systems throughout Broward, Palm Beach, and St. Lucie counties.',
    icon: 'window',
    features: [
      'Hurricane impact-rated windows',
      'Energy-efficient glass options',
      'Noise reduction',
      'Increased home value & curb appeal',
      'Professional installation',
      'Financing available',
    ],
    cta: 'Request a Free Window Estimate',
  },
  {
    slug: 'doors',
    name: 'Impact Doors & Entry Doors',
    shortName: 'Doors',
    tagline: 'Premium Impact Doors & Entry Doors for Florida Homes',
    description:
      'Complete your home\u2019s exterior protection with impact-rated doors that combine security, style, and storm resistance. From front entry doors to sliding glass doors, NewCoast delivers expert installation.',
    icon: 'door',
    features: [
      'Impact-rated entry doors',
      'Sliding glass door systems',
      'French door installation',
      'Hurricane-resistant construction',
      'Enhanced security features',
      'Financing available',
    ],
    cta: 'Request a Free Door Estimate',
  },
]

export const roofTypes = [
  {
    name: 'Shingle Roofing',
    description:
      'The most popular residential roofing option in South Florida. Affordable, versatile, and available in a wide range of styles.',
  },
  {
    name: 'Tile Roofing',
    description:
      'Durable and distinctive, tile roofs are a classic choice for Florida homes. Excellent wind resistance and longevity.',
  },
  {
    name: 'Metal Roofing',
    description:
      'Lightweight, energy-efficient, and built to last. Metal roofs offer superior wind resistance and minimal maintenance.',
  },
  {
    name: 'Flat Roofing',
    description:
      'Common for commercial properties and modern residential designs. Specialized waterproofing and drainage systems.',
  },
]

export const replacementSigns = [
  'Your roof is 15-20+ years old',
  'Missing, cracked, or curling shingles or tiles',
  'Visible leaks or water stains on ceilings',
  'Frequent repair needs after storms',
  'Rising energy bills from poor insulation',
  'Sagging or structural concerns',
  'Granule loss in gutters (shingle roofs)',
  'Insurance company requires replacement',
]

export const windowTypes = [
  {
    name: 'Single-Hung Impact Windows',
    description: 'Classic design with bottom-opening sash. Excellent for bedrooms and living areas.',
  },
  {
    name: 'Horizontal Sliding Impact Windows',
    description: 'Easy-glide operation ideal for wide openings and contemporary Florida homes.',
  },
  {
    name: 'Casement Impact Windows',
    description: 'Crank-out design providing maximum ventilation and unobstructed views.',
  },
  {
    name: 'Picture Impact Windows',
    description: 'Fixed windows delivering expansive views with full hurricane protection.',
  },
]

export const doorTypes = [
  {
    name: 'Impact Entry Doors',
    description:
      'Make a statement at your front entrance with a door that combines style and hurricane protection.',
  },
  {
    name: 'Impact Sliding Glass Doors',
    description:
      'Connect your indoor and outdoor living spaces with smooth-gliding, hurricane-rated sliding doors.',
  },
  {
    name: 'Impact French Doors',
    description:
      'Elegant double-door design offering classic aesthetics with modern storm resistance.',
  },
  {
    name: 'Garage Doors',
    description:
      'Wind-rated garage doors that protect one of the most vulnerable openings in your home.',
  },
]

export const processSteps = [
  {
    step: 1,
    title: 'Request Your Free Estimate',
    description:
      'Call us or fill out our online form. We\u2019ll schedule a convenient time to assess your project.',
  },
  {
    step: 2,
    title: 'On-Site Assessment',
    description:
      'Our team visits your property to evaluate the scope of work and discuss your goals, timeline, and budget.',
  },
  {
    step: 3,
    title: 'Detailed Proposal & Financing',
    description:
      'You\u2019ll receive a clear, written proposal. We\u2019ll walk you through financing options if needed.',
  },
  {
    step: 4,
    title: 'Professional Installation',
    description:
      'Our crew handles the project from start to finish, keeping you informed every step of the way.',
  },
  {
    step: 5,
    title: 'Final Walkthrough',
    description:
      'We inspect the completed work with you, ensure everything meets our standards, and answer any questions.',
  },
]
