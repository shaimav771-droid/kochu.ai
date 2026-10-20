import { ArrowUpRight, Briefcase, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/lib/config/routes'

export function AboutSummarySection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FAF5E8] border-b border-[#E8DCBD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait and Context Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-[10px] overflow-hidden bg-[#F4ECDA] border border-[#E8DCBD] shadow-2xs">
              <img
                src="/images/photo 2.jpeg"
                alt="Suhail Abdulatif — Entrepreneur and AI Consultant"
                className="w-full h-[380px] sm:h-[440px] object-cover object-top"
                loading="lazy"
              />
              <div className="p-4 bg-[#FFFDF8] border-t border-[#E8DCBD] space-y-1">
                <span className="text-xs font-serif font-semibold text-[#4D2A00] block">
                  Suhail Abdulatif
                </span>
                <span className="text-[11px] text-[#72450C] font-mono block">
                  Operations Leadership • AI Strategy • Technical Education
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Biography Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#CC6F00] font-semibold block">
                Background & Perspective
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-[#4D2A00] tracking-tight leading-[1.12]">
                Connecting commercial realities with practical AI adoption.
              </h2>
            </div>

            <div className="space-y-4 text-[15px] sm:text-[16px] text-[#72450C] leading-[1.65]">
              <p>
                My work is grounded in business operations. Before focusing deeply on artificial intelligence in 2022, I studied Physics at PSMO College and completed postgraduate studies in Wireless Networking in Canada. Experiencing how teams actually run, coordinate, and deliver commercial value shaped my conviction: technology is only valuable when everyday employees can use it reliably.
              </p>
              <p>
                Today, I operate as <strong>Co-founder & COO of Ailutions</strong>, leading practical business transformation and workflow implementations for companies across diverse sectors. Simultaneously, through <strong>Kochu.ai</strong>, I have built an educational platform demystifying modern AI tools for tens of thousands of professionals and learners.
              </p>
              <p>
                Whether working with a multinational retail executive committee or coaching an emerging founder, my objective remains identical: strip away technical buzzwords and turn AI into reliable capability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-[6px] bg-[#FFFDF8] border border-[#E8DCBD] space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4D2A00]">
                  <Briefcase className="w-4 h-4 text-[#CC6F00]" />
                  <span>Ailutions Delivery</span>
                </div>
                <p className="text-xs text-[#72450C]">
                  Organisational AI transformation, audited workflows, and Internal AI Champions.
                </p>
              </div>

              <div className="p-4 rounded-[6px] bg-[#FFFDF8] border border-[#E8DCBD] space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4D2A00]">
                  <Sparkles className="w-4 h-4 text-[#CC6F00]" />
                  <span>Kochu.ai Education</span>
                </div>
                <p className="text-xs text-[#72450C]">
                  Accessible tutorials, video guides, and prompt frameworks in Malayalam and simple English.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to={ROUTES.ABOUT}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4D2A00] hover:text-[#CC6F00] transition-colors"
              >
                <span>Read Full Professional Story</span>
                <ArrowUpRight className="w-4 h-4 text-[#CC6F00]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
