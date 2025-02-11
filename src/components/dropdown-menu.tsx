import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

function DropdownMenuSubTrigger(
  props: DropdownMenuPrimitive.DropdownMenuSubTriggerProps
) {
  return <DropdownMenuPrimitive.DropdownMenuSubTrigger {...props} />
}

function DropdownMenuSubContent(
  props: DropdownMenuPrimitive.DropdownMenuSubContentProps
) {
  return <DropdownMenuPrimitive.DropdownMenuSubContent {...props} />
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuPrimitive.DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[8rem] border border-zinc-300 bg-white overflow-hidden p-1 shadow-md',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuItem({
  className,
  inset,
  ...props
}: DropdownMenuPrimitive.DropdownMenuItemProps & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-zinc-200',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem(
  props: DropdownMenuPrimitive.DropdownMenuCheckboxItemProps
) {
  return <DropdownMenuPrimitive.DropdownMenuCheckboxItem {...props} />
}

function DropdownMenuRadioItem(
  props: DropdownMenuPrimitive.DropdownMenuRadioItemProps
) {
  return <DropdownMenuPrimitive.DropdownMenuRadioItem {...props} />
}

function DropdownMenuLabel(
  props: DropdownMenuPrimitive.DropdownMenuLabelProps
) {
  return <DropdownMenuPrimitive.DropdownMenuLabel {...props} />
}

function DropdownMenuSeparator({
  className,
  ...props
}: DropdownMenuPrimitive.DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.DropdownMenuSeparator
      className={cn('-mx-1 my-1 h-px bg-zinc-300', className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('', className)} {...props} />
}

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}
