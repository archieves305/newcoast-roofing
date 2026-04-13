export interface ServiceArea {
  slug: string
  name: string
  county: string
  headline: string
  description: string
  cities: string[]
  localCopy: string
  metaTitle: string
  metaDescription: string
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'broward-county',
    name: 'Broward County',
    county: 'Broward County',
    headline: 'Roofing, Windows & Doors in Broward County',
    description:
      'NewCoast Roofing serves homeowners and businesses throughout Broward County with expert roofing, impact window, and exterior door services. From Fort Lauderdale to Coral Springs, we deliver premium exterior protection built for South Florida weather.',
    cities: [
      'Fort Lauderdale',
      'Hollywood',
      'Pembroke Pines',
      'Coral Springs',
      'Miramar',
      'Davie',
      'Plantation',
      'Sunrise',
      'Pompano Beach',
      'Deerfield Beach',
      'Weston',
      'Coconut Creek',
      'Tamarac',
      'Margate',
      'Lauderhill',
    ],
    localCopy:
      'Broward County homeowners face unique challenges from hurricane season, heavy rain, and intense sun exposure. Whether you need a full roof replacement in Fort Lauderdale, impact windows in Coral Springs, or a new front door in Weston, NewCoast Roofing brings the expertise and local knowledge your project requires. We understand Broward\u2019s building codes and permitting requirements, and we handle the process so you don\u2019t have to.',
    metaTitle:
      'Roofing, Impact Windows & Doors in Broward County | NewCoast Roofing',
    metaDescription:
      'NewCoast Roofing provides expert roofing, impact windows, and door installation in Broward County FL. Serving Fort Lauderdale, Coral Springs, Weston & more. Free estimates.',
  },
  {
    slug: 'palm-beach-county',
    name: 'Palm Beach County',
    county: 'Palm Beach County',
    headline: 'Roofing, Windows & Doors in Palm Beach County',
    description:
      'NewCoast Roofing delivers expert roofing, impact windows, and exterior door services to homeowners and businesses throughout Palm Beach County. From West Palm Beach to Boca Raton, we provide exterior upgrades that protect and elevate your property.',
    cities: [
      'West Palm Beach',
      'Boca Raton',
      'Boynton Beach',
      'Delray Beach',
      'Lake Worth',
      'Jupiter',
      'Palm Beach Gardens',
      'Wellington',
      'Royal Palm Beach',
      'Greenacres',
      'Riviera Beach',
      'Lantana',
      'Palm Springs',
    ],
    localCopy:
      'Palm Beach County properties demand roofing and exterior solutions that stand up to hurricane-force winds, UV exposure, and coastal conditions. Whether you\u2019re upgrading your roof in West Palm Beach, installing impact windows in Boca Raton, or adding impact doors in Delray Beach, NewCoast Roofing provides the quality materials and skilled installation your home deserves. We\u2019re familiar with Palm Beach County\u2019s permitting landscape and ensure every project meets local code requirements.',
    metaTitle:
      'Roofing, Impact Windows & Doors in Palm Beach County | NewCoast Roofing',
    metaDescription:
      'NewCoast Roofing serves Palm Beach County with premium roofing, impact windows, and door services. Serving West Palm Beach, Boca Raton, Delray Beach & more. Free estimates.',
  },
  {
    slug: 'port-st-lucie',
    name: 'Port St. Lucie & St. Lucie County',
    county: 'St. Lucie County',
    headline: 'Roofing, Windows & Doors in Port St. Lucie',
    description:
      'NewCoast Roofing brings premium roofing, impact window, and exterior door services to Port St. Lucie and communities throughout St. Lucie County. We help Treasure Coast homeowners protect and upgrade their properties with solutions built for Florida conditions.',
    cities: [
      'Port St. Lucie',
      'Fort Pierce',
      'Tradition',
      'St. Lucie West',
      'Jensen Beach',
      'Stuart',
      'Hutchinson Island',
    ],
    localCopy:
      'Port St. Lucie and St. Lucie County sit along Florida\u2019s Treasure Coast, where homeowners need roofing and exterior products that perform through hurricane season and year-round sun. NewCoast Roofing provides complete exterior protection services, from roof replacement and repair to impact windows and doors. We understand the building requirements in St. Lucie County and deliver projects that meet code, protect your investment, and look great.',
    metaTitle:
      'Roofing, Impact Windows & Doors in Port St. Lucie | NewCoast Roofing',
    metaDescription:
      'NewCoast Roofing provides roofing, impact windows, and door installation in Port St. Lucie and St. Lucie County FL. Free estimates and financing available.',
  },
]
