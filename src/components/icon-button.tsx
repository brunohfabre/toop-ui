import type { ButtonHTMLAttributes } from 'react'

function IconButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`size-9 flex items-center justify-center bg-zinc-500 cursor-pointer text-white [&_svg]:size-4 ${className}`}
      {...props}
    />
  )
}

export { IconButton }
