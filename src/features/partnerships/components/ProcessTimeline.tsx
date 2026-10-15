import { MessageSquareText, FileCode, Video, BarChart3 } from 'lucide-react'
import { Card } from '@/shared/ui/Card'
import { Badge } from '@/shared/ui/Badge'

export function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      title: 'Campaign Brief & Value Alignment',
      desc: 'We review your tool/product, target deliverables, key talking points, and unique value propositions.',
      icon: <MessageSquareText className="w-5 h-5 text-[#7bc943]" />,
    },
    {
      num: '02',
      title: 'Hook & Script Approval',
      desc: 'We draft a tailored Malayalam script emphasizing relatable pain points and real developer workflow fixes.',
      icon: <FileCode className="w-5 h-5 text-[#7bc943]" />,
    },
    {
      num: '03',
      title: 'High-Fidelity Production & Release',
      desc: '4K video production with dynamic screen captures, captions, link in bio placement, and collaborative tags.',
      icon: <Video className="w-5 h-5 text-[#7bc943]" />,
    },
    {
      num: '04',
      title: 'Analytics & ROI Report',
      desc: '7-day post-launch audit showing reach, accounts engaged, saves, link clickthroughs, and audience response.',
      icon: <BarChart3 className="w-5 h-5 text-[#7bc943]" />,
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="brand">Execution Framework</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#141f10] font-display mt-2">
            Seamless Brand Collab Process
          </h2>
          <p className="text-[#4e5f46] text-sm mt-1">
            From brief submission to live publication in an agile 4 to 7-day turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {steps.map((step) => (
            <Card key={step.num} variant="default" className="p-6 relative group bg-white border border-[#e4ded0] shadow-sm hover:border-[#7bc943]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black font-mono text-[#7bc943]/60 group-hover:text-[#7bc943] transition-colors">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#faf7ee] border border-[#ded7c7] flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-base font-bold text-[#141f10] font-display mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-[#526348] leading-relaxed">
                {step.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
