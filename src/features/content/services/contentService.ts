export interface ReelContentItem {
  id: string
  title: string
  category: 'AI Tools' | 'Coding Hacks' | 'Tech News' | 'Career'
  views: string
  likes: string
  duration: string
  thumbnailGradient: string
  description: string
  keyTakeaway: string
  link: string
}

export interface CuratedAiTool {
  id: string
  name: string
  tagline: string
  category: string
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Free / Open Source'
  kochuRating: string
  url: string
}

export async function fetchContentReels(): Promise<ReelContentItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 200))

  return [
    {
      id: 'reel-1',
      title: 'How I Use Cursor AI to Build Production Apps in 30 Mins (Malayalam)',
      category: 'AI Tools',
      views: '118.4K',
      likes: '9.2K',
      duration: '0:58',
      thumbnailGradient: 'from-lime-600 via-emerald-800 to-slate-900',
      description: 'Step-by-step walkthrough explaining Composer mode, indexing codebases, and prompting for clean TypeScript.',
      keyTakeaway: 'Avoid writing boilerplate; let LLMs generate types and unit tests while you architect logic.',
      link: 'https://instagram.com/kochu.ai',
    },
    {
      id: 'reel-2',
      title: 'Top 5 AI Tools Every Malayali Student & Developer Must Know in 2026',
      category: 'AI Tools',
      views: '84.6K',
      likes: '6.4K',
      duration: '0:54',
      thumbnailGradient: 'from-emerald-700 via-teal-900 to-slate-900',
      description: 'Curated list of free and high-value tools including Perplexity, v0.dev, Bolt, and DeepSeek for fast prototypes.',
      keyTakeaway: 'The gap between idea and deployed product has shrunk to a few minutes.',
      link: 'https://instagram.com/kochu.ai',
    },
    {
      id: 'reel-3',
      title: 'Why Most Developers Fail at Prompt Engineering (And How to Fix It)',
      category: 'Coding Hacks',
      views: '62.1K',
      likes: '4.8K',
      duration: '1:02',
      thumbnailGradient: 'from-green-700 via-lime-900 to-slate-900',
      description: 'The difference between talking to ChatGPT like a human vs engineering system instructions with schemas.',
      keyTakeaway: 'Deterministic JSON outputs and few-shot examples give you 99% reliable results.',
      link: 'https://instagram.com/kochu.ai',
    },
    {
      id: 'reel-4',
      title: 'Salary Growth for AI-Fluent Engineers in Kerala & GCC Remote Jobs',
      category: 'Career',
      views: '77.3K',
      likes: '5.9K',
      duration: '0:59',
      thumbnailGradient: 'from-teal-800 via-emerald-950 to-slate-900',
      description: 'Breaking down remote salary tiers and why knowing how to orchestrate AI models is replacing vanilla syntax skills.',
      keyTakeaway: 'Learn full-stack deployment and agentic orchestration to command premium contracts.',
      link: 'https://instagram.com/kochu.ai',
    },
  ]
}

export async function fetchCuratedTools(): Promise<CuratedAiTool[]> {
  await new Promise((resolve) => setTimeout(resolve, 200))

  return [
    {
      id: 't-1',
      name: 'Cursor AI',
      tagline: 'The AI-first code editor built on VS Code with powerful agent mode.',
      category: 'Code Generation',
      pricing: 'Freemium',
      kochuRating: '5.0 / 5',
      url: 'https://cursor.com',
    },
    {
      id: 't-2',
      name: 'Claude 3.7 Sonnet',
      tagline: 'Leading reasoning model for complex architectural problems and coding.',
      category: 'LLM Reasoning',
      pricing: 'Freemium',
      kochuRating: '4.9 / 5',
      url: 'https://anthropic.com',
    },
    {
      id: 't-3',
      name: 'v0.dev by Vercel',
      tagline: 'Generative UI for React and Tailwind components with instant previews.',
      category: 'UI Prototyping',
      pricing: 'Freemium',
      kochuRating: '4.8 / 5',
      url: 'https://v0.dev',
    },
    {
      id: 't-4',
      name: 'n8n Workflow Automation',
      tagline: 'Self-hostable node-based automation connecting AI agents with databases.',
      category: 'Agent Orchestration',
      pricing: 'Free / Open Source',
      kochuRating: '4.9 / 5',
      url: 'https://n8n.io',
    },
  ]
}
