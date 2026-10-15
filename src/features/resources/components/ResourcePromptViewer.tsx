import { useState } from 'react'
import { Copy, Check, Sparkles, Terminal } from 'lucide-react'
import { ResourcePrompt } from '../types/resource'

interface ResourcePromptViewerProps {
  prompt: ResourcePrompt
  onCopyPrompt: (text: string) => void
}

export function ResourcePromptViewer({ prompt, onCopyPrompt }: ResourcePromptViewerProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    onCopyPrompt(prompt.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="space-y-4">
      {/* Header bar with Model badge & Copy Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#ebf8e3] border border-[#74C640]/30 text-left">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#74C640]" />
            <span className="text-sm font-bold text-[#1e420d]">{prompt.title}</span>
          </div>
          {prompt.modelRecommendation && (
            <p className="text-xs text-[#456b33] mt-0.5">
              Recommended model:{' '}
              <span className="font-semibold text-[#1e420d]">{prompt.modelRecommendation}</span>
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#74C640] hover:bg-[#64b034] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Prompt</span>
            </>
          )}
        </button>
      </div>

      {prompt.description && (
        <p className="text-xs sm:text-sm text-[#4b5e43] leading-relaxed text-left">
          {prompt.description}
        </p>
      )}

      {/* Code / Prompt syntax container */}
      <div className="relative rounded-xl overflow-hidden border border-[#1e2a1b] bg-[#111910] text-slate-100 shadow-inner">
        {/* Code container top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#182317] border-b border-[#253623] text-xs font-mono text-[#8ad450]">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>prompt-template.txt</span>
          </div>
          <span className="text-[11px] text-white/50">{prompt.text.length} characters</span>
        </div>

        {/* Prompt content */}
        <div className="p-4 overflow-x-auto text-xs sm:text-[13px] font-mono leading-relaxed text-[#e5f0e1] max-h-[320px] overflow-y-auto whitespace-pre-wrap select-text selection:bg-[#74C640] selection:text-black">
          {prompt.text}
        </div>
      </div>
    </div>
  )
}
