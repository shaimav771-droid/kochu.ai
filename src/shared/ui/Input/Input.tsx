import React, { useId } from 'react'
import { cn } from '@/shared/lib/utils/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
}

export function Input({
  label,
  error,
  helperText,
  leftIcon,
  className,
  id,
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id || generatedId

  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      {label && (
        <label htmlFor={inputId} className="text-xs font-semibold uppercase tracking-wider text-[#4D2A00]/90">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3.5 text-[#72450C] pointer-events-none flex items-center">
            {leftIcon}
          </span>
        )}
        <input
          id={inputId}
          aria-invalid={Boolean(error)}
          className={cn(
            'w-full bg-[#FFFDF8] border rounded-[6px] px-3.5 py-2.5 text-sm text-[#4D2A00] placeholder:text-[#9C7954]',
            'transition-colors duration-150 outline-none',
            'focus:ring-2 focus:ring-[#CC6F00]/30 focus:border-[#CC6F00]',
            leftIcon ? 'pl-10' : 'pl-3.5',
            error ? 'border-red-600 focus:border-red-600 focus:ring-red-600/20' : 'border-[#E8DCBD] hover:border-[#CC6F00]/60',
            className
          )}
          {...props}
        />
      </div>
      {error ? (
        <span className="text-xs text-red-600 font-medium">{error}</span>
      ) : helperText ? (
        <span className="text-xs text-[#72450C]">{helperText}</span>
      ) : null}
    </div>
  )
}
