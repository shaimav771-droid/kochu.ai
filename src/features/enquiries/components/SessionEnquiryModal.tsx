import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle2 } from 'lucide-react'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'

const sessionEnquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  organisation: z.string().min(2, 'Organisation name is required'),
  role: z.string().min(2, 'Your role/title is required'),
  audienceType: z.string().min(1, 'Please select audience type'),
  audienceSize: z.string().min(1, 'Approximate audience size is required'),
  format: z.enum(['Onsite', 'Online', 'Flexible']),
  preferredDate: z.string().min(2, 'Preferred date or timeframe is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Phone / WhatsApp number is required'),
  trainingNeed: z.string().min(10, 'Please describe your training need or topic (min 10 characters)'),
})

type SessionEnquiryData = z.infer<typeof sessionEnquirySchema>

export function SessionEnquiryModal() {
  const { isSessionEnquiryModalOpen, closeSessionEnquiryModal, sessionAudienceType, addToast } =
    useAppStore()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SessionEnquiryData>({
    resolver: zodResolver(sessionEnquirySchema),
    defaultValues: {
      name: '',
      organisation: '',
      role: '',
      audienceType: sessionAudienceType || 'Senior Executives & Leadership',
      audienceSize: '15-25 participants',
      format: 'Onsite',
      preferredDate: '',
      email: '',
      phone: '',
      trainingNeed: '',
    },
  })

  const onSubmit = async (data: SessionEnquiryData) => {
    // Honest async handler
    await new Promise((resolve) => setTimeout(resolve, 600))
    console.info('Training/Speaking Session Enquiry Received:', data)
    setIsSubmitted(true)
    addToast('Your session enquiry has been received. Suhail will review and reply within 24–48 hours.', 'success')
  }

  const handleClose = () => {
    setIsSubmitted(false)
    reset()
    closeSessionEnquiryModal()
  }

  return (
    <Modal
      isOpen={isSessionEnquiryModalOpen}
      onClose={handleClose}
      title="Enquire About a Training or Speaking Session"
      subtitle="Tailored AI sessions for leadership, teams, entrepreneurs, and institutions"
      maxWidth="lg"
    >
      {isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 rounded-[8px] bg-[#F2A900]/20 text-[#4D2A00] flex items-center justify-center mx-auto border border-[#CC6F00]/30">
            <CheckCircle2 className="w-8 h-8 text-[#CC6F00]" />
          </div>
          <h4 className="text-2xl font-serif text-[#4D2A00]">Enquiry Received</h4>
          <p className="text-sm text-[#6E4413] max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. We have received your session requirements and will review availability for your preferred date. Expect a personal response within 24 to 48 business hours.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={handleClose}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              placeholder="e.g. Tariq Al-Mansoor"
              error={errors.name?.message}
              {...register('name')}
            />
            <Input
              label="Organisation / Company"
              placeholder="e.g. Retail Group / Enterprise"
              error={errors.organisation?.message}
              {...register('organisation')}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Your Role / Designation"
              placeholder="e.g. Chief Operating Officer, HR Director"
              error={errors.role?.message}
              {...register('role')}
            />
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#4D2A00]/90">
                Audience Profile
              </label>
              <select
                {...register('audienceType')}
                className="w-full bg-[#FFFDF8] border border-[#E8DCBD] rounded-[6px] px-3.5 py-2.5 text-sm text-[#4D2A00] outline-none focus:ring-2 focus:ring-[#CC6F00]/30 focus:border-[#CC6F00]"
              >
                <option value="Senior Executives & Leadership">Senior Executives & Leadership</option>
                <option value="Corporate / Cross-Functional Teams">Corporate / Cross-Functional Teams</option>
                <option value="Entrepreneurs & Business Owners">Entrepreneurs & Business Owners</option>
                <option value="Conference / Summit Keynote">Conference / Summit Keynote</option>
                <option value="Students & Academic Educators">Students & Academic Educators</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              label="Approx. Audience Size"
              placeholder="e.g. 15-20 people"
              error={errors.audienceSize?.message}
              {...register('audienceSize')}
            />
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#4D2A00]/90">
                Delivery Format
              </label>
              <select
                {...register('format')}
                className="w-full bg-[#FFFDF8] border border-[#E8DCBD] rounded-[6px] px-3.5 py-2.5 text-sm text-[#4D2A00] outline-none focus:ring-2 focus:ring-[#CC6F00]/30 focus:border-[#CC6F00]"
              >
                <option value="Onsite">Onsite</option>
                <option value="Online">Online</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
            <Input
              label="Preferred Date / Window"
              placeholder="e.g. Next month, Q3"
              error={errors.preferredDate?.message}
              {...register('preferredDate')}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Work Email"
              type="email"
              placeholder="name@organisation.com"
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              label="Phone / WhatsApp"
              placeholder="+971 50 ... / +91 ..."
              error={errors.phone?.message}
              {...register('phone')}
            />
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#4D2A00]/90">
              Training Need & Desired Focus
            </label>
            <textarea
              rows={3}
              placeholder="Describe your current starting point, what everyday responsibilities or workflows the team handles, and what capability you want to build..."
              {...register('trainingNeed')}
              className="w-full bg-[#FFFDF8] border border-[#E8DCBD] rounded-[6px] px-3.5 py-2.5 text-sm text-[#4D2A00] outline-none focus:ring-2 focus:ring-[#CC6F00]/30 focus:border-[#CC6F00] placeholder:text-[#9C7954]"
            />
            {errors.trainingNeed?.message && (
              <span className="text-xs text-red-600 font-medium">{errors.trainingNeed.message}</span>
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
              Submit Session Enquiry
            </Button>
          </div>
        </form>
      )}
    </Modal>
  )
}
