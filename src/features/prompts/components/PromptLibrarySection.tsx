import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Sparkles, Database } from 'lucide-react'
import { usePromptQuery } from '../hooks/usePromptQuery'
import { PromptCard } from './PromptCard'
import {
  PromptLoadingSkeleton,
  PromptIdleView,
  PromptNotFoundView,
  PromptInvalidIdView,
  PromptErrorView,
} from './PromptStateViews'
import { cn } from '@/shared/lib/utils/cn'

interface PromptLibrarySectionProps {
  className?: string
}

const RESOURCE_ID_REGEX = /^[a-zA-Z0-9_-]{1,100}$/

export function PromptLibrarySection({ className }: PromptLibrarySectionProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const resourceParam = searchParams.get('resource')
  const sectionRef = useRef<HTMLElement>(null)

  const isInvalidFormat = Boolean(
    resourceParam && !RESOURCE_ID_REGEX.test(resourceParam.trim())
  )

  const {
    prompt,
    isLoading,
    isFetching,
    isError,
    error,
    retryWithFreshCache,
  } = usePromptQuery(isInvalidFormat ? null : resourceParam)

  // Auto-scroll to prompt library when a resource query param is present on mount or change
  useEffect(() => {
    if (resourceParam && sectionRef.current) {
      const timer = setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [resourceParam])

  const handleSelectResource = (id: string) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        next.set('resource', id.trim())
        return next
      },
      { replace: false }
    )
  }

  const handleClearResource = () => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        next.delete('resource')
        return next
      },
      { replace: false }
    )
  }

  return (
    <section
      id="prompt-library"
      data-screen="true"
      ref={sectionRef}
      className={cn(
        'relative w-full scroll-mt-0 bg-[#faf8f2] min-h-[90vh] flex flex-col justify-center py-14 sm:py-20 border-t border-[#e6e0d2]',
        className
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8 sm:space-y-10">
        {/* HEADER AREA */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf8e3] border border-[#74C640]/30 text-xs font-semibold text-[#255210] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#74C640]" />
            <span>AI Prompt Library</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#74C640]" />
            <Database className="w-3 h-3 text-[#407624]" />
            <span className="text-[11px] font-mono text-[#407624]">Google Sheets Synced</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#141f10] tracking-tight leading-[1.08]"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            Video Companion{' '}
            <span className="italic font-serif text-[#74C640]">Prompts</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4f6347] leading-relaxed max-w-2xl mx-auto">
            Ready-to-use prompts, system instructions, and workflows companion to our Instagram Reels and YouTube tutorials.
          </p>
        </div>

        {/* STATE-BASED CONTENT AREA */}
        <div className="w-full max-w-4xl mx-auto">
          {/* 1. Invalid ID Format */}
          {isInvalidFormat && resourceParam && (
            <PromptInvalidIdView
              invalidId={resourceParam}
              onTryAnotherId={handleSelectResource}
            />
          )}

          {/* 2. Loading State */}
          {!isInvalidFormat && resourceParam && (isLoading || (isFetching && !prompt)) && (
            <PromptLoadingSkeleton />
          )}

          {/* 3. Error States (Not Found / Unpublished / Network / Credentials) */}
          {!isInvalidFormat && resourceParam && !isLoading && isError && error && (
            error.code === 'NOT_FOUND' || error.status === 404 ? (
              <PromptNotFoundView
                resourceId={resourceParam}
                onRetry={retryWithFreshCache}
                onTryAnotherId={handleSelectResource}
                isRetrying={isFetching}
              />
            ) : (
              <PromptErrorView
                error={error}
                onRetry={retryWithFreshCache}
                isRetrying={isFetching}
              />
            )
          )}

          {/* 4. Loaded Prompt Card */}
          {!isInvalidFormat && resourceParam && !isLoading && !isError && prompt && (
            <PromptCard
              prompt={prompt}
              onClearResource={handleClearResource}
            />
          )}

          {/* 5. Idle State (No resource param in URL) */}
          {!resourceParam && (
            <PromptIdleView onSelectSample={handleSelectResource} />
          )}
        </div>
      </div>
    </section>
  )
}
