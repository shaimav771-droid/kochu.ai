import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'
import { ROUTES } from '@/shared/lib/config/routes'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'
import { cn } from '@/shared/lib/utils/cn'

export function Navbar() {
  const { openConsultationModal } = useAppStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'About', path: ROUTES.ABOUT },
    { label: 'Work With Me', path: ROUTES.WORK_WITH_ME },
    { label: 'Programmes', path: ROUTES.PROGRAMMES },
    { label: 'Business Impact', path: ROUTES.BUSINESS_IMPACT },
    { label: 'Kochu.ai', path: ROUTES.KOCHU_AI },
  ]

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF5E8]/95 border-b border-[#E8DCBD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="flex flex-col text-left">
            <span className="text-xl sm:text-[22px] font-serif font-semibold tracking-tight text-[#4D2A00]">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#72450C] font-semibold -mt-0.5">
              AI Transformation & Advisory
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            const isKochu = link.path === ROUTES.KOCHU_AI

            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-[15px] font-medium transition-colors cursor-pointer py-1 relative',
                  isActive
                    ? 'text-[#4D2A00] font-semibold'
                    : 'text-[#4D2A00]/75 hover:text-[#4D2A00]',
                  isKochu && 'inline-flex items-center gap-1.5'
                )}
              >
                <span>{link.label}</span>
                {isKochu && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7BC943]" title="Kochu.ai Platform" />
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#CC6F00]" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={openConsultationModal}
            rightIcon={<ArrowUpRight className="w-4 h-4 text-[#4D2A00]" />}
          >
            Book a Consultation
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            onClick={openConsultationModal}
            className="sm:hidden text-xs px-3 py-1.5"
          >
            Consultation
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-[6px] text-[#4D2A00] hover:bg-[#F0E6CE] border border-[#E8DCBD] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8DCBD] bg-[#FAF5E8] px-5 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'w-full text-left px-3.5 py-2.5 rounded-[6px] text-base font-medium transition-colors',
                    isActive
                      ? 'bg-[#F2E5C7] text-[#4D2A00] font-semibold border-l-2 border-[#CC6F00]'
                      : 'text-[#4D2A00]/80 hover:bg-[#F2E5C7]/60 hover:text-[#4D2A00]'
                  )}
                >
                  <span className="flex items-center justify-between">
                    <span>{link.label}</span>
                    {link.path === ROUTES.KOCHU_AI && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#7BC943]/20 text-[#2C5C13] font-mono">
                        Platform
                      </span>
                    )}
                  </span>
                </Link>
              )
            })}
          </nav>

          <div className="pt-3 border-t border-[#E8DCBD]">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false)
                openConsultationModal()
              }}
              rightIcon={<ArrowUpRight className="w-4 h-4 text-[#4D2A00]" />}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
