export function App() {
  function handleChangeToLightTheme() {
    const html = document.getElementsByTagName('html')

    html[0].classList.remove('dark')
    html[0].classList.add('light')
  }

  function handleChangeToDarkTheme() {
    const html = document.getElementsByTagName('html')

    html[0].classList.remove('light')
    html[0].classList.add('dark')
  }

  return (
    <div className="flex h-screen items-center justify-center gap-2 bg-gray-1 p-4 text-gray-12 antialiased">
      <button
        type="button"
        className="h-9 bg-gray-12 px-4 text-sm text-gray-1"
        onClick={handleChangeToLightTheme}
      >
        Light theme
      </button>

      <button
        type="button"
        className="h-9 bg-gray-12 px-4 text-sm text-gray-1 dark:bg-red-500"
        onClick={handleChangeToDarkTheme}
      >
        Dark theme
      </button>
    </div>
  )
}
