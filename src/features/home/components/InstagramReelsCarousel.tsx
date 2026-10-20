import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Play, X, Sparkles } from 'lucide-react'
import { InstagramBadgeIcon, InstagramIcon } from '@/shared/ui/Icons/SocialIcons'
import { cn } from '@/shared/lib/utils/cn'
import {
  INSTAGRAM_REELS,
  InstagramReelItem,
  getInstagramEmbedUrl,
  removeDuplicateReels,
} from '../config/instagramReels'

const REEL_TO_RESOURCE_MAP: Record<string, string> = {
  DeV7bkdy8r6: 'lead-gen-bot',
  DeMgc3iSBSo: 'finance-feasibility-template',
  DeKhhdTSe3V: 'business-automations-suite',
  DeHfT7LSFXZ: 'sheets-dashboard',
  DeEh8mLtN_R: 'claude-full-mastery-guide',
  DeCDMySS2x7: 'chatgpt-vs-claude-guide',
  Dd1OAyGypi9: 'chatgpt-website-builder',
  DdwL4g2S7Fj: 'claude-motion-graphics',
  DdtvhYrSJDJ: 'chatgpt-website-builder',
  Ddq9an0S59b: 'sheets-dashboard',
}

interface InstagramReelsCarouselProps {
  className?: string
}

