import { Mail, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from '@/shared/ui/Icons'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'
import { ROUTES } from '@/shared/lib/config/routes'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { openConsultationModal, openSessionEnquiryModal } = useAppStore()

  return (
    <footer className="bg-[#4D2A00] text-[#FAF5E8] border-t border-[#3D2100] mt-24">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 text-left">
          {/* Identity & Strategic Focus */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="text-2xl font-serif font-semibold text-[#F9E6A8] tracking-tight block">
                {SITE_CONFIG.name}
              </span>
              <p className="text-xs font-mono uppercase tracking-wider text-[#F2A900] mt-1">
                {SITE_CONFIG.roles.join(' • ')}
              </p>
            </div>

            <p className="text-sm text-[#FAF5E8]/80 max-w-md leading-relaxed">
              Entrepreneur, AI Transformation Consultant, and trainer of entrepreneurs, senior executives, and enterprise teams. Connecting business understanding with practical everyday AI adoption.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.kochu.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-[6px] bg-[#3B2000] border border-[#6E3F05] flex items-center justify-center text-[#F9E6A8] hover:text-[#F2A900] hover:border-[#F2A900] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.kochu.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-[6px] bg-[#3B2000] border border-[#6E3F05] flex items-center justify-center text-[#F9E6A8] hover:text-[#F2A900] hover:border-[#F2A900] transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.kochu.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-[6px] bg-[#3B2000] border border-[#6E3F05] flex items-center justify-center text-[#F9E6A8] hover:text-[#F2A900] hover:border-[#F2A900] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="w-10 h-10 rounded-[6px] bg-[#3B2000] border border-[#6E3F05] flex items-center justify-center text-[#F9E6A8] hover:text-[#F2A900] hover:border-[#F2A900] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-semibold text-[#F2A900] uppercase tracking-wider font-mono">
              Website Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF5E8]/85">
              <li>
                <Link to={ROUTES.ABOUT} className="hover:text-[#F9E6A8] transition-colors">
                  About Suhail
                </Link>
              </li>
              <li>
                <Link to={ROUTES.WORK_WITH_ME} className="hover:text-[#F9E6A8] transition-colors">
                  Work With Me & Advisory
                </Link>
              </li>
              <li>
                <Link to={ROUTES.PROGRAMMES} className="hover:text-[#F9E6A8] transition-colors">
                  Programmes (1% AI Club)
                </Link>
              </li>
              <li>
                <Link to={ROUTES.BUSINESS_IMPACT} className="hover:text-[#F9E6A8] transition-colors">
                  Business Impact & Case Studies
                </Link>
              </li>
              <li>
                <Link to={ROUTES.KOCHU_AI} className="hover:text-[#F9E6A8] transition-colors flex items-center gap-1.5">
                  <span>Kochu.ai Platform</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7BC943]" />
                </Link>
              </li>
              <li>
                <Link to={ROUTES.RESOURCES} className="hover:text-[#F9E6A8] transition-colors">
                  Free Resources & Prompts
                </Link>
              </li>
            </ul>
          </div>

          {/* Engagement Direct Routes */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-xs font-semibold text-[#F2A900] uppercase tracking-wider font-mono">
              Direct Engagement
            </h4>
            <p className="text-sm text-[#FAF5E8]/80 leading-relaxed">
              Explore strategic consultation, executive briefings, corporate team workshops, or transformation advisory through Ailutions.
            </p>

            <div className="pt-1 flex flex-col gap-2">
              <button
                type="button"
                onClick={openConsultationModal}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F2A900] hover:text-[#FAF5E8] transition-colors cursor-pointer text-left"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => openSessionEnquiryModal('Corporate & Leadership')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F2A900] hover:text-[#FAF5E8] transition-colors cursor-pointer text-left"
              >
                <span>Enquire About a Team Workshop</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="inline-flex items-center gap-1.5 text-sm text-[#FAF5E8]/70 hover:text-[#F9E6A8] transition-colors text-left"
              >
                <span>{SITE_CONFIG.contactEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#6E3F05] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF5E8]/60">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Ailutions • Co-founder & COO</span>
            <span>•</span>
            <span>Kochu.ai • Creator</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
