import { Badge } from '@/shared/ui/Badge'
import { ContentShowcase } from './components/ContentShowcase'
import { InstagramIcon, YoutubeIcon } from '@/shared/ui/Icons'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'

export function ContentPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="brand">Content & Insights</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141f10] font-display">
          Viral Tech Reels & AI Toolkit
        </h1>
        <p className="text-[#4e5e46] text-base sm:text-lg">
          Dive into our top-performing breakdowns on Instagram and explore our curated directory of artificial intelligence tools.
        </p>

        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#ded8c8] text-xs font-mono font-bold text-[#303f28] hover:text-[#28570f] hover:border-[#7bc943] transition-colors shadow-sm"
          >
            <InstagramIcon className="w-4 h-4 text-[#7bc943]" />
            Follow @kochu.ai (82.5K)
          </a>
          <a
            href={SITE_CONFIG.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#ded8c8] text-xs font-mono font-bold text-[#303f28] hover:text-[#28570f] hover:border-[#7bc943] transition-colors shadow-sm"
          >
            <YoutubeIcon className="w-4 h-4 text-red-500" />
            YouTube Channel
          </a>
        </div>
      </div>

      <ContentShowcase />
    </div>
  )
}
