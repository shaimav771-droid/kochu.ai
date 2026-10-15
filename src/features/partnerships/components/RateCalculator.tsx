import { useState, useMemo } from 'react'
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Badge } from '@/shared/ui/Badge'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function RateCalculator() {
  const { openBookingModal } = useAppStore()

  const [dedicatedReels, setDedicatedReels] = useState<number>(1)
  const [stories, setStories] = useState<number>(2)
  const [includeBioLink, setIncludeBioLink] = useState<boolean>(true)
  const [includeAdRights, setIncludeAdRights] = useState<boolean>(false)

  const calculation = useMemo(() => {
    const reelPrice = dedicatedReels * 38000
    const storyPrice = stories * 4000
    const bioLinkPrice = includeBioLink ? 8000 : 0
    const adRightsPrice = includeAdRights ? 15000 : 0

    const subtotal = reelPrice + storyPrice + bioLinkPrice + adRightsPrice
    // 10% bundle discount if subtotal >= 70000
    const discount = subtotal >= 70000 ? Math.round(subtotal * 0.1) : 0
    const total = subtotal - discount

    return {
      subtotal,
      discount,
      total,
      estimatedViews: `${Math.round(dedicatedReels * 35)}K - ${Math.round(dedicatedReels * 100)}K`,
    }
  }, [dedicatedReels, stories, includeBioLink, includeAdRights])

  const handleBookCustomBundle = () => {
    const summary = `Custom Bundle: ${dedicatedReels} Reels, ${stories} Stories, Bio Link: ${includeBioLink ? 'Yes' : 'No'}, Ad Rights: ${includeAdRights ? 'Yes' : 'No'} (Est. ₹${calculation.total.toLocaleString('en-IN')})`
    openBookingModal(summary)
  }

  return (
    <Card variant="default" className="p-6 md:p-8 border border-[#e2dccf] bg-white shadow-xl max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#eee8db]">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#7bc943]" />
            <h3 className="text-xl font-bold text-[#141f10] font-display">Interactive Campaign Estimator</h3>
          </div>
          <p className="text-sm text-[#4f5f46] mt-1">
            Build your tailored deliverable bundle and calculate investment instantly with multi-item discounts.
          </p>
        </div>
        <Badge variant="brand">OCT 2026 Commercial Rates</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Sliders and Toggles */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Dedicated Reels */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-[#182213]">Dedicated Malayalam Reels</span>
              <span className="font-mono text-[#28570f] font-bold">{dedicatedReels} Reel{dedicatedReels > 1 ? 's' : ''}</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              value={dedicatedReels}
              onChange={(e) => setDedicatedReels(Number(e.target.value))}
              className="w-full accent-[#7bc943] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#65755e]">
              <span>1 Reel (Spotlight)</span>
              <span>3 Reels (Mini-Series)</span>
              <span>5 Reels (Hero blitz)</span>
            </div>
          </div>

          {/* Stories */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-[#182213]">Story Blasts with Link Sticker</span>
              <span className="font-mono text-[#28570f] font-bold">{stories} Stor{stories > 1 ? 'ies' : 'y'}</span>
            </div>
            <input
              type="range"
              min={0}
              max={8}
              value={stories}
              onChange={(e) => setStories(Number(e.target.value))}
              className="w-full accent-[#7bc943] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-[#65755e]">
              <span>0 Stories</span>
              <span>4 Stories</span>
              <span>8 Stories</span>
            </div>
          </div>

          {/* Add-ons */}
          <div className="pt-2 space-y-3">
            <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#faf7ee] border border-[#ded8c8] hover:border-[#7bc943]/60 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={includeBioLink}
                  onChange={(e) => setIncludeBioLink(e.target.checked)}
                  className="rounded w-4 h-4 accent-[#7bc943]"
                />
                <div>
                  <div className="text-sm font-semibold text-[#141f10]">Link in Bio Placement (14 Days)</div>
                  <div className="text-xs text-[#526349]">High direct-traffic clickthrough to your landing page</div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#28570f] font-bold">+₹8,000</span>
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#faf7ee] border border-[#ded8c8] hover:border-[#7bc943]/60 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={includeAdRights}
                  onChange={(e) => setIncludeAdRights(e.target.checked)}
                  className="rounded w-4 h-4 accent-[#7bc943]"
                />
                <div>
                  <div className="text-sm font-semibold text-[#141f10]">Digital Ad Usage / Whitelisting Rights</div>
                  <div className="text-xs text-[#526349]">Run Instagram/Meta ads directly using creator collateral (30 days)</div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#28570f] font-bold">+₹15,000</span>
            </label>
          </div>
        </div>

        {/* Calculation Summary Card */}
        <div className="lg:col-span-5 bg-[#f6f2e8] rounded-2xl border-2 border-[#7bc943]/50 p-6 flex flex-col justify-between text-left shadow-sm">
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase text-[#47573f] tracking-wider">
              Campaign Summary
            </h4>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-[#2c3a25]">
                <span>Estimated Audience Reach:</span>
                <span className="font-semibold text-[#141f10]">{calculation.estimatedViews} views</span>
              </div>
              <div className="flex justify-between text-[#2c3a25]">
                <span>Subtotal Investment:</span>
                <span className="font-mono text-[#2c3a25]">₹{calculation.subtotal.toLocaleString('en-IN')}</span>
              </div>
              {calculation.discount > 0 && (
                <div className="flex justify-between text-[#26530e] font-semibold">
                  <span>Bundle Discount (10%):</span>
                  <span className="font-mono">-₹{calculation.discount.toLocaleString('en-IN')}</span>
                </div>
              )}
            </div>

            <div className="border-t border-[#ded7c7] pt-4">
              <div className="text-xs text-[#4e5f46] uppercase font-mono font-bold">Estimated Total</div>
              <div className="text-3xl font-extrabold text-[#28570f] font-display mt-0.5">
                ₹{calculation.total.toLocaleString('en-IN')}
              </div>
              <p className="text-[11px] text-[#55664d] mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7bc943]" />
                Includes revisions, caption copy & analytics report
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Button
              variant="glow"
              size="md"
              className="w-full"
              onClick={handleBookCustomBundle}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Lock In This Package
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
