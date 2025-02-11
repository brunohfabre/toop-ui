import { Slot } from '@radix-ui/react-slot'
import type { ButtonHTMLAttributes } from 'react'

const variants = {
  default: 'bg-zinc-500 text-white hover:bg-zinc-600',
  secondary: 'bg-zinc-100 text-black hover:bg-zinc-200',
  outline: 'bg-transparent border border-zinc-500 text-black hover:bg-zinc-200',
  ghost: 'text-zinc-500 hover:bg-zinc-200',
  link: 'text-zinc-500 hover:underline',
}

const sizes = {
  sm: 'h-7 px-3 text-sm',
  md: 'h-9 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
}

type VariantType = keyof typeof variants
type SizeType = keyof typeof sizes

function Button({
  className,
  asChild = false,
  size = 'md',
  variant = 'default',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  size?: SizeType
  variant?: VariantType
}) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={`cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}

export type { VariantType }
export { Button }
