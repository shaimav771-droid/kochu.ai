import { useEffect, useState, useRef } from 'react'
import { HeroSection } from './HeroSection'
import { HowCanIHelpSection } from './HowCanIHelpSection'

export function StickyHeroExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [translateY, setTranslateY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const updatePosition = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowH = window.innerHeight

      // containerRef wraps both HeroSection (100vh) and HowCanIHelpSection (100vh)
      // When rect.bottom >= windowH:
      // Viewport is within Screen 1 or Screen 2.
      // Suhail's portrait remains stationary pinned at bottom: 0.
      // When rect.bottom < windowH:
      // The user is scrolling past Screen 2 into Screen 3 (AboutSection).
      // The portrait scrolls UP with Screen 2 at the exact same 1:1 speed: (rect.bottom - windowH).
      if (rect.bottom <= 0 || rect.top >= windowH) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
        if (rect.bottom < windowH) {
          setTranslateY(rect.bottom - windowH)
        } else {
          setTranslateY(0)
        }
      }
    }

    window.addEventListener('scroll', updatePosition, { passive: true })
    window.addEventListener('resize', updatePosition, { passive: true })
    updatePosition()

    return () => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Layer 1: Scrollable content sequence (Screen 1: Hero, Screen 2: How Can I Help You) */}
      <HeroSection />
      <HowCanIHelpSection />

      {/* Layer 2: Stationary portrait pinned to viewport on desktop across both screens */}
      {isVisible && (
        <div
          className="fixed bottom-0 left-0 right-0 pointer-events-none z-20 hidden lg:flex justify-center items-end"
          style={{
            transform: `translate3d(0, ${translateY}px, 0)`,
            willChange: 'transform',
          }}
        >
          <div className="max-w-[1360px] mx-auto w-full px-5 sm:px-8 lg:px-8 flex justify-center items-end">
            <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-8 w-full items-end">
              {/* Left Column Spacer matching Section Title / Headline */}
              <div className="lg:col-span-4 xl:col-span-4 pointer-events-none" />

              {/* Middle Column: Perfectly centered portrait of Suhail without overlapping cards */}
              <div className="lg:col-span-3 xl:col-span-3 flex justify-center items-end pointer-events-none overflow-visible -mb-8 sm:-mb-10 lg:-mb-12 xl:-mb-14">
                <img
                  src="/images/kochu-portrait.png"
                  alt="Suhail - Kochu.ai Creator & Educator"
                  className="w-auto h-[600px] sm:h-[680px] lg:h-[760px] xl:h-[840px] 2xl:h-[900px] max-h-[90vh] lg:max-h-[92vh] object-contain drop-shadow-[0_20px_35px_rgba(20,31,16,0.18)] select-none shrink-0"
                />
              </div>

              {/* Right Column Spacer matching Service Cards / Intro text */}
              <div className="lg:col-span-5 xl:col-span-5 pointer-events-none" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
