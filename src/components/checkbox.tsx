'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

function Checkbox() {
  return (
    <CheckboxPrimitive.Root className="size-5 shrink-0 bg-zinc-300 data-[state=checked]:bg-zinc-500">
      <CheckboxPrimitive.Indicator className="text-white">
        ✓
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
