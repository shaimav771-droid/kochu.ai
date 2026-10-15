import React from 'react'
import { cn } from '@/shared/lib/utils/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: 'brand' | 'success' | 'outline' | 'slate' | 'highlight'
}

export function Badge({
  children,
  variant = 'brand',
  className,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase font-mono'

  const variants = {
    brand: 'bg-[#7bc943]/15 text-[#275310] border border-[#7bc943]/35',
    success: 'bg-emerald-500/15 text-emerald-800 border border-emerald-500/35',
    outline: 'border border-[#d9d3c2] text-[#3d4c35] bg-white/80',
    slate: 'bg-[#eee8dc] text-[#3d4c35] border border-[#ded7c7]',
    highlight: 'bg-amber-500/15 text-amber-800 border border-amber-500/35',
  }

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  )
}
