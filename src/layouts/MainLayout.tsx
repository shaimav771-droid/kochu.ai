import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import {
  ConsultationModal,
  SessionEnquiryModal,
  AilutionsModal,
  ClubEnquiryModal,
} from '@/features/enquiries'
import { BookingModal } from '@/features/partnerships/components/BookingModal'
import { ToastContainer } from '@/shared/ui/Toast'

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5E8] text-[#4D2A00] selection:bg-[#F2A900] selection:text-[#4D2A00] overflow-x-hidden">
      <Navbar />

      <main className="flex-1 z-10">
        <Outlet />
      </main>

      <Footer />

      {/* Global Interactive Enquiry Modals */}
      <ConsultationModal />
      <SessionEnquiryModal />
      <AilutionsModal />
      <ClubEnquiryModal />
      <BookingModal />
      <ToastContainer />
    </div>
  )
}

