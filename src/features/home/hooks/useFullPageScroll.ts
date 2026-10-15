import { useEffect, useRef, useState, useCallback } from 'react'

const MIN_TRANSITION_MS = 950
const WHEEL_IDLE_GAP_MS = 180

const isMobileViewport = (): boolean =>
  typeof window !== 'undefined' &&
  (window.innerWidth <= 768 || window.matchMedia('(max-width: 768px)').matches)

export function useFullPageScroll() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)
  const currentIndexRef = useRef(0)
  const isTransitioningRef = useRef(false)
  const lastTransitionTimeRef = useRef(0)
  const lastWheelTimeRef = useRef(0)
  const wheelIdleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const transitionUnlockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartYRef = useRef(0)
  const screensRef = useRef<HTMLElement[]>([])

  // Collect all data-screen elements
  const updateScreens = useCallback(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-screen="true"]')
    )
    screensRef.current = elements
    return elements
  }, [])

  // Smooth scroll to screen at index with fluid easing and transition lock
  const scrollToScreen = useCallback((index: number) => {
    const screens = screensRef.current.length ? screensRef.current : updateScreens()
    if (index < 0 || index >= screens.length) return

    const target = screens[index]
    if (!target) return

    // On mobile, scroll smoothly without locking transitions or snapping
    if (isMobileViewport()) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      currentIndexRef.current = index
      setActiveScreenIndex(index)
      return
    }

    isTransitioningRef.current = true
    lastTransitionTimeRef.current = Date.now()
    currentIndexRef.current = index
    setActiveScreenIndex(index)

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    if (transitionUnlockTimerRef.current) {
      clearTimeout(transitionUnlockTimerRef.current)
    }

    // Fallback timer (e.g. for keyboard or programmatic calls without wheel events)
    transitionUnlockTimerRef.current = setTimeout(() => {
      const timeSinceLastWheel = Date.now() - lastWheelTimeRef.current
      if (timeSinceLastWheel >= WHEEL_IDLE_GAP_MS) {
        isTransitioningRef.current = false
      }
    }, MIN_TRANSITION_MS)
  }, [updateScreens])

  useEffect(() => {
    const screens = updateScreens()
    if (!screens.length) return

    // Wheel listener for smooth single-scroll full-page transition with momentum suppression
    const handleWheel = (e: WheelEvent) => {
      // Disable snapping on mobile (max-width: 768px) so users get smooth, natural scrolling
      if (isMobileViewport()) return

      // Don't intercept if a modal or popup is currently active
      if (
        document.body.classList.contains('modal-open') ||
        document.querySelector('[role="dialog"]')
      ) {
        return
      }

      // Ignore negligible wheel drift
      if (Math.abs(e.deltaY) < 20) return

      const allScreens = screensRef.current.length ? screensRef.current : updateScreens()
      if (!allScreens.length) return

      const lastIndex = allScreens.length - 1
      const currentIdx = currentIndexRef.current
      const lastScreenEl = allScreens[lastIndex]

      // On the last screen (#content), allow natural downward scrolling through content & footer
      if (currentIdx === lastIndex && e.deltaY > 0) {
        return
      }

      // On the last screen, allow natural upward scrolling if currently scrolled down inside it
      if (
        currentIdx === lastIndex &&
        e.deltaY < 0 &&
        lastScreenEl &&
        window.scrollY > lastScreenEl.offsetTop + 15
      ) {
        return
      }

      // Intercept wheel event for full-page snap navigation
      e.preventDefault()

      lastWheelTimeRef.current = Date.now()

      // Reset idle timer on every wheel event to absorb continuous inertial momentum ticks
      if (wheelIdleTimerRef.current) {
        clearTimeout(wheelIdleTimerRef.current)
      }
      wheelIdleTimerRef.current = setTimeout(() => {
        const elapsed = Date.now() - lastTransitionTimeRef.current
        if (elapsed >= MIN_TRANSITION_MS) {
          isTransitioningRef.current = false
        } else {
          if (transitionUnlockTimerRef.current) {
            clearTimeout(transitionUnlockTimerRef.current)
          }
          transitionUnlockTimerRef.current = setTimeout(() => {
            if (Date.now() - lastWheelTimeRef.current >= WHEEL_IDLE_GAP_MS) {
              isTransitioningRef.current = false
            }
          }, MIN_TRANSITION_MS - elapsed)
        }
      }, WHEEL_IDLE_GAP_MS)

      // If transition is already in progress, ignore momentum ticks
      if (isTransitioningRef.current) return

      if (e.deltaY > 0) {
        // Scroll DOWN -> next screen
        if (currentIdx < lastIndex) {
          scrollToScreen(currentIdx + 1)
        }
      } else {
        // Scroll UP -> previous screen
        if (currentIdx > 0) {
          scrollToScreen(currentIdx - 1)
        }
      }
    }

    // Keyboard listener (Arrow keys, Space, PageDown/Up)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable custom snapping on mobile (max-width: 768px)
      if (isMobileViewport()) return

      if (
        document.querySelector('[role="dialog"]') ||
        ['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)
      ) {
        return
      }

      const allScreens = screensRef.current.length ? screensRef.current : updateScreens()
      if (!allScreens.length) return

      const currentIdx = currentIndexRef.current
      const lastIndex = allScreens.length - 1
      const lastScreenEl = allScreens[lastIndex]

      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        if (currentIdx === lastIndex) return

        e.preventDefault()
        if (isTransitioningRef.current) return

        if (currentIdx < lastIndex) {
          scrollToScreen(currentIdx + 1)
        }
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        if (
          currentIdx === lastIndex &&
          lastScreenEl &&
          window.scrollY > lastScreenEl.offsetTop + 15
        ) {
          return
        }

        e.preventDefault()
        if (isTransitioningRef.current) return

        if (currentIdx > 0) {
          scrollToScreen(currentIdx - 1)
        }
      }
    }

    // Touch gesture listeners
    const handleTouchStart = (e: TouchEvent) => {
      // Disable single-flick snap scrolling on mobile (max-width: 768px)
      if (isMobileViewport()) return
      touchStartYRef.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      // Disable single-flick snap scrolling on mobile (max-width: 768px)
      if (isMobileViewport()) return
      if (isTransitioningRef.current) return
      const allScreens = screensRef.current.length ? screensRef.current : updateScreens()
      if (!allScreens.length) return

      const touchEndY = e.changedTouches[0].clientY
      const diffY = touchStartYRef.current - touchEndY
      const currentIdx = currentIndexRef.current
      const lastIndex = allScreens.length - 1
      const lastScreenEl = allScreens[lastIndex]

      if (Math.abs(diffY) > 50) {
        if (diffY > 0) {
          // Swipe up -> advance to next screen
          if (currentIdx === lastIndex) return
          if (currentIdx < lastIndex) {
            scrollToScreen(currentIdx + 1)
          }
        } else {
          // Swipe down -> retreat to previous screen
          if (
            currentIdx === lastIndex &&
            lastScreenEl &&
            window.scrollY > lastScreenEl.offsetTop + 15
          ) {
            return
          }
          if (currentIdx > 0) {
            scrollToScreen(currentIdx - 1)
          }
        }
      }
    }

    // Sync active index when external scroll happens (e.g., clicking nav links or page anchors)
    const handleScroll = () => {
      if (isTransitioningRef.current) return
      const allScreens = screensRef.current.length ? screensRef.current : updateScreens()
      if (!allScreens.length) return

      const viewportMid = window.scrollY + window.innerHeight * 0.45
      for (let i = 0; i < allScreens.length; i++) {
        const el = allScreens[i]
        const top = el.getBoundingClientRect().top + window.scrollY
        const bottom = top + el.offsetHeight
        if (viewportMid >= top && viewportMid < bottom) {
          currentIndexRef.current = i
          setActiveScreenIndex(i)
          break
        }
      }
    }

    const handleResize = () => {
      if (isMobileViewport()) {
        isTransitioningRef.current = false
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      if (wheelIdleTimerRef.current) clearTimeout(wheelIdleTimerRef.current)
      if (transitionUnlockTimerRef.current) clearTimeout(transitionUnlockTimerRef.current)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [scrollToScreen, updateScreens])

  return {
    activeScreenIndex,
    scrollToScreen,
  }
}
