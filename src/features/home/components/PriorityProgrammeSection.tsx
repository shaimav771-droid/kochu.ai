import { ArrowUpRight, Star, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function PriorityProgrammeSection() {
  const { openClubModal } = useAppStore()

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FAF5E8] border-b border-[#E8DCBD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-left">
        
        {/* Editorial Container with Warm Restrained Tones */}
        <div className="relative rounded-[12px] bg-[#FFFDF8] border-2 border-[#E8DCBD] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-sm">
          {/* Subtle Corner Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E8DCBD]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#F2A900]/20 border border-[#F2A900]/40 text-xs font-mono uppercase tracking-wider text-[#4D2A00] font-semibold">
              <Star className="w-3.5 h-3.5 text-[#CC6F00] fill-[#CC6F00]" />
              <span>Priority Flagship Programme</span>
            </div>

            <span className="text-xs font-mono text-[#72450C]">
              Admissions by Application • Limited Cohort Size
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-8 sm:pt-10 items-center">
            
            {/* Left Column: Programme Information */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-sm font-mono uppercase tracking-wider text-[#CC6F00] font-semibold block">
                  Curated Mastery Cohort
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#4D2A00] tracking-tight leading-[1.08]">
                  The 1% AI Club
                </h2>
                <p className="text-lg sm:text-xl font-serif italic text-[#CC6F00]">
                  Practical, high-leverage AI capability for founders, leaders, and operators.
                </p>
              </div>

              <div className="space-y-3 text-[15px] sm:text-[16px] text-[#72450C] leading-[1.65]">
                <p>
                  The 1% AI Club is Suhail’s premier learning and advisory environment, created for individuals and business leaders who want to move beyond superficial chatbot questions into real operational advantage.
                </p>
                <p>
                  Sessions focus on real execution: autonomous agents, structured prompting architectures, custom automation pipelines, and applying modern AI systems directly to your commercial output.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4D2A00]">
                  <ShieldCheck className="w-4 h-4 text-[#CC6F00] shrink-0 mt-0.5" />
                  <span>Hands-on implementation over theory</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4D2A00]">
                  <ShieldCheck className="w-4 h-4 text-[#CC6F00] shrink-0 mt-0.5" />
                  <span>Curated peer group of entrepreneurs & leaders</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4D2A00]">
                  <ShieldCheck className="w-4 h-4 text-[#CC6F00] shrink-0 mt-0.5" />
                  <span>Direct feedback from Suhail Abdulatif</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4D2A00]">
                  <ShieldCheck className="w-4 h-4 text-[#CC6F00] shrink-0 mt-0.5" />
                  <span>Production-tested templates & prompt systems</span>
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
                <span className="text-xs text-[#72450C] sm:max-w-xs leading-normal">
                  Receive verified curriculum details and cohort application schedule directly.
                </span>
              </div>
            </div>

            {/* Right Column: Visual Summary Card */}
            <div className="lg:col-span-5 p-7 sm:p-9 rounded-[8px] bg-[#F4ECDA] border border-[#E5D9BB] space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E4413] font-semibold block">
                  Programme Distinction
                </span>
                <h3 className="text-xl font-serif text-[#4D2A00]">
                  Separate from Enterprise Delivery
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#72450C] leading-relaxed">
                The <strong>1% AI Club</strong> is built for ambitious individual entrepreneurs and executives seeking deep personal mastery. For turnkey company-wide implementation, refer to the <strong>90-Day Programme by Ailutions</strong>.
              </p>

              <div className="p-4 rounded-[6px] bg-[#FFFDF8] border border-[#E8DCBD] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4D2A00]">
                  <Sparkles className="w-3.5 h-3.5 text-[#CC6F00]" />
                  <span>Who This Is Built For</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#72450C]">
                  <li>• Established business owners expanding operational leverage.</li>
                  <li>• Senior executives looking to stay ahead of company AI adoption.</li>
                  <li>• High-performing professionals modernizing their everyday workflow.</li>
                </ul>
              </div>

              <div className="pt-2 text-xs font-mono text-[#6E4413]">
                Admission is limited to ensure meaningful participation.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
