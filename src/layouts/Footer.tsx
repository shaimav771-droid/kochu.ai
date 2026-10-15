import { Mail, ExternalLink, Heart, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from '@/shared/ui/Icons'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'
import { ROUTES } from '@/shared/lib/config/routes'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#e2dccf] bg-[#f4efe4] text-[#4d5c45] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#7bc943] flex items-center justify-center font-bold text-slate-950 font-display">
                K
              </div>
              <span className="text-xl font-bold text-[#141f10] font-display tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-[#4d5c45] max-w-md leading-relaxed">
              Empowering Kerala's Malayalam-speaking engineers, creators, and students to master
              Artificial Intelligence, modern web tech, and developer tools. High-impact commercial
              collaborations and authentic brand storytelling.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#ded7c7] flex items-center justify-center text-[#3a4933] hover:text-[#2c5a13] hover:border-[#7bc943] transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#ded7c7] flex items-center justify-center text-[#3a4933] hover:text-[#2c5a13] hover:border-[#7bc943] transition-colors shadow-sm"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-[#ded7c7] flex items-center justify-center text-[#3a4933] hover:text-[#2c5a13] hover:border-[#7bc943] transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="w-10 h-10 rounded-xl bg-white border border-[#ded7c7] flex items-center justify-center text-[#3a4933] hover:text-[#2c5a13] hover:border-[#7bc943] transition-colors shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#141f10] uppercase tracking-wider font-mono">
              Page Sections & Hubs
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to={ROUTES.RESOURCES}
                  className="inline-flex items-center gap-1.5 text-[#295711] font-bold hover:text-[#193a0a] transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#74C640]" />
                  <span>Free Resources & Prompts</span>
                </Link>
              </li>
              <li>
                <a href="/#overview" className="hover:text-[#295711] transition-colors">
                  Overview & Stats
                </a>
              </li>
              <li>
                <a href="/#media-kit" className="hover:text-[#295711] transition-colors">
                  Media Kit & Demographics
                </a>
              </li>
              <li>
                <a href="/#brand-collabs" className="hover:text-[#295711] transition-colors">
                  Brand Collabs & Rate Card
                </a>
              </li>
              <li>
                <a href="/#education" className="hover:text-[#295711] transition-colors">
                  AI Cohorts & Bootcamps
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#141f10] uppercase tracking-wider font-mono">
              Direct Contact
            </h4>
            <p className="text-sm text-[#4d5c45]">
              For sponsorships, agency briefs, keynotes, or workshop bookings:
            </p>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="inline-flex items-center gap-1.5 text-[#295711] hover:text-[#1e420b] text-sm font-bold group"
            >
              {SITE_CONFIG.contactEmail}
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="pt-2 text-xs text-[#627359]">
              Response time: Under 24 business hours
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ded7c7] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#627359]">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-[#7bc943] fill-[#7bc943]" /> for the Kerala & Global Malayalam Tech Community.
          </p>
        </div>
      </div>
    </footer>
  )
}
