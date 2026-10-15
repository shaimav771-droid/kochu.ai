import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { CheckCircle2, GraduationCap } from 'lucide-react'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'
import { useCourses } from '../hooks/useEducation'

const enrollSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  whatsapp: z.string().min(10, 'Valid 10-digit WhatsApp number is required'),
  experienceLevel: z.enum(['student', 'working_dev', 'founder_creator', 'complete_beginner']),
  motivation: z.string().optional(),
})

type EnrollFormData = z.infer<typeof enrollSchema>

export function WorkshopEnrollModal() {
  const { activeWorkshopModal, closeWorkshopModal, addToast } = useAppStore()
  const { data: courses } = useCourses()
  const [isSuccess, setIsSuccess] = useState(false)

  const activeCourse = courses?.find((c) => c.id === activeWorkshopModal)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnrollFormData>({
    resolver: zodResolver(enrollSchema),
    defaultValues: {
      fullName: '',
      email: '',
      whatsapp: '',
      experienceLevel: 'working_dev',
      motivation: '',
    },
  })

  const onSubmit = async (data: EnrollFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    console.info('Enrollment submitted:', { course: activeCourse?.title, data })
    setIsSuccess(true)
    addToast('Seat reserved! You will receive WhatsApp community invite shortly.', 'success')
  }

  const handleClose = () => {
    setIsSuccess(false)
    reset()
    closeWorkshopModal()
  }

  if (!activeWorkshopModal) return null

  return (
    <Modal
      isOpen={Boolean(activeWorkshopModal)}
      onClose={handleClose}
      title={activeCourse ? `Enroll: ${activeCourse.title}` : 'Cohort Registration'}
      subtitle="Master tech workflows directly with Kochu in Malayalam"
      maxWidth="md"
    >
      {isSuccess ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#7bc943]/20 text-[#28570f] flex items-center justify-center mx-auto border border-[#7bc943]/40">
            <CheckCircle2 className="w-7 h-7 text-[#7bc943]" />
          </div>
          <h4 className="text-xl font-bold text-[#141f10] font-display">Registration Confirmed!</h4>
          <p className="text-sm text-[#4d5d44]">
            Welcome to the cohort. Check your WhatsApp and email for syllabus materials and the private Discord/Telegram invite.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={handleClose}>
              Awesome, Close
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Full Name"
            placeholder="e.g. Arun Mathew"
            error={errors.fullName?.message}
            {...register('fullName')}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="arun@example.com"
            error={errors.email?.message}
            {...register('email')}
          />

          <Input
            label="WhatsApp Number (For Batch Updates)"
            placeholder="+91 9876543210"
            error={errors.whatsapp?.message}
            {...register('whatsapp')}
          />

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-bold uppercase tracking-wider text-[#2e3b26]">
              Current Background
            </label>
            <select
              {...register('experienceLevel')}
              className="w-full bg-white border border-[#ded8c8] rounded-xl px-4 py-2.5 text-sm text-[#182213] outline-none focus:ring-2 focus:ring-[#7bc943]/30 focus:border-[#7bc943]"
            >
              <option value="working_dev">Software Engineer / Tech Professional</option>
              <option value="student">Computer Science / Engineering Student</option>
              <option value="founder_creator">Founder / Solopreneur / Creator</option>
              <option value="complete_beginner">Non-tech transitioning to AI</option>
            </select>
          </div>

          <div className="pt-3 flex items-center justify-end gap-3">
            <Button variant="ghost" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="glow"
              isLoading={isSubmitting}
              rightIcon={<GraduationCap className="w-4 h-4" />}
            >
              Confirm Registration ({activeCourse?.price || 'Enroll'})
            </Button>
          </div>
        </form>
      )}
    </Modal>
  )
}
