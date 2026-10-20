import { ArrowUpRight, Play, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/lib/config/routes'
import { YOUTUBE_VIDEOS, getYouTubeThumbnailUrl } from '../config/youtubeVideos'
import { INSTAGRAM_REELS } from '../config/instagramReels'

export function KochuAiPreviewSection() {
  const featuredVideos = YOUTUBE_VIDEOS.slice(0, 3)
  const featuredReels = INSTAGRAM_REELS.slice(0, 4)

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#F2EDE2] border-b border-[#E0D7C5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-left">
        
        {/* Intentional Section Boundary: Kochu.ai Platform Island */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-[12px] bg-[#FAF8F2] border border-[#7BC943]/35 shadow-sm space-y-10">
          
          {/* Header identifying Kochu.ai as Suhail's content & education brand */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E2ECD8]">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#7BC943]/15 border border-[#7BC943]/40 text-xs font-mono font-semibold text-[#2C5C13]">
                <span className="w-2 h-2 rounded-full bg-[#7BC943]" />
                <span>Content & Education Platform</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[6px] bg-[#7BC943] text-slate-950 flex items-center justify-center font-bold text-xl font-mono">
                  K
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#141F10] tracking-tight">
                    Kochu.ai
                  </h2>
                  <p className="text-xs text-[#2C5C13] font-mono">
                    Created by Suhail Abdulatif • 82K+ Instagram • 5K+ YouTube
                  </p>
                </div>
              </div>

              <p className="text-[15px] sm:text-[16px] text-[#3D4D35] leading-relaxed">
                Practical artificial intelligence tutorials, prompt architectures, and developer tools explained in Malayalam and simple English.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={ROUTES.KOCHU_AI}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#7BC943] hover:bg-[#6EB53C] text-slate-950 font-semibold text-sm transition-colors shadow-2xs"
              >
                <span>Explore Kochu.ai Platform</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </Link>
              <Link
                to={ROUTES.RESOURCES}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[6px] bg-white border border-[#D5E7CE] hover:border-[#7BC943] text-[#2C5C13] text-sm font-medium transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Prompt Library</span>
              </Link>
            </div>
          </div>

          {/* Curated Video Walkthroughs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2C5C13] font-semibold">
                Curated Tutorials & Deep Dives
              </span>
              <span className="text-xs text-[#526B4A]">
                YouTube Masterclasses
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredVideos.map((video) => {
                const thumb = getYouTubeThumbnailUrl(video.url)
                return (
                  <a
                    key={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-[8px] bg-white border border-[#DCEBD6] overflow-hidden hover:border-[#7BC943] transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="relative aspect-video w-full bg-[#182213] overflow-hidden">
                      <img
                        src={thumb}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-[#7BC943] text-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 space-y-1.5 text-left">
                      <h4 className="text-sm font-semibold text-[#141F10] group-hover:text-[#2C5C13] transition-colors line-clamp-2">
                        {video.title}
                      </h4>
                      {video.date && (
                        <p className="text-[11px] text-[#6E8367] font-mono">
                          {video.date}
                        </p>
                      )}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Short-Form Reel Guides Preview */}
          <div className="space-y-4 pt-4 border-t border-[#E2ECD8]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2C5C13] font-semibold">
                Short-Form Workflow Breakdowns
              </span>
              <span className="text-xs text-[#526B4A]">
                Instagram Reels
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {featuredReels.map((reel) => (
                <a
                  key={reel.id}
                  href={reel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[6px] overflow-hidden border border-[#DCEBD6] bg-white hover:border-[#7BC943] transition-colors flex flex-col text-left"
                >
                  <div className="relative aspect-[9/14] w-full overflow-hidden bg-[#182213]">
                    <img
                      src={reel.thumbnailUrl}
                      alt={reel.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-[4px] bg-black/60 backdrop-blur-xs text-[10px] text-white font-mono">
                      Reel
                    </div>
                  </div>
                  <div className="p-2.5">
                    <p className="text-xs font-medium text-[#141F10] group-hover:text-[#2C5C13] line-clamp-2 leading-tight">
                      {reel.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
