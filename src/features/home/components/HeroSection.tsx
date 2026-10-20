import { ArrowUpRight, Users, Briefcase } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'

export function HeroSection() {
  const { openConsultationModal, openSessionEnquiryModal } = useAppStore()

  return (
    <section className="relative w-full pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 border-b border-[#E8DCBD] bg-[#FAF5E8]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Coherent Editorial Text Block */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-7">
            {/* Professional Roles & Identity */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#F3EBD6] border border-[#E5D9BB] text-xs font-mono uppercase tracking-wider text-[#6E3F05]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC6F00]" />
                <span>AI Transformation & Executive Training</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium text-[#72450C]">
                <span className="font-semibold text-[#4D2A00]">{SITE_CONFIG.name}</span>
                <span className="text-[#CC6F00]">•</span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-[#CC6F00]" />
                  <span>Co-founder & COO, Ailutions</span>
                </span>
                <span className="text-[#CC6F00]">•</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#7BC943]" />
                  <span>Creator, Kochu.ai</span>
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[44px] min-[400px]:text-[50px] sm:text-[64px] lg:text-[72px] xl:text-[80px] font-serif font-normal text-[#4D2A00] leading-[1.02] tracking-tight">
              I’ll help you use AI <br />
              <span className="italic text-[#CC6F00]">everywhere.</span>
            </h1>

            {/* Supporting Sentences */}
            <div className="space-y-3 max-w-xl">
              <p className="text-[17px] sm:text-[19px] text-[#4D2A00] font-normal leading-[1.58]">
                {SITE_CONFIG.supportingSentence}
              </p>
              <p className="text-[15px] sm:text-[16px] text-[#72450C] font-normal leading-[1.6]">
                {SITE_CONFIG.credibilitySentence}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={openConsultationModal}
                rightIcon={<ArrowUpRight className="w-4 h-4 text-[#4D2A00]" />}
              >
                Book a Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openSessionEnquiryModal('Corporate & Leadership')}
                leftIcon={<Users className="w-4 h-4 text-[#CC6F00]" />}
              >
                Train Your Team
              </Button>
            </div>

            {/* Small supporting credential line */}
            <div className="pt-2 text-xs text-[#72450C] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CC6F00]" />
              <span>Advisory & hands-on workshops across UAE, GCC, India, and remote teams.</span>
            </div>
          </div>

          {/* Right Column: Professional Portrait in Natural Proportions */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-none">
              {/* Subtle background frame panel */}
              <div className="relative rounded-[10px] overflow-hidden bg-[#F3EBD6] border border-[#E8DCBD] shadow-sm">
                <img
                  src="/images/kochu-portrait.png"
                  alt="Suhail Abdulatif — AI Transformation Consultant"
                  className="w-full h-auto max-h-[580px] object-cover object-top select-none pointer-events-none"
                  loading="eager"
                />
                
                {/* Subtle caption badge at bottom */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-[6px] bg-[#FAF5E8]/90 backdrop-blur-sm border border-[#E8DCBD] text-left">
                  <p className="text-xs font-semibold text-[#4D2A00]">
                    Suhail Abdulatif
                  </p>
                  <p className="text-[11px] text-[#72450C]">
                    Co-founder & COO of Ailutions • Creator of Kochu.ai
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
