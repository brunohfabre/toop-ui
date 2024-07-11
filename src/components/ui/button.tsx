import type { ButtonHTMLAttributes } from 'react'

import type { Color } from '../theme-provider'
import { cn } from '../utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: Color
}

export function Button({ colorScheme, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'h-9 px-4 bg-primary-9',
        colorScheme && `bg-${colorScheme}-9`,
        className,
      )}
      {...props}
    />
  )
}
