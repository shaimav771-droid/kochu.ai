import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Send, ExternalLink } from 'lucide-react'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'
import { SITE_CONFIG } from '@/shared/lib/config/siteConfig'

const ailutionsSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  workEmail: z.string().email('Valid work email is required'),
  phone: z.string().min(8, 'Phone number is required'),
  teamSize: z.string().min(1, 'Please select team size'),
  interestArea: z.enum(['90-Day Implementation Programme', 'Internal AI Champions Training', 'Custom Workflow Automation', 'General Business Scoping']),
  challenges: z.string().min(10, 'Please describe the repetitive work or operational bottlenecks (min 10 characters)'),
})

type AilutionsData = z.infer<typeof ailutionsSchema>

export function AilutionsModal() {
  const { isAilutionsModalOpen, closeAilutionsModal, addToast } = useAppStore()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AilutionsData>({
    resolver: zodResolver(ailutionsSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      workEmail: '',
      phone: '',
      teamSize: '10–50 employees',
      interestArea: '90-Day Implementation Programme',
      challenges: '',
    },
  })

  const onSubmit = async (data: AilutionsData) => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    console.info('Ailutions Transformation Enquiry Received:', data)
    setIsSubmitted(true)
    addToast('Enquiry received by Ailutions. Our leadership team will review and reply within 24 hours.', 'success')
  }

  const handleClose = () => {
    setIsSubmitted(false)
    reset()
    closeAilutionsModal()
  }

  return (
    <Modal
      isOpen={isAilutionsModalOpen}
      onClose={handleClose}
      title="Discuss Your Business with Ailutions"
      subtitle="Organisational transformation, practical workflow implementation, and AI capability building"
      maxWidth="lg"
    >
      {isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 rounded-[8px] bg-[#F2A900]/20 text-[#4D2A00] flex items-center justify-center mx-auto border border-[#CC6F00]/30">
            <CheckCircle2 className="w-8 h-8 text-[#CC6F00]" />
          </div>
          <h4 className="text-2xl font-serif text-[#4D2A00]">Enquiry Received</h4>
          <p className="text-sm text-[#6E4413] max-w-md mx-auto leading-relaxed">
            Thank you. Your business context has been shared with the Ailutions operations team. We will review your workflow challenges and follow up with a scoped adoption outline.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={handleClose}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="p-3.5 rounded-[6px] bg-[#F4ECDA] border border-[#E5D9BB] flex items-center justify-between text-xs text-[#6E4413]">
            <span>Ailutions is Suhail Abdulatif’s firm for business adoption and workflow delivery.</span>
            {SITE_CONFIG.ailutionsUrl && (
              <a
                href={SITE_CONFIG.ailutionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#CC6F00] hover:underline shrink-0 ml-2"
              >
                <span>Visit Ailutions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Full Name"
              placeholder="e.g. Salim Al-Nuaimi"
              error={errors.fullName?.message}
              {...register('fullName')}
            />
            <Input
              label="Company Name"
              placeholder="e.g. Al-Nuaimi Trading Co."
              error={errors.companyName?.message}
              {...register('companyName')}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Work Email"
              type="email"
              placeholder="salim@company.com"
              error={errors.workEmail?.message}
              {...register('workEmail')}
            />
            <Input
              label="Phone / WhatsApp"
              placeholder="+971 50 ... / +91 ..."
              error={errors.phone?.message}
              {...register('phone')}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#4D2A00]/90">
                Team Size
              </label>
              <select
                {...register('teamSize')}
                className="w-full bg-[#FFFDF8] border border-[#E8DCBD] rounded-[6px] px-3.5 py-2.5 text-sm text-[#4D2A00] outline-none focus:ring-2 focus:ring-[#CC6F00]/30 focus:border-[#CC6F00]"
              >
                <option value="1–10 employees">1–10 employees</option>
                <option value="10–50 employees">10–50 employees</option>
                <option value="50–200 employees">50–200 employees</option>
                <option value="200+ employees">200+ employees</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#4D2A00]/90">
                Primary Interest
              </label>
              <select
                {...register('interestArea')}
                className="w-full bg-[#FFFDF8] border border-[#E8DCBD] rounded-[6px] px-3.5 py-2.5 text-sm text-[#4D2A00] outline-none focus:ring-2 focus:ring-[#CC6F00]/30 focus:border-[#CC6F00]"
              >
                <option value="90-Day Implementation Programme">90-Day Implementation Programme</option>
                <option value="Internal AI Champions Training">Internal AI Champions Training</option>
                <option value="Custom Workflow Automation">Custom Workflow Automation</option>
                <option value="General Business Scoping">General Business Scoping</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#4D2A00]/90">
              Operational Challenges & Repetitive Workflows
            </label>
            <textarea
              rows={3}
              placeholder="What repetitive tasks, reporting bottlenecks, customer interactions, or documentation workflows consume your team’s time?"
              {...register('challenges')}
              className="w-full bg-[#FFFDF8] border border-[#E8DCBD] rounded-[6px] px-3.5 py-2.5 text-sm text-[#4D2A00] outline-none focus:ring-2 focus:ring-[#CC6F00]/30 focus:border-[#CC6F00] placeholder:text-[#9C7954]"
            />
            {errors.challenges?.message && (
              <span className="text-xs text-red-600 font-medium">{errors.challenges.message}</span>
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
              Submit Transformation Enquiry
            </Button>
          </div>
        </form>
      )}
    </Modal>
  )
}
