import { Play, Sparkles, BookOpen, ExternalLink, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/lib/config/routes'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'
import { YOUTUBE_VIDEOS, getYouTubeThumbnailUrl } from '@/features/home/config/youtubeVideos'
import { INSTAGRAM_REELS } from '@/features/home/config/instagramReels'
import { InstagramBadgeIcon, YouTubeBadgeIcon, LinkedInBadgeIcon } from '@/shared/ui/Icons/SocialIcons'

export function KochuAiPage() {
  const socialChannels = [
    {
      name: 'Instagram',
      handle: SITE_CONFIG.kochu.instagramHandle,
      url: SITE_CONFIG.kochu.instagram,
      followers: SITE_CONFIG.kochu.followers,
      label: 'Followers',
      icon: InstagramBadgeIcon,
    },
    {
      name: 'YouTube',
      handle: '@kochuai',
      url: SITE_CONFIG.kochu.youtube,
      followers: SITE_CONFIG.kochu.subscribers,
      label: 'Subscribers',
      icon: YouTubeBadgeIcon,
    },
    {
      name: 'LinkedIn',
      handle: 'Suhail Abdulatif',
      url: SITE_CONFIG.kochu.linkedin,
      followers: SITE_CONFIG.kochu.connections,
      label: 'Connections',
      icon: LinkedInBadgeIcon,
    },
  ]

  return (
    <div className="w-full bg-[#FAF8F2] text-[#141F10] py-12 sm:py-16 text-left selection:bg-[#7BC943] selection:text-slate-950">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
        
        {/* Navigation Breadcrumb back to Suhail's Main Identity */}
        <div className="flex items-center justify-between">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#2C5C13] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Suhail Abdulatif</span>
          </Link>

          <span className="text-xs font-mono text-[#526B4A]">
            Official Education Platform
          </span>
        </div>

        {/* Kochu.ai Hero Header */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-[12px] bg-white border border-[#7BC943]/40 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-[10px] bg-[#7BC943] flex items-center justify-center font-bold text-3xl text-slate-950 font-mono shadow-md shadow-[#7BC943]/20">
                K
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#141F10] tracking-tight">
                  Kochu.ai
                </h1>
                <p className="text-sm font-mono text-[#2C5C13] font-semibold mt-0.5">
                  Creator-Led AI & Technology Education in Malayalam
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to={ROUTES.RESOURCES}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#7BC943] hover:bg-[#6EB53C] text-slate-950 font-bold text-sm transition-colors shadow-2xs"
              >
                <Sparkles className="w-4 h-4" />
                <span>Free Resources & Prompts</span>
              </Link>
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#3D4D35] max-w-3xl leading-relaxed">
            Created by <strong>Suhail Abdulatif</strong>, Kochu.ai empowers tens of thousands of developers, founders, educators, and creators to master Artificial Intelligence, automated workflows, and modern web tools through practical, hype-free tutorials.
          </p>

          {/* Social Audience Proof Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E2ECD8]">
            {socialChannels.map((ch) => {
              const Icon = ch.icon
              return (
                <a
                  key={ch.name}
                  href={ch.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-[8px] bg-[#FAF8F2] border border-[#DCEBD6] hover:border-[#7BC943] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-[6px] bg-white border border-[#DCEBD6] flex items-center justify-center text-[#2C5C13]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#141F10] block">
                        {ch.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#526B4A]">
                        {ch.handle}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-[#141F10] block">
                      {ch.followers}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#2C5C13]">
                      {ch.label}
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Masterclass Video Tutorials */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2C5C13] font-semibold block">
                In-Depth Video Tutorials
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#141F10]">
                YouTube Masterclasses
              </h2>
            </div>
            <a
              href={SITE_CONFIG.kochu.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C5C13] hover:underline"
            >
              <span>View Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {YOUTUBE_VIDEOS.map((video) => {
              const thumb = getYouTubeThumbnailUrl(video.url)
              return (
                <a
                  key={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[8px] bg-white border border-[#DCEBD6] overflow-hidden hover:border-[#7BC943] transition-colors flex flex-col justify-between"
                >
                  <div className="relative aspect-video w-full bg-[#182213] overflow-hidden">
                    <img
                      src={thumb}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-11 h-11 rounded-full bg-[#7BC943] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 space-y-1 text-left">
                    <h3 className="text-sm font-semibold text-[#141F10] group-hover:text-[#2C5C13] line-clamp-2">
                      {video.title}
                    </h3>
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

        {/* Instagram Reel Guides Carousel */}
        <div className="space-y-6 pt-6 border-t border-[#E2ECD8]">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2C5C13] font-semibold block">
                Short-Form Workflow Guides
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#141F10]">
                Instagram Reels
              </h2>
            </div>
            <a
              href={SITE_CONFIG.kochu.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C5C13] hover:underline"
            >
              <span>Visit Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {INSTAGRAM_REELS.map((reel) => (
              <a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[8px] overflow-hidden border border-[#DCEBD6] bg-white hover:border-[#7BC943] transition-colors flex flex-col text-left"
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
                <div className="p-3">
                  <p className="text-xs font-medium text-[#141F10] group-hover:text-[#2C5C13] line-clamp-2 leading-snug">
                    {reel.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Prompt & Resource Bridge */}
        <div className="p-8 rounded-[10px] bg-white border border-[#7BC943]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl font-serif text-[#141F10]">
              Looking for copy-paste companion prompts?
            </h3>
            <p className="text-xs sm:text-sm text-[#4D5E46]">
              Browse the dedicated AI Prompt Library with copyable system instructions and Google Sheets templates matching our video guides.
            </p>
          </div>
          <Link
            to={ROUTES.RESOURCES}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#7BC943] text-slate-950 font-bold text-sm shrink-0 hover:bg-[#6EB53C] transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Open Prompt Library</span>
          </Link>
        </div>

      </div>
    </div>
  )
}
