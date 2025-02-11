import { Slot } from '@radix-ui/react-slot'
import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

function Card({
  className,
  asChild = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'div'

  return <Comp className={cn('border', className)} {...props} />
}

export { Card }
