export interface YouTubeVideoItem {
  id: string
  title: string
  url: string // Full watch URL (e.g. 'https://www.youtube.com/watch?v=...') or short URL ('https://youtu.be/...')
}

/**
 * Extract an 11-character YouTube video ID from various YouTube URL formats or raw ID.
 */
export function extractYouTubeId(url: string): string | null {
  if (!url) return null
  const trimmed = url.trim()
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  const match = trimmed.match(regex)
  if (match) return match[1]
  if (/^[\w-]{11}$/.test(trimmed)) {
    return trimmed
  }
  return null
}

/**
 * Returns the high-quality YouTube thumbnail URL without requiring an API key.
 */
export function getYouTubeThumbnailUrl(url: string): string {
  const videoId = extractYouTubeId(url)
  if (!videoId) return ''
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

/**
 * Returns the embed URL for iframe playback without requiring an API key.
 */
export function getYouTubeEmbedUrl(url: string): string {
  const videoId = extractYouTubeId(url)
  if (!videoId) return ''
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
}

/**
 * Removes duplicate videos based on their YouTube video ID.
 */
export function removeDuplicateVideos(videos: YouTubeVideoItem[]): YouTubeVideoItem[] {
  const seenIds = new Set<string>()
  return videos.filter((video) => {
    const videoId = extractYouTubeId(video.url) || extractYouTubeId(video.id) || video.id
    if (!videoId || seenIds.has(videoId)) {
      return false
    }
    seenIds.add(videoId)
    return true
  })
}

/**
 * =======================================================================
 * YOUTUBE VIDEOS CONFIGURATION
 * Add your YouTube video links and titles below.
 * =======================================================================
 */
export const YOUTUBE_VIDEOS: YouTubeVideoItem[] = removeDuplicateVideos([
  {
    id: '6SHw8_RScog',
    title: 'IMAGEൽ നിന്ന് Ai വീഡിയോ എങ്ങനെ ഉണ്ടാക്കാം',
    url: 'https://youtu.be/6SHw8_RScog',
  },
  {
    id: 'c3ZjThN9dZQ',
    title: 'ChatGPT ഫീച്ചറുകളും ടൂളുകളും | ChatGPT Features & Tools Explained | മലയാളം',
    url: 'https://youtu.be/c3ZjThN9dZQ',
  },
  {
    id: 'YSZioQKrHJE',
    title: 'Product Photography & Poster Creation With AI | പോസ്റ്റർ ഉണ്ടാക്കാം!',
    url: 'https://youtu.be/YSZioQKrHJE',
  },
])

