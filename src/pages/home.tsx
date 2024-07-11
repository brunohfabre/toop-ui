import { useTheme } from '../components/theme-provider'

export function Home() {
  const { toggleTheme, changeColor } = useTheme()

  function handleChangeThemeToLight() {
    toggleTheme('light')
  }

  function handleChangeThemeToDark() {
    toggleTheme('dark')
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 bg-gray-1 p-4 text-gray-12 antialiased transition-colors">
      <div className="flex">
        <div className="size-32 bg-primary-9" />
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="h-9 rounded-md bg-gray-12 px-4 text-sm text-gray-1"
          onClick={handleChangeThemeToLight}
        >
          Light theme
        </button>

        <button
          type="button"
          className="h-9 bg-gray-12 px-4 text-sm text-gray-1"
          onClick={handleChangeThemeToDark}
        >
          Dark theme
        </button>

        <button
          type="button"
          className="h-9 bg-gray-12 px-4 text-sm text-gray-1"
          onClick={() => changeColor('crimson')}
        >
          Crimson
        </button>

        <button
          type="button"
          className="h-9 bg-gray-12 px-4 text-sm text-gray-1"
          onClick={() => changeColor('indigo')}
        >
          Indigo
        </button>
      </div>
    </div>
  )
}
