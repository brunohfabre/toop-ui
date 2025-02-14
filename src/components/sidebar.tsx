import { cn } from '@/lib/utils'

function Sidebar({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <aside className={cn('w-64 flex flex-col', 'bg-zinc-300')} {...props} />
  )
}

function SidebarHeader({
  className,
  ...props
}: React.ComponentProps<'header'>) {
  return <header className={cn('bg-zinc-400 p-2')} {...props} />
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('overflow-y-auto', 'bg-blue-200 p-2')} {...props} />
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('bg-red-200 p-2')} {...props} />
}

function SidebarGroupLabel({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('bg-violet-200 p-2')} {...props} />
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('bg-zinc-200 p-2')} {...props} />
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('flex flex-col', 'bg-zinc-300 p-2')} {...props} />
}

function SidebarMenuItem({
  className,
  ...props
}: React.ComponentProps<'button'>) {
  return <button className={cn('text-sm flex', 'bg-zinc-400 p-2')} {...props} />
}

function SidebarFooter({
  className,
  ...props
}: React.ComponentProps<'footer'>) {
  return <footer className={cn('mt-auto', 'bg-zinc-400 p-2')} {...props} />
}

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
}
