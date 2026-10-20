import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function BusinessImpactPage() {
  const { openConsultationModal } = useAppStore()

  const caseStudies = [
    {
      id: 'maps-and-vogs',
      organisation: 'MAPS AND VOGS',
      category: 'Boutique Luxury Travel Agency',
      about:
        'A high-end travel consultancy crafting bespoke, multi-country holiday itineraries and custom PDF presentation decks for discerning travelers.',
      need:
        'Employees were dedicating 3 to 4 hours per client researching destination options, writing narrative descriptions, and manually laying out presentation-style PDF proposal decks.',
      delivery:
        'Suhail conducted multi-tier practical team training, helping employees establish modular prompt templates, itinerary generation frameworks, and standardized document structures.',
      outcome:
        'Deck preparation turnaround was reduced from approximately 3–4 hours down to around five minutes for the specific deck-preparation workflow. Crucially, all flight bookings, hotel availability checks, direct vendor communications, and bespoke travel verifications continue to be thoroughly executed by human travel consultants.',
      metric: '3–4 Hours → ~5 Minutes (Proposal Deck Workflow)',
      tag: 'Workflow Automation & Prompt Architecture',
    },
    {
      id: 'nesto',
      organisation: 'NESTO Supermarket & Hypermarket Group',
      category: 'Multinational Retail & Hypermarkets',
      about:
        'A prominent retail conglomerate operating large-scale hypermarket networks across the GCC and India, managing extensive supply chains and multi-departmental teams.',
      need:
        'Executive leadership needed clarity on where artificial intelligence was commercially applicable to retail oversight, inventory planning, and management coordination without falling into vendor hype.',
      delivery:
        'Suhail delivered targeted executive AI training to approximately 15–18 C-level and senior corporate executives. The curriculum was built entirely around executive decision-making, operational review workflows, and identifying high-leverage organizational adoption opportunities.',
      outcome:
        'Demystified AI capabilities for corporate decision-makers, giving leadership a shared framework for evaluating department AI proposals and integrating practical tools into executive routines.',
      metric: '15–18 C-Suite & Senior Leaders Trained',
      tag: 'Executive AI Literacy & Strategic Alignment',
    },
    {
      id: 'sabco',
      organisation: 'SABCO Packaging & Containers',
      category: 'Industrial Packaging & Manufacturing Supplier',
      about:
        'A leading supplier and manufacturer of customized packaging solutions, including specialized industrial bottles and commercial containers.',
      need:
        'Management sought to enhance everyday operational efficiency across senior and middle-level staff who manage vendor inquiries, specifications, and internal coordination.',
      delivery:
        'Suhail conducted practical AI awareness sessions and hands-on operational workshops, training employees to deploy AI tools for technical correspondence, specification synthesis, and communication workflows.',
      outcome:
        'Employees gained confidence using AI tools for daily professional responsibilities, reducing routine drafting delays and standardizing inquiry responses.',
      metric: 'Senior & Middle-Level Operational Enablement',
      tag: 'Operational Workforce Training',
    },
    {
      id: 'mif-capital',
      organisation: 'MIF CAPITAL',
      category: 'Capital Funding, Imports, Exports & Trading',
      about:
        'A UAE-based corporate group engaged in capital funding initiatives, commercial investments, and international import/export trading operations.',
      need:
        'Employees and management required practical methods to synthesize diverse market data, assess cross-border trading documents, and accelerate everyday communication.',
      delivery:
        'Suhail trained team members and executive leadership to apply LLM reasoning and document-analysis workflows directly to trade correspondence, financial data review, and everyday administrative responsibilities.',
      outcome:
        'Empowered executives and staff to analyze complex commercial documentation rapidly, establishing a foundation for everyday AI use across international operations.',
      metric: 'Enterprise-Wide Commercial Synthesis',
      tag: 'Cross-Border Trading & Analysis Enablement',
    },
  ]

  return (
    <div className="w-full bg-[#FAF5E8] py-12 sm:py-16 lg:py-20 text-left">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#F2A900]/20 border border-[#F2A900]/40 text-xs font-mono uppercase tracking-wider text-[#4D2A00] font-semibold">
            <span>Verified Case Engagements</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#4D2A00] tracking-tight leading-[1.08]">
            Business Impact & Client Work.
          </h1>
          <p className="text-lg sm:text-xl text-[#72450C] leading-relaxed">
            Real corporate engagements where Suhail Abdulatif delivered executive advisory, workforce enablement, and workflow transformation.
          </p>
        </div>

        {/* In-Depth Case Studies */}
        <div className="space-y-10 sm:space-y-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              id={cs.id}
              className="p-8 sm:p-10 lg:p-12 rounded-[10px] bg-[#FFFDF8] border border-[#E8DCBD] shadow-2xs space-y-6"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#E8DCBD]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#CC6F00] font-semibold block">
                    {cs.tag}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#4D2A00] mt-1">
                    {cs.organisation}
                  </h2>
                  <p className="text-xs text-[#72450C] font-mono mt-0.5">
                    {cs.category}
                  </p>
                </div>

                <div className="p-3 sm:px-4 sm:py-2 rounded-[6px] bg-[#F4ECDA] border border-[#E5D9BB] shrink-0">
                  <span className="text-xs font-mono uppercase text-[#6E4413] font-semibold block">
                    Key Highlight
                  </span>
                  <span className="text-sm font-semibold text-[#4D2A00]">
                    {cs.metric}
                  </span>
                </div>
              </div>

              {/* 4 Core Pillars of Each Engagement */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-sm sm:text-[15px] text-[#72450C] leading-[1.65]">
                <div className="space-y-2">
                  <span className="font-semibold text-[#4D2A00] block text-xs font-mono uppercase tracking-wider">
                    1. The Organisation
                  </span>
                  <p>{cs.about}</p>
                </div>

                <div className="space-y-2">
                  <span className="font-semibold text-[#4D2A00] block text-xs font-mono uppercase tracking-wider">
                    2. The Challenge & Need
                  </span>
                  <p>{cs.need}</p>
                </div>

                <div className="space-y-2">
                  <span className="font-semibold text-[#4D2A00] block text-xs font-mono uppercase tracking-wider">
                    3. What Suhail Delivered
                  </span>
                  <p>{cs.delivery}</p>
                </div>

                <div className="space-y-2">
                  <span className="font-semibold text-[#4D2A00] block text-xs font-mono uppercase tracking-wider">
                    4. Operational Outcome
                  </span>
                  <p>{cs.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evidence & Integrity Note */}
        <div className="p-6 sm:p-8 rounded-[8px] bg-[#F4ECDA] border border-[#E5D9BB] flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-[#CC6F00] shrink-0 mt-1" />
          <div className="space-y-1.5 text-xs sm:text-sm text-[#72450C]">
            <h3 className="font-serif font-semibold text-[#4D2A00] text-base">
              Commitment to Factual Reporting
            </h3>
            <p className="leading-relaxed">
              Every client story documented above represents verified engagements delivered by Suhail Abdulatif. We do not invent arbitrary percentage gains, fabricate revenue multiples, or claim shared outcomes without explaining exact contribution.
            </p>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="p-8 sm:p-10 rounded-[10px] bg-[#4D2A00] text-[#FAF5E8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F9E6A8]">
              Ready to create measurable leverage in your business?
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF5E8]/80 leading-relaxed">
              Let’s audit your team’s repetitive workflows and map out a practical implementation plan.
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            onClick={openConsultationModal}
            rightIcon={<ArrowUpRight className="w-4 h-4 text-[#4D2A00]" />}
            className="shrink-0"
          >
            Book a Consultation
          </Button>
        </div>

      </div>
    </div>
  )
}
