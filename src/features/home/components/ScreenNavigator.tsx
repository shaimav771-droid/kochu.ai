import { cn } from '@/shared/lib/utils/cn'

interface ScreenNavigatorProps {
  activeIndex: number
  onSelect: (index: number) => void
}

const SCREENS = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-can-i-help', label: 'Services' },
  { id: 'about', label: 'About Suhail' },
  { id: 'social-platforms', label: 'Social Media' },
  { id: 'content', label: 'Content Hub' },
]

export function ScreenNavigator({ activeIndex, onSelect }: ScreenNavigatorProps) {
  return (
    <nav
      aria-label="Screen Navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3.5 bg-white/70 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#e5dfd1]/80 shadow-[0_8px_24px_-4px_rgba(20,31,16,0.08)]"
    >
      {SCREENS.map((screen, idx) => {
        const isActive = activeIndex === idx
        return (
          <button
            key={screen.id}
            type="button"
            onClick={() => onSelect(idx)}
            aria-label={`Go to ${screen.label}`}
            className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
          >
            {/* Tooltip on hover */}
            <span className="absolute right-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 whitespace-nowrap bg-[#141f10] text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-md">
              {screen.label}
            </span>

            {/* Dot Indicator */}
            <span
              className={cn(
                'rounded-full transition-all duration-300',
                isActive
                  ? 'w-2.5 h-6 bg-[#7bc943] shadow-[0_0_12px_rgba(123,201,67,0.6)]'
                  : 'w-2 h-2 bg-[#141f10]/25 group-hover:bg-[#141f10]/60 group-hover:scale-125'
              )}
            />
          </button>
        )
      })}
    </nav>
  )
}
