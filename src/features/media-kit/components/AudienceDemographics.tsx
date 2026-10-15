import { Globe, MapPin, Zap, CheckCircle2 } from 'lucide-react'
import { Card } from '@/shared/ui/Card'
import { Badge } from '@/shared/ui/Badge'
import { useMediaKit } from '../hooks/useMediaKit'

export function AudienceDemographics() {
  const { data: metrics } = useMediaKit()

  if (!metrics) return null

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
          <Badge variant="brand">Audience Intelligence</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#141f10] font-display mt-2">
            Why Partner with Kochu.ai?
          </h2>
          <p className="text-[#49573f] text-base max-w-2xl mt-1">
            A hyper-engaged, niche audience of developers, creators, and engineering students across Kerala and the GCC diaspora eager to adopt modern AI & tech tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Age Demographics */}
          <Card variant="default" className="p-6 text-left bg-white border border-[#e4ded0] shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-[#28570f] font-display font-semibold">
              <Zap className="w-5 h-5 text-[#7bc943]" />
              <span>Age Breakdown (89% are 18-34)</span>
            </div>
            <p className="text-xs text-[#526249] mb-6">
              Prime tech-buying demographic with high software adoption intent.
            </p>

            <div className="space-y-4">
              {metrics.demographics.ageDistribution.map((item) => (
                <div key={item.range} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#2c3a25] font-medium">{item.range} years</span>
                    <span className="text-[#295711] font-bold">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#eee8dc] overflow-hidden">
                    <div
                      className="h-full bg-[#7bc943] rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Geography Breakdown */}
          <Card variant="default" className="p-6 text-left bg-white border border-[#e4ded0] shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-[#28570f] font-display font-semibold">
              <MapPin className="w-5 h-5 text-[#7bc943]" />
              <span>Geographic Distribution</span>
            </div>
            <p className="text-xs text-[#526249] mb-6">
              Direct penetration across Kerala's top tech hubs and Malayalam expat dev community.
            </p>

            <div className="space-y-4">
              {metrics.demographics.geoDistribution.map((item) => (
                <div key={item.state} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#2c3a25] truncate max-w-[200px]">{item.state}</span>
                    <span className="text-[#295711] font-bold">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#eee8dc] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#6eb937] to-[#7bc943] rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Core Audience Interests */}
          <Card variant="default" className="p-6 text-left flex flex-col justify-between bg-white border border-[#e4ded0] shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#28570f] font-display font-semibold">
                <Globe className="w-5 h-5 text-[#7bc943]" />
                <span>Top Tech Topics & Affinity</span>
              </div>
              <p className="text-xs text-[#526249] mb-4">
                What followers actively search, save, and discuss in the comments:
              </p>

              <div className="space-y-2.5">
                {metrics.demographics.interests.map((interest) => (
                  <div key={interest} className="flex items-start gap-2 text-xs text-[#2c3a25]">
                    <CheckCircle2 className="w-4 h-4 text-[#7bc943] shrink-0 mt-0.5" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ded8c8] text-xs text-[#526249]">
              <strong className="text-[#28570f] font-semibold">Engagement Highlight:</strong> Over 45% of reel viewers save videos for reference or share into WhatsApp developer groups.
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
