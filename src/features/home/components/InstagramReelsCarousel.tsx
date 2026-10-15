import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Play, X, ExternalLink, Sparkles } from 'lucide-react'
import { InstagramBadgeIcon, InstagramIcon } from '@/shared/ui/Icons/SocialIcons'
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
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

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
          className="flex items-stretch gap-3 sm:gap-4 overflow-x-auto scroll-smooth pb-3 px-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reels.map((reel) => {
            return (
              <button
                key={reel.id}
                type="button"
                onClick={() => setActiveReel(reel)}
                className="group relative shrink-0 w-[180px] sm:w-[200px] lg:w-[220px] rounded-2xl bg-white border border-[#e2ece0] hover:border-[#7BC943] p-2.5 sm:p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-10px_rgba(116,198,64,0.22)] snap-start cursor-pointer flex flex-col justify-between"
              >
                {/* 9:14 Portrait Reel Thumbnail Box */}
                <div className="relative aspect-[9/14] w-full rounded-xl overflow-hidden bg-slate-900 select-none">
                  {reel.thumbnailUrl ? (
                    <img
                      src={reel.thumbnailUrl}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-400">
                      <InstagramIcon className="w-10 h-10 text-[#e1306c]" />
                    </div>
                  )}

                  {/* Top Instagram Reel identifier badge */}
                  <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center gap-1 text-[10px] font-semibold text-white shadow-sm">
                    <InstagramBadgeIcon className="w-3 h-3 text-[#E1306C]" />
                    <span>Reel</span>
                  </div>

                  {/* Gradient Overlay & Play Button */}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-white/95 group-hover:bg-[#7BC943] text-[#141f10] group-hover:text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110">
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Reel Caption / Title */}
                <div className="pt-2.5 px-0.5 pb-0.5">
                  <h3 className="text-xs sm:text-[13px] font-bold text-[#141f10] group-hover:text-[#38761a] transition-colors line-clamp-2 leading-snug">
                    {reel.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#6e8367] font-mono mt-1 tracking-tight flex items-center gap-1">
                    <InstagramIcon className="w-2.5 h-2.5 text-[#E1306C]" />
                    {reel.author || '@kochu.ai'}
                  </p>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveReel(null)}
        >
          <div
            className="relative w-full max-w-sm sm:max-w-md bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with title & close button */}
            <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-white/10 text-white shrink-0">
              <div className="flex items-center gap-2 truncate pr-2">
                <InstagramBadgeIcon className="w-4 h-4 text-[#E1306C] shrink-0" />
                <h4 className="text-xs sm:text-sm font-semibold truncate">
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
                <a
                  href={activeReel.url}
                  target="_blank"
                  rel="noreferrer"
                  title="Open on Instagram"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
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
            <div className="relative w-full bg-black flex-1 min-h-[480px] sm:min-h-[580px] overflow-hidden">
              <iframe
                src={getInstagramEmbedUrl(activeReel.url)}
                title={activeReel.title}
                className="w-full h-full border-0"
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
