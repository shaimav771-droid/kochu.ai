import { Sparkles, RefreshCcw } from 'lucide-react'
import { ResourceItem } from '../types/resource'
import { ResourceCard } from './ResourceCard'

interface ResourceGridProps {
  resources: ResourceItem[]
  onSelectResource: (id: string) => void
  onShareResource: (resource: ResourceItem) => void
  onResetFilters: () => void
}

export function ResourceGrid({
  resources,
  onSelectResource,
  onShareResource,
  onResetFilters,
}: ResourceGridProps) {
  if (resources.length === 0) {
    return (
      <div className="w-full py-16 px-4 rounded-3xl border-2 border-dashed border-[#dce6d8] bg-white text-center flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-[#ebf8e3] text-[#2c5c13] flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-[#74C640]" />
        </div>
        <div className="max-w-md">
          <h3 className="text-lg font-bold text-[#141f10]">No resources found</h3>
          <p className="text-xs sm:text-sm text-[#55694d] mt-1">
            We couldn't find any resources matching your search terms. Try clearing your filters or searching with a different keyword.
          </p>
        </div>
        <button
          type="button"
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#74C640] hover:bg-[#64b034] text-white text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
        >
          <RefreshCcw className="w-4 h-4" />
          <span>Reset Search & Filters</span>
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          onSelect={onSelectResource}
          onShare={onShareResource}
        />
      ))}
    </div>
  )
}
