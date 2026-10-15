import { Search, X, Sparkles, FileText, Cpu, LayoutTemplate } from 'lucide-react'
import { ResourceCategory } from '../types/resource'
import { cn } from '@/shared/lib/utils/cn'

interface ResourceFilterBarProps {
  categories: ResourceCategory[]
  selectedCategory: ResourceCategory
  onSelectCategory: (category: ResourceCategory) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  totalCount: number
}

const CATEGORY_ICONS: Record<ResourceCategory, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  All: Sparkles,
  Prompts: Sparkles,
  Documents: FileText,
  Automation: Cpu,
  Templates: LayoutTemplate,
}

export function ResourceFilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
}: ResourceFilterBarProps) {
  return (
    <div className="w-full space-y-4">
      {/* Search Input & Count Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg">
          <Search className="w-4 h-4 text-[#6e8367] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search prompts, guides, tools (e.g. 'Make', 'Claude', 'Sheets')..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white border border-[#dce6d8] focus:border-[#74C640] focus:ring-2 focus:ring-[#74C640]/20 text-xs sm:text-sm text-[#141f10] placeholder:text-[#889982] outline-none transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#889982] hover:text-[#141f10] p-1 cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Results Counter */}
        <div className="text-xs font-mono text-[#55694d] self-end sm:self-center">
          Showing <span className="font-bold text-[#141f10]">{totalCount}</span> resource{totalCount === 1 ? '' : 's'}
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => {
          const Icon = CATEGORY_ICONS[category] || Sparkles
          const isSelected = selectedCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={cn(
                'inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer active:scale-95',
                isSelected
                  ? 'bg-[#74C640] text-white shadow-md shadow-[#74C640]/25'
                  : 'bg-white text-[#45573e] hover:text-[#141f10] border border-[#dce6d8] hover:border-[#74C640]'
              )}
            >
              <Icon className={cn('w-3.5 h-3.5', isSelected ? 'text-white' : 'text-[#74C640]')} />
              <span>{category}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
