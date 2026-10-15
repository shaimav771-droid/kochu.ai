import { Users, Calendar, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Card } from '@/shared/ui/Card'
import { Button } from '@/shared/ui/Button'
import { Badge } from '@/shared/ui/Badge'
import { useCourses } from '../hooks/useEducation'
import { useAppStore } from '@/shared/lib/store/useAppStore'

export function CourseList() {
  const { data: courses, isLoading } = useCourses()
  const { openWorkshopModal } = useAppStore()

  if (isLoading) {
    return (
      <div className="py-16 flex justify-center">
        <span className="w-8 h-8 border-2 border-[#7bc943] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
        {courses?.map((course) => (
          <Card
            key={course.id}
            variant={course.isFeatured ? 'bordered' : 'default'}
            className="p-6 md:p-8 flex flex-col justify-between relative group bg-white border border-[#e4ded0] shadow-sm hover:border-[#7bc943]"
          >
            {course.isFeatured && (
              <div className="absolute -top-3.5 left-6">
                <span className="bg-[#7bc943] text-slate-950 font-extrabold text-xs uppercase px-3 py-1 rounded-full shadow-md font-mono flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-slate-950" /> Flagship Cohort
                </span>
              </div>
            )}

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">{course.level}</Badge>
                <Badge variant="brand">{course.format}</Badge>
              </div>

              <h3 className="text-xl font-bold text-[#141f10] font-display group-hover:text-[#28570f] transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-[#4d5d44] mt-2 leading-relaxed">
                {course.subtitle}
              </p>

              <div className="flex flex-wrap gap-1.5 my-4">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#f5f1e6] text-[#303f27] border border-[#ded8c8]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-b border-[#eee8dc] py-4 my-5 space-y-2 text-xs">
                <span className="font-mono text-[#4b5c43] uppercase tracking-wider font-bold block">
                  What You'll Master
                </span>
                <ul className="space-y-1.5">
                  {course.syllabusHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-[#2a3823]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7bc943] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between text-xs text-[#526348] mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#7bc943]" />
                  <span>{course.nextCohortDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#7bc943]" />
                  <span>{course.enrolledCount}+ learners</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-2xl font-extrabold text-[#28570f] font-display">
                    {course.price}
                  </span>
                  <span className="text-xs text-[#808f77] line-through ml-2">
                    {course.originalPrice}
                  </span>
                </div>
                <span className="text-xs text-emerald-700 font-bold">Limited Seats</span>
              </div>

              <Button
                variant={course.isFeatured ? 'glow' : 'secondary'}
                size="md"
                className="w-full"
                onClick={() => openWorkshopModal(course.id)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Enroll in Cohort
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
