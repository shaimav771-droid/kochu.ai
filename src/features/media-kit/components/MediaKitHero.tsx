import { ArrowUpRight, Sparkles, TrendingUp, Users, Eye, Cpu } from 'lucide-react'
import { InstagramIcon } from '@/shared/ui/Icons'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'
import { Button } from '@/shared/ui/Button'
import { Badge } from '@/shared/ui/Badge'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function MediaKitHero() {
  const { openBookingModal } = useAppStore()

  const metrics = [
    {
      value: '82.5K',
      label: 'INSTAGRAM FOLLOWERS',
      subtext: 'High tech intent audience',
      icon: <Users className="w-4 h-4 text-[#7bc943]" />,
    },
    {
      value: '20K - 80K',
      label: 'TYPICAL REEL VIEWS',
      subtext: 'Consistent viral organic reach',
      icon: <TrendingUp className="w-4 h-4 text-[#7bc943]" />,
    },
    {
      value: '1,500+',
      label: 'TYPICAL STORY VIEWS',
      subtext: 'High link click-through rate',
      icon: <Eye className="w-4 h-4 text-[#7bc943]" />,
    },
    {
      value: 'AI & DEV',
      label: 'CORE TECH NICHE',
      subtext: 'Engineers, students & founders',
      icon: <Cpu className="w-4 h-4 text-[#7bc943]" />,
    },
  ]

  return (
    <section className="relative overflow-hidden pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header pill and metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-full bg-[#7bc943] text-slate-950 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              KOCHU.AI
            </span>
            <span className="text-xs font-mono text-[#58684f] font-semibold uppercase tracking-widest">
              MEDIA KIT & RATE CARD / OCT 2026
            </span>
          </div>

          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#28570f] font-bold hover:underline underline-offset-4 decoration-[#7bc943] transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            instagram.com/kochu.ai
          </a>
        </div>

        {/* Main Banner Box with Signature Kochu Brand Green Gradient (#7bc943) */}
        <div className="relative rounded-3xl brand-green-gradient p-8 sm:p-12 md:p-16 text-slate-950 shadow-2xl overflow-hidden border border-[#8ad450]/40">
          {/* Subtle geometric circle backgrounds */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/15 blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-lime-200/20 blur-xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-slate-950/15 backdrop-blur-md px-3.5 py-1 rounded-full text-slate-950 font-bold text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Kerala’s #1 Malayalam Creator in Modern AI & Tech
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 font-display leading-[1.08]">
                Brand Partnerships & Commercials
              </h1>

              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-bold text-slate-950/90 font-display">
                  Creator-led technology education
                </p>
                <p className="text-base sm:text-lg font-medium text-slate-900/80">
                  Kerala / Malayalam tech audience & GCC diaspora
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-slate-950 text-white hover:bg-slate-900 shadow-xl"
                  onClick={() => openBookingModal()}
                  rightIcon={<ArrowUpRight className="w-4 h-4 text-[#7bc943]" />}
                >
                  Book Commercial Collab
                </Button>
                <a
                  href="#rate-card"
                  className="px-5 py-3 rounded-xl font-bold text-slate-950 hover:bg-slate-950/10 transition-colors text-sm"
                >
                  View Oct 2026 Rate Card ↓
                </a>
              </div>
            </div>

            {/* Right Creator Photo Presentation */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-72 sm:w-80 h-96 rounded-3xl overflow-hidden bg-white/20 border-4 border-white shadow-2xl relative">
                  <img
                    src="/kochu-profile.png"
                    alt="Kochu.ai creator portrait"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                    <div>
                      <Badge variant="brand" className="bg-[#7bc943] text-slate-950 border-none font-bold">
                        Verified Creator
                      </Badge>
                      <h3 className="text-white font-bold text-lg mt-1 font-display">
                        Kochu.ai
                      </h3>
                      <p className="text-slate-200 text-xs">
                        Tech Educator & AI Workflow Architect
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid (Matching ref1.png styling with clean #7bc943 accent pills) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-white rounded-2xl p-5 sm:p-6 text-left shadow-lg border border-[#e5dfd1] flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Green accent pill on top just like ref1.png */}
              <div className="w-10 h-1.5 rounded-full bg-[#7bc943] mb-4 group-hover:w-14 transition-all duration-300" />

              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141f10] font-display tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-xs font-bold text-[#2a5912] tracking-wider font-mono mt-1 uppercase">
                  {metric.label}
                </div>
              </div>

              <div className="text-[11px] text-[#55644d] mt-2 font-medium">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
