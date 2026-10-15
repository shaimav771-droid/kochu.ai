import { StickyHeroExperience } from './components/StickyHeroExperience'
import { AboutSection } from './components/AboutSection'
import { SocialMediaSection } from './components/SocialMediaSection'
import { useFullPageScroll } from './hooks/useFullPageScroll'

export function HomePage() {
  useFullPageScroll()

  return (
    <div className="relative w-full">

      {/* SECTION 1 & 2: STICKY PORTRAIT SCROLLING EXPERIENCE (HERO & HOW CAN I HELP YOU) */}
      <StickyHeroExperience />

      {/* SECTION 3: ABOUT SUHAIL ABDULATIF */}
      <AboutSection />

      {/* SECTION 4: SOCIAL MEDIA (HERO BANNER & PLATFORM CARDS) */}
      <SocialMediaSection />
    </div>
  )
}
