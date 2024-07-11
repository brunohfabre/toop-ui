import { colors, radii, useTheme } from '../components/theme-provider'
import { cn } from '../components/utils'

export function Home() {
  const { theme, toggleTheme, color, changeColor, radius, changeRadius } =
    useTheme()

  return (
    <div className="h-screen items-center overflow-auto px-4 py-8 antialiased">
      <div className="mx-auto flex max-w-96 flex-col gap-6">
        <div className="flex gap-2">
          <div className="h-20 flex-1 rounded-sm bg-primary-9" />
          <div className="h-20 flex-1 rounded-md bg-primary-9" />
          <div className="h-20 flex-1 rounded-lg bg-primary-9" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Colors</span>

          <div className="grid grid-cols-3 gap-2">
            {colors.map((item) => (
              <button
                key={item}
                type="button"
                className={cn(
                  'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                  color === item && 'border-gray-12',
                )}
                onClick={() => changeColor(item)}
              >
                <div
                  className={cn(
                    'size-[18px] rounded-full',
                    item && {
                      [`bg-${item}-9`]: true,
                    },
                  )}
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
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                theme === 'light' && 'border-gray-12',
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
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                theme === 'dark' && 'border-gray-12',
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
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                theme === 'system' && 'border-gray-12',
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
                  'flex h-9 items-center justify-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                  radius === item && 'border-gray-12',
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
