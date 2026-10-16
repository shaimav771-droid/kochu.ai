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
        'scroll-mt-0 min-h-[100dvh] md:min-h-screen lg:h-screen w-full flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-6 lg:py-6 xl:py-8',
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
        {/* LEFT COLUMN: Editorial Heading & Biography Narrative */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-4.5 xl:space-y-5 text-left relative z-10">
          {/* Header Block */}
          <div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] 2xl:text-[54px] font-normal tracking-tight text-[#141f10] leading-[1.08]"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              I'm{' '}
              <span className="relative inline-block">
                Suhail Abdulatif
                <svg
                  className="absolute left-0 -bottom-2.5 sm:-bottom-3.5 w-full h-[18px] sm:h-[22px] lg:h-[26px] pointer-events-none overflow-visible"
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

          {/* Continuous Editorial Biography */}
          <div className="bg-transparent rounded-2xl sm:rounded-3xl border border-[#141f10]/12 p-5 min-[380px]:p-6 sm:p-7 md:border-0 md:p-0 space-y-2.5 sm:space-y-3 lg:space-y-3 xl:space-y-3.5 text-[14.5px] min-[380px]:text-[15px] sm:text-[16px] lg:text-[15px] xl:text-[16px] text-[#141f10] font-medium leading-relaxed max-w-xl">
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

            <p className="font-semibold border-l-[3px] border-[#7bc943] pl-3.5 sm:pl-4 py-0.5 text-[14px] sm:text-[15px] lg:text-[15px]">
              My goal is simple: to make AI easier to understand and more useful in the real world.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Balanced Arrangement of Suhail's Photographs */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end relative z-10">
          <AboutPhotoGrid />
        </div>
      </div>
    </section>
  )
}
