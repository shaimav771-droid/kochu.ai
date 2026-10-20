import { useState, type FormEvent } from 'react'
import {
  AlertCircle,
  FileQuestion,
  RefreshCw,
  Search,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  Database,
} from 'lucide-react'
import type { PromptServiceError } from '../services/promptService'

interface PromptLookupInputProps {
  onSubmit: (id: string) => void
  placeholder?: string
  initialValue?: string
}

export function PromptLookupInput({
  onSubmit,
  placeholder = 'Enter resource ID (e.g. video001)...',
  initialValue = '',
}: PromptLookupInputProps) {
  const [val, setVal] = useState(initialValue)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (val.trim()) {
      onSubmit(val.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-lg">
      <div className="relative flex-1">
        <Search className="w-4 h-4 text-[#7a9173] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#d6e2d2] focus:border-[#74C640] focus:ring-2 focus:ring-[#74C640]/20 text-sm text-[#141f10] placeholder:text-[#8aa083] outline-none transition-all shadow-2xs font-mono"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2.5 rounded-xl bg-[#74C640] hover:bg-[#62aa32] text-white text-xs sm:text-sm font-bold shadow-xs active:scale-95 transition-all cursor-pointer whitespace-nowrap"
      >
        Load Prompt
      </button>
    </form>
  )
}

export function PromptLoadingSkeleton() {
  return (
    <div
      aria-label="Loading prompt details"
      className="w-full bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#dce6d8] p-6 sm:p-8 space-y-6 shadow-sm animate-pulse"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-24 bg-[#e7eee4] rounded-full" />
          <div className="h-6 w-32 bg-[#e7eee4] rounded-full" />
        </div>
        <div className="h-8 w-28 bg-[#e7eee4] rounded-xl" />
      </div>

      <div className="space-y-3 pt-2">
        <div className="h-4 w-36 bg-[#e2ebe0] rounded" />
        <div className="h-8 w-3/4 bg-[#dce7da] rounded-xl" />
      </div>

      <div className="h-64 w-full bg-[#f3f7f1] rounded-2xl border border-[#e4ece2] p-6 space-y-3">
        <div className="h-4 w-5/6 bg-[#e6ede4] rounded" />
        <div className="h-4 w-full bg-[#e6ede4] rounded" />
        <div className="h-4 w-4/6 bg-[#e6ede4] rounded" />
        <div className="h-4 w-3/4 bg-[#e6ede4] rounded" />
      </div>

      <div className="flex justify-between items-center pt-2">
        <div className="h-4 w-40 bg-[#e4ece2] rounded" />
        <div className="h-10 w-36 bg-[#74C640]/30 rounded-xl" />
      </div>
    </div>
  )
}

interface PromptIdleViewProps {
  onSelectSample: (id: string) => void
}

export function PromptIdleView({ onSelectSample }: PromptIdleViewProps) {
  const sampleIds = ['video001', 'lead-gen-bot', 'notion-ai-crm']

  return (
    <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#dce6d8] p-6 sm:p-10 shadow-sm text-center max-w-3xl mx-auto space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-[#ebf7e3] border border-[#d2eac5] flex items-center justify-center mx-auto shadow-2xs">
        <Sparkles className="w-7 h-7 text-[#498925]" />
      </div>

      <div className="space-y-2 max-w-xl mx-auto">
        <h3
          className="text-2xl sm:text-3xl font-normal text-[#141f10] tracking-tight"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Companion AI Prompts &amp; Workflows
        </h3>
        <p className="text-sm text-[#506548] leading-relaxed">
          Access complete, ready-to-paste prompts featured in Kochu.ai Instagram Reels and YouTube tutorials. Open any video link with <code className="text-[#255210] font-mono font-bold bg-[#ebf7e3] px-1.5 py-0.5 rounded">?resource=id</code> or enter the resource ID below.
        </p>
      </div>

      <div className="flex justify-center pt-2">
        <PromptLookupInput onSubmit={onSelectSample} />
      </div>

      <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-[#6e8367]">
        <span>Try an example ID:</span>
        {sampleIds.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelectSample(id)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#f0f6ee] hover:bg-[#ebf7e3] border border-[#d9e6d5] hover:border-[#74C640] text-[#2c5218] font-mono transition-colors cursor-pointer"
          >
            <span>{id}</span>
            <ArrowRight className="w-3 h-3 text-[#74C640]" />
          </button>
        ))}
      </div>
    </div>
  )
}

interface PromptNotFoundViewProps {
  resourceId: string
  onRetry: () => void
  onTryAnotherId: (id: string) => void
  isRetrying?: boolean
}

export function PromptNotFoundView({
  resourceId,
  onRetry,
  onTryAnotherId,
  isRetrying,
}: PromptNotFoundViewProps) {
  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-amber-200 p-6 sm:p-10 shadow-sm text-center max-w-2xl mx-auto space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-600 shadow-2xs">
        <FileQuestion className="w-7 h-7" />
      </div>

      <div className="space-y-2">
        <h3
          className="text-2xl sm:text-3xl font-normal text-[#141f10] tracking-tight"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Prompt Unavailable
        </h3>
        <p className="text-sm text-[#506548] leading-relaxed max-w-lg mx-auto">
          We could not find a published prompt matching <code className="text-[#141f10] font-mono font-bold bg-[#f1f6ef] px-2 py-0.5 rounded">#{resourceId}</code>. It may still be in draft mode, unpublished, or the resource ID might have a typo.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={onRetry}
          disabled={isRetrying}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#74C640] hover:bg-[#62aa32] text-white text-xs sm:text-sm font-bold shadow-xs active:scale-95 transition-all cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isRetrying ? 'animate-spin' : ''}`} />
          <span>{isRetrying ? 'Checking Sheet...' : 'Retry Fresh Fetch'}</span>
        </button>
      </div>

      <div className="pt-4 border-t border-[#edf4ea] flex flex-col items-center gap-3">
        <span className="text-xs text-[#6e8367]">Or look up another resource ID:</span>
        <PromptLookupInput onSubmit={onTryAnotherId} />
      </div>
    </div>
  )
}

interface PromptInvalidIdViewProps {
  invalidId: string
  onTryAnotherId: (id: string) => void
}

export function PromptInvalidIdView({
  invalidId,
  onTryAnotherId,
}: PromptInvalidIdViewProps) {
  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-rose-200 p-6 sm:p-10 shadow-sm text-center max-w-2xl mx-auto space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto text-rose-600 shadow-2xs">
        <ShieldAlert className="w-7 h-7" />
      </div>

      <div className="space-y-2">
        <h3
          className="text-2xl sm:text-3xl font-normal text-[#141f10] tracking-tight"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Invalid Resource ID
        </h3>
        <p className="text-sm text-[#506548] leading-relaxed max-w-lg mx-auto">
          The requested resource ID <span className="font-mono font-semibold text-rose-700">"{invalidId}"</span> does not meet security requirements. Resource IDs must only contain letters, numbers, hyphens, and underscores (1–100 characters).
        </p>
      </div>

      <div className="pt-4 border-t border-[#edf4ea] flex flex-col items-center gap-3">
        <span className="text-xs text-[#6e8367]">Please enter a valid resource ID:</span>
        <PromptLookupInput onSubmit={onTryAnotherId} />
      </div>
    </div>
  )
}

