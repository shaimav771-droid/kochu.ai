export const SITE_CONFIG = {
  name: 'Suhail Abdulatif',
  roles: [
    'Co-founder & COO of Ailutions',
    'Creator of Kochu.ai',
  ] as const,
  primaryTitle: 'Entrepreneur & AI Transformation Consultant',
  headline: "I’ll help you use AI everywhere.",
  supportingSentence:
    "Whether you’re running a business, building a career, or exploring what’s possible, I help you turn AI into something useful.",
  credibilitySentence:
    "Training entrepreneurs, senior executives, and enterprise teams to turn AI strategy into everyday operational capability.",
  
  // Commercial & Booking Destinations (Centralized & Configurable)
  consultationCalUrl: '' as string, 
  premiumWhatsappUrl: '' as string,
  ailutionsUrl: 'https://ailutions.com' as string,
  contactEmail: 'contact@suhailabdulatif.com',
  
  // Top-level aliases for backward compatibility with existing components
  instagram: 'https://instagram.com/kochu.ai',
  instagramHandle: '@kochu.ai',
  youtube: 'https://youtube.com/@kochuai',
  linkedin: 'https://linkedin.com/in/kochu-ai',
  metrics: {
    instagramFollowers: '82.5K',
    youtubeSubscribers: '4.5K',
    linkedinConnections: '10K+',
    typicalReelViews: '20K - 80K',
    typicalStoryViews: '1,500 - 3,500',
    coreNiche: 'AI Tools & Tech Education',
    engagementRate: '6.8%',
    geographicDistribution: {
      kerala: '74%',
      uaeGcc: '16%',
      restOfIndia: '10%',
    },
    topDemographics: '18-34 Tech Enthusiasts, Developers, Creators & Entrepreneurs',
  },

  // Verified Credibility Figures (Direct from Owner Brief)
  stats: [
    { label: 'Entrepreneurs Trained', value: '300+' },
    { label: 'Students & Educators Trained', value: '5,000+' },
    { label: 'Sessions Delivered', value: '60+' },
    { label: 'Working with AI Since', value: '2022' },
  ],

  // Client Engagements (Owner-Verified Case Information)
  clients: [
    {
      name: 'NESTO',
      category: 'Hypermarket & Retail Group',
      summary:
        'Multinational supermarket and hypermarket group operating across multiple countries. Suhail delivered practical AI training to 15–18 senior and C-level executives, focused on their everyday leadership responsibilities and business decision-making.',
      tag: 'Executive Advisory',
    },
    {
      name: 'MAPS AND VOGS',
      category: 'Boutique Travel Agency',
      summary:
        'Premium travel agency creating customised itineraries and PDF proposals. Employees spent 3–4 hours researching options and preparing client-specific presentations. Suhail trained team members across levels and established reusable prompts and workflows. Proposal deck preparation time reduced from approximately 3–4 hours to around five minutes for the specific deck-preparation workflow.',
      tag: 'Workflow Automation',
      featured: true,
      resultHighlight: 'Deck preparation reduced from ~3–4 hours to ~5 minutes',
    },
    {
      name: 'SABCO',
      category: 'Customised Packaging & Containers',
      summary:
        'Supplier of customised packaging, bottles, and containers. Suhail delivered AI awareness and practical operational training for senior and middle-level employees, helping them identify and apply relevant AI tools in their daily work.',
      tag: 'Operational Training',
    },
    {
      name: 'MIF CAPITAL',
      category: 'Capital Funding & Trading Group',
      summary:
        'UAE-based business operating across capital funding, imports, exports, and international trade. Suhail trained employees and senior executives to apply AI to everyday professional responsibilities.',
      tag: 'Enterprise Capability',
    },
  ],

  // Kochu.ai Sub-Brand Configuration
  kochu: {
    name: 'Kochu.ai',
    tagline: 'Practical AI & Technology Education in Malayalam',
    instagram: 'https://instagram.com/kochu.ai',
    instagramHandle: '@kochu.ai',
    youtube: 'https://youtube.com/@kochuai',
    linkedin: 'https://linkedin.com/in/kochu-ai',
    followers: '82.5K',
    subscribers: '4.5K',
    connections: '10K+',
  },
} as const


