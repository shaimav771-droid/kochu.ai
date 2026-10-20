import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'

const consultationSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid business email'),
  organisation: z.string().min(2, 'Organisation name is required'),
  role: z.string().min(2, 'Your role is required'),
  objective: z.string().min(10, 'Please share your key discussion objectives (min 10 characters)'),
  preferredTime: z.string().min(2, 'Please indicate your preferred timezone or days'),
})

type ConsultationData = z.infer<typeof consultationSchema>

export function ConsultationModal() {
  const { isConsultationModalOpen, closeConsultationModal, addToast } = useAppStore()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      organisation: '',
      role: '',
      objective: '',
      preferredTime: '',
    },
  })

  const onSubmit = async (data: ConsultationData) => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    console.info('Consultation Request Submitted:', data)
    setIsSubmitted(true)
    addToast('Consultation request received. Suhail will reply directly with calendar options.', 'success')
  }

  const handleClose = () => {
    setIsSubmitted(false)
    reset()
    closeConsultationModal()
  }

  const calUrl = SITE_CONFIG.consultationCalUrl as string
  const hasConfiguredCalUrl = Boolean(calUrl && calUrl.length > 0)

  return (
    <Modal
      isOpen={isConsultationModalOpen}
      onClose={handleClose}
      title="Book a Consultation with Suhail Abdulatif"
      subtitle="Executive AI advisory, transformation scoping, and strategic evaluation"
      maxWidth="md"
    >
      {hasConfiguredCalUrl ? (
        <div className="py-6 space-y-4 text-center">
          <p className="text-sm text-[#6E4413] leading-relaxed">
            Select a convenient time slot directly on Suhail’s calendar:
          </p>
          <a
            href={SITE_CONFIG.consultationCalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] bg-[#F2A900] text-[#4D2A00] font-semibold hover:bg-[#E59E00] transition-colors"
          >
            <span>Open Calendar Booking</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      ) : isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 rounded-[8px] bg-[#F2A900]/20 text-[#4D2A00] flex items-center justify-center mx-auto border border-[#CC6F00]/30">
            <CheckCircle2 className="w-8 h-8 text-[#CC6F00]" />
          </div>
          <h4 className="text-2xl font-serif text-[#4D2A00]">Consultation Request Received</h4>
          <p className="text-sm text-[#6E4413] max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out. Suhail personally reviews each consultation agenda and will reply to your work email with available advisory windows.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={handleClose}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Full Name"
              placeholder="e.g. Suhail K."
              error={errors.fullName?.message}
              {...register('fullName')}
            />
            <Input
              label="Work Email"
              type="email"
              placeholder="name@company.com"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Organisation / Business"
              placeholder="e.g. Retail, Logistics, Healthcare"
              error={errors.organisation?.message}
              {...register('organisation')}
            />
            <Input
              label="Your Role"
              placeholder="e.g. CEO, Founder, VP Operations"
              error={errors.role?.message}
              {...register('role')}
            />
          </div>

          <Input
            label="Preferred Advisory Timeframe & Timezone"
            placeholder="e.g. Morning GST / IST, Next Tuesday"
            error={errors.preferredTime?.message}
            {...register('preferredTime')}
          />

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#4D2A00]/90">
              Primary Objective / Discussion Agenda
            </label>
            <textarea
              rows={3}
              placeholder="What business problem or AI initiative would you like to explore during this consultation?"
              {...register('objective')}
              className="w-full bg-[#FFFDF8] border border-[#E8DCBD] rounded-[6px] px-3.5 py-2.5 text-sm text-[#4D2A00] outline-none focus:ring-2 focus:ring-[#CC6F00]/30 focus:border-[#CC6F00] placeholder:text-[#9C7954]"
            />
            {errors.objective?.message && (
              <span className="text-xs text-red-600 font-medium">{errors.objective.message}</span>
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
              leftIcon={<Calendar className="w-4 h-4" />}
            >
              Request Consultation
            </Button>
          </div>
        </form>
      )}
    </Modal>
  )
}
