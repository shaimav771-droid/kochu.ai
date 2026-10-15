import { AboutPhotoGrid } from './AboutPhotoGrid'
import { cn } from '@/shared/lib/utils/cn'

interface AboutSectionProps {
  className?: string
}

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section
      id="about"
      data-screen="true"
      className={cn(
        'scroll-mt-0 min-h-[100dvh] md:min-h-screen lg:h-screen w-full flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-10',
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
        {/* LEFT COLUMN: Editorial Heading & Biography Narrative */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
          {/* Header Block */}
          <div>
            <h2
              className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-[#141f10] leading-[1.08]"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              I'm{' '}
              <span className="relative inline-block">
                Suhail Abdulatif
                <svg
                  className="absolute left-0 -bottom-3 sm:-bottom-4 w-full h-[22px] sm:h-[28px] pointer-events-none overflow-visible"
                  viewBox="0 0 450 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {/* Upper hand-drawn stroke */}
                  <path
                    d="M 5 26 C 140 12, 300 6, 445 5"
                    stroke="#74C640"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {/* Lower hand-drawn stroke */}
                  <path
                    d="M 68 33 C 180 21, 290 15, 370 13"
                    stroke="#74C640"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Continuous Editorial Biography (No Cards, No Subheadings) */}
          <div className="space-y-4 sm:space-y-4.5 text-[17px] sm:text-[18px] text-[#141f10] font-medium leading-relaxed max-w-xl">
            <p>
              I'm the creator behind Kochu.ai, an AI Transformation Consultant, and the Co-founder and COO of Ailutions.
            </p>

            <p>
              I studied Physics at PSMO College, Tirurangadi, and later completed a PGDM in Wireless Networking in Canada. My experience in business operations has shaped my interest in using technology to solve real-world problems.
            </p>

            <p>
              Through Kochu.ai, I make AI easier to understand by sharing practical knowledge, tutorials, and real-life examples in Malayalam and simple English. My aim is to help students, developers, and founders learn about AI and use it confidently.
            </p>

            <p>
              I believe AI should be more than just a trend or a complicated technology. It should be something people can understand and use to make everyday tasks easier. Whether it's exploring a new AI tool, building a useful product, or improving a business process, I'm interested in turning ideas into practical solutions.
            </p>

            <p className="font-semibold border-l-[3px] border-[#7bc943] pl-4 py-0.5">
              My goal is simple: to make AI easier to understand and more useful in the real world.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Balanced Arrangement of Suhail's Photographs */}
        <div className="lg:col-span-5 w-full">
          <AboutPhotoGrid />
        </div>
      </div>
    </section>
  )
}
