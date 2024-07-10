import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type Theme = 'dark' | 'light' | 'system'
type Color =
  | 'gray'
  | 'mauve'
  | 'slate'
  | 'sage'
  | 'olive'
  | 'sand'
  | 'gold'
  | 'bronze'
  | 'brown'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'lime'
  | 'mint'
  | 'sky'

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
  defaultColor?: Color
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  toggleTheme: (theme: Theme) => void

  color: Color
  changeColor: (color: Color) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  toggleTheme: () => null,
  color: 'gray',
  changeColor: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  defaultColor = 'gray',
  storageKey = 'toop-ui',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () =>
      (localStorage.getItem(`${storageKey}.theme`) as Theme) || defaultTheme,
  )
  const [color, setColor] = useState<Color>(
    () =>
      (localStorage.getItem(`${storageKey}.color`) as Color) || defaultColor,
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)

      return
    }

    root.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.add(color)
  }, [color])

  function changeColor(value: Color) {
    if (value === color) {
      return
    }

    const root = window.document.documentElement

    root.classList.remove(color)
    localStorage.setItem(`${storageKey}.color`, value)
    setColor(value)
  }

  const value = {
    theme,
    toggleTheme: (theme: Theme) => {
      localStorage.setItem(`${storageKey}.theme`, theme)
      setTheme(theme)
    },
    color,
    changeColor,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
