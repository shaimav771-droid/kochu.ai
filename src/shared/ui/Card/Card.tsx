import React from 'react'
import { cn } from '@/shared/lib/utils/cn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'glass' | 'interactive' | 'bordered'
}

export function Card({
  children,
  variant = 'glass',
  className,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl overflow-hidden transition-all duration-300'

  const variants = {
    default: 'bg-white/95 border border-[#e5dfd1] text-[#182213] shadow-md',
    glass: 'glass-panel text-[#182213] shadow-xl',
    interactive: 'glass-panel glass-panel-hover text-[#182213] cursor-pointer',
    bordered: 'bg-white border-2 border-[#7bc943] text-[#182213] shadow-lg shadow-[#7bc943]/10',
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  )
}
