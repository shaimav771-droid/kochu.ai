import { ArrowUpRight, Users, Briefcase, Calendar, Mic, CheckCircle2 } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function WorkWithMePage() {
  const {
    openConsultationModal,
    openSessionEnquiryModal,
    openAilutionsModal,
  } = useAppStore()

  const engagementTypes = [
    {
      id: 'consultation',
      title: 'Strategic Consultation & Advisory',
      badge: '1-on-1 or Executive Committee',
      icon: Calendar,
      desc: 'High-level advisory for founders, CEOs, and business heads evaluating where AI creates real competitive advantage and where it is a distraction.',
      deliverables: [
        'Strategic readiness & risk assessment',
        'Identification of high-leverage workflows',
        'Vendor & model evaluation (avoiding lock-in)',
        'Implementation roadmap and resource planning',
      ],
      primaryAction: 'Book a Consultation',
      onAction: openConsultationModal,
    },
    {
      id: 'training',
      title: 'Corporate & Team Training',
      badge: 'Workforces & Management',
      icon: Users,
      desc: 'Customized, hands-on workshops built directly around the day-to-day work employees already do—eliminating friction and standardizing AI skills.',
      deliverables: [
        'Role-specific prompts and structured templates',
        'Automated document, synthesis, and research workflows',
        'Hands-on interactive exercises with real company tasks',
        'Follow-up Q&A and practical reference materials',
      ],
      primaryAction: 'Enquire About Team Training',
      onAction: () => openSessionEnquiryModal('Corporate & Team Training'),
    },
    {
      id: 'speaking',
      title: 'Keynote & Event Speaking',
      badge: 'Conferences & Summits',
      icon: Mic,
      desc: 'Energetic, practical, and hype-free presentations on the realities of AI transformation, business operations, and the future of work.',
      deliverables: [
        'Customized keynote tailored to event theme',
        'Live demonstrations of real-world workflows',
        'Clear, accessible language (English or Malayalam)',
        'Audience Q&A and interactive engagement',
      ],
      primaryAction: 'Enquire About Speaking',
      onAction: () => openSessionEnquiryModal('Keynote & Speaking'),
    },
    {
      id: 'enterprise',
      title: 'Enterprise Transformation via Ailutions',
      badge: 'Organisational Implementation',
      icon: Briefcase,
      desc: 'End-to-end organizational adoption through our 90-Day Implementation Programme, auditing existing bottlenecks and training internal AI Champions.',
      deliverables: [
        'Comprehensive workflow & task audit',
        'Implementation of agreed automations',
        'Internal AI Champions certification',
        'Post-rollout retention and continuous handover',
      ],
      primaryAction: 'Discuss With Ailutions',
      onAction: openAilutionsModal,
    },
  ]

  return (
    <div className="w-full bg-[#FAF5E8] py-12 sm:py-16 lg:py-20 text-left">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#F2A900]/20 border border-[#F2A900]/40 text-xs font-mono uppercase tracking-wider text-[#4D2A00] font-semibold">
            <span>Engagement Models</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#4D2A00] tracking-tight leading-[1.08]">
            Work with Suhail Abdulatif.
          </h1>
          <p className="text-lg sm:text-xl text-[#72450C] leading-relaxed">
            From strategic advisory sessions for leadership to company-wide training workshops, choose the format that fits your organization’s immediate needs.
          </p>
        </div>

        {/* 4 Distinct Engagement Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {engagementTypes.map((eng) => {
            const Icon = eng.icon

            return (
              <div
                key={eng.id}
                id={eng.id}
                className="p-8 sm:p-10 rounded-[10px] bg-[#FFFDF8] border border-[#E8DCBD] shadow-2xs hover:border-[#CC6F00] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-[4px] bg-[#F4ECDA] text-[#6E4413] font-semibold">
                      {eng.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#CC6F00]" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#4D2A00] tracking-tight">
                    {eng.title}
                  </h3>

                  <p className="text-[15px] sm:text-[16px] text-[#72450C] leading-[1.65]">
                    {eng.desc}
                  </p>

                  <div className="pt-2 space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#4D2A00] font-semibold block">
                      What is included:
                    </span>
                    <ul className="space-y-2">
                      {eng.deliverables.map((del) => (
                        <li key={del} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4D2A00]/85">
                          <CheckCircle2 className="w-4 h-4 text-[#CC6F00] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-[#E8DCBD]">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={eng.onAction}
                    rightIcon={<ArrowUpRight className="w-4 h-4 text-[#4D2A00]" />}
                    className="w-full sm:w-auto"
                  >
                    {eng.primaryAction}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process & Principles Banner */}
        <div className="p-8 sm:p-10 rounded-[10px] bg-[#F4ECDA] border border-[#E5D9BB] space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#6E4413] font-semibold block">
            How Every Engagement Operates
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#4D2A00]">
            Ground rules for all advisory and training work:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-sm text-[#72450C]">
            <div className="space-y-1.5">
              <span className="font-semibold text-[#4D2A00] block">1. No Theoretical Demos</span>
              <p className="text-xs leading-relaxed">Every session uses real company tasks, templates, and problems rather than scripted toy examples.</p>
            </div>
            <div className="space-y-1.5">
              <span className="font-semibold text-[#4D2A00] block">2. Model-Agnostic Advice</span>
              <p className="text-xs leading-relaxed">We recommend tools that solve the specific problem cleanly, avoiding vendor hype and lock-in.</p>
            </div>
            <div className="space-y-1.5">
              <span className="font-semibold text-[#4D2A00] block">3. Clear Next Steps</span>
              <p className="text-xs leading-relaxed">Every consultation ends with documented, prioritized recommendations your team can execute immediately.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
