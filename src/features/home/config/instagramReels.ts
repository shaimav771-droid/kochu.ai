export interface InstagramReelItem {
  id: string
  title: string
  url: string
  thumbnailUrl: string
  author?: string
  date?: string
}

/**
 * Extract Instagram Reel or Post shortcode from various URL formats or raw ID.
 */
export function extractInstagramReelId(url: string): string | null {
  if (!url) return null
  const trimmed = url.trim()
  const regex = /(?:instagram\.com\/(?:reel|p|tv)\/)([\w-]{5,})/
  const match = trimmed.match(regex)
  if (match) return match[1]
  if (/^[\w-]{5,}$/.test(trimmed)) {
    return trimmed
  }
  return null
}

/**
 * Returns the embed URL for iframe playback without requiring an API key.
 */
export function getInstagramEmbedUrl(url: string): string {
  const reelId = extractInstagramReelId(url)
  if (!reelId) return ''
  return `https://www.instagram.com/reel/${reelId}/embed/`
}

/**
 * Removes duplicate reels based on their Instagram shortcode ID.
 */
export function removeDuplicateReels(reels: InstagramReelItem[]): InstagramReelItem[] {
  const seenIds = new Set<string>()
  return reels.filter((reel) => {
    const reelId = extractInstagramReelId(reel.url) || extractInstagramReelId(reel.id) || reel.id
    if (!reelId || seenIds.has(reelId)) {
      return false
    }
    seenIds.add(reelId)
    return true
  })
}

/**
 * =======================================================================
 * INSTAGRAM REELS CONFIGURATION
 * Add your Instagram reel links, titles, and thumbnails below.
 * =======================================================================
 */
export const INSTAGRAM_REELS: InstagramReelItem[] = removeDuplicateReels([
  {
    id: 'DeV7bkdy8r6',
    title: 'Building AI Solutions for Business',
    url: 'https://www.instagram.com/reel/DeV7bkdy8r6/',
    thumbnailUrl: '/images/reels/reel-DeV7bkdy8r6.jpg',
    author: '@kochu.ai',
    date: 'July 10, 2026',
  },
  {
    id: 'DeMgc3iSBSo',
    title: 'Your finance feasibility before starting your business',
    url: 'https://www.instagram.com/reel/DeMgc3iSBSo/',
    thumbnailUrl: '/images/reels/reel-DeMgc3iSBSo.jpg',
    author: '@kochu.ai',
    date: 'May 31, 2025',
  },
  {
    id: 'DeKhhdTSe3V',
    title: '4 automations every business can set up',
    url: 'https://www.instagram.com/reel/DeKhhdTSe3V/',
    thumbnailUrl: '/images/reels/reel-DeKhhdTSe3V.jpg',
    author: '@kochu.ai',
    date: 'April 18, 2025',
  },
  {
    id: 'DeHfT7LSFXZ',
    title: 'Create a live dashboard in Google Sheets with no prompt',
    url: 'https://www.instagram.com/reel/DeHfT7LSFXZ/',
    thumbnailUrl: '/images/reels/reel-DeHfT7LSFXZ.jpg',
    author: '@kochu.ai',
    date: 'March 14, 2025',
  },
  {
    id: 'DeEh8mLtN_R',
    title: 'Claude full ആയി use ചെയ്യുന്നുണ്ടോ? | Live online workshop',
    url: 'https://www.instagram.com/reel/DeEh8mLtN_R/',
    thumbnailUrl: '/images/reels/reel-DeEh8mLtN_R.jpg',
    author: '@kochu.ai',
    date: 'February 22, 2025',
  },
  {
    id: 'DeCDMySS2x7',
    title: 'Which subscription should you buy: ChatGPT or Claude?',
    url: 'https://www.instagram.com/reel/DeCDMySS2x7/',
    thumbnailUrl: '/images/reels/reel-DeCDMySS2x7.jpg',
    author: '@kochu.ai',
    date: 'January 30, 2025',
  },
  {
    id: 'Dd1OAyGypi9',
    title: 'Building High-Converting Websites with AI',
    url: 'https://www.instagram.com/reel/Dd1OAyGypi9/',
    thumbnailUrl: '/images/reels/reel-Dd1OAyGypi9.jpg',
    author: '@kochu.ai',
    date: 'December 18, 2024',
  },
  {
    id: 'DdwL4g2S7Fj',
    title: 'Claude can do the motion graphics for your video and create the final version',
    url: 'https://www.instagram.com/reel/DdwL4g2S7Fj/',
    thumbnailUrl: '/images/reels/reel-DdwL4g2S7Fj.jpg',
    author: '@kochu.ai',
    date: 'November 25, 2024',
  },
  {
    id: 'DdtvhYrSJDJ',
    title: 'Create websites with ChatGPT easily',
    url: 'https://www.instagram.com/reel/DdtvhYrSJDJ/',
    thumbnailUrl: '/images/reels/reel-DdtvhYrSJDJ.jpg',
    author: '@kochu.ai',
    date: 'October 14, 2024',
  },
  {
    id: 'Ddq9an0S59b',
    title: 'Make Dashboards from Excel sheets',
    url: 'https://www.instagram.com/reel/Ddq9an0S59b/',
    thumbnailUrl: '/images/reels/reel-Ddq9an0S59b.jpg',
    author: '@kochu.ai',
    date: 'September 20, 2024',
  },
])
