import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Send, ArrowUpRight } from 'lucide-react'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'

const clubSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Phone / WhatsApp is required'),
  currentRole: z.string().min(2, 'Your role or business type is required'),
  learningGoals: z.string().min(10, 'Please describe what you want to achieve with AI (min 10 characters)'),
})

type ClubFormData = z.infer<typeof clubSchema>

export function ClubEnquiryModal() {
  const { isClubModalOpen, closeClubModal, addToast } = useAppStore()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ClubFormData>({
    resolver: zodResolver(clubSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      currentRole: '',
      learningGoals: '',
    },
  })

  const onSubmit = async (data: ClubFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    console.info('1% AI Club Waitlist / Enquiry:', data)
    setIsSubmitted(true)
    addToast('Your enquiry for the 1% AI Club has been registered. We will send cohort details shortly.', 'success')
  }

  const handleClose = () => {
    setIsSubmitted(false)
    reset()
    closeClubModal()
  }

  const waUrl = SITE_CONFIG.premiumWhatsappUrl as string
  const hasConfiguredWhatsapp = Boolean(waUrl && waUrl.length > 0)

  return (
    <Modal
      isOpen={isClubModalOpen}
      onClose={handleClose}
      title="1% AI Club Enquiry"
      subtitle="Priority programme for founders, executives, and professionals committed to top-tier AI mastery"
      maxWidth="md"
    >
      {hasConfiguredWhatsapp ? (
        <div className="py-6 space-y-4 text-center">
          <p className="text-sm text-[#6E4413] leading-relaxed">
            Connect directly on WhatsApp to receive the confirmed cohort schedule, curriculum outline, and admissions criteria:
          </p>
          <a
            href={SITE_CONFIG.premiumWhatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] bg-[#F2A900] text-[#4D2A00] font-semibold hover:bg-[#E59E00] transition-colors"
          >
            <span>Enquire on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      ) : isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 rounded-[8px] bg-[#F2A900]/20 text-[#4D2A00] flex items-center justify-center mx-auto border border-[#CC6F00]/30">
            <CheckCircle2 className="w-8 h-8 text-[#CC6F00]" />
          </div>
          <h4 className="text-2xl font-serif text-[#4D2A00]">Enquiry Confirmed</h4>
          <p className="text-sm text-[#6E4413] max-w-sm mx-auto leading-relaxed">
            Thank you for your interest in the 1% AI Club. Your details have been recorded. You will receive confirmed programme information and cohort schedule details as soon as admissions open.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={handleClose}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Full Name"
            placeholder="e.g. Suhail"
            error={errors.fullName?.message}
            {...register('fullName')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Email"
              type="email"
              placeholder="you@domain.com"
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              label="WhatsApp / Phone"
              placeholder="+971 ... / +91 ..."
              error={errors.phone?.message}
              {...register('phone')}
            />
          </div>

          <Input
            label="Current Role or Business"
            placeholder="e.g. Founder, Chief Marketing Officer, Product Lead"
            error={errors.currentRole?.message}
            {...register('currentRole')}
          />

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#4D2A00]/90">
              What do you want to achieve with AI?
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about the workflows you want to master, whether in business operations, creative strategy, or everyday execution..."
              {...register('learningGoals')}
              className="w-full bg-[#FFFDF8] border border-[#E8DCBD] rounded-[6px] px-3.5 py-2.5 text-sm text-[#4D2A00] outline-none focus:ring-2 focus:ring-[#CC6F00]/30 focus:border-[#CC6F00] placeholder:text-[#9C7954]"
            />
            {errors.learningGoals?.message && (
              <span className="text-xs text-red-600 font-medium">{errors.learningGoals.message}</span>
            )}
          </div>

          <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#E8DCBD]">
            <Button variant="ghost" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
            >
              Submit Club Enquiry
            </Button>
          </div>
        </form>
      )}
    </Modal>
  )
}
