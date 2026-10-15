export type ResourceBadge = 'Prompt' | 'Doc / Guide' | 'Workflow' | 'Template' | 'Automation'

export type ResourceCategory = 'All' | 'Prompts' | 'Documents' | 'Automation' | 'Templates'

export interface ResourceLinkItem {
  title: string
  url: string
  description?: string
  badge?: string
}

export interface ResourceGuideStep {
  stepNumber: number
  title: string
  content: string
  codeSnippet?: string
  tip?: string
}

export interface ResourcePrompt {
  title: string
  description?: string
  text: string
  systemPrompt?: string
  modelRecommendation?: string
}

export interface ResourceGuide {
  summary: string
  steps: ResourceGuideStep[]
  downloadUrl?: string
  downloadLabel?: string
  fileFormat?: string
}

export interface ResourceItem {
  id: string // slug (e.g., 'lead-gen-bot')
  title: string
  description: string
  thumbnailUrl: string
  videoUrl?: string
  videoType?: 'reel' | 'youtube'
  category: 'Prompts' | 'Documents' | 'Automation' | 'Templates'
  badges: ResourceBadge[]
  prompt?: ResourcePrompt
  guide?: ResourceGuide
  links?: ResourceLinkItem[]
  featured?: boolean
  views?: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
}
