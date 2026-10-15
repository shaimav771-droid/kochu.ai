import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { BookingModal } from '@/features/partnerships/components/BookingModal'
import { WorkshopEnrollModal } from '@/features/education/components/WorkshopEnrollModal'
import { ToastContainer } from '@/shared/ui/Toast'

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f2] text-[#182213] selection:bg-[#7bc943] selection:text-slate-950 overflow-x-hidden">
      {/* Ambient background glows for warm creme aesthetic */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-[#7bc943]/15 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] -right-40 w-[600px] h-[500px] bg-[#6dbf34]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-[#e8deca]/60 rounded-full blur-[140px]" />
      </div>

      <main className="flex-1 z-10">
        <Outlet />
      </main>

      <Footer />
      <BookingModal />
      <WorkshopEnrollModal />
      <ToastContainer />
    </div>
  )
}
