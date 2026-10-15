import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { Modal } from '@/shared/ui/Modal'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useAppStore } from '@/shared/lib/store/useAppStore'

const bookingFormSchema = z.object({
  brandName: z.string().min(2, 'Company / Brand name is required'),
  contactName: z.string().min(2, 'Contact person name is required'),
  email: z.string().email('Please provide a valid email'),
  phone: z.string().min(8, 'Valid phone / WhatsApp number is required'),
  collaborationType: z.string().min(1, 'Please select a collaboration type'),
  budgetRange: z.string().min(1, 'Please select your estimated budget'),
  brief: z.string().min(10, 'Brief description must be at least 10 characters'),
})

type BookingFormData = z.infer<typeof bookingFormSchema>

export function BookingModal() {
  const { isBookingModalOpen, closeBookingModal, selectedPackage, addToast } = useAppStore()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      brandName: '',
      contactName: '',
      email: '',
      phone: '',
      collaborationType: selectedPackage || 'Single Dedicated Reel',
      budgetRange: '₹35,000 - ₹75,000',
      brief: '',
    },
  })

  const onSubmit = async (data: BookingFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.info('Partnership proposal received:', data)
    setIsSubmitted(true)
    addToast('Inquiry sent successfully! Kochu will get back within 24 hours.', 'success')
  }

  const handleModalClose = () => {
    setIsSubmitted(false)
    reset()
    closeBookingModal()
  }

  return (
    <Modal
      isOpen={isBookingModalOpen}
      onClose={handleModalClose}
      title="Partner with Kochu.ai"
      subtitle={selectedPackage ? `Package selected: ${selectedPackage}` : 'Brand collaborations, sponsorships & keynote education'}
      maxWidth="lg"
    >
      {isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#7bc943]/20 text-[#28570f] flex items-center justify-center mx-auto border border-[#7bc943]/40">
            <CheckCircle2 className="w-8 h-8 text-[#7bc943]" />
          </div>
          <h4 className="text-xl font-bold text-[#141f10] font-display">Inquiry Received!</h4>
          <p className="text-sm text-[#4d5e46] max-w-sm mx-auto">
            Thank you for reaching out. We have received your campaign brief and will reply to your email with the official commercial agreement and media timeline.
          </p>
          <div className="pt-4">
            <Button variant="primary" onClick={handleModalClose}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Brand / Company"
              placeholder="e.g. Acme Tech, Cursor, Supabase"
              error={errors.brandName?.message}
              {...register('brandName')}
            />
            <Input
              label="Your Name"
              placeholder="e.g. Rahul Nair"
              error={errors.contactName?.message}
              {...register('contactName')}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Work Email"
              type="email"
              placeholder="rahul@company.com"
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              label="WhatsApp / Phone"
              placeholder="+91 98765 43210"
              error={errors.phone?.message}
              {...register('phone')}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2d3b25]">
                Collaboration Type
              </label>
              <select
                {...register('collaborationType')}
                className="w-full bg-white border border-[#ded8c8] rounded-xl px-4 py-2.5 text-sm text-[#182213] outline-none focus:ring-2 focus:ring-[#7bc943]/30 focus:border-[#7bc943]"
              >
                <option value="Single Dedicated Reel">Single Dedicated Reel (Malayalam)</option>
                <option value="Multi-Video Campaign (3x Reels + Stories)">3x Reels + Story Ecosystem</option>
                <option value="Tool / Product Review & Launch">AI Tool / Product Launch</option>
                <option value="Workshop / Hackathon Title Sponsorship">Workshop / Hackathon Sponsor</option>
                <option value="Keynote Speaking / Corporate AI Session">Corporate Training / Speaking</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2d3b25]">
                Budget Bracket
              </label>
              <select
                {...register('budgetRange')}
                className="w-full bg-white border border-[#ded8c8] rounded-xl px-4 py-2.5 text-sm text-[#182213] outline-none focus:ring-2 focus:ring-[#7bc943]/30 focus:border-[#7bc943]"
              >
                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                <option value="₹2,50,000+ (Quarterly Retainer)">₹2,50,000+ (Quarterly Retainer)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-xs font-bold uppercase tracking-wider text-[#2d3b25]">
              Campaign Brief & Target Deliverable
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about the product/tool, desired key talking points, campaign timeline, or promo codes..."
              {...register('brief')}
              className="w-full bg-white border border-[#ded8c8] rounded-xl px-4 py-2.5 text-sm text-[#182213] outline-none focus:ring-2 focus:ring-[#7bc943]/30 focus:border-[#7bc943] placeholder:text-[#889781]"
            />
            {errors.brief?.message && (
              <span className="text-xs text-red-600 font-medium">{errors.brief.message}</span>
            )}
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <Button variant="ghost" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="glow"
              isLoading={isSubmitting}
              rightIcon={<Send className="w-4 h-4" />}
            >
              Submit Partnership Request
            </Button>
          </div>
        </form>
      )}
    </Modal>
  )
}