export function InstagramReelsCarousel({ className }: InstagramReelsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeReel, setActiveReel] = useState<InstagramReelItem | null>(null)
  const [touchedReelId, setTouchedReelId] = useState<string | null>(null)
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

  const handleCardClick = (reel: InstagramReelItem) => {
    setTouchedReelId(reel.id)
    clickTimeoutRef.current = window.setTimeout(() => {
      setActiveReel(reel)
    }, 160)
  }

  const reels = removeDuplicateReels(INSTAGRAM_REELS)

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
  }, [reels])

  // Close reel modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeReel) {
        setActiveReel(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeReel])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    const scrollAmount = Math.max(260, scrollContainerRef.current.clientWidth * 0.75)
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className={`relative w-full ${className || ''}`}>
      {/* HEADER CONTROLS (ROW TITLE & ARROWS) */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7BC943]/15 text-[#2c5a13] text-xs font-semibold uppercase tracking-wider font-sans border border-[#7BC943]/30">
            <InstagramBadgeIcon className="w-3.5 h-3.5 text-[#E1306C]" />
            Instagram Reels
          </span>
        </div>

        {/* Navigation arrows (shown when scrollable) */}
        {reels.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll Instagram reels left"
              className="w-9 h-9 rounded-full bg-white border border-[#e2ece0] text-[#141f10] hover:bg-[#7BC943] hover:text-white hover:border-[#7BC943] disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#141f10] disabled:hover:border-[#e2ece0] transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll Instagram reels right"
              className="w-9 h-9 rounded-full bg-white border border-[#e2ece0] text-[#141f10] hover:bg-[#7BC943] hover:text-white hover:border-[#7BC943] disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#141f10] disabled:hover:border-[#e2ece0] transition-all duration-200 flex items-center justify-center shadow-xs cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* HORIZONTAL SCROLLABLE ROW */}
      {reels.length > 0 ? (
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-4 px-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reels.map((reel) => {
            const isTouched = touchedReelId === reel.id

            return (
              <button
                key={reel.id}
                type="button"
                onTouchStart={() => setTouchedReelId(reel.id)}
                onClick={() => handleCardClick(reel)}
                className={cn(
                  'group relative shrink-0 w-[270px] sm:w-[310px] lg:w-[335px] rounded-2xl sm:rounded-[24px] p-3.5 sm:p-4 text-left transition-all duration-300 ease-in-out snap-start cursor-pointer flex flex-col justify-between',
                  isTouched
                    ? 'bg-[#bdf78b] border-[#bdf78b] -translate-y-1 shadow-[0_16px_36px_-10px_rgba(189,247,139,0.45)]'
                    : 'bg-[#fbf9f4] hover:bg-[#bdf78b] active:bg-[#bdf78b] border border-[#e8e2d4] hover:border-[#bdf78b] active:border-[#bdf78b] hover:-translate-y-1 hover:shadow-[0_16px_36px_-10px_rgba(189,247,139,0.45)] active:shadow-[0_16px_36px_-10px_rgba(189,247,139,0.45)]'
                )}
              >
                {/* 1. Landscape ~16:9 Thumbnail Box with Rounded Corners */}
                <div className="relative aspect-[16/10] sm:aspect-video w-full rounded-xl sm:rounded-[18px] overflow-hidden bg-slate-900 select-none">
                  {reel.thumbnailUrl ? (
                    <img
                      src={reel.thumbnailUrl}
                      alt={reel.title}
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
                      <InstagramIcon className="w-10 h-10 text-[#e1306c]" />
                    </div>
                  )}

                  {/* Gradient Overlay & Subtle Play Button on hover */}
                  <div
                    className={cn(
                      'absolute inset-0 transition-colors duration-300 ease-in-out flex items-center justify-center',
                      isTouched
                        ? 'bg-black/10'
                        : 'bg-black/20 group-hover:bg-black/10 group-active:bg-black/10'
                    )}
                  >
                    <div
                      className={cn(
                        'w-11 h-11 rounded-full text-[#141f10] flex items-center justify-center shadow-md transition-all duration-300 ease-in-out',
                        isTouched
                          ? 'bg-[#bdf78b] scale-110'
                          : 'bg-white/95 group-hover:bg-[#bdf78b] group-active:bg-[#bdf78b] group-hover:scale-110 group-active:scale-110'
                      )}
                    >
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </div>
                  </div>
                </div>

                {/* 2. Card Content: Date + Large Serif Title + View Link */}
                <div className="pt-4 sm:pt-5 pb-1 px-1 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Small Faded Gray Date Label */}
                    <p
                      className={cn(
                        'text-xs sm:text-[13px] font-semibold font-sans mb-2 sm:mb-2.5 transition-colors duration-300 ease-in-out',
                        isTouched
                          ? 'text-[#141f10]'
                          : 'text-[#788574] group-hover:text-[#141f10] group-active:text-[#141f10]'
                      )}
                    >
                      {reel.date || 'July 10, 2026'}
                    </p>

                    {/* Much Larger Bold Serif Title with Tighter Line Spacing */}
                    <h3
                      className={cn(
                        'text-xl sm:text-[22px] lg:text-2xl font-bold transition-colors duration-300 ease-in-out leading-[1.18] sm:leading-[1.16] tracking-tight line-clamp-3',
                        isTouched
                          ? 'text-[#141f10]'
                          : 'text-[#141f10] group-hover:text-[#141f10] group-active:text-[#141f10]'
                      )}
                      style={{ fontFamily: '"DM Serif Display", serif' }}
                    >
                      {reel.title}
                    </h3>
                  </div>

                  {/* 3. Bottom View -> Link in Small Underlined Font */}
                  <div className="mt-6 sm:mt-8 pt-1">
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
        /* Empty / Fallback state */
        <div className="w-full rounded-2xl border-2 border-dashed border-[#d8eed0] bg-[#f9fdf8] p-6 text-center flex flex-col items-center justify-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#ebf7e3] text-[#3f821d] flex items-center justify-center">
            <InstagramBadgeIcon className="w-5 h-5 text-[#E1306C]" />
          </div>
          <p className="text-sm font-semibold text-[#141f10]">
            No Instagram reels configured yet
          </p>
        </div>
      )}

      {/* EMBEDDED INSTAGRAM REEL PLAYER MODAL */}
      {activeReel && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeReel.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveReel(null)}
        >
          <div
            className="relative w-full max-w-[420px] max-h-[85vh] bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with title & close button */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-white/10 text-white shrink-0">
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <InstagramBadgeIcon className="w-4 h-4 text-[#E1306C] shrink-0" />
                <h4 className="text-xs sm:text-sm font-semibold truncate text-white">
                  {activeReel.title}
                </h4>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {activeReel && REEL_TO_RESOURCE_MAP[activeReel.id] && (
                  <Link
                    to={`/resources?id=${REEL_TO_RESOURCE_MAP[activeReel.id]}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#74C640] hover:bg-[#64b034] text-white text-xs font-bold transition-colors"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span className="hidden sm:inline">Get Prompts</span>
                  </Link>
                )}
                <button
                  type="button"
                  onClick={() => setActiveReel(null)}
                  aria-label="Close reel player"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Embedded Instagram Reel Frame */}
            <div className="relative w-full flex-1 aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
              <iframe
                src={getInstagramEmbedUrl(activeReel.url)}
                title={activeReel.title}
                className="w-full h-full border-0 object-cover"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
