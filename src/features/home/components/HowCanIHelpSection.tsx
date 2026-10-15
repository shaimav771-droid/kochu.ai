import { useAppStore } from '@/shared/lib/store/useAppStore'
import {
  AiChipColorPicture,
  LearnAiColorPicture,
  WorkshopsColorPicture,
  CollaborateColorPicture,
} from './ServiceColorIcons'

interface ServiceOption {
  id: string
  title: string
  description: string
  ColorPicture: React.ComponentType<{ className?: string }>
  actionType: 'scroll' | 'modal'
  target: string
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'learn-ai',
    title: 'Learn AI',
    description: 'Cohorts, autonomous agents, and practical tools in Malayalam.',
    ColorPicture: LearnAiColorPicture,
    actionType: 'modal',
    target: 'Learn AI & Mentorship',
  },
  {
    id: 'business-problem',
    title: 'Solve a Business Problem',
    description: 'Custom AI workflows, system audits, and tailored LLM integrations.',
    ColorPicture: AiChipColorPicture,
    actionType: 'modal',
    target: 'Solve a Business Problem',
  },
  {
    id: 'workshops-speaking',
    title: 'Workshops & Speaking',
    description: 'Keynotes, college campus talks, and corporate masterclasses.',
    ColorPicture: WorkshopsColorPicture,
    actionType: 'modal',
    target: 'Workshops & Speaking',
  },
  {
    id: 'collaborate',
    title: 'Collaborate With Me',
    description: 'Sponsorships, product reviews, and co-created developer content.',
    ColorPicture: CollaborateColorPicture,
    actionType: 'modal',
    target: 'Collaborate With Me',
  },
]

