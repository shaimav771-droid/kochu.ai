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

  // Mobile options arrangement (kept intact as previously tuned)
  const mobileCol1 = [SERVICE_OPTIONS[0], SERVICE_OPTIONS[2]] // Learn AI, Workshops & Speaking
  const mobileCol2 = [SERVICE_OPTIONS[1], SERVICE_OPTIONS[3]] // Solve a Business Problem, Collaborate With Me

  // Desktop options arrangement (EXACTLY matching Photo 2):
  // Column 1 (Left, higher): Solve a Business Problem, Collaborate With Me
  // Column 2 (Right, staggered down): Learn AI, Workshops & Speaking
  const desktopCol1 = [SERVICE_OPTIONS[1], SERVICE_OPTIONS[3]]
  const desktopCol2 = [SERVICE_OPTIONS[0], SERVICE_OPTIONS[2]]

  const renderMobileCard = (
    option: ServiceOption,
    sizeClasses = 'w-full sm:w-[195px]'
  ) => {
    const PictureComponent = option.ColorPicture
    return (
      <button
        key={option.id}
        type="button"
        onClick={() => handleAction(option)}
        className={`${sizeClasses} h-auto min-h-[215px] min-[380px]:min-h-[240px] sm:min-h-[265px] text-left bg-white/85 hover:bg-white/95 active:bg-white backdrop-blur-2xl rounded-[22px] min-[380px]:rounded-[26px] p-4.5 min-[380px]:p-5.5 sm:p-6 border border-white/90 shadow-[0_16px_36px_-10px_rgba(20,31,16,0.18)] transition-all duration-300 group cursor-pointer flex flex-col justify-between gap-3.5 focus:outline-none focus:ring-2 focus:ring-[#141f10]/30`}
      >
        <div className="flex flex-col justify-between h-full w-full gap-3.5">
          <div className="w-11 h-11 min-[380px]:w-12 min-[380px]:h-12 shrink-0 flex items-center justify-start group-hover:scale-105 transition-transform duration-300">
            <PictureComponent className="w-full h-full object-contain filter drop-shadow-sm" />
          </div>
          <div className="space-y-1.5 min-[380px]:space-y-2 flex-1 flex flex-col justify-end">
            <h3 className="text-[17.5px] min-[380px]:text-[19.5px] sm:text-xl font-bold text-[#141f10] tracking-tight font-display leading-snug">
              {option.title}
            </h3>
            <p className="text-[13px] min-[380px]:text-[14px] sm:text-sm text-[#141f10]/80 font-medium leading-relaxed">
              {option.description}
            </p>
          </div>
        </div>
      </button>
    )
  }

  const renderDesktopCard = (option: ServiceOption) => {
    const PictureComponent = option.ColorPicture
    return (
      <button
        key={option.id}
        type="button"
        onClick={() => handleAction(option)}
        className="w-[205px] xl:w-[230px] 2xl:w-[250px] aspect-square text-left bg-[#edf6e8] hover:bg-white active:bg-white rounded-[26px] xl:rounded-[30px] p-4.5 xl:p-5.5 shadow-[0_12px_32px_rgba(20,31,16,0.1)] hover:shadow-[0_20px_40px_rgba(20,31,16,0.18)] transition-all duration-300 group cursor-pointer flex flex-col justify-start hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#141f10]/30"
      >
        {/* Top Icon */}
        <div className="w-11 h-11 xl:w-13 xl:h-13 shrink-0 flex items-center justify-start group-hover:scale-105 transition-transform duration-300">
          <PictureComponent className="w-full h-full object-contain filter drop-shadow-sm" />
        </div>

        {/* Content Flow matching Photo 2 */}
        <div className="mt-3.5 xl:mt-4 space-y-1.5 xl:space-y-2">
          <h3 className="text-[17.5px] xl:text-[19.5px] font-bold text-[#141f10] tracking-tight font-display leading-[1.2]">
            {option.title}
          </h3>
          <p className="text-[12.5px] xl:text-[13px] text-[#141f10]/75 font-normal leading-[1.4]">
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
      className="relative w-full min-h-[100dvh] md:min-h-fit lg:min-h-[660px] lg:h-screen bg-[#7BC943] border-b border-[#6eb53c] flex flex-col justify-start md:justify-center items-center overflow-hidden z-10 scroll-mt-0 pt-7 sm:pt-10 pb-10 sm:pb-14 md:py-8 lg:py-0"
    >
      {/* Studio depth lighting overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/12 rounded-full blur-3xl" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-30 max-w-[1360px] mx-auto w-full px-5 sm:px-8 lg:px-8 py-0 lg:py-14 my-0 md:my-auto flex-1 flex flex-col justify-start md:block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-8 items-start lg:items-center">
          
          {/* LEFT COLUMN: Section Title at Top-Left on mobile */}
          <div className="lg:col-span-4 xl:col-span-4 text-left flex flex-col items-start space-y-2 sm:space-y-4 w-full max-w-none">
            <div className="mt-0 sm:-mt-8 lg:-mt-14 xl:-mt-20 mb-1.5 sm:mb-4 w-full max-w-none">
              <h2
                className="text-[36px] min-[360px]:text-[40px] sm:text-6xl lg:text-[68px] xl:text-[84px] 2xl:text-[96px] font-normal tracking-tight text-[#141f10] leading-[0.96] sm:leading-[0.92] select-none w-full max-w-none"
                style={{ fontFamily: '"DM Serif Display", serif' }}
              >
                <span className="whitespace-nowrap block">How Can I</span>
                <span className="whitespace-nowrap block">Help You?</span>
              </h2>

              {/* Description placed under title with dedicated breathing space and enlarged text size */}
              <p className="mt-3 min-[380px]:mt-4 sm:mt-6 text-[15px] min-[380px]:text-[16px] sm:text-lg xl:text-[18px] text-[#141f10]/90 font-medium sm:font-normal leading-relaxed max-w-sm xl:max-w-md">
                From AI consulting and content creation to workshops and business automation, I help people understand AI, discover practical solutions, and turn ideas into real-world products.
              </p>
            </div>
          </div>

          {/* MIDDLE SPACER: 3 columns for Suhail's centered portrait */}
          <div className="hidden lg:block lg:col-span-3 xl:col-span-3 pointer-events-none" />

          {/* RIGHT COLUMN: 4 Plain White Glassy Square Cards in Alternating Staggered 2-Column Grid */}
          <div className="lg:col-span-5 xl:col-span-5 text-left flex flex-col items-start lg:items-end space-y-3 sm:space-y-4 w-full mt-7 min-[380px]:mt-9 sm:mt-11 lg:mt-0 pb-8 sm:pb-12 lg:pb-0">
            
            {/* MOBILE LAYOUT (< lg): Preserved exactly as tuned previously */}
            <div className="grid lg:hidden grid-cols-2 gap-3.5 sm:gap-4 items-start w-full">
              {/* Column 1: Card 1 (Learn AI) & Card 3 (Workshops & Speaking) */}
              <div className="flex flex-col gap-3.5 sm:gap-4 mt-0 sm:-mt-8">
                {renderMobileCard(mobileCol1[0], 'w-full sm:w-[195px]')}
                {renderMobileCard(mobileCol1[1], 'w-full sm:w-[195px]')}
              </div>

              {/* Column 2 (Staggered Offset): Card 2 (Solve a Business Problem) & Card 4 (Collaborate With Me) */}
              <div className="flex flex-col gap-3.5 sm:gap-4 mt-3.5 min-[380px]:mt-5 sm:mt-0 pt-0 sm:pt-6">
                {renderMobileCard(mobileCol2[0], 'w-full sm:w-[195px]')}
                {renderMobileCard(mobileCol2[1], 'w-full sm:w-[195px]')}
              </div>
            </div>

            {/* DESKTOP LAYOUT (lg+): Exactly matching Photo 2 */}
            <div className="hidden lg:grid grid-cols-2 gap-4 xl:gap-5 items-start max-w-fit ml-auto justify-end">
              {/* Desktop Column 1 (Left): Solve a Business Problem (top) & Collaborate With Me (bottom) */}
              <div className="flex flex-col gap-4 xl:gap-5 lg:-mt-2 xl:-mt-4">
                {renderDesktopCard(desktopCol1[0])}
                {renderDesktopCard(desktopCol1[1])}
              </div>

              {/* Desktop Column 2 (Right, staggered down): Learn AI (top) & Workshops & Speaking (bottom) */}
              <div className="flex flex-col gap-4 xl:gap-5 lg:pt-24 xl:pt-28 2xl:pt-32">
                {renderDesktopCard(desktopCol2[0])}
                {renderDesktopCard(desktopCol2[1])}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
