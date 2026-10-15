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
        <label htmlFor={inputId} className="text-xs font-bold uppercase tracking-wider text-[#2e3b26]">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3.5 text-[#5e6d56] pointer-events-none flex items-center">
            {leftIcon}
          </span>
        )}
        <input
          id={inputId}
          aria-invalid={Boolean(error)}
          className={cn(
            'w-full bg-white border rounded-xl px-4 py-2.5 text-sm text-[#182213] placeholder:text-[#889681]',
            'transition-colors duration-200 outline-none',
            'focus:ring-2 focus:ring-[#7bc943]/30 focus:border-[#7bc943]',
            leftIcon ? 'pl-10' : 'pl-4',
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-[#ded7c7] hover:border-[#cbcaa0]',
            className
          )}
          {...props}
        />
      </div>
      {error ? (
        <span className="text-xs text-red-600 font-medium">{error}</span>
      ) : helperText ? (
        <span className="text-xs text-[#5e6d56]">{helperText}</span>
      ) : null}
    </div>
  )
}
