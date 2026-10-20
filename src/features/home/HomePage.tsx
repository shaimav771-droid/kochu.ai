import { StickyHeroExperience } from './components/StickyHeroExperience'
import { AboutSection } from './components/AboutSection'
import { SocialMediaSection } from './components/SocialMediaSection'
import { PromptLibrarySection } from '@/features/prompts/components/PromptLibrarySection'
import { useFullPageScroll } from './hooks/useFullPageScroll'

export function HomePage() {
  useFullPageScroll()

  return (
    <div className="relative w-full">
      {/* SCREENS 1 & 2: STICKY PORTRAIT EXPERIENCE (HERO & HOW CAN I HELP YOU) */}
      <StickyHeroExperience />

      {/* SCREEN 3: ABOUT SUHAIL ABDULATIF */}
      <div className="relative z-30 bg-[#faf8f2] w-full">
        <AboutSection />
      </div>

      {/* SCREEN 4: SOCIAL MEDIA (HERO BANNER & PLATFORM CARDS) */}
      <SocialMediaSection />

      {/* DEDICATED SECTION: AI PROMPT LIBRARY */}
      <PromptLibrarySection />
    </div>
  )
}
