import { Badge } from '@/shared/ui/Badge'
import { CourseList } from './components/CourseList'
import { WorkshopEnrollModal } from './components/WorkshopEnrollModal'
import { Card } from '@/shared/ui/Card'
import { MessageSquare, Terminal, Users } from 'lucide-react'

export function EducationPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Education Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="brand">Creator-Led Tech Education</Badge>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141f10] font-display">
          Master Practical AI & Engineering in Malayalam
        </h1>
        <p className="text-[#495941] text-base sm:text-lg">
          No dry academic lectures. Hands-on cohorts building real applications with modern AI developer tools, automated agents, and clean production architecture.
        </p>
      </div>

      {/* Courses List */}
      <CourseList />

      {/* Why Learn with Kochu Section */}
      <section className="pt-8">
        <div className="text-left mb-8">
          <Badge variant="outline">The Kochu Methodology</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141f10] font-display mt-2">
            Why Our Cohorts Have a 92% Completion Rate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <Card variant="default" className="p-6 bg-white border border-[#e4ded0] shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#7bc943]/20 text-[#28570f] flex items-center justify-center mb-4">
              <Terminal className="w-5 h-5 text-[#7bc943]" />
            </div>
            <h3 className="text-lg font-bold text-[#141f10] font-display">
              Build Real Software First
            </h3>
            <p className="text-xs text-[#526348] mt-2 leading-relaxed">
              Every concept is taught by building a deployable tool, from AI chatbot widgets to automated CRM lead cleaners.
            </p>
          </Card>

          <Card variant="default" className="p-6 bg-white border border-[#e4ded0] shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-800 flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="text-lg font-bold text-[#141f10] font-display">
              Native Language Nuance
            </h3>
            <p className="text-xs text-[#526348] mt-2 leading-relaxed">
              Complex concepts like vectors, RAG, and prompt tokens are explained naturally in Malayalam with zero pretentious jargon.
            </p>
          </Card>

          <Card variant="default" className="p-6 bg-white border border-[#e4ded0] shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-800 flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-sky-700" />
            </div>
            <h3 className="text-lg font-bold text-[#141f10] font-display">
              Active WhatsApp & Discord Community
            </h3>
            <p className="text-xs text-[#526348] mt-2 leading-relaxed">
              Lifelong access to an exclusive peer network of Kerala developers and founders building alongside you.
            </p>
          </Card>
        </div>
      </section>

      {/* Enroll Modal */}
      <WorkshopEnrollModal />
    </div>
  )
}
