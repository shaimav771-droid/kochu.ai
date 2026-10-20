import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/lib/config/routes'

export function BusinessImpactSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FAF5E8] border-b border-[#E8DCBD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#CC6F00] font-semibold block">
              Documented Client Engagements
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-[#4D2A00] tracking-tight leading-[1.12]">
              AI training built around real work.
            </h2>
            <p className="text-[17px] text-[#72450C] font-normal leading-[1.6]">
              Real business engagements where AI training was anchored to everyday responsibilities rather than abstract demos.
            </p>
          </div>

          <Link
            to={ROUTES.BUSINESS_IMPACT}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4D2A00] hover:text-[#CC6F00] transition-colors shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-[#CC6F00]" />
          </Link>
        </div>

        {/* Featured Case Study: Maps and Vogs */}
        <div className="mb-10 p-8 sm:p-10 lg:p-12 rounded-[10px] bg-[#FFFDF8] border border-[#E8DCBD] shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Story narrative */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-[4px] bg-[#F2A900]/20 text-[#4D2A00] font-semibold">
                  Featured Operational Case
                </span>
                <span className="text-xs text-[#72450C] font-mono">
                  Bespoke Travel Agency • Workflow Optimization
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#4D2A00] tracking-tight">
                  MAPS AND VOGS: Streamlining Custom Itinerary & Proposal Decks
                </h3>
                <p className="text-sm text-[#72450C] mt-1">
                  Bespoke luxury travel agency creating tailored multi-destination itineraries and visual client presentations.
                </p>
              </div>

              <div className="space-y-3 text-[15px] sm:text-[16px] text-[#72450C] leading-[1.65]">
                <p>
                  <strong>The Operational Challenge:</strong> Employees were spending substantial time—typically 3 to 4 hours per client—manually gathering options, structuring day-by-day narratives, and formatting presentation-style PDF proposals.
                </p>
                <p>
                  <strong>What Suhail Delivered:</strong> Conducted practical, multi-level team training on structuring reusable prompt templates and operational skills tailored specifically to their client-intake formats.
                </p>
                <p>
                  <strong>The Measured Result:</strong> Proposal deck preparation time reduced from approximately 3–4 hours down to around five minutes for the specific deck-preparation workflow. (All hotel confirmations, bespoke itinerary verifications, and vendor reservations remain handled with human care).
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#4D2A00]">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#CC6F00]" />
                  <span>Reusable prompt architecture</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#CC6F00]" />
                  <span>Cross-tier employee adoption</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#CC6F00]" />
                  <span>Verified workflow time-savings</span>
                </span>
              </div>
            </div>

            {/* Impact Metric Callout Panel */}
            <div className="lg:col-span-4 p-6 sm:p-7 rounded-[8px] bg-[#F4ECDA] border border-[#E5D9BB] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6E4413] font-semibold block">
                Workflow Metric
              </span>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-serif text-[#4D2A00]">
                  3–4 Hours → ~5 Mins
                </div>
                <div className="text-xs text-[#72450C] leading-snug">
                  Measured reduction for the specific proposal deck generation workflow.
                </div>
              </div>
              <div className="pt-3 border-t border-[#E5D9BB] text-xs text-[#6E4413] leading-relaxed">
                “Employees transitioned from manual blank-page copywriting to instant structured drafting with company-standard consistency.”
              </div>
            </div>

          </div>
        </div>

        {/* 3 Supporting Engagements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* NESTO */}
          <div className="p-7 rounded-[8px] bg-[#FFFDF8] border border-[#E8DCBD] space-y-3.5 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#CC6F00] font-semibold block">
                Executive Leadership Advisory
              </span>
              <h4 className="text-xl font-serif font-normal text-[#4D2A00]">
                NESTO Supermarket & Hypermarkets
              </h4>
              <p className="text-xs text-[#72450C] font-mono">
                Multinational retail & hypermarket chain
              </p>
              <p className="text-sm text-[#72450C] leading-[1.6]">
                Suhail delivered practical AI training to approximately 15–18 senior and C-level executives. The sessions focused on making AI understandable and directly relevant to leadership responsibilities, operational oversight, and strategic decision-making.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8DCBD]/60 text-xs text-[#6E4413] font-medium">
              Focus: Leadership clarity & strategic AI literacy
            </div>
          </div>

          {/* SABCO */}
          <div className="p-7 rounded-[8px] bg-[#FFFDF8] border border-[#E8DCBD] space-y-3.5 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#CC6F00] font-semibold block">
                Operational Staff Training
              </span>
              <h4 className="text-xl font-serif font-normal text-[#4D2A00]">
                SABCO Packaging & Containers
              </h4>
              <p className="text-xs text-[#72450C] font-mono">
                Industrial custom packaging supplier
              </p>
              <p className="text-sm text-[#72450C] leading-[1.6]">
                Delivered practical AI awareness and operational training for senior and middle-level employees, equipping them to understand relevant applications in everyday communication, inventory coordination, and documentation.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8DCBD]/60 text-xs text-[#6E4413] font-medium">
              Focus: Daily workflow awareness & team adoption
            </div>
          </div>

          {/* MIF CAPITAL */}
          <div className="p-7 rounded-[8px] bg-[#FFFDF8] border border-[#E8DCBD] space-y-3.5 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#CC6F00] font-semibold block">
                Enterprise Workforce Enablement
              </span>
              <h4 className="text-xl font-serif font-normal text-[#4D2A00]">
                MIF CAPITAL
              </h4>
              <p className="text-xs text-[#72450C] font-mono">
                UAE Capital Funding, Imports & Trading
              </p>
              <p className="text-sm text-[#72450C] leading-[1.6]">
                Trained employees and senior executives across international trading, import/export analysis, and capital funding operations to apply AI to daily professional tasks and data synthesis.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E8DCBD]/60 text-xs text-[#6E4413] font-medium">
              Focus: Commercial data synthesis & everyday productivity
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
