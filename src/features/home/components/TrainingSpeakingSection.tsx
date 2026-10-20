import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function TrainingSpeakingSection() {
  const { openSessionEnquiryModal } = useAppStore()

  const sessionPhotos = [
    {
      src: '/images/photo 4.jpeg',
      alt: 'Suhail Abdulatif speaking at FINNOVATE Biz Conclave',
      event: 'FINNOVATE Biz Conclave',
      audience: 'Entrepreneurs & Corporate Leaders',
      subject: 'Technology Strategy & Business Adoption',
    },
    {
      src: '/images/photo 1.jpeg',
      alt: 'Suhail Abdulatif speaking at Kerala Startup Conclave',
      event: 'Kerala Startup Conclave',
      audience: 'Founders & Ecosystem Builders',
      subject: 'Applied AI & Startup Execution',
    },
    {
      src: '/images/photo 2.jpeg',
      alt: 'Suhail Abdulatif conducting practical strategy masterclass',
      event: 'Executive Masterclass',
      audience: 'Business Owners & Managers',
      subject: 'Operational Workflows & Practical Tools',
    },
    {
      src: '/images/photo 3.jpeg',
      alt: 'Suhail Abdulatif conducting seminar at Commerce Club PPTM',
      event: 'Commerce Club Seminar',
      audience: 'Students & Academic Faculty',
      subject: 'AI Literacy & Future Career Skills',
    },
  ]

  const audiences = [
    {
      title: 'Senior Executives',
      desc: 'High-level strategic briefing on AI opportunities, risk considerations, and commercial viability.',
    },
    {
      title: 'Corporate Teams',
      desc: 'Hands-on operational training structured around everyday departmental responsibilities.',
    },
    {
      title: 'Entrepreneurs',
      desc: 'Practical automation pipelines, prompt skills, and leverage for lean business operators.',
    },
    {
      title: 'Students & Educators',
      desc: 'Foundational AI literacy, ethical principles, and career preparation in simple language.',
    },
  ]

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FAF5E8] border-b border-[#E8DCBD]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 text-left">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#CC6F00] font-semibold block">
              In-Person & Virtual Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-[#4D2A00] tracking-tight leading-[1.12]">
              Training and speaking built around your audience.
            </h2>
            <p className="text-[17px] text-[#72450C] font-normal leading-[1.6]">
              Every session is customized to the audience’s existing baseline, whether delivering strategic clarity to a boardroom or practical skills to an entire department.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => openSessionEnquiryModal('Speaking & Workshops')}
            rightIcon={<ArrowUpRight className="w-4 h-4 text-[#4D2A00]" />}
            className="shrink-0"
          >
            Enquire About a Session
          </Button>
        </div>

        {/* Real Photographs Grid with Factual Captions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {sessionPhotos.map((photo) => (
            <div
              key={photo.event}
              className="group rounded-[8px] bg-[#FFFDF8] border border-[#E8DCBD] overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#CC6F00] transition-colors"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#F4ECDA]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4 space-y-1 text-left">
                <span className="text-xs font-semibold text-[#4D2A00] block">
                  {photo.event}
                </span>
                <p className="text-[11px] text-[#CC6F00] font-mono">
                  {photo.audience}
                </p>
                <p className="text-xs text-[#72450C] leading-snug pt-0.5">
                  {photo.subject}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Audience Offerings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#E8DCBD]/80">
          {audiences.map((aud) => (
            <div key={aud.title} className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CC6F00] shrink-0" />
                <h3 className="font-serif text-lg text-[#4D2A00]">
                  {aud.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#72450C] leading-relaxed">
                {aud.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
