import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, Eye, Heart, ExternalLink, Sparkles, ArrowRight } from 'lucide-react'
import { Card } from '@/shared/ui/Card'
import { Badge } from '@/shared/ui/Badge'
import { useContentReels } from '../hooks/useContent'
import { cn } from '@/shared/lib/utils/cn'
import { ROUTES } from '@/shared/lib/config/routes'

export function ContentShowcase() {
  const { data: reels, isLoading: reelsLoading } = useContentReels()
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', 'AI Tools', 'Coding Hacks', 'Career']

  const filteredReels = reels?.filter((reel) => {
    if (activeCategory === 'All') return true
    return reel.category === activeCategory
  })

  return (
    <div className="space-y-16">
      {/* Viral Tech Reels Section */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 text-left">
          <div>
            <Badge variant="brand">High Impact Media</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141f10] font-display mt-2 tracking-tight">
              Viral Tech Reels & Breakdowns
            </h2>
            <p className="text-[#4e5e46] text-sm mt-1 font-medium">
              Bite-sized, high-production Malayalam content simplifying cutting-edge AI and engineering concepts.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap',
                  activeCategory === cat
                    ? 'bg-[#7bc943] text-slate-950 font-bold shadow-md shadow-[#7bc943]/20'
                    : 'bg-white text-[#45543c] hover:text-[#141f10] border border-[#ded8c8]'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {reelsLoading ? (
          <div className="py-12 flex justify-center">
            <span className="w-8 h-8 border-2 border-[#7bc943] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {filteredReels?.map((reel) => (
              <Card
                key={reel.id}
                variant="interactive"
                className="flex flex-col justify-between group overflow-hidden bg-white border border-[#e4ded0] hover:border-[#7bc943] shadow-sm"
              >
                {/* Thumbnail Header Mock */}
                <div
                  className={cn(
                    'h-48 w-full p-4 flex flex-col justify-between relative bg-gradient-to-br',
                    reel.thumbnailGradient
                  )}
                >
                  <div className="flex justify-between items-center z-10">
                    <Badge variant="brand" className="bg-slate-950/70 backdrop-blur-md text-[#8ad450] border-[#7bc943]/40">
                      {reel.category}
                    </Badge>
                    <span className="text-[11px] font-mono font-bold bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded text-white">
                      {reel.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-center my-auto z-10">
                    <div className="w-12 h-12 rounded-full bg-[#7bc943] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between z-10 text-[11px] text-white/95 font-mono bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[#7bc943]" /> {reel.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-400" /> {reel.likes}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-bold text-[#141f10] text-base leading-snug group-hover:text-[#28570f] transition-colors line-clamp-2">
                      {reel.title}
                    </h3>
                    <p className="text-xs text-[#526348] mt-2 line-clamp-2 leading-relaxed">
                      {reel.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#ede7d9]">
                    <div className="text-[11px] text-[#28570f] font-semibold">
                      💡 Key Insight: <span className="text-[#3c4a35] font-normal">{reel.keyTakeaway}</span>
                    </div>

                    <a
                      href={reel.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#44553b] hover:text-[#28570f] transition-colors"
                    >
                      Watch on Instagram <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Callout Banner to Free Resources & Prompts Library */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#f4faf1] via-white to-[#f4faf1] border border-[#d8eed0] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebf8e3] text-[#2c5c13] text-xs font-bold border border-[#74C640]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#74C640]" />
              <span>100% Free Knowledge Hub</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#141f10] font-display">
              Looking for the exact prompts and workflow guides?
            </h3>
            <p className="text-xs sm:text-sm text-[#4e5e46] max-w-xl">
              Every video has a dedicated companion resource pack including copy-paste prompts, PDF step-by-step documentation, and download links.
            </p>
          </div>

          <Link
            to={ROUTES.RESOURCES}
            className="px-6 py-3 rounded-2xl bg-[#74C640] hover:bg-[#64b034] text-white font-bold text-sm shadow-md shadow-[#74C640]/25 transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Explore All Resources</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

