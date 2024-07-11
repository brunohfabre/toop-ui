import { useTheme } from '../components/theme-provider'
import { cn } from '../components/utils'

export function Home() {
  const { theme, toggleTheme, color, changeColor, radius, changeRadius } =
    useTheme()

  return (
    <div className="flex h-screen items-center bg-gray-2 px-4 py-8 antialiased">
      <div className="mx-auto flex max-w-96 flex-col gap-6">
        <div className="h-20 items-center justify-center rounded-lg bg-primary-9" />

        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Colors</span>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'gray' && 'border-gray-12',
              )}
              onClick={() => changeColor('gray')}
            >
              <div className={cn('size-[18px] rounded-full bg-gray-9')} />
              Gray
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'mauve' && 'border-gray-12',
              )}
              onClick={() => changeColor('mauve')}
            >
              <div className={cn('size-[18px] rounded-full bg-mauve-9')} />
              Mauve
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'slate' && 'border-gray-12',
              )}
              onClick={() => changeColor('slate')}
            >
              <div className={cn('size-[18px] rounded-full bg-slate-9')} />
              Slate
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'sage' && 'border-gray-12',
              )}
              onClick={() => changeColor('sage')}
            >
              <div className={cn('size-[18px] rounded-full bg-sage-9')} />
              Sage
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'olive' && 'border-gray-12',
              )}
              onClick={() => changeColor('olive')}
            >
              <div className={cn('size-[18px] rounded-full bg-olive-9')} />
              Olive
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'sand' && 'border-gray-12',
              )}
              onClick={() => changeColor('sand')}
            >
              <div className={cn('size-[18px] rounded-full bg-sand-9')} />
              Sand
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'gold' && 'border-gray-12',
              )}
              onClick={() => changeColor('gold')}
            >
              <div className={cn('size-[18px] rounded-full bg-gold-9')} />
              Gold
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'bronze' && 'border-gray-12',
              )}
              onClick={() => changeColor('bronze')}
            >
              <div className={cn('size-[18px] rounded-full bg-bronze-9')} />
              Bronze
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'brown' && 'border-gray-12',
              )}
              onClick={() => changeColor('brown')}
            >
              <div className={cn('size-[18px] rounded-full bg-brown-9')} />
              Brown
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'yellow' && 'border-gray-12',
              )}
              onClick={() => changeColor('yellow')}
            >
              <div className={cn('size-[18px] rounded-full bg-yellow-9')} />
              Yellow
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'amber' && 'border-gray-12',
              )}
              onClick={() => changeColor('amber')}
            >
              <div className={cn('size-[18px] rounded-full bg-amber-9')} />
              Amber
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'orange' && 'border-gray-12',
              )}
              onClick={() => changeColor('orange')}
            >
              <div className={cn('size-[18px] rounded-full bg-orange-9')} />
              Orange
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'tomato' && 'border-gray-12',
              )}
              onClick={() => changeColor('tomato')}
            >
              <div className={cn('size-[18px] rounded-full bg-tomato-9')} />
              Tomato
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'red' && 'border-gray-12',
              )}
              onClick={() => changeColor('red')}
            >
              <div className={cn('size-[18px] rounded-full bg-red-9')} />
              Red
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'ruby' && 'border-gray-12',
              )}
              onClick={() => changeColor('ruby')}
            >
              <div className={cn('size-[18px] rounded-full bg-ruby-9')} />
              Ruby
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'crimson' && 'border-gray-12',
              )}
              onClick={() => changeColor('crimson')}
            >
              <div className={cn('size-[18px] rounded-full bg-crimson-9')} />
              Crimson
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'pink' && 'border-gray-12',
              )}
              onClick={() => changeColor('pink')}
            >
              <div className={cn('size-[18px] rounded-full bg-pink-9')} />
              Pink
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'plum' && 'border-gray-12',
              )}
              onClick={() => changeColor('plum')}
            >
              <div className={cn('size-[18px] rounded-full bg-plum-9')} />
              Plum
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'purple' && 'border-gray-12',
              )}
              onClick={() => changeColor('purple')}
            >
              <div className={cn('size-[18px] rounded-full bg-purple-9')} />
              Purple
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'violet' && 'border-gray-12',
              )}
              onClick={() => changeColor('violet')}
            >
              <div className={cn('size-[18px] rounded-full bg-violet-9')} />
              Violet
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'iris' && 'border-gray-12',
              )}
              onClick={() => changeColor('iris')}
            >
              <div className={cn('size-[18px] rounded-full bg-iris-9')} />
              Iris
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'indigo' && 'border-gray-12',
              )}
              onClick={() => changeColor('indigo')}
            >
              <div className={cn('size-[18px] rounded-full bg-indigo-9')} />
              Indigo
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'blue' && 'border-gray-12',
              )}
              onClick={() => changeColor('blue')}
            >
              <div className={cn('size-[18px] rounded-full bg-blue-9')} />
              Blue
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'cyan' && 'border-gray-12',
              )}
              onClick={() => changeColor('cyan')}
            >
              <div className={cn('size-[18px] rounded-full bg-cyan-9')} />
              Cyan
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'teal' && 'border-gray-12',
              )}
              onClick={() => changeColor('teal')}
            >
              <div className={cn('size-[18px] rounded-full bg-teal-9')} />
              Teal
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'jade' && 'border-gray-12',
              )}
              onClick={() => changeColor('jade')}
            >
              <div className={cn('size-[18px] rounded-full bg-jade-9')} />
              Jade
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'green' && 'border-gray-12',
              )}
              onClick={() => changeColor('green')}
            >
              <div className={cn('size-[18px] rounded-full bg-green-9')} />
              Green
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'grass' && 'border-gray-12',
              )}
              onClick={() => changeColor('grass')}
            >
              <div className={cn('size-[18px] rounded-full bg-grass-9')} />
              Grass
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'lime' && 'border-gray-12',
              )}
              onClick={() => changeColor('lime')}
            >
              <div className={cn('size-[18px] rounded-full bg-lime-9')} />
              Lime
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'mint' && 'border-gray-12',
              )}
              onClick={() => changeColor('mint')}
            >
              <div className={cn('size-[18px] rounded-full bg-mint-9')} />
              Mint
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                color === 'sky' && 'border-gray-12',
              )}
              onClick={() => changeColor('sky')}
            >
              <div className={cn('size-[18px] rounded-full bg-sky-9')} />
              Sky
            </button>
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
            <button
              type="button"
              className={cn(
                'flex h-9 items-center justify-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                radius === '0' && 'border-gray-12',
              )}
              onClick={() => changeRadius('0')}
            >
              0
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center justify-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                radius === '0.25' && 'border-gray-12',
              )}
              onClick={() => changeRadius('0.25')}
            >
              0.25
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center justify-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                radius === '0.5' && 'border-gray-12',
              )}
              onClick={() => changeRadius('0.5')}
            >
              0.5
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center justify-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                radius === '0.75' && 'border-gray-12',
              )}
              onClick={() => changeRadius('0.75')}
            >
              0.75
            </button>

            <button
              type="button"
              className={cn(
                'flex h-9 items-center justify-center gap-2 rounded-md border border-gray-5 px-3 text-xs font-medium',
                radius === '1' && 'border-gray-12',
              )}
              onClick={() => changeRadius('1')}
            >
              1
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
