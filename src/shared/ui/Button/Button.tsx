import React from 'react'
import { cn } from '@/shared/lib/utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7bc943]/50 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]'

  const variantStyles = {
    primary: 'bg-[#7bc943] hover:bg-[#6db936] text-slate-950 font-bold shadow-md shadow-[#7bc943]/25 hover:shadow-[#7bc943]/40',
    secondary: 'bg-[#ede7d8] hover:bg-[#e2dccb] text-[#192314] font-semibold border border-[#dcd6c5]',
    outline: 'border-2 border-[#7bc943] text-[#295711] font-bold hover:bg-[#7bc943]/10',
    ghost: 'text-[#44533c] hover:text-[#141f10] hover:bg-[#ede7d9]',
    glow: 'bg-gradient-to-r from-[#8ad450] to-[#7bc943] text-slate-950 font-extrabold shadow-lg shadow-[#7bc943]/30 hover:shadow-[#7bc943]/50 hover:brightness-105',
  }

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-4.5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  }

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  )
}
