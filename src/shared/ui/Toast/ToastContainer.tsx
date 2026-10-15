import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'
import { useAppStore } from '@/shared/lib/store/useAppStore'
import { cn } from '@/shared/lib/utils/cn'

export function ToastContainer() {
  const { toasts, removeToast } = useAppStore()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const icons = {
          success: <CheckCircle2 className="w-5 h-5 text-[#7bc943] shrink-0" />,
          error: <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />,
          info: <Info className="w-5 h-5 text-sky-500 shrink-0" />,
        }

        const borderStyles = {
          success: 'border-[#7bc943] bg-white text-[#182213]',
          error: 'border-red-400 bg-white text-[#182213]',
          info: 'border-sky-400 bg-white text-[#182213]',
        }

        return (
          <div
            key={toast.id}
            className={cn(
              'pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-xl border shadow-xl transition-all animate-in slide-in-from-bottom-2',
              borderStyles[toast.type]
            )}
          >
            <div className="flex items-center gap-3 text-sm font-semibold">
              {icons[toast.type]}
              <span>{toast.message}</span>
            </div>
            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="text-[#65755e] hover:text-[#182213] transition-colors p-1"
              aria-label="Dismiss toast"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
