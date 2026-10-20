import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function AilutionsTransformationSection() {
  const { openAilutionsModal } = useAppStore()

  const adoptionSteps = [
    { number: '01', title: 'Understanding existing work', desc: 'Audit workflows and document where manual time is actually spent.' },
    { number: '02', title: 'Identifying useful opportunities', desc: 'Target practical, low-friction use cases with clear day-to-day value.' },
    { number: '03', title: 'Training people', desc: 'Deliver role-specific training built around the tasks employees perform.' },
    { number: '04', title: 'Implementing agreed workflows', desc: 'Configure structured prompt systems, automations, and guidelines.' },
    { number: '05', title: 'Building internal capability', desc: 'Equip internal AI Champions to support colleagues and drive retention.' },
    { number: '06', title: 'Supporting adoption and handover', desc: 'Refine workflows post-launch and transition ownership smoothly.' },
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FAF5E8] border-b border-[#E8DCBD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-left">
        
        {/* Header Block */}
        <div className="max-w-2xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#CC6F00] font-semibold">
            <span>Enterprise Implementation by Ailutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-[#4D2A00] tracking-tight leading-[1.12]">
            Help your team move from trying AI to using it.
          </h2>
          <p className="text-[17px] text-[#72450C] font-normal leading-[1.6]">
            Most companies have tested chatbots; very few have turned AI into reliable everyday work habits. Ailutions bridges the gap between strategy and employee adoption.
          </p>
        </div>

        {/* 6-Step Structured Adoption Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {adoptionSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-[8px] bg-[#FFFDF8] border border-[#E8DCBD] space-y-2.5"
            >
              <span className="text-xs font-mono font-semibold text-[#CC6F00]">
                {step.number}
              </span>
              <h3 className="text-lg font-serif text-[#4D2A00]">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#72450C] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Banner: The 90-Day Programme & AI Champions */}
        <div className="p-8 sm:p-10 rounded-[10px] bg-[#F4ECDA] border border-[#E5D9BB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-[4px] bg-[#4D2A00] text-[#F9E6A8] font-medium">
                  Flagship Enterprise Offer
                </span>
                <span className="text-xs text-[#6E4413] font-mono">
                  The 90-Day Implementation Programme
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#4D2A00]">
                Sustainable adoption through Internal AI Champions
              </h3>

              <p className="text-sm sm:text-base text-[#72450C] leading-relaxed max-w-2xl">
                True organizational change requires internal leadership. Within the 90-Day Programme, we identify and equip <strong>AI Champions</strong>—key team members trained deeply to support colleagues, answer everyday questions, and ensure ongoing adoption after rollout.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#4D2A00] pt-1">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#CC6F00]" />
                  <span>Audited workflow implementation</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#CC6F00]" />
                  <span>Permanent internal champions</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#CC6F00]" />
                  <span>Structured handover & documentation</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#E5D9BB] lg:pl-8">
              <Button
                variant="primary"
                size="lg"
                onClick={openAilutionsModal}
                rightIcon={<ArrowUpRight className="w-4 h-4 text-[#4D2A00]" />}
                className="w-full sm:w-auto"
              >
                Discuss Your Business With Ailutions
              </Button>
              <span className="text-xs text-[#6E4413] text-left lg:text-right">
                Explore an adoption roadmap scoped to your company’s workflow.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
