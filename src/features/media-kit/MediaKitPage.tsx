import { MediaKitHero } from './components/MediaKitHero'
import { AudienceDemographics } from './components/AudienceDemographics'
import { CommercialPackagesSection } from './components/CommercialPackagesSection'
import { RateCalculator } from '@/features/partnerships/components/RateCalculator'
import { ProcessTimeline } from '@/features/partnerships/components/ProcessTimeline'
import { FAQSection } from '@/features/partnerships/components/FAQSection'

export function MediaKitPage() {
  return (
    <div className="space-y-12 pb-16">
      <MediaKitHero />
      <AudienceDemographics />
      <CommercialPackagesSection />
      <div className="py-8">
        <RateCalculator />
      </div>
      <ProcessTimeline />
      <FAQSection />
    </div>
  )
}
