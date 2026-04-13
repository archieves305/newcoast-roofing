export const siteConfig = {
  name: 'NewCoast Roofing',
  tagline: 'Roofing, Windows & Doors for South Florida Homes',
  description:
    'NewCoast Roofing provides premium roofing, impact windows, and exterior doors across Broward County, Palm Beach County, and Port St. Lucie. Free estimates and financing available.',
  phone: '(561) 910-0142',
  phoneRaw: '5619100142',
  email: 'info@newcoastroofing.com',
  address: {
    street: '2500 N. Federal Highway, Ste 102',
    city: 'Fort Lauderdale',
    state: 'FL',
    zip: '33305',
  },
  url: 'https://www.newcoastroofing.com',
  logoUrl:
    'https://static.wixstatic.com/media/326d8e_3137d85fbca14e2998959593241f251a~mv2.png/v1/fill/w_244,h_184,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/new%20coast%20logo%20500x500%20transparent.png',
  googleBusinessUrl: 'https://share.google/PHS7qle0Y47BmOZnU',
  googleReviewsUrl: 'https://share.google/PHS7qle0Y47BmOZnU',
  googleMapsEmbed: '', // PLACEHOLDER — add Google Maps embed URL
  licenses: {
    roofing: 'CCC1335024',
    generalContractor: 'CGC1528279',
  },
  insuranceInfo: 'Fully Licensed & Insured',
  veteranOwned: true,
  yearEstablished: '2023',
  socialMedia: {
    facebook: '',
    instagram: 'https://www.instagram.com/knuconstruction',
    youtube: '',
  },
  financing: {
    pace: {
      name: 'PACE Financing',
      description:
        'Property Assessed Clean Energy financing with no upfront cost and payments through your property tax bill.',
      applyUrl: '', // PLACEHOLDER — add PACE application link
    },
    greensky: {
      name: 'GreenSky Financing',
      description:
        'Flexible loan options with competitive rates and quick approval for roofing, windows, and door projects.',
      applyUrl: '', // PLACEHOLDER — add GreenSky application link
    },
  },
  serviceAreas: [
    'Broward County',
    'Palm Beach County',
    'Port St. Lucie',
    'St. Lucie County',
  ],
  counties: ['Broward County', 'Palm Beach County', 'St. Lucie County'],
}

export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Roofing', href: '/roofing' },
      { label: 'Roof Repair', href: '/roof-repair' },
      { label: 'Roof Replacement', href: '/roof-replacement' },
      { label: 'Windows', href: '/windows' },
      { label: 'Doors', href: '/doors' },
    ],
  },
  { label: 'Financing', href: '/financing' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export const trustBadges = [
  { label: 'Licensed & Insured', icon: 'shield' },
  { label: 'Free Estimates', icon: 'clipboard' },
  { label: 'Financing Available', icon: 'dollar' },
  { label: 'Veteran Owned', icon: 'flag' },
  { label: 'Est. 2023', icon: 'map' },
]
