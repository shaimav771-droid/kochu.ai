import { CheckCircle2 } from 'lucide-react'

export function BrandLogos() {
  const brandPillars = [
    { title: 'Organic Storytelling', desc: 'No mechanical readouts. Tools are woven natively into real workflow problems.' },
    { title: 'Kerala & GCC Dominance', desc: 'Unmatched resonance with Malayalam-speaking tech builders and engineers.' },
    { title: 'High Retention & Saves', desc: 'Over 45% video save rate, leading to persistent long-tail discovery.' },
    { title: 'Zero Fluff Delivery', desc: 'Strict focus on genuine value, product speed, and developer utility.' },
  ]

  return (
    <div className="py-12 border-y border-[#e2dccf] bg-[#f4efe4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase font-mono font-bold tracking-widest text-[#4f5f46] mb-8 text-center">
          Trusted by Devs & Respected by Brands Across South India
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {brandPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-5 rounded-2xl bg-white border border-[#ded8c8] hover:border-[#7bc943] transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2 text-[#28570f] font-bold text-sm mb-1 font-display">
                <CheckCircle2 className="w-4 h-4 text-[#7bc943]" />
                <span>{pillar.title}</span>
              </div>
              <p className="text-xs text-[#526348] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
