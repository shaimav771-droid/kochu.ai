import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Play, X, Sparkles } from 'lucide-react'
import { YoutubeIcon } from '@/shared/ui/Icons/SocialIcons'
import { cn } from '@/shared/lib/utils/cn'
import {
  YOUTUBE_VIDEOS,
  YouTubeVideoItem,
  getYouTubeThumbnailUrl,
  getYouTubeEmbedUrl,
  removeDuplicateVideos,
} from '../config/youtubeVideos'

const YOUTUBE_TO_RESOURCE_MAP: Record<string, string> = {
  '6SHw8_RScog': 'ai-video-from-image',
  c3ZjThN9dZQ: 'chatgpt-website-builder',
  YSZioQKrHJE: 'product-poster-ai',
}

interface YouTubeVideoCarouselProps {
  className?: string
}

export function YouTubeVideoCarousel({ className }: YouTubeVideoCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeVideo, setActiveVideo] = useState<YouTubeVideoItem | null>(null)
  const [touchedVideoId, setTouchedVideoId] = useState<string | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const clickTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        window.clearTimeout(clickTimeoutRef.current)
      }
    }
  }, [])

  const handleCardClick = (video: YouTubeVideoItem) => {
    setTouchedVideoId(video.id)
    clickTimeoutRef.current = window.setTimeout(() => {
      setActiveVideo(video)
    }, 160)
  }

  const videos = removeDuplicateVideos(YOUTUBE_VIDEOS)

  const checkScroll = () => {
    if (!scrollContainerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (!container) return

    container.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)

    return () => {
      container.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [videos])

  // Close video modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeVideo) {
        setActiveVideo(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeVideo])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    const scrollAmount = Math.max(300, scrollContainerRef.current.clientWidth * 0.75)
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className={`relative w-full ${className || ''}`}>
      {/* HEADER CONTROLS (ARROWS) */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7BC943]/15 text-[#2c5a13] text-xs font-semibold uppercase tracking-wider font-sans border border-[#7BC943]/30">
            <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
            YouTube Channel
          </span>
        </div>

        {/* Navigation arrows (shown when scrollable or with multiple videos) */}
        {videos.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-full bg-white border border-[#e2ece0] text-[#141f10] hover:bg-[#7BC943] hover:text-white hover:border-[#7BC943] disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#141f10] disabled:hover:border-[#e2ece0] transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-full bg-white border border-[#e2ece0] text-[#141f10] hover:bg-[#7BC943] hover:text-white hover:border-[#7BC943] disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#141f10] disabled:hover:border-[#e2ece0] transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* HORIZONTAL SCROLLABLE ROW */}
      {videos.length > 0 ? (
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-3 px-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((video) => {
            const thumbnail = getYouTubeThumbnailUrl(video.url)
            const isTouched = touchedVideoId === video.id

            return (
              <button
                key={video.id}
                type="button"
                onTouchStart={() => setTouchedVideoId(video.id)}
                onClick={() => handleCardClick(video)}
                className={cn(
                  'group relative shrink-0 w-[260px] sm:w-[290px] lg:w-[320px] rounded-2xl sm:rounded-[24px] p-3.5 sm:p-4 text-left transition-all duration-300 ease-in-out snap-start cursor-pointer flex flex-col justify-between',
                  isTouched
                    ? 'bg-[#bdf78b] border-[#bdf78b] -translate-y-1 shadow-[0_16px_36px_-10px_rgba(189,247,139,0.45)]'
                    : 'bg-[#fbf9f4] hover:bg-[#bdf78b] active:bg-[#bdf78b] border border-[#e8e2d4] hover:border-[#bdf78b] active:border-[#bdf78b] hover:-translate-y-1 hover:shadow-[0_16px_36px_-10px_rgba(189,247,139,0.45)] active:shadow-[0_16px_36px_-10px_rgba(189,247,139,0.45)]'
                )}
              >
                {/* 16:9 Thumbnail Box */}
                <div className="relative aspect-video w-full rounded-xl sm:rounded-[18px] overflow-hidden bg-slate-900 select-none">
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={video.title}
                      className={cn(
                        'w-full h-full object-cover transition-transform duration-500',
                        isTouched
                          ? 'scale-105'
                          : 'group-hover:scale-105 group-active:scale-105'
                      )}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-400">
                      <YoutubeIcon className="w-10 h-10 text-red-500" />
                    </div>
                  )}

                  {/* Gradient Overlay & Play Button */}
                  <div
                    className={cn(
                      'absolute inset-0 transition-colors duration-300 ease-in-out flex items-center justify-center',
                      isTouched
                        ? 'bg-black/15'
                        : 'bg-black/25 group-hover:bg-black/15 group-active:bg-black/15'
                    )}
                  >
                    <div
                      className={cn(
                        'w-11 h-11 sm:w-12 sm:h-12 rounded-full text-[#141f10] flex items-center justify-center shadow-md transition-all duration-300 ease-in-out',
                        isTouched
                          ? 'bg-[#bdf78b] scale-110'
                          : 'bg-white/95 group-hover:bg-[#bdf78b] group-active:bg-[#bdf78b] group-hover:scale-110 group-active:scale-110'
                      )}
                    >
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Video Content: Date + Title + View Link */}
                <div className="pt-3.5 px-1 pb-1 flex-1 flex flex-col justify-between">
                  <div>
                    {video.date && (
                      <p
                        className={cn(
                          'text-xs sm:text-[13px] font-semibold font-sans mb-1.5 sm:mb-2 transition-colors duration-300 ease-in-out',
                          isTouched
                            ? 'text-[#141f10]'
                            : 'text-[#788574] group-hover:text-[#141f10] group-active:text-[#141f10]'
                        )}
                      >
                        {video.date}
                      </p>
                    )}
                    <h3
                      className={cn(
                        'text-sm sm:text-[15px] font-bold transition-colors duration-300 ease-in-out line-clamp-2 leading-snug',
                        isTouched
                          ? 'text-[#141f10]'
                          : 'text-[#141f10] group-hover:text-[#141f10] group-active:text-[#141f10]'
                      )}
                    >
                      {video.title}
                    </h3>
                  </div>

                  <div className="mt-4 pt-1">
                    <span
                      className={cn(
                        'text-xs sm:text-[13px] font-bold text-[#141f10] underline underline-offset-4 decoration-1.5 transition-colors duration-300 ease-in-out inline-flex items-center gap-1.5',
                        isTouched
                          ? 'decoration-[#141f10]'
                          : 'decoration-[#141f10]/60 group-hover:decoration-[#141f10] group-active:decoration-[#141f10]'
                      )}
                    >
                      View &rarr;
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      ) : (
        /* Empty / Waiting for URLs state */
        <div className="w-full rounded-2xl border-2 border-dashed border-[#d8eed0] bg-[#f9fdf8] p-8 text-center flex flex-col items-center justify-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#ebf7e3] text-[#3f821d] flex items-center justify-center">
            <YoutubeIcon className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-sm font-semibold text-[#141f10]">
            No YouTube videos configured yet
          </p>
          <p className="text-xs text-[#5f7457] max-w-md">
            Add your video URLs and titles to{' '}
            <code className="bg-white px-2 py-0.5 rounded border border-[#d8eed0] font-mono text-[11px] text-[#2c5a13]">
              src/features/home/config/youtubeVideos.ts
            </code>
          </p>
        </div>
      )}

      {/* EMBEDDED YOUTUBE PLAYER MODAL */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with title & close button */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-white/10 text-white shrink-0">
              <h4 className="text-sm sm:text-base font-semibold truncate pr-4 text-white">
                {activeVideo.title}
              </h4>
              <div className="flex items-center gap-2 shrink-0">
                {activeVideo && YOUTUBE_TO_RESOURCE_MAP[activeVideo.id] && (
                  <Link
                    to={`/resources?id=${YOUTUBE_TO_RESOURCE_MAP[activeVideo.id]}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#74C640] hover:bg-[#64b034] text-white text-xs font-bold transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Get Prompts & Docs</span>
                  </Link>
                )}
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close video player"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Embedded Responsive 16:9 Iframe */}
            <div className="relative aspect-video w-full flex-1 bg-black flex items-center justify-center overflow-hidden">
              <iframe
                src={getYouTubeEmbedUrl(activeVideo.url)}
                title={activeVideo.title}
                className="w-full h-full border-0 object-contain"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
