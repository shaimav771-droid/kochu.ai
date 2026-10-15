export const ROUTES = {
  HOME: '/',
  RESOURCES: '/resources',
  MEDIA_KIT: '/media-kit',
  EDUCATION: '/education',
  CONTENT: '/content',
  PARTNERSHIPS: '/partnerships',
} as const

export type AppRoute = typeof ROUTES[keyof typeof ROUTES]

