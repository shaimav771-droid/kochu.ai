import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Card } from '@/shared/ui/Card'
import { Badge } from '@/shared/ui/Badge'
import { cn } from '@/shared/lib/utils/cn'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Why focus on Malayalam & Kerala tech audience?',
      a: 'Kerala has one of India’s highest literacy rates and rapidly growing developer clusters. Technical explanations delivered natively in Malayalam connect 10x deeper than generic English ads, leading to authentic retention, comments, and trust.',
    },
    {
      q: 'What language format is used in the videos?',
      a: 'We use modern conversational Manglish (Malayalam explanations paired with standard English technical terminology and subtitles). This makes even complex AI architecture intuitive while remaining universally understood by working software engineers.',
    },
    {
      q: 'Do you offer script review and revisions prior to filming?',
      a: 'Yes. Every brand collaboration includes an outline and script approval step. Once the concept aligns with your brand voice and our audience integrity, we proceed to studio filming.',
    },
    {
      q: 'Can we run paid Meta ads with the creator video?',
      a: 'Yes! Whitelisting rights can be bundled into your package so your performance marketing team can run targeted paid ads with Kochu as the face of the creative.',
    },
    {
      q: 'What is the standard production timeline?',
      a: 'Standard turnaround is 4 to 7 business days from brief approval to video delivery and publishing.',
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge variant="outline">Common Queries</Badge>
          <h2 className="text-3xl font-bold text-[#141f10] font-display mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4e5f46] text-sm mt-1">
            Everything you need to know about working with Kochu.ai.
          </p>
        </div>

        <div className="space-y-3 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <Card
                key={faq.q}
                variant="default"
                className="overflow-hidden border border-[#e4ded0] bg-white transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left transition-colors hover:text-[#28570f]"
                >
                  <span className="text-base font-semibold text-[#141f10] font-display">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-[#5f7156] shrink-0 transition-transform duration-200',
                      isOpen && 'rotate-180 text-[#7bc943]'
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#404f37] leading-relaxed border-t border-[#eee7da] pt-3">
                    {faq.a}
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
