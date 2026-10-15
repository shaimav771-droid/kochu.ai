export interface CreatorMetrics {
  instagramFollowers: string
  followersCount: number
  typicalReelViews: string
  typicalStoryViews: string
  engagementRate: string
  coreNiche: string
  primaryRegion: string
  language: string
  lastUpdated: string
  demographics: {
    ageDistribution: { range: string; percentage: number }[]
    geoDistribution: { state: string; percentage: number }[]
    interests: string[]
  }
}

export async function fetchCreatorMetrics(): Promise<CreatorMetrics> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 200))

  return {
    instagramFollowers: '82.5K',
    followersCount: 82500,
    typicalReelViews: '20K - 120K',
    typicalStoryViews: '1,500 - 3,500',
    engagementRate: '6.8%',
    coreNiche: 'AI & Developer Technology',
    primaryRegion: 'Kerala & GCC Malayalam Diaspora',
    language: 'Malayalam & English (Manglish Tech)',
    lastUpdated: 'OCT 2026',
    demographics: {
      ageDistribution: [
        { range: '18 - 24', percentage: 46 },
        { range: '25 - 34', percentage: 43 },
        { range: '35 - 44', percentage: 8 },
        { range: '45+', percentage: 3 },
      ],
      geoDistribution: [
        { state: 'Kerala (Kochi, Calicut, Trivandrum)', percentage: 74 },
        { state: 'UAE & GCC Malayalam Expat Tech', percentage: 16 },
        { state: 'Bangalore & Chennai (Malayali Devs)', percentage: 7 },
        { state: 'Global / Other', percentage: 3 },
      ],
      interests: [
        'Artificial Intelligence & LLMs',
        'Cursor, Claude & Copilot Workflows',
        'Fullstack Web & Mobile Development',
        'Productivity Tools & Tech Gadgets',
        'Software Engineering Career Upskilling',
      ],
    },
  }
}
