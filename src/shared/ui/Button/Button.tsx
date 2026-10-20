import React from 'react'
import { cn } from '@/shared/lib/utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'burnt' | 'glow'
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
  // 5–7px restrained radius system per art direction rules
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-[6px] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#CC6F00]/50 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.99] cursor-pointer'

  const variantStyles = {
    // Primary: Golden amber background with deep brown text
    primary:
      'bg-[#F2A900] hover:bg-[#E59E00] text-[#4D2A00] font-semibold border border-[#D99600] shadow-2xs',
    // Secondary: Light warm cream tinted button
    secondary:
      'bg-[#FFFDF8] hover:bg-[#F5EEDC] text-[#4D2A00] font-medium border border-[#E8DCBD]',
    // Outline: Deep brown refined stroke
    outline:
      'border border-[#4D2A00] text-[#4D2A00] hover:bg-[#4D2A00] hover:text-[#FAF5E8] font-medium',
    // Dark: Deep brown background with warm cream text
    dark:
      'bg-[#4D2A00] hover:bg-[#381F00] text-[#FAF5E8] font-medium border border-[#381F00]',
    // Burnt Orange Accent
    burnt:
      'bg-[#CC6F00] hover:bg-[#B56200] text-[#FFFDF8] font-semibold border border-[#B56200]',
    // Ghost
    ghost:
      'text-[#4D2A00] hover:bg-[#4D2A00]/8',
    glow:
      'bg-[#F2A900] hover:bg-[#E59E00] text-[#4D2A00] font-semibold border border-[#D99600]',
  }

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 min-h-[34px]',
    md: 'text-sm px-4.5 py-2.5 gap-2 min-h-[42px]',
    lg: 'text-base px-6 py-3.5 gap-2.5 min-h-[48px]',
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

