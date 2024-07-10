import { useTheme } from '../components/theme-provider'

export function Home() {
  const { setTheme } = useTheme()

  function handleChangeThemeToLight() {
    setTheme('light')
  }

  function handleChangeThemeToDark() {
    setTheme('dark')
  }

  return (
    <div className="flex h-screen items-center justify-center gap-2 bg-gray-1 p-4 text-gray-12 antialiased transition-colors">
      <button
        type="button"
        className="h-9 rounded-md bg-gray-12 px-4 text-sm text-gray-1"
        onClick={handleChangeThemeToLight}
      >
        Light theme
      </button>

      <button
        type="button"
        className="h-9 rounded-full bg-gray-12 px-4 text-sm text-gray-1 dark:bg-red-500"
        onClick={handleChangeThemeToDark}
      >
        Dark theme
      </button>
    </div>
  )
}
