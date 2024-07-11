import type { ButtonHTMLAttributes } from 'react'

import { cn } from '../utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return <button className={cn('h-9 px-4 bg-primary-9')} {...props} />
}
