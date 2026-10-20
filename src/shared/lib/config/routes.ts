export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  WORK_WITH_ME: '/work-with-me',
  PROGRAMMES: '/programmes',
  BUSINESS_IMPACT: '/business-impact',
  KOCHU_AI: '/kochu-ai',
  RESOURCES: '/resources',
  // Backward compatibility alias routes
  MEDIA_KIT: '/media-kit',
  EDUCATION: '/education',
  CONTENT: '/content',
  PARTNERSHIPS: '/partnerships',
} as const

export type AppRoute = typeof ROUTES[keyof typeof ROUTES]


