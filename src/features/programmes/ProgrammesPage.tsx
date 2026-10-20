import { ArrowUpRight, Star, Briefcase, CheckCircle2 } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function ProgrammesPage() {
  const { openClubModal, openAilutionsModal, openSessionEnquiryModal } = useAppStore()

  return (
    <div className="w-full bg-[#FAF5E8] py-12 sm:py-16 lg:py-20 text-left">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#F2A900]/20 border border-[#F2A900]/40 text-xs font-mono uppercase tracking-wider text-[#4D2A00] font-semibold">
            <span>Specialized Cohorts & Offerings</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#4D2A00] tracking-tight leading-[1.08]">
            Programmes & Immersions.
          </h1>
          <p className="text-lg sm:text-xl text-[#72450C] leading-relaxed">
            From premier individual mastery cohorts to full-scale company adoption programmes, explore our structured pathways.
          </p>
        </div>

        {/* 1. Priority Programme: 1% AI Club (Featured First) */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-[12px] bg-[#FFFDF8] border-2 border-[#E8DCBD] shadow-2xs space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8DCBD]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#F2A900]/20 text-[#4D2A00] font-semibold text-xs font-mono uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-[#CC6F00] fill-[#CC6F00]" />
              <span>Priority Flagship Programme</span>
            </div>
            <span className="text-xs font-mono text-[#72450C]">
              Individual Cohort • Applications Open
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#4D2A00] tracking-tight">
                  The 1% AI Club
                </h2>
                <p className="text-lg font-serif italic text-[#CC6F00]">
                  Advanced operational AI mastery for founders, executives, and high-agency operators.
                </p>
              </div>

              <div className="space-y-3 text-[15px] sm:text-[16px] text-[#72450C] leading-[1.65]">
                <p>
                  The 1% AI Club is Suhail’s premier immersion cohort designed for individuals determined to achieve true operational leverage with modern AI. Moving far past generic prompts, the curriculum teaches autonomous agent design, structured system instructions, code-augmented workflows, and multi-model deployment.
                </p>
                <p>
                  Members participate in structured sessions, hands-on reviews of real workflow bottlenecks, and direct strategic guidance from Suhail.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4D2A00]">
                  <CheckCircle2 className="w-4 h-4 text-[#CC6F00] shrink-0" />
                  <span>Curated, high-performing peer group</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4D2A00]">
                  <CheckCircle2 className="w-4 h-4 text-[#CC6F00] shrink-0" />
                  <span>Production-grade templates & prompt packs</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4D2A00]">
                  <CheckCircle2 className="w-4 h-4 text-[#CC6F00] shrink-0" />
                  <span>Direct feedback & workflow audits</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4D2A00]">
                  <CheckCircle2 className="w-4 h-4 text-[#CC6F00] shrink-0" />
                  <span>Lifetime access to vetted prompt blueprints</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={openClubModal}
                  rightIcon={<ArrowUpRight className="w-4 h-4 text-[#4D2A00]" />}
                >
                  Enquire About 1% AI Club
                </Button>
                <span className="text-xs text-[#72450C] leading-normal sm:max-w-xs">
                  Admissions are reviewed on a rolling basis. Inquire to receive confirmed cohort details.
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 sm:p-7 rounded-[8px] bg-[#F4ECDA] border border-[#E5D9BB] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6E4413] font-semibold block">
                Programme Focus
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#72450C]">
                <li>• <strong>Agents & Automations:</strong> Creating persistent multi-step pipelines.</li>
                <li>• <strong>Document & Data Synthesis:</strong> Extracting clean structured insights from unstructured files.</li>
                <li>• <strong>Commercial Scaling:</strong> Freeing executive bandwidth to focus on revenue and strategy.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Separate Enterprise Offer: The 90-Day Programme by Ailutions */}
        <div className="p-8 sm:p-12 rounded-[10px] bg-[#FFFDF8] border border-[#E8DCBD] shadow-2xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8DCBD]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#4D2A00] text-[#F9E6A8] font-semibold text-xs font-mono uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-[#F2A900]" />
              <span>Enterprise Delivery Offer</span>
            </div>
            <span className="text-xs font-mono text-[#72450C]">
              Organisation-Wide Turnkey Programme
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#4D2A00]">
                The 90-Day Implementation Programme (Ailutions)
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#72450C] leading-[1.65]">
                A deliberate, structured transformation engagement executed directly with your leadership team and operational departments. Over 90 days, we audit existing friction points, deploy agreed AI workflows, and train designated <strong>Internal AI Champions</strong> to ensure that modern AI becomes a lasting internal advantage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-[6px] bg-[#F4ECDA] space-y-1">
                  <span className="text-xs font-mono font-semibold text-[#CC6F00] block">Days 1–30</span>
                  <span className="text-xs font-semibold text-[#4D2A00] block">Audit & Scoping</span>
                  <p className="text-[11px] text-[#72450C]">Mapping tasks, repetitive costs, and priority workflows.</p>
                </div>
                <div className="p-4 rounded-[6px] bg-[#F4ECDA] space-y-1">
                  <span className="text-xs font-mono font-semibold text-[#CC6F00] block">Days 31–60</span>
                  <span className="text-xs font-semibold text-[#4D2A00] block">Team Training</span>
                  <p className="text-[11px] text-[#72450C]">Departmental workshops and workflow configuration.</p>
                </div>
                <div className="p-4 rounded-[6px] bg-[#F4ECDA] space-y-1">
                  <span className="text-xs font-mono font-semibold text-[#CC6F00] block">Days 61–90</span>
                  <span className="text-xs font-semibold text-[#4D2A00] block">Champions & Handover</span>
                  <p className="text-[11px] text-[#72450C]">Equipping internal champions to sustain long-term adoption.</p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={openAilutionsModal}
                  rightIcon={<ArrowUpRight className="w-4 h-4 text-[#4D2A00]" />}
                >
                  Discuss 90-Day Programme
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-[8px] bg-[#F4ECDA] border border-[#E5D9BB] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6E4413] font-semibold block">
                Key Distinction
              </span>
              <p className="text-xs text-[#72450C] leading-relaxed">
                The <strong>90-Day Programme</strong> is implemented through Ailutions for whole departments or companies. It is completely separate from the 1% AI Club, which serves individual leaders.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Confirmed Workshops & Masterclasses */}
        <div className="pt-8 border-t border-[#E8DCBD] space-y-6">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#CC6F00] font-semibold block">
              Focused Masterclasses
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#4D2A00]">
              Custom and on-demand workshops
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-[8px] bg-[#FFFDF8] border border-[#E8DCBD] space-y-3">
              <h3 className="font-serif text-xl text-[#4D2A00]">
                Executive AI Literacy Intensive
              </h3>
              <p className="text-xs sm:text-sm text-[#72450C] leading-relaxed">
                A focused half-day session tailored for board members and C-suite executives to understand what AI models can and cannot do, establishing governance and ROI priorities.
              </p>
              <button
                type="button"
                onClick={() => openSessionEnquiryModal('Executive Workshop')}
                className="text-xs font-semibold text-[#CC6F00] hover:underline cursor-pointer pt-2"
              >
                Enquire for your executive team →
              </button>
            </div>

            <div className="p-7 rounded-[8px] bg-[#FFFDF8] border border-[#E8DCBD] space-y-3">
              <h3 className="font-serif text-xl text-[#4D2A00]">
                Applied Team Automation Masterclass
              </h3>
              <p className="text-xs sm:text-sm text-[#72450C] leading-relaxed">
                A hands-on, multi-session workshop training marketing, sales, and operations teams to build practical automations, prompt chains, and CRM connectors.
              </p>
              <button
                type="button"
                onClick={() => openSessionEnquiryModal('Team Masterclass')}
                className="text-xs font-semibold text-[#CC6F00] hover:underline cursor-pointer pt-2"
              >
                Enquire for your company workforce →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
