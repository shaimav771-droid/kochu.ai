import { create } from 'zustand'

export interface ToastNotification {
  id: string
  type: 'success' | 'info' | 'error'
  message: string
}

interface AppState {
  // Consultation Modal State
  isConsultationModalOpen: boolean
  openConsultationModal: () => void
  closeConsultationModal: () => void

  // Training & Speaking Session Enquiry State
  isSessionEnquiryModalOpen: boolean
  sessionAudienceType: string
  openSessionEnquiryModal: (audienceType?: string) => void
  closeSessionEnquiryModal: () => void

  // 1% AI Club Enquiry State
  isClubModalOpen: boolean
  openClubModal: () => void
  closeClubModal: () => void

  // Ailutions Business Transformation Modal State
  isAilutionsModalOpen: boolean
  openAilutionsModal: () => void
  closeAilutionsModal: () => void

  // Generic / Backward-compatible Booking State
  isBookingModalOpen: boolean
  selectedPackage: string | null
  openBookingModal: (packageName?: string) => void
  closeBookingModal: () => void
  activeWorkshopModal: string | null
  openWorkshopModal: (workshopId: string) => void
  closeWorkshopModal: () => void

  // Toasts
  toasts: ToastNotification[]
  addToast: (message: string, type?: 'success' | 'info' | 'error') => void
  removeToast: (id: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  isConsultationModalOpen: false,
  openConsultationModal: () => set({ isConsultationModalOpen: true }),
  closeConsultationModal: () => set({ isConsultationModalOpen: false }),

  isSessionEnquiryModalOpen: false,
  sessionAudienceType: 'Executive & Senior Leadership',
  openSessionEnquiryModal: (audienceType) =>
    set({
      isSessionEnquiryModalOpen: true,
      sessionAudienceType: audienceType || 'Executive & Senior Leadership',
    }),
  closeSessionEnquiryModal: () => set({ isSessionEnquiryModalOpen: false }),

  isClubModalOpen: false,
  openClubModal: () => set({ isClubModalOpen: true }),
  closeClubModal: () => set({ isClubModalOpen: false }),

  isAilutionsModalOpen: false,
  openAilutionsModal: () => set({ isAilutionsModalOpen: true }),
  closeAilutionsModal: () => set({ isAilutionsModalOpen: false }),

  isBookingModalOpen: false,
  selectedPackage: null,
  activeWorkshopModal: null,
  openBookingModal: (packageName) =>
    set({
      isBookingModalOpen: true,
      selectedPackage: packageName || 'Consultation / Advisory',
    }),
  closeBookingModal: () =>
    set({
      isBookingModalOpen: false,
      selectedPackage: null,
    }),
  openWorkshopModal: (workshopId) => set({ activeWorkshopModal: workshopId }),
  closeWorkshopModal: () => set({ activeWorkshopModal: null }),

  toasts: [],
  addToast: (message, type = 'success') => {
    const id = Math.random().toString(36).substring(2, 9)
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }],
    }))

    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }))
    }, 4500)
  },

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}))

