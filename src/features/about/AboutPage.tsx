import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function AboutPage() {
  const { openConsultationModal, openSessionEnquiryModal } = useAppStore()

  const careerMilestones = [
    {
      year: 'Academic Foundation',
      title: 'Physics & Wireless Networking',
      desc: 'B.Sc. in Physics at PSMO College, Tirurangadi, followed by a Postgraduate Diploma in Wireless Networking in Canada. Developed rigorous analytical thinking and systemic technical understanding.',
    },
    {
      year: 'Operations & Commercial Reality',
      title: 'Business Operations Leadership',
      desc: 'Managed operations and team workflows. Experienced first-hand how real companies operate, where operational friction accumulates, and why software fails unless teams can adopt it intuitively.',
    },
    {
      year: '2022 – Present',
      title: 'Applied AI & Transformation',
      desc: 'Specialized deeply in Large Language Models, autonomous agent workflows, and practical prompt systems. Transitioned from early testing into production implementation for businesses.',
    },
    {
      year: 'Dual Commercial Leadership',
      title: 'Ailutions & Kochu.ai',
      desc: 'Co-founded Ailutions as COO to drive enterprise workflow transformation and training. Created Kochu.ai to provide accessible, high-impact AI education for 80,000+ creators, students, and professionals.',
    },
  ]

  const engagementHighlights = [
    {
      role: 'Co-founder & COO of Ailutions',
      desc: 'Guiding organizations through the 90-Day Implementation Programme, workflow audits, and building sustainable internal AI Champions.',
    },
    {
      role: 'Creator of Kochu.ai',
      desc: 'Curating practical tutorials, prompt companion guides, and hands-on video masterclasses in Malayalam and plain English.',
    },
    {
      role: 'Executive & Team Trainer',
      desc: 'Delivered 60+ sessions to senior executives, corporate workforces, startup founders, and educational institutions across multiple regions.',
    },
  ]

  return (
    <div className="w-full bg-[#FAF5E8] py-12 sm:py-16 lg:py-20 text-left">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
        
        {/* Editorial Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#F2A900]/20 border border-[#F2A900]/40 text-xs font-mono uppercase tracking-wider text-[#4D2A00] font-semibold">
            <span>About Suhail Abdulatif</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#4D2A00] tracking-tight leading-[1.08]">
            Making artificial intelligence useful for everyday work.
          </h1>
          <p className="text-lg sm:text-xl text-[#72450C] leading-relaxed">
            Entrepreneur, AI Transformation Consultant, Co-founder & COO of Ailutions, and Creator of Kochu.ai.
          </p>
        </div>

        {/* Narrative & Photographs Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[16px] sm:text-[17px] text-[#4D2A00]/90 leading-[1.68]">
            <p className="text-xl sm:text-2xl font-serif text-[#4D2A00] leading-snug">
              “AI should not be treated as a mystery or an academic novelty. It should be an accessible capability that saves time, simplifies decisions, and improves how businesses actually operate.”
            </p>

            <p>
              My background didn’t begin in abstract AI theory. I studied Physics at PSMO College in Tirurangadi and completed postgraduate studies in Wireless Networking in Canada. That technical foundation gave me an appreciation for systems, signal flow, and technical structure.
            </p>

            <p>
              However, it was my work inside business operations that truly shaped how I approach technology today. In operations, you quickly discover that the most advanced tool is useless if frontline staff cannot integrate it into their routine. Margins, customer communication, and turnaround times depend entirely on clear, repeatable workflows.
            </p>

            <p>
              When modern generative AI emerged in 2022, I recognized that businesses would face a critical implementation gap: while models were rapidly advancing, organizations lacked practical translators who understood both commercial realities and technical application.
            </p>

            <p>
              To solve that problem, I co-founded <strong>Ailutions</strong>, where I serve as Chief Operating Officer. We work directly with organizations—from multinational hypermarkets to specialized logistics and boutique travel agencies—delivering tailored executive advisory, structured team training, and our flagship 90-Day Implementation Programme.
            </p>

            <p>
              Parallel to my enterprise work, I founded <strong>Kochu.ai</strong>. Seeing that quality AI education was largely gatekept in complex academic jargon, I set out to explain practical workflows, prompt structures, and automations in Malayalam and accessible English. Today, Kochu.ai reaches an audience of over 80,000 learners, entrepreneurs, and developers.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={openConsultationModal}
                rightIcon={<ArrowUpRight className="w-4 h-4 text-[#4D2A00]" />}
              >
                Book a Consultation
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => openSessionEnquiryModal('Corporate & Leadership')}
              >
                Enquire About Team Training
              </Button>
            </div>
          </div>

          {/* Photo Showcase & Role Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[10px] overflow-hidden bg-[#F4ECDA] border border-[#E8DCBD] shadow-2xs">
              <img
                src="/images/photo 1.jpeg"
                alt="Suhail Abdulatif speaking at Kerala Startup Conclave"
                className="w-full h-[360px] object-cover object-top"
                loading="eager"
              />
              <div className="p-4 bg-[#FFFDF8] border-t border-[#E8DCBD] space-y-1">
                <span className="text-xs font-serif font-semibold text-[#4D2A00] block">
                  Kerala Startup Conclave
                </span>
                <span className="text-[11px] text-[#72450C] font-mono block">
                  Keynote on AI Transformation & Startup Operational Leverage
                </span>
              </div>
            </div>

            {/* Structured Role Cards */}
            <div className="space-y-3">
              {engagementHighlights.map((item) => (
                <div
                  key={item.role}
                  className="p-5 rounded-[8px] bg-[#FFFDF8] border border-[#E8DCBD] space-y-1"
                >
                  <h4 className="font-serif text-lg text-[#4D2A00]">
                    {item.role}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#72450C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Career & Operational Path Timeline */}
        <div className="pt-10 border-t border-[#E8DCBD] space-y-8">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#CC6F00] font-semibold block">
              Professional Journey
            </span>
            <h2 className="text-3xl font-serif text-[#4D2A00]">
              From technical analysis to organizational adoption.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerMilestones.map((m) => (
              <div
                key={m.year}
                className="p-6 rounded-[8px] bg-[#FFFDF8] border border-[#E8DCBD] space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-semibold text-[#CC6F00]">
                    {m.year}
                  </span>
                  <h3 className="font-serif text-lg text-[#4D2A00]">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#72450C] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
