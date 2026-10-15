import { CheckCircle2, Clock, Sparkles } from 'lucide-react'
import { Card } from '@/shared/ui/Card'
import { Button } from '@/shared/ui/Button'
import { Badge } from '@/shared/ui/Badge'
import { useCommercialPackages } from '@/features/partnerships/hooks/usePackages'
import { useAppStore } from '@/shared/lib/store/useAppStore'
import { cn } from '@/shared/lib/utils/cn'

export function CommercialPackagesSection() {
  const { data: packages, isLoading } = useCommercialPackages()
  const { openBookingModal } = useAppStore()

  return (
    <section id="rate-card" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="brand">Rate Card & Commercials</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#141f10] font-display mt-2">
            Transparent Collaboration Packages
          </h2>
          <p className="text-[#4b5a41] text-base mt-2">
            Every package is delivered in clear, high-energy Malayalam tech breakdown designed to drive authentic product trials and brand equity.
          </p>
        </div>

        {isLoading ? (
          <div className="py-12 flex justify-center">
            <span className="w-8 h-8 border-2 border-[#7bc943] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {packages?.map((pkg) => (
              <Card
                key={pkg.id}
                variant={pkg.isPopular ? 'bordered' : 'default'}
                className={cn(
                  'p-8 flex flex-col justify-between relative bg-white border',
                  pkg.isPopular ? 'border-2 border-[#7bc943] shadow-xl shadow-[#7bc943]/15' : 'border-[#e4ded0]'
                )}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="bg-[#7bc943] text-slate-950 font-extrabold text-xs uppercase px-3 py-1 rounded-full shadow-md font-mono">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-[#141f10] font-display">{pkg.name}</h3>
                  <p className="text-xs text-[#526348] mt-1 min-h-[32px]">{pkg.tagline}</p>

                  <div className="my-6 pb-6 border-b border-[#eee8db]">
                    <div className="text-3xl font-extrabold text-[#28570f] font-display">
                      {pkg.price}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#5c6d53] mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#7bc943]" />
                      <span>{pkg.turnaroundDays}-day production turnaround</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-mono uppercase text-[#35432d] font-bold tracking-wider">
                      Included Deliverables
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-[#2c3a25]">
                          <CheckCircle2 className="w-4 h-4 text-[#7bc943] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-[#faf7ee] rounded-xl p-3 border border-[#ded7c7] mb-6 text-xs text-[#4f5f46]">
                    <strong className="text-[#141f10]">Ideal For:</strong> {pkg.idealFor}
                  </div>

                  <Button
                    variant={pkg.isPopular ? 'glow' : 'outline'}
                    size="md"
                    className="w-full"
                    onClick={() => openBookingModal(pkg.name)}
                    rightIcon={<Sparkles className="w-4 h-4" />}
                  >
                    Select {pkg.name}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
