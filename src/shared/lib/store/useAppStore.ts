import { create } from 'zustand'

export interface ToastNotification {
  id: string
  type: 'success' | 'info' | 'error'
  message: string
}

interface AppState {
  isBookingModalOpen: boolean
  selectedPackage: string | null
  activeWorkshopModal: string | null
  toasts: ToastNotification[]
  openBookingModal: (packageName?: string) => void
  closeBookingModal: () => void
  openWorkshopModal: (workshopId: string) => void
  closeWorkshopModal: () => void
  addToast: (message: string, type?: 'success' | 'info' | 'error') => void
  removeToast: (id: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  isBookingModalOpen: false,
  selectedPackage: null,
  activeWorkshopModal: null,
  toasts: [],

  openBookingModal: (packageName) =>
    set({
      isBookingModalOpen: true,
      selectedPackage: packageName || 'Custom Partnership',
    }),

  closeBookingModal: () =>
    set({
      isBookingModalOpen: false,
      selectedPackage: null,
    }),

  openWorkshopModal: (workshopId) =>
    set({
      activeWorkshopModal: workshopId,
    }),

  closeWorkshopModal: () =>
    set({
      activeWorkshopModal: null,
    }),

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
