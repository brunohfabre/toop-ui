import { cn } from '@/lib/utils'

function Input({ className, ...props }: React.ComponentProps<'input'>) {
  return <input className={cn('', className)} {...props} />
}

export { Input }
