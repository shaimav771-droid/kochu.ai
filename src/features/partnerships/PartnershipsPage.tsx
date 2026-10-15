import { Badge } from '@/shared/ui/Badge'
import { Button } from '@/shared/ui/Button'
import { BrandLogos } from './components/BrandLogos'
import { CommercialPackagesSection } from '@/features/media-kit/components/CommercialPackagesSection'
import { RateCalculator } from './components/RateCalculator'
import { ProcessTimeline } from './components/ProcessTimeline'
import { FAQSection } from './components/FAQSection'
import { useAppStore } from '@/shared/lib/store/useAppStore'
import { ArrowUpRight } from 'lucide-react'

export function PartnershipsPage() {
  const { openBookingModal } = useAppStore()

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="pt-12 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <Badge variant="brand">Brand Collaborations & Sponsorships</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#141f10] font-display">
          Authentic Tech Storytelling That Converts
        </h1>
        <p className="text-[#4e5e46] text-base sm:text-lg max-w-2xl mx-auto">
          We introduce cutting-edge products, developer software, and consumer tech to 82.5K+ ambitious Malayali engineers through educational narratives.
        </p>

        <div className="pt-4">
          <Button
            variant="glow"
            size="lg"
            onClick={() => openBookingModal()}
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
          >
            Start a Partnership Brief
          </Button>
        </div>
      </section>

      <BrandLogos />
      <CommercialPackagesSection />
      <RateCalculator />
      <ProcessTimeline />
      <FAQSection />
    </div>
  )
}