interface PromptErrorViewProps {
  error: PromptServiceError
  onRetry: () => void
  isRetrying?: boolean
}

export function PromptErrorView({
  error,
  onRetry,
  isRetrying,
}: PromptErrorViewProps) {
  const isCredentialsMissing = error.code === 'CREDENTIALS_MISSING'

  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-amber-200 p-6 sm:p-10 shadow-sm text-center max-w-2xl mx-auto space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-700 shadow-2xs">
        {isCredentialsMissing ? <Database className="w-7 h-7" /> : <AlertCircle className="w-7 h-7" />}
      </div>

      <div className="space-y-2">
        <h3
          className="text-2xl sm:text-3xl font-normal text-[#141f10] tracking-tight"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          {isCredentialsMissing ? 'Google Sheets Setup Required' : 'Unable to Retrieve Prompt'}
        </h3>
        <p className="text-sm text-[#506548] leading-relaxed max-w-lg mx-auto">
          {isCredentialsMissing
            ? 'The Google Sheets server credentials have not been configured yet. Please configure the service account email, private key, and spreadsheet ID in your environment variables.'
            : error.message || 'An error occurred while connecting to the prompt database.'}
        </p>
      </div>

      <div className="flex justify-center pt-2">
        <button
          type="button"
          onClick={onRetry}
          disabled={isRetrying}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#74C640] hover:bg-[#62aa32] text-white text-xs sm:text-sm font-bold shadow-xs active:scale-95 transition-all cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isRetrying ? 'animate-spin' : ''}`} />
          <span>{isRetrying ? 'Retrying...' : 'Retry Connection'}</span>
        </button>
      </div>
    </div>
  )
}
