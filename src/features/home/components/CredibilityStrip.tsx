import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'

export function CredibilityStrip() {
  return (
    <section className="w-full bg-[#FAF5E8] border-b border-[#E8DCBD] py-10 sm:py-12">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Statistics Row with Fine Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-10 border-b border-[#E8DCBD]/80">
          {SITE_CONFIG.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`text-left ${
                idx !== 0 ? 'md:border-l md:border-[#E8DCBD]/80 md:pl-6 lg:pl-8' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#4D2A00] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#72450C] font-medium mt-1 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Organisations Trained Row */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-left shrink-0">
            <span className="text-xs font-mono uppercase tracking-wider text-[#72450C] font-semibold block">
              Selected organisations I’ve trained
            </span>
            <span className="text-xs text-[#72450C]/80 mt-0.5 block">
              Executive advisory and hands-on operational sessions
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {SITE_CONFIG.clients.map((client) => (
              <div
                key={client.name}
                className="group flex flex-col text-left cursor-default"
                title={client.summary}
              >
                <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#4D2A00] group-hover:text-[#CC6F00] transition-colors">
                  {client.name}
                </span>
                <span className="text-[11px] font-mono uppercase text-[#72450C] tracking-tight">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
