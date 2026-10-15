import { useEffect, useState } from 'react'
import { Sparkles, ArrowUpRight, Menu, X, BookOpen } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'
import { ROUTES } from '@/shared/lib/config/routes'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'
import { cn } from '@/shared/lib/utils/cn'

export function Navbar() {
  const { openBookingModal } = useAppStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === ROUTES.HOME

  const navItems = [
    { label: 'Overview', id: 'overview' },
    { label: 'Media Kit', id: 'media-kit' },
    { label: 'Brand Collabs', id: 'brand-collabs' },
    { label: 'Education & Cohorts', id: 'education' },
  ]

  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i]
        const element = document.getElementById(item.id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems, isHome])

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false)
    if (!isHome) {
      navigate(`/#${id}`)
      return
    }

    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#faf8f2]/90 border-b border-[#e6e0d2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8ad450] to-[#6cb935] flex items-center justify-center shadow-md shadow-[#7bc943]/20 group-hover:scale-105 transition-transform text-white">
            <span className="font-bold text-white text-xl font-display">K</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-lg font-bold tracking-tight text-[#141f10] flex items-center gap-1.5 font-display">
              {SITE_CONFIG.name}
              <span className="w-2 h-2 rounded-full bg-[#7bc943] animate-pulse" />
            </span>
            <span className="text-[11px] font-mono text-[#3e781e] font-semibold uppercase tracking-widest -mt-1">
              Tech Education
            </span>
          </div>
        </Link>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to={ROUTES.RESOURCES}
            className={cn(
              'inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border shadow-2xs',
              location.pathname === ROUTES.RESOURCES
                ? 'bg-[#74C640] text-white border-[#74C640] shadow-sm'
                : 'bg-white text-[#2c5c13] border-[#d8eed0] hover:border-[#74C640] hover:text-[#1e420d]'
            )}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Resources & Prompts</span>
          </Link>

          <Button
            variant="primary"
            size="sm"
            onClick={() => openBookingModal()}
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
          >
            Partner With Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#2f3c27] hover:bg-[#ede7d8]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e4ded0] bg-[#fbfaf6] px-4 pt-2 pb-6 space-y-2">
          <Link
            to={ROUTES.RESOURCES}
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              'w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-bold transition-colors',
              location.pathname === ROUTES.RESOURCES
                ? 'bg-[#74C640] text-white'
                : 'bg-[#ebf8e3] text-[#295711] border border-[#74C640]/30'
            )}
          >
            <BookOpen className="w-4 h-4" />
            <span>Free Resources & Prompts Library</span>
          </Link>

          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={cn(
                'w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors',
                isHome && activeSection === item.id
                  ? 'bg-white text-[#295711] font-bold border border-[#7bc943]/40'
                  : 'text-[#45543d] hover:bg-[#ede7d9]'
              )}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false)
                openBookingModal()
              }}
              rightIcon={<Sparkles className="w-4 h-4" />}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

