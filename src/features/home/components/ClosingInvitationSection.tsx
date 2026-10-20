import { ArrowUpRight, Users, Briefcase, Star } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function ClosingInvitationSection() {
  const {
    openConsultationModal,
    openSessionEnquiryModal,
    openClubModal,
    openAilutionsModal,
  } = useAppStore()

  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 bg-[#FAF5E8] border-b border-[#E8DCBD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#F2A900]/20 border border-[#F2A900]/40 text-xs font-mono uppercase tracking-wider text-[#4D2A00] font-semibold">
            <span>Next Steps</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#4D2A00] tracking-tight leading-[1.08]">
            Let’s make AI useful <br className="hidden sm:inline" />
            <span className="italic text-[#CC6F00]">for you and your team.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#72450C] max-w-xl mx-auto leading-relaxed">
            From strategic advisory for leadership to practical workflow adoption across your business, let’s explore how to create measurable leverage.
          </p>

          {/* Primary Action Priority: Consultation */}
          <div className="pt-4 flex justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={openConsultationModal}
              rightIcon={<ArrowUpRight className="w-5 h-5 text-[#4D2A00]" />}
              className="text-base px-8 py-4 shadow-sm"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Distinct Secondary Pathways with Clear Typography */}
          <div className="pt-8 border-t border-[#E8DCBD] mt-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#72450C] font-semibold block mb-4">
              Other tailored engagement routes
            </span>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              <button
                type="button"
                onClick={() => openSessionEnquiryModal('Corporate & Leadership')}
                className="inline-flex items-center gap-1.5 font-medium text-[#4D2A00] hover:text-[#CC6F00] transition-colors cursor-pointer py-1"
              >
                <Users className="w-4 h-4 text-[#CC6F00]" />
                <span>Discuss Team Training</span>
              </button>

              <span className="text-[#CC6F00] hidden sm:inline">•</span>

              <button
                type="button"
                onClick={openClubModal}
                className="inline-flex items-center gap-1.5 font-medium text-[#4D2A00] hover:text-[#CC6F00] transition-colors cursor-pointer py-1"
              >
                <Star className="w-4 h-4 text-[#CC6F00]" />
                <span>Enquire About 1% AI Club</span>
              </button>

              <span className="text-[#CC6F00] hidden sm:inline">•</span>

              <button
                type="button"
                onClick={openAilutionsModal}
                className="inline-flex items-center gap-1.5 font-medium text-[#4D2A00] hover:text-[#CC6F00] transition-colors cursor-pointer py-1"
              >
                <Briefcase className="w-4 h-4 text-[#CC6F00]" />
                <span>Connect With Ailutions</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
