export interface CourseItem {
  id: string
  title: string
  subtitle: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  format: 'Live Cohort' | 'Self-Paced + Community' | 'Weekend Workshop'
  enrolledCount: number
  price: string
  originalPrice: string
  tags: string[]
  syllabusHighlights: string[]
  isFeatured?: boolean
  nextCohortDate: string
}

export async function fetchCourses(): Promise<CourseItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 200))

  return [
    {
      id: 'ai-engineering-malayalam',
      title: 'Practical AI & Prompt Engineering in Malayalam',
      subtitle: 'Master Cursor, Claude, Antigravity, and OpenAI APIs to 10x your coding and product development speed.',
      level: 'Intermediate',
      duration: '4 Weeks (Live Cohort)',
      format: 'Live Cohort',
      enrolledCount: 420,
      price: '₹4,999',
      originalPrice: '₹8,999',
      tags: ['AI Coding', 'Cursor', 'LLM APIs', 'Agentic Workflows'],
      syllabusHighlights: [
        'Setting up Cursor AI, Copilot & Modern Agent Workflows',
        'System Prompting, Few-Shot Engineering & Context Windows',
        'Building Real Fullstack AI Apps with Next.js & Supabase',
        'Deploying Autonomous AI Agents with LangChain & LangGraph',
      ],
      isFeatured: true,
      nextCohortDate: 'Starts 1st of Next Month',
    },
    {
      id: 'modern-react-typescript',
      title: 'Modern React & TypeScript Mastery',
      subtitle: 'Senior-level React patterns, TanStack Query, Zustand, clean component design, and zero fluff.',
      level: 'Intermediate',
      duration: '6 Weeks',
      format: 'Live Cohort',
      enrolledCount: 380,
      price: '₹5,999',
      originalPrice: '₹9,999',
      tags: ['React 18+', 'TypeScript', 'TanStack Query', 'Architecture'],
      syllabusHighlights: [
        'Feature-First Scalable React Directory Architecture',
        'State Separation: Server State vs Local UI State',
        'Custom Hooks, Form Validation with Zod & React Hook Form',
        'Production Performance Optimization & Core Web Vitals',
      ],
      isFeatured: false,
      nextCohortDate: 'Registrations Open',
    },
    {
      id: 'ai-automation-business',
      title: 'AI Automation & No-Code Agents for Businesses',
      subtitle: 'Build automated lead magnets, WhatsApp AI bots, and customer support pipelines tailored for Kerala businesses.',
      level: 'Beginner',
      duration: '2 Weeks (Weekend Intensive)',
      format: 'Weekend Workshop',
      enrolledCount: 290,
      price: '₹2,999',
      originalPrice: '₹4,999',
      tags: ['n8n', 'Make.com', 'WhatsApp Bots', 'Business AI'],
      syllabusHighlights: [
        'n8n & Zapier webhook integration with OpenAI',
        'Automated Malayalam Voice & Text Bot for Customer Support',
        'AI CRM enrichment for local stores and agencies',
      ],
      isFeatured: false,
      nextCohortDate: 'Weekend Batch',
    },
  ]
}
