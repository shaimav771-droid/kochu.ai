import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/lib/config/routes'
import { useAppStore } from '@/shared/lib/store/useAppStore'

interface EngagementRoute {
  id: string
  number: string
  title: string
  description: string
  actionLabel: string
  actionType: 'link' | 'modal'
  linkHref?: string
  modalAudience?: string
}

export function HowCanIHelpSection() {
  const { openSessionEnquiryModal } = useAppStore()

  const routes: EngagementRoute[] = [
    {
      id: 'train-team',
      number: '01',
      title: 'Train Your Leadership & Team',
      description:
        'Practical AI sessions for executives, managers, and employees, built around the work they actually do.',
      actionLabel: 'Explore Training',
      actionType: 'link',
      linkHref: `${ROUTES.WORK_WITH_ME}#training`,
    },
    {
      id: 'business-support',
      number: '02',
      title: 'Put AI to Work in Your Business',
      description:
        'Find useful opportunities, simplify repetitive work, and help your team adopt AI through Ailutions.',
      actionLabel: 'Explore Business Support',
      actionType: 'link',
      linkHref: ROUTES.BUSINESS_IMPACT,
    },
    {
      id: 'learn-programmes',
      number: '03',
      title: 'Learn With Me',
      description:
        'Explore the 1% AI Club, workshops, and practical ways to use AI in your work and life.',
      actionLabel: 'Explore Programmes',
      actionType: 'link',
      linkHref: ROUTES.PROGRAMMES,
    },
    {
      id: 'invite-speaking',
      number: '04',
      title: 'Invite Me to Speak',
      description:
        'Bring a practical conversation about AI to your business event, conference, or educational institution.',
      actionLabel: 'Enquire About a Session',
      actionType: 'modal',
      modalAudience: 'Speaking & Keynote',
    },
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FAF5E8] border-b border-[#E8DCBD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-left">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#CC6F00] font-semibold block">
            Engagement Routes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-[#4D2A00] tracking-tight leading-[1.12]">
            How can I help you?
          </h2>
          <p className="text-[17px] text-[#72450C] font-normal leading-[1.6]">
            Whether you need executive advisory, company-wide capability, or individual learning, choose the engagement that fits your goals.
          </p>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {routes.map((route) => {
            const isModal = route.actionType === 'modal'

            return (
              <div
                key={route.id}
                className="group relative p-7 sm:p-9 rounded-[8px] bg-[#FFFDF8] border border-[#E8DCBD] hover:border-[#CC6F00] transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-[#CC6F00]">
                      {route.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8DCBD] group-hover:bg-[#CC6F00] transition-colors" />
                  </div>

                  <h3 className="text-2xl sm:text-[26px] font-serif font-normal text-[#4D2A00] tracking-tight group-hover:text-[#CC6F00] transition-colors">
                    {route.title}
                  </h3>

                  <p className="text-[15px] sm:text-[16px] text-[#72450C] leading-[1.6] max-w-lg">
                    {route.description}
                  </p>
                </div>

                <div className="pt-6 sm:pt-8 mt-4 border-t border-[#E8DCBD]/60">
                  {isModal ? (
                    <button
                      type="button"
                      onClick={() => openSessionEnquiryModal(route.modalAudience)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4D2A00] group-hover:text-[#CC6F00] transition-colors cursor-pointer"
                    >
                      <span>{route.actionLabel}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#CC6F00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  ) : (
                    <Link
                      to={route.linkHref!}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4D2A00] group-hover:text-[#CC6F00] transition-colors cursor-pointer"
                    >
                      <span>{route.actionLabel}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#CC6F00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
