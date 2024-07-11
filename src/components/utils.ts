import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import * as colors from '@radix-ui/colors'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Color = keyof typeof colors

export function getColorContrast(color: string) {
  const colorSplitted = color.split('-') as [Color, string]

  let hex = (colors as any)[colorSplitted[0]][
    `${colorSplitted[0]}${colorSplitted[1]}`
  ]

  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.')
  }

  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  if (r * 0.299 + g * 0.587 + b * 0.114 > 186) {
    return 'dark'
  }

  return 'light'
}