export function HowCanIHelpSection() {
  const { openBookingModal } = useAppStore()

  const handleAction = (option: ServiceOption) => {
    if (option.actionType === 'scroll') {
      const element = document.getElementById(option.target)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      openBookingModal(option.target)
    }
  }

  const firstColumnOptions = [SERVICE_OPTIONS[0], SERVICE_OPTIONS[2]]
  const secondColumnOptions = [SERVICE_OPTIONS[1], SERVICE_OPTIONS[3]]

  const renderCard = (
    option: ServiceOption,
    sizeClasses = 'w-full sm:w-[260px] xl:w-[285px]'
  ) => {
    const PictureComponent = option.ColorPicture
    return (
      <button
        key={option.id}
        type="button"
        onClick={() => handleAction(option)}
        className={`${sizeClasses} h-auto min-h-0 aspect-auto md:aspect-square text-left bg-white/85 hover:bg-white/95 active:bg-white backdrop-blur-2xl rounded-2xl md:rounded-[28px] p-3 sm:p-4 md:p-6 xl:p-7 border border-white/90 hover:border-white shadow-[0_16px_36px_-10px_rgba(20,31,16,0.18),inset_0_1px_1px_rgba(255,255,255,0.85)] hover:shadow-[0_24px_48px_-10px_rgba(20,31,16,0.26),inset_0_1px_1px_rgba(255,255,255,0.95)] transition-all duration-300 group cursor-pointer flex flex-col justify-start md:justify-between gap-1.5 md:gap-0 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#141f10]/30`}
      >
        {/* MOBILE VIEW (< md): Icon + Heading side-by-side in one row (flex-row items-center gap-2.5), description below */}
        <div className="flex md:hidden flex-row items-center gap-2.5 w-full">
          <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <PictureComponent className="w-full h-full object-contain filter drop-shadow-sm" />
          </div>
          <h3 className="text-[15px] sm:text-base font-bold text-[#141f10] tracking-tight font-display leading-tight">
            {option.title}
          </h3>
        </div>
        <p className="md:hidden text-xs text-[#141f10]/75 font-medium leading-snug">
          {option.description}
        </p>

        {/* DESKTOP VIEW (md+): 100% UNTOUCHED ORIGINAL STRUCTURE */}
        <div className="hidden md:flex items-center justify-start w-full">
          <div className="w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14 xl:w-16 xl:h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <PictureComponent className="w-full h-full object-contain filter drop-shadow-sm" />
          </div>
        </div>

        <div className="hidden md:block space-y-1 md:space-y-1.5 pt-0 md:pt-2">
          <h3 className="text-sm sm:text-lg xl:text-[21px] font-semibold sm:font-bold text-[#141f10] tracking-tight font-display leading-tight">
            {option.title}
          </h3>
          <p className="text-xs xl:text-[13px] text-[#141f10]/75 font-medium leading-snug sm:leading-relaxed mt-0.5 md:mt-1">
            {option.description}
          </p>
        </div>
      </button>
    )
  }

  return (
    <section
      id="how-can-i-help"
      data-screen="true"
      className="relative w-full min-h-[100dvh] md:min-h-fit lg:min-h-[660px] lg:h-screen bg-[#7BC943] border-b border-[#6eb53c] flex items-center justify-center overflow-hidden z-10 scroll-mt-0 py-16 md:py-8 lg:py-0"
    >
      {/* Studio depth lighting overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/12 rounded-full blur-3xl" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-30 max-w-[1360px] mx-auto w-full px-4 sm:px-8 lg:px-8 py-0 lg:py-14 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start lg:items-center">
          
          {/* LEFT COLUMN: Section Title at UPSIDE */}
          <div className="lg:col-span-4 xl:col-span-4 text-left flex flex-col items-start space-y-3 sm:space-y-4 w-full max-w-none">
            {/* Title moved to UPSIDE */}
            <div className="-mt-1 sm:-mt-8 lg:-mt-16 xl:-mt-22 mb-2 sm:mb-6 w-full max-w-none">
              <h2
                className="text-4xl sm:text-6xl lg:text-[76px] xl:text-[92px] 2xl:text-[104px] font-normal tracking-tight text-[#141f10] leading-[0.96] sm:leading-[0.92] select-none w-full max-w-none"
                style={{ fontFamily: '"DM Serif Display", serif' }}
              >
                <span className="whitespace-nowrap block">How Can I</span>
                <span className="whitespace-nowrap block">Help You?</span>
              </h2>

              <p className="mt-2.5 sm:mt-6 text-sm sm:text-lg xl:text-[19px] text-[#141f10]/85 font-normal leading-relaxed max-w-sm xl:max-w-md">
                From AI consulting and content creation to workshops and business automation, I help people understand AI, discover practical solutions, and turn ideas into real-world products.
              </p>
            </div>
          </div>

          {/* MIDDLE SPACER: 4 columns to guarantee complete clearance for Suhail's centered portrait */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-4 pointer-events-none" />

          {/* RIGHT COLUMN: 4 Plain White Glassy Square Cards in Alternating Staggered 2-Column Grid */}
          <div className="lg:col-span-4 xl:col-span-4 text-left flex flex-col items-start lg:items-end space-y-4 w-full">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 xl:gap-4 items-start w-full">
              {/* Column 1: Card 1 (Learn AI) & Card 3 (Workshops & Speaking) */}
              <div className="flex flex-col gap-2.5 sm:gap-3.5 xl:gap-4 -mt-1 sm:-mt-8 lg:-mt-14 xl:-mt-18">
                {renderCard(firstColumnOptions[0], 'w-full sm:w-[195px] xl:w-[220px] 2xl:w-[235px]')}
                {renderCard(firstColumnOptions[1], 'w-full sm:w-[195px] xl:w-[220px] 2xl:w-[235px]')}
              </div>

              {/* Column 2 (Staggered Offset): Card 2 (Solve a Business Problem) & Card 4 (Collaborate With Me) */}
              <div className="flex flex-col gap-2.5 sm:gap-3.5 xl:gap-4 mt-4 sm:mt-0 pt-0 sm:pt-6 xl:pt-10">
                {renderCard(secondColumnOptions[0], 'w-full sm:w-[195px] xl:w-[220px] 2xl:w-[235px]')}
                {renderCard(secondColumnOptions[1], 'w-full sm:w-[195px] xl:w-[220px] 2xl:w-[235px]')}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
