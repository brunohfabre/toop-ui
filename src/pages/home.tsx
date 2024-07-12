import { colors, radii, useTheme } from '@/components/theme-provider'
import { cn } from '@/components/utils'

export function Home() {
  const { theme, toggleTheme, color, changeColor, radius, changeRadius } =
    useTheme()

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex max-w-96 flex-1 flex-col gap-6">
        <div className="flex gap-2">
          <div className="h-20 flex-1 rounded-sm bg-primary-500" />
          <div className="h-20 flex-1 rounded-md bg-primary-500" />
          <div className="h-20 flex-1 rounded-lg bg-primary-500" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Colors</span>

          <div className="grid grid-cols-3 gap-2">
            {colors.map((item) => (
              <button
                key={item}
                type="button"
                className={cn(
                  'flex h-9 items-center gap-2 rounded-md border px-3 text-xs font-medium',
                  color === item && 'border-foreground',
                )}
                onClick={() => changeColor(item)}
              >
                <div
                  className={cn('size-[18px] rounded-full', {
                    'bg-gray-500': item === 'gray',
                    'bg-red-500': item === 'red',
                    'bg-orange-500': item === 'orange',
                    'bg-amber-500': item === 'amber',
                    'bg-yellow-500': item === 'yellow',
                    'bg-lime-500': item === 'lime',
                    'bg-green-500': item === 'green',
                    'bg-emerald-500': item === 'emerald',
                    'bg-teal-500': item === 'teal',
                    'bg-cyan-500': item === 'cyan',
                    'bg-sky-500': item === 'sky',
                    'bg-blue-500': item === 'blue',
                    'bg-indigo-500': item === 'indigo',
                    'bg-violet-500': item === 'violet',
                    'bg-purple-500': item === 'purple',
                    'bg-fuchsia-500': item === 'fuchsia',
                    'bg-pink-500': item === 'pink',
                    'bg-rose-500': item === 'rose',
                  })}
                />
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Theme</span>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border px-3 text-xs font-medium',
                theme === 'light' && 'border-foreground',
              )}
              onClick={() => toggleTheme('light')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
              Light
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border px-3 text-xs font-medium',
                theme === 'dark' && 'border-foreground',
              )}
              onClick={() => toggleTheme('dark')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              Dark
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border px-3 text-xs font-medium',
                theme === 'system' && 'border-foreground',
              )}
              onClick={() => toggleTheme('system')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="M6 8h.01" />
                <path d="M10 8h.01" />
                <path d="M14 8h.01" />
              </svg>
              System
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Radii</span>

          <div className="grid grid-cols-5 gap-2">
            {radii.map((item) => (
              <button
                key={item}
                type="button"
                className={cn(
                  'flex h-9 items-center justify-center gap-2 rounded-md border px-3 text-xs font-medium',
                  radius === item && 'border-foreground',
                )}
                onClick={() => changeRadius(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
