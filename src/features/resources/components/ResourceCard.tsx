import { ArrowRight, Sparkles, FileText, Share2, Play, Eye } from 'lucide-react'
import { ResourceItem, ResourceBadge } from '../types/resource'
import { InstagramBadgeIcon, YouTubeBadgeIcon } from '@/shared/ui/Icons/SocialIcons'
import { cn } from '@/shared/lib/utils/cn'

interface ResourceCardProps {
  resource: ResourceItem
  onSelect: (id: string) => void
  onShare: (resource: ResourceItem) => void
}

const BADGE_STYLES: Record<ResourceBadge, string> = {
  Prompt: 'bg-[#ebf8e3] text-[#2c5c13] border-[#74C640]/30 font-semibold',
  'Doc / Guide': 'bg-sky-50 text-sky-800 border-sky-200 font-semibold',
  Workflow: 'bg-purple-50 text-purple-800 border-purple-200 font-semibold',
  Template: 'bg-amber-50 text-amber-800 border-amber-200 font-semibold',
  Automation: 'bg-emerald-50 text-emerald-800 border-emerald-200 font-semibold',
}

export function ResourceCard({ resource, onSelect, onShare }: ResourceCardProps) {
  const hasPrompt = Boolean(resource.prompt)
  const hasGuide = Boolean(resource.guide)

  return (
    <div className="group relative rounded-2xl sm:rounded-[22px] bg-white border border-[#e2ece0] hover:border-[#74C640] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(116,198,64,0.22)] shadow-[0_4px_20px_rgba(20,40,15,0.03)] overflow-hidden">
      {/* Top Media / Thumbnail Container */}
      <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 select-none">
        <img
          src={resource.thumbnailUrl}
          alt={resource.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Video Type Badge (Reel / YouTube) */}
        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
          {resource.videoType === 'reel' ? (
            <>
              <InstagramBadgeIcon className="w-3.5 h-3.5 text-[#E1306C]" />
              <span>Instagram Reel</span>
            </>
          ) : (
            <>
              <YouTubeBadgeIcon className="w-3.5 h-3.5 text-red-500" />
              <span>YouTube Video</span>
            </>
          )}
        </div>

        {/* View Count if available */}
        {resource.views && (
          <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono">
            <Eye className="w-3 h-3 text-[#74C640]" />
            <span>{resource.views}</span>
          </div>
        )}

        {/* Play Overlay */}
        <div
          onClick={() => onSelect(resource.id)}
          className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors flex items-center justify-center cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-white/95 group-hover:bg-[#74C640] text-[#141f10] group-hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
            <Play className="w-5 h-5 ml-0.5 fill-current" />
          </div>
        </div>
      </div>

      {/* Badges / Tags row */}
      <div className="flex flex-wrap items-center gap-1.5 mt-3.5 mb-2">
        {resource.badges.map((badge) => (
          <span
            key={badge}
            className={cn(
              'px-2.5 py-0.5 rounded-full text-[11px] border',
              BADGE_STYLES[badge] || 'bg-slate-50 text-slate-700 border-slate-200'
            )}
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3
            onClick={() => onSelect(resource.id)}
            className="text-base sm:text-lg font-bold text-[#141f10] group-hover:text-[#2c5c13] transition-colors leading-snug cursor-pointer line-clamp-2"
          >
            {resource.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#55694d] mt-1.5 line-clamp-2 leading-relaxed">
            {resource.description}
          </p>
        </div>

        {/* Feature inclusions pills */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#edf2ea] text-[11px] text-[#4d5e44]">
          {hasPrompt && (
            <span className="flex items-center gap-1 font-medium text-[#2c5c13]">
              <Sparkles className="w-3 h-3 text-[#74C640]" />
              Copyable Prompt
            </span>
          )}
          {hasPrompt && hasGuide && <span className="text-[#c1d1bc]">•</span>}
          {hasGuide && (
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <FileText className="w-3 h-3 text-sky-600" />
              Step-by-Step Doc
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSelect(resource.id)}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#74C640] hover:bg-[#64b034] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <span>{hasPrompt ? 'View Prompt & Docs' : 'Get Resources'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onShare(resource)}
            title="Copy Direct Link to this Resource"
            aria-label="Copy Direct Link"
            className="w-10 h-10 rounded-xl bg-[#f4f8f2] hover:bg-[#ebf8e3] border border-[#d8eed0] text-[#2c5c13] flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
