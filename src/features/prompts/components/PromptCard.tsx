import { useState, useCallback } from 'react'
import {
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Share2,
  Terminal,
} from 'lucide-react'
import type { PromptResource } from '../types/prompt'
import { useAppStore } from '@/shared/lib/store/useAppStore'
import { cn } from '@/shared/lib/utils/cn'

interface PromptCardProps {
  prompt: PromptResource
  onClearResource?: () => void
}

export function PromptCard({ prompt, onClearResource }: PromptCardProps) {
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const { addToast } = useAppStore()

  const handleCopyPrompt = useCallback(async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(prompt.prompt)
      } else {
        // Fallback for older browsers or insecure contexts
        const textarea = document.createElement('textarea')
        textarea.value = prompt.prompt
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        const successful = document.execCommand('copy')
        document.body.removeChild(textarea)
        if (!successful) throw new Error('execCommand failed')
      }

      setCopied(true)
      setCopyFailed(false)
      addToast('Prompt copied to clipboard! Ready to paste into ChatGPT or Claude.', 'success')
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopyFailed(true)
      addToast('Failed to copy prompt to clipboard. Please copy manually.', 'error')
      setTimeout(() => setCopyFailed(false), 3000)
    }
  }, [prompt.prompt, addToast])

  const handleCopyShareLink = useCallback(async () => {
    const url = `${window.location.origin}/?resource=${encodeURIComponent(prompt.resource_id)}`
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(url)
      }
      addToast(`Direct link copied: /?resource=${prompt.resource_id}`, 'success')
    } catch {
      addToast('Failed to copy direct link', 'error')
    }
  }, [prompt.resource_id, addToast])

  const wordCount = prompt.prompt.trim() ? prompt.prompt.trim().split(/\s+/).length : 0
  const charCount = prompt.prompt.length

  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#dce6d8] shadow-[0_10px_35px_rgba(20,40,15,0.06)] overflow-hidden transition-all">
      {/* CARD HEADER BAR */}
      <div className="px-5 sm:px-8 py-5 border-b border-[#e6eee3] bg-gradient-to-r from-[#fbfdfa] via-white to-[#f6faf3] flex flex-wrap items-center justify-between gap-3">
        {/* Resource Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141f10] text-white text-xs font-mono font-semibold tracking-tight shadow-xs">
            <Terminal className="w-3.5 h-3.5 text-[#74C640]" />
            <span>#{prompt.resource_id}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebf7e3] border border-[#74C640]/30 text-xs font-medium text-[#255210]">
            <span className="w-2 h-2 rounded-full bg-[#74C640] animate-pulse" />
            <span>Verified &amp; Published</span>
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyShareLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#d8e4d4] bg-white hover:bg-[#f3f8f0] text-xs font-medium text-[#3b5233] transition-colors cursor-pointer"
            title="Copy direct link with resource parameter"
            aria-label="Copy direct share link"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share Link</span>
          </button>

          {onClearResource && (
            <button
              type="button"
              onClick={onClearResource}
              className="px-3 py-1.5 rounded-xl text-xs font-medium text-[#6e8367] hover:text-[#141f10] hover:bg-[#f0f4ee] transition-colors cursor-pointer"
            >
              Browse All
            </button>
          )}
        </div>
      </div>

      {/* CARD BODY */}
      <div className="p-5 sm:p-8 space-y-6">
        {/* Title Area */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#528929] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#74C640]" />
            <span>Ready-to-Paste System Prompt</span>
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-[#141f10] leading-snug tracking-tight"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            {prompt.title}
          </h3>
        </div>

        {/* Prompt Content Box (Preserving multiline formatting strictly as plain text) */}
        <div className="relative group">
          <div className="absolute top-3 right-3 z-10">
            <button
              type="button"
              onClick={handleCopyPrompt}
              className={cn(
                'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer',
                copied
                  ? 'bg-[#275a13] text-white shadow-[0_2px_8px_rgba(39,90,19,0.3)] scale-105'
                  : copyFailed
                  ? 'bg-rose-600 text-white'
                  : 'bg-white/95 hover:bg-white text-[#1e3415] border border-[#cfe0c9] hover:border-[#74C640] shadow-2xs hover:shadow-sm'
              )}
              aria-label="Copy prompt text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#74C640]" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#4a7732]" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>

          <pre
            tabIndex={0}
            aria-label="Prompt text"
            className="w-full max-h-[460px] overflow-y-auto whitespace-pre-wrap break-words font-mono text-[13px] sm:text-sm text-[#182613] bg-[#f8fbf6] p-5 sm:p-6 pt-12 sm:pt-6 rounded-2xl border border-[#dce6d8] leading-relaxed selection:bg-[#74C640] selection:text-white focus:outline-none focus:ring-2 focus:ring-[#74C640]/40"
          >
            {prompt.prompt}
          </pre>
        </div>

        {/* Footer Meta & Quick Launcher */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#edf4ea]">
          <div className="text-xs font-mono text-[#6c8265] flex items-center gap-3">
            <span>{wordCount} words</span>
            <span>•</span>
            <span>{charCount} characters</span>
            <span>•</span>
            <span className="text-[#3f7a1f] font-sans font-medium">Plain Text Format</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopyPrompt}
              className={cn(
                'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer shadow-[0_4px_14px_rgba(116,198,64,0.25)]',
                copied
                  ? 'bg-[#255210] text-white'
                  : 'bg-[#74C640] hover:bg-[#64b034] text-white active:scale-95'
              )}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Prompt Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Complete Prompt</span>
                </>
              )}
            </button>

            <a
              href="https://chatgpt.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[#d5e2d1] bg-white hover:bg-[#f6faf3] text-xs font-semibold text-[#273a21] transition-colors cursor-pointer"
            >
              <span>Open ChatGPT</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#5e7754]" />
            </a>

            <a
              href="https://claude.ai/new"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[#d5e2d1] bg-white hover:bg-[#f6faf3] text-xs font-semibold text-[#273a21] transition-colors cursor-pointer"
            >
              <span>Open Claude</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#5e7754]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
