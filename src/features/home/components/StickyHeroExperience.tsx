import { HeroSection } from './HeroSection'
import { HowCanIHelpSection } from './HowCanIHelpSection'

export function StickyHeroExperience() {
  return (
    <div className="relative w-full">
      {/* Layer 1: Scrollable content sequence (Screen 1: Hero, Screen 2: How Can I Help You) */}
      <HeroSection />
      <HowCanIHelpSection />

      {/* Layer 2: Stationary portrait pinned to viewport on desktop across both screens */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
        <div className="sticky top-0 h-screen w-full flex items-end justify-center">
          <div className="relative flex justify-center items-end pointer-events-none">
            <img
              src="/images/kochu-portrait.png"
              alt="Suhail - Kochu.ai Creator & Educator"
              className="w-auto h-[520px] sm:h-[640px] lg:h-[760px] xl:h-[840px] 2xl:h-[900px] max-h-[90vh] object-contain drop-shadow-[0_20px_35px_rgba(20,31,16,0.18)] select-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
