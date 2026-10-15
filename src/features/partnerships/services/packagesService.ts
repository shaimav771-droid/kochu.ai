export interface CommercialPackage {
  id: string
  name: string
  tagline: string
  price: string
  rawPrice: number
  deliverables: string[]
  idealFor: string
  turnaroundDays: number
  isPopular?: boolean
  badge?: string
}

export async function fetchCommercialPackages(): Promise<CommercialPackage[]> {
  await new Promise((resolve) => setTimeout(resolve, 200))

  return [
    {
      id: 'single-reel',
      name: 'Dedicated Spotlight Reel',
      tagline: 'Full 60-90s dedicated Malayalam breakdown focused 100% on your tool/product.',
      price: '₹38,000',
      rawPrice: 38000,
      deliverables: [
        '1x Dedicated Instagram Reel (Malayalam audio + English captions)',
        'Pinned comment with your tracking link / promo code',
        'Story resharing upon release with direct link sticker',
        'Full analytics report 7 days post-campaign',
        'Organic distribution to 82.5K+ active Malayali followers',
      ],
      idealFor: 'SaaS products, Developer tools, and Edtech apps wanting focused brand awareness.',
      turnaroundDays: 4,
      isPopular: false,
    },
    {
      id: 'growth-ecosystem',
      name: 'Complete Launch Ecosystem',
      tagline: 'High-conversion multi-touchpoint campaign to dominate the Kerala tech feed.',
      price: '₹85,000',
      rawPrice: 85000,
      deliverables: [
        '2x Dedicated Reels (Educational Hook + Deep Dive Tutorial)',
        '4x Instagram Stories with Link Stickers & Engagement Polls',
        'Link in Bio featured prominently for 21 days',
        'Collaborative post co-authoring on Instagram',
        'Whitelisting / Ad-usage rights for 30 days included',
        'Priority script review and fast-track production',
      ],
      idealFor: 'Product launches, flagship courses, or apps seeking aggressive user acquisition.',
      turnaroundDays: 7,
      isPopular: true,
      badge: 'Most Popular',
    },
    {
      id: 'quarterly-retainer',
      name: 'Quarterly Brand Ambassador',
      tagline: 'Long-term trusted voice for your brand in the Malayalam tech ecosystem.',
      price: '₹1,95,000',
      rawPrice: 195000,
      deliverables: [
        '6x Reels distributed over 3 months (2 per month)',
        '12x High-converting Stories with direct attribution',
        'Permanent Link in Bio resource bundle inclusion',
        'Dedicated workshop / live stream demonstration',
        'Exclusive category sponsorship (no competing tools showcased)',
        'Full digital ad usage rights across Meta Ads manager',
      ],
      idealFor: 'Established brands building deep trust and repeated mindshare in South India & GCC.',
      turnaroundDays: 14,
      isPopular: false,
      badge: 'Enterprise Tier',
    },
  ]
}
