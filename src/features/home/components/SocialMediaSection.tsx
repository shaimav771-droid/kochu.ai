import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'
import { ROUTES } from '@/shared/lib/config/routes'
import {
  InstagramBadgeIcon,
  YouTubeBadgeIcon,
  LinkedInBadgeIcon,
} from '@/shared/ui/Icons/SocialIcons'
import { cn } from '@/shared/lib/utils/cn'
import { YouTubeVideoCarousel } from './YouTubeVideoCarousel'
import { InstagramReelsCarousel } from './InstagramReelsCarousel'

interface SocialMediaSectionProps {
  className?: string
}

interface SocialChannelItem {
  name: string
  handle: string
  url: string
  statNumber: string
  statLabel: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export function SocialMediaSection({ className }: SocialMediaSectionProps) {
  const socialChannels: SocialChannelItem[] = [
    {
      name: 'Instagram',
      handle: SITE_CONFIG.instagramHandle,
      url: SITE_CONFIG.instagram,
      statNumber: SITE_CONFIG.metrics.instagramFollowers,
      statLabel: 'FOLLOWERS',
      icon: InstagramBadgeIcon,
    },
    {
      name: 'YouTube',
      handle: '@kochuai',
      url: SITE_CONFIG.youtube,
      statNumber: SITE_CONFIG.metrics.youtubeSubscribers,
      statLabel: 'SUBSCRIBERS',
      icon: YouTubeBadgeIcon,
    },
    {
      name: 'LinkedIn',
      handle: 'Suhail Abdulatif',
      url: SITE_CONFIG.linkedin,
      statNumber: SITE_CONFIG.metrics.linkedinConnections,
      statLabel: 'CONNECTIONS',
      icon: LinkedInBadgeIcon,
    },
  ]

  return (
    <section
      id="social-media"
      data-screen="true"
      className={cn(
        'relative w-full scroll-mt-0 !mt-0 bg-white min-h-screen flex flex-col justify-between',
        className
      )}
    >
      {/* MAIN SCREEN CONTAINER */}
      <div
        id="social-platforms"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-14 w-full h-full flex flex-col justify-between"
      >
        {/* HEADER AREA: TOP LEFT CORNER WITH RESOURCES CTA */}
        <div className="relative text-left w-full pt-1 sm:pt-2 mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          {/* Heading with 2 lines */}
          <div>
            <h2
              className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#141f10] tracking-tight leading-[1.06]"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Explore My
            </h2>

            {/* Line 2: Videos in elegant italic font in brand #74C640 */}
            <div className="mt-1 sm:mt-1.5 lg:mt-2">
              <span className="text-5xl sm:text-6xl lg:text-[68px] font-normal italic font-serif text-[#74C640] leading-none tracking-normal">
                Videos
              </span>
            </div>
          </div>

          {/* Quick link to Prompts & Resources Library */}
          <Link
            to={ROUTES.RESOURCES}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#d8eed0] hover:border-[#74C640] text-xs font-bold text-[#2c5c13] hover:bg-[#f7fbf5] transition-all shadow-2xs hover:shadow-xs group self-start sm:self-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#74C640]" />
            <span>Free Prompts &amp; Resources</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* TWO HORIZONTAL ROWS: INSTAGRAM REELS (TOP) & YOUTUBE VIDEOS (BOTTOM) */}
        <div className="w-full my-auto flex flex-col gap-6 sm:gap-8 pt-2 pb-6">
          {/* 1. INSTAGRAM REELS ROW */}
          <InstagramReelsCarousel />

          {/* 2. YOUTUBE VIDEOS ROW */}
          <YouTubeVideoCarousel />
        </div>

        {/* PLATFORM CARDS GRID - COMPACT SIZE */}
        <div className="mx-auto max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pb-2">
          {socialChannels.map((channel) => {
            const Icon = channel.icon

            return (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-2xl sm:rounded-[22px] p-5 sm:p-6 bg-white/95 backdrop-blur-md border border-[#e2ece0] hover:border-[#74C640] transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(20,40,15,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(116,198,64,0.20)] overflow-hidden flex flex-col"
              >
                {/* Header Row */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ebf7e3] border border-[#d8eed0] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                    <Icon className="w-5 h-5 text-[#3f821d]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#141f10] group-hover:text-[#418320] transition-colors leading-tight">
                      {channel.name}
                    </h3>
                    <p className="text-[11px] text-[#6e8367] font-mono mt-0.5 tracking-tight">
                      {channel.handle}
                    </p>
                  </div>
                </div>

                {/* Followers / Metric Row */}
                <div className="mt-4 sm:mt-5 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-[28px] font-black text-[#141f10] tracking-tight font-display leading-none">
                    {channel.statNumber}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#558e2d] uppercase tracking-wider font-sans">
                    {channel.statLabel}
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
