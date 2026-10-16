import { useEffect, useState } from 'react'
import { X, ExternalLink, Share2, Play, Link2, Sparkles, BookOpen } from 'lucide-react'
import { ResourceItem } from '../types/resource'
import { ResourcePromptViewer } from './ResourcePromptViewer'
import { ResourceGuideViewer } from './ResourceGuideViewer'
import { InstagramBadgeIcon, YouTubeBadgeIcon } from '@/shared/ui/Icons/SocialIcons'
import { getInstagramEmbedUrl } from '@/features/home/config/instagramReels'
import { getYouTubeEmbedUrl } from '@/features/home/config/youtubeVideos'

interface ResourceDetailModalProps {
  resource: ResourceItem | null
  onClose: () => void
  onShare: (resource: ResourceItem) => void
  onCopyPrompt: (text: string) => void
}

export function ResourceDetailModal({
  resource,
  onClose,
  onShare,
  onCopyPrompt,
}: ResourceDetailModalProps) {
  const [showEmbeddedPlayer, setShowEmbeddedPlayer] = useState(false)

  useEffect(() => {
    // Reset video player when resource changes
    setShowEmbeddedPlayer(false)
  }, [resource?.id])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && resource) {
        onClose()
      }
    }
    if (resource) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [resource, onClose])

  if (!resource) return null

  const embedUrl = resource.videoUrl
    ? resource.videoType === 'reel'
      ? getInstagramEmbedUrl(resource.videoUrl)
      : getYouTubeEmbedUrl(resource.videoUrl)
    : ''

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resource-title"
        className="relative w-full max-w-3xl rounded-2xl sm:rounded-3xl bg-[#faf8f2] border border-[#e2ece0] shadow-2xl z-10 overflow-hidden transform transition-all flex flex-col max-h-[92vh] text-[#141f10]"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#e5dfd1] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2 overflow-hidden pr-2">
            <span className="px-2.5 py-1 rounded-full bg-[#ebf8e3] text-[#2c5c13] text-xs font-mono font-bold shrink-0">
              {resource.category}
            </span>
            <h3
              id="resource-title"
              className="text-base sm:text-lg font-bold text-[#141f10] truncate"
            >
              {resource.title}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => onShare(resource)}
              title="Copy direct share link"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f4f8f2] hover:bg-[#ebf8e3] border border-[#d8eed0] text-xs font-semibold text-[#2c5c13] transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share Link</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl hover:bg-[#ede7d8] text-[#55694d] hover:text-[#141f10] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-left">
          {/* Tutorial Banner / Embedded Video Section */}
          <div className="rounded-2xl overflow-hidden bg-white border border-[#e2ece0] p-4 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                {resource.videoType === 'reel' ? (
                  <InstagramBadgeIcon className="w-5 h-5 text-[#E1306C]" />
                ) : (
                  <YouTubeBadgeIcon className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <h4 className="text-sm font-bold text-[#141f10]">Watch Video Breakdown</h4>
                  <p className="text-xs text-[#55694d]">See the live build demo from the reel</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {embedUrl && (
                  <button
                    type="button"
                    onClick={() => setShowEmbeddedPlayer(!showEmbeddedPlayer)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{showEmbeddedPlayer ? 'Hide Player' : 'Watch Tutorial'}</span>
                  </button>
                )}

                {resource.videoUrl && (
                  <a
                    href={resource.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-[#d8eed0] bg-[#f7fbf5] hover:bg-[#ebf8e3] text-xs font-semibold text-[#2c5c13] transition-colors"
                  >
                    <span>Open External</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Embedded Player if toggled */}
            {showEmbeddedPlayer && embedUrl && (
              <div className="mt-3 aspect-video sm:aspect-auto sm:h-[460px] w-full rounded-xl overflow-hidden bg-black border border-slate-800 flex items-center justify-center">
                <iframe
                  src={embedUrl}
                  title={resource.title}
                  className="w-full h-full border-0 object-contain"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* SECTION 1: THE PROMPT (if applicable) */}
          {resource.prompt && (
            <section className="space-y-3">
              <div className="flex items-center gap-2 pb-1 border-b border-[#e5dfd1]">
                <Sparkles className="w-4 h-4 text-[#74C640]" />
                <h4 className="text-base font-bold text-[#141f10] uppercase tracking-wide text-xs font-mono">
                  Section 1 • The Prompt
                </h4>
              </div>
              <ResourcePromptViewer prompt={resource.prompt} onCopyPrompt={onCopyPrompt} />
            </section>
          )}

          {/* SECTION 2: STEP-BY-STEP GUIDE / DOCUMENT (if applicable) */}
          {resource.guide && (
            <section className="space-y-3 pt-2">
              <div className="flex items-center gap-2 pb-1 border-b border-[#e5dfd1]">
                <BookOpen className="w-4 h-4 text-sky-600" />
                <h4 className="text-base font-bold text-[#141f10] uppercase tracking-wide text-xs font-mono">
                  Section 2 • Step-by-Step Guide & Document
                </h4>
              </div>
              <ResourceGuideViewer guide={resource.guide} />
            </section>
          )}

          {/* SECTION 3: HELPFUL LINKS */}
          {resource.links && resource.links.length > 0 && (
            <section className="space-y-3 pt-2">
              <div className="flex items-center gap-2 pb-1 border-b border-[#e5dfd1]">
                <Link2 className="w-4 h-4 text-[#74C640]" />
                <h4 className="text-base font-bold text-[#141f10] uppercase tracking-wide text-xs font-mono">
                  Section 3 • Helpful Links & Tool Templates
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resource.links.map((link) => (
                  <a
                    key={link.url + link.title}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-white border border-[#e2ece0] hover:border-[#74C640] transition-all duration-200 group flex items-start justify-between gap-3 shadow-2xs hover:shadow-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#141f10] group-hover:text-[#2c5c13] transition-colors">
                          {link.title}
                        </span>
                        {link.badge && (
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-slate-100 text-slate-700">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      {link.description && (
                        <p className="text-[11px] text-[#55694d] mt-1 line-clamp-2">
                          {link.description}
                        </p>
                      )}
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#74C640] shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
