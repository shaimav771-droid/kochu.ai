import { useState } from 'react'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/lib/config/routes'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function HeroSection() {
  const { openBookingModal } = useAppStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="overview"
      data-screen="true"
      className="relative w-full min-h-[100dvh] md:min-h-fit lg:min-h-[660px] lg:h-screen bg-gradient-to-b from-[#eee9df] via-[#eae5da] to-[#faf8f2] border-b border-[#ded7c8] overflow-x-hidden flex flex-col justify-center py-16 md:py-0 pb-16 md:pb-6 lg:pb-0 scroll-mt-0"
    >
      {/* TOP BAR: BRAND LOGO + NAVIGATION (Responsive) */}
      <div className="absolute top-4 sm:top-6 left-0 right-0 z-40 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto flex items-center justify-between">
        {/* TOP LEFT CORNER BRAND LOGO WITH GESTURAL DOTTED GREEN ARROW */}
        <div className="relative inline-block py-1 px-1 select-none">
          <span
            className="text-2xl sm:text-3xl lg:text-[42px] font-normal text-[#141f10] tracking-tight relative z-10 block"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            kochu.ai
          </span>

          {/* Green #7bc943 Dotted Arrow S-Wave Curve */}
          <svg
            className="absolute -top-3 -left-3 w-[calc(100%+1.25rem)] h-[calc(100%+1.25rem)] pointer-events-none z-20 overflow-visible"
            viewBox="0 0 170 70"
            fill="none"
          >
            <path
              d="M 5 54 C 28 56, 52 40, 74 24 C 94 8, 132 4, 156 22"
              stroke="#7bc943"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            <path
              d="M 145 16 L 158 22 L 148 30"
              stroke="#7bc943"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* DESKTOP NAVIGATION LINKS (md:flex) */}
        <div className="hidden md:flex items-center gap-6 sm:gap-8">
          <nav className="flex items-center gap-6 text-sm sm:text-base font-semibold text-[#141f10]/80">
            <button
              type="button"
              onClick={() => scrollToSection('how-can-i-help')}
              className="hover:text-[#141f10] hover:scale-105 transition-all cursor-pointer"
            >
              How I Help
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('content')}
              className="hover:text-[#141f10] hover:scale-105 transition-all cursor-pointer"
            >
              Content Hub
            </button>
            <Link
              to={ROUTES.RESOURCES}
              className="hover:text-[#141f10] hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-1.5 text-[#2c5c13]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#7bc943]" />
              <span>Free Resources</span>
            </Link>
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="hover:text-[#141f10] hover:scale-105 transition-all cursor-pointer"
            >
              Get In Touch
            </button>
          </nav>
        </div>

        {/* MOBILE HAMBURGER BUTTON (md:hidden) */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/80 backdrop-blur-md border border-[#ded7c8] text-[#141f10] hover:bg-white active:scale-95 shadow-2xs transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#141f10]" />
            ) : (
              <Menu className="w-5 h-5 text-[#141f10]" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE BACKDROP & DRAWER */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/25 backdrop-blur-xs md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="md:hidden fixed inset-x-5 top-20 z-50 bg-[#faf8f2]/95 backdrop-blur-xl border border-[#ded7c8] rounded-2xl shadow-xl p-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              <button
                type="button"
                onClick={() => scrollToSection('how-can-i-help')}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-[#141f10] hover:bg-[#ede7d8] active:bg-[#e4ded0] transition-colors"
              >
                How I Help
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('content')}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-[#141f10] hover:bg-[#ede7d8] active:bg-[#e4ded0] transition-colors"
              >
                Content Hub
              </button>
              <Link
                to={ROUTES.RESOURCES}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#295711] bg-[#ebf8e3]/80 hover:bg-[#ebf8e3] transition-colors"
              >
                <span>Free Resources & Prompts</span>
                <Sparkles className="w-4 h-4 text-[#7bc943]" />
              </Link>
            </nav>

            <div className="pt-2 border-t border-[#ded7c8]/60">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  openBookingModal()
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#7bc943] hover:bg-[#6eb53c] text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Studio lighting & ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[650px] bg-gradient-to-t from-white/60 via-white/25 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-[#7bc943]/10 rounded-full blur-[140px]" />
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/40 rounded-full blur-2xl" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-8 pt-0 md:pt-28 pb-0 lg:py-12 my-auto h-auto">
        
        {/* MOBILE STACKED LAYOUT (< lg:):
            1. Main Heading
            2. Photo of Suhail gracefully below it, centered with balanced size
            3. "Hey, I'm Suhail 👋" and the subtitle placed cleanly below with dedicated mt-6 / mt-8 gap
        */}
        <div className="lg:hidden flex flex-col items-center justify-start w-full text-left min-h-fit h-auto pb-0">
          {/* 1. Main Heading */}
          <div className="w-full text-left">
            <h1 className="text-[34px] min-[360px]:text-[38px] sm:text-5xl md:text-[54px] font-normal tracking-tight text-[#141f10] leading-[1.06] sm:leading-tight font-serif">
              <span className="font-dm-serif" style={{ fontFamily: '"DM Serif Display", serif' }}>Turning</span> <br className="hidden sm:inline" />
              <span className="italic font-serif font-light text-[#7bc943]">AI into real-world</span>{' '}
              <br className="hidden sm:inline" />
              <span className="font-semibold font-serif">products.</span>
            </h1>
          </div>

          {/* 2. Centered Photo of Suhail with controlled size and bottom margin */}
          <div className="w-full flex justify-center items-center mt-3 sm:mt-5 mb-1.5 sm:mb-2">
            <img
              src="/images/kochu-portrait.png"
              alt="Suhail - Kochu.ai Creator & Educator"
              className="w-[72%] max-w-[260px] sm:max-w-[340px] aspect-auto object-contain drop-shadow-[0_16px_32px_rgba(20,31,16,0.18)] select-none pointer-events-none"
            />
          </div>

          {/* 3. Intro Text & Description directly in normal document flow with comfortable gap */}
          <div className="w-full text-left space-y-2 max-w-xl mt-3 sm:mt-5 pb-0">
            <h2
              className="text-2xl sm:text-3xl italic text-[#141f10] font-normal tracking-tight font-serif"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Hey, I'm Suhail 👋
            </h2>
            <p className="text-sm sm:text-base text-[#3d4d35] font-medium leading-relaxed">
              I help developers, students, and founders build practical AI tools, automate complex workflows, and master modern tech in Malayalam.
            </p>
          </div>
        </div>

        {/* DESKTOP EDITORIAL LAYOUT (lg:grid):
            Split layout with stationary center portrait in StickyHeroExperience
        */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN: Editorial Headline */}
          <div className="lg:col-span-5 z-20 text-left -mt-12">
            <h1 className="text-6xl lg:text-7xl xl:text-[80px] font-normal tracking-tight text-[#141f10] leading-[0.96] font-serif">
              <span className="font-dm-serif" style={{ fontFamily: '"DM Serif Display", serif' }}>Turning</span> <br />
              <span className="italic font-serif font-light text-[#7bc943]">AI into real-world</span> <br />
              <span className="font-semibold font-serif">products.</span>
            </h1>
          </div>

          {/* MIDDLE SPACER FOR STATIONARY CENTERED PORTRAIT */}
          <div className="lg:col-span-3 pointer-events-none" />

          {/* RIGHT COLUMN: Intro Text & Description Writing */}
          <div className="lg:col-span-4 z-20 text-left max-w-md lg:ml-auto space-y-3 pt-36">
            <h2
              className="text-3xl sm:text-4xl italic text-[#141f10] font-normal tracking-tight"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Hey, I'm Suhail 👋
            </h2>
            <p className="text-lg lg:text-xl text-[#3d4d35] font-medium leading-relaxed">
              I help developers, students, and founders build practical AI tools, automate complex workflows, and master modern tech in Malayalam.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
