import { ArrowLeft, MessageSquare, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/lib/config/routes'
import { useResources } from './hooks/useResources'
import { ResourceFilterBar } from './components/ResourceFilterBar'
import { ResourceGrid } from './components/ResourceGrid'
import { ResourceDetailModal } from './components/ResourceDetailModal'
import { ResourceCategory } from './types/resource'

const CATEGORIES: ResourceCategory[] = ['All', 'Prompts', 'Documents', 'Automation', 'Templates']

export function ResourcesPage() {
  const {
    filteredResources,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    activeResource,
    selectResource,
    copyShareLink,
    copyPromptText,
  } = useResources()

  const handleResetFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All')
  }

  return (
    <div className="w-full min-h-screen bg-[#faf8f2] text-[#141f10] selection:bg-[#74C640] selection:text-white">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="border-b border-[#e6e0d2] bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#45573e] hover:text-[#74C640] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Kochu.ai</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#74C640] animate-pulse" />
            <span className="text-xs font-mono font-semibold text-[#2c5c13]">
              100% Free • Open Access
            </span>
          </div>
        </div>
      </div>

      {/* Main Page Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 sm:space-y-12">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebf8e3] border border-[#74C640]/30 text-xs font-semibold text-[#2c5c13] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#74C640]" />
            <span>Creator-Led Tech Library</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#141f10] tracking-tight leading-[1.1]"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            Free Resources &amp;{' '}
            <span className="italic font-serif text-[#74C640]">Prompts Library</span>
          </h1>

          <p className="text-sm sm:text-base text-[#4f6347] leading-relaxed max-w-2xl mx-auto">
            Direct companion resources for our viral Instagram reels and YouTube tutorials. Access copy-paste prompts, step-by-step guides, automation blueprints, and spreadsheets with one click.
          </p>

          {/* Instagram DM Banner Notice */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-[#dce6d8] text-xs text-[#394d32] shadow-2xs">
              <MessageSquare className="w-4 h-4 text-[#E1306C] shrink-0" />
              <span>
                <strong>Landed here from an Instagram DM / Comment?</strong> Search for your video title or click on any card below to reveal the full prompt and documents.
              </span>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#e2ece0] shadow-2xs">
          <ResourceFilterBar
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalCount={filteredResources.length}
          />
        </div>

        {/* Video Resource Cards Grid */}
        <section className="space-y-6">
          <ResourceGrid
            resources={filteredResources}
            onSelectResource={selectResource}
            onShareResource={copyShareLink}
            onResetFilters={handleResetFilters}
          />
        </section>
      </div>

      {/* Resource Detail Modal (Deep-linked with ?id=slug) */}
      <ResourceDetailModal
        resource={activeResource}
        onClose={() => selectResource(null)}
        onShare={copyShareLink}
        onCopyPrompt={copyPromptText}
      />
    </div>
  )
}
