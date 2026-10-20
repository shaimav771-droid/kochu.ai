import { HeroSection } from './components/HeroSection'
import { CredibilityStrip } from './components/CredibilityStrip'
import { HowCanIHelpSection } from './components/HowCanIHelpSection'
import { BusinessImpactSection } from './components/BusinessImpactSection'
import { PriorityProgrammeSection } from './components/PriorityProgrammeSection'
import { AilutionsTransformationSection } from './components/AilutionsTransformationSection'
import { TrainingSpeakingSection } from './components/TrainingSpeakingSection'
import { AboutSummarySection } from './components/AboutSummarySection'
import { KochuAiPreviewSection } from './components/KochuAiPreviewSection'
import { ClosingInvitationSection } from './components/ClosingInvitationSection'

export function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* 1. Hero: Coherent Text Block & Suhail's Portrait */}
      <HeroSection />

      {/* 2. Credibility Strip: Proof figures & Client organisations */}
      <CredibilityStrip />

      {/* 3. How Can I Help You: 4 clear, substantial routes */}
      <HowCanIHelpSection />

      {/* 4. Business Impact: Real case stories (Maps & Vogs, Nesto, Sabco, MIF Capital) */}
      <BusinessImpactSection />

      {/* 5. Priority Programme: 1% AI Club */}
      <PriorityProgrammeSection />

      {/* 6. Business Transformation: Ailutions, 90-Day Programme & AI Champions */}
      <AilutionsTransformationSection />

      {/* 7. Training & Speaking: Real session photography, factual captions & audiences */}
      <TrainingSpeakingSection />

      {/* 8. About Suhail: Business background, physics, operations & ethics */}
      <AboutSummarySection />

      {/* 9. Kochu.ai Preview: Intentional green-themed education & content island */}
      <KochuAiPreviewSection />

      {/* 10. Closing Invitation: Strongest priority for Consultation */}
      <ClosingInvitationSection />
    </div>
  )
}
