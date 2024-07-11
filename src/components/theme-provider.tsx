import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export const colors = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
  'gold',
  'bronze',
  'brown',
  'yellow',
  'amber',
  'orange',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'lime',
  'mint',
  'sky',
] as const
type Color = (typeof colors)[number]

export const themes = ['light', 'dark', 'system']
type Theme = (typeof themes)[number]

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
  defaultColor?: Color
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  resolvedTheme: string
  toggleTheme: (theme: Theme) => void

  color: Color
  changeColor: (color: Color) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  resolvedTheme: '',
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

  const [resolvedTheme, setResolvedTheme] = useState(() => {
    const persistedTheme =
      (localStorage.getItem(`${storageKey}.theme`) as Theme) || defaultTheme

    if (persistedTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      return systemTheme
    }

    return persistedTheme
  })

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')

    function getSystemTheme(event: any) {
      if (theme === 'system') {
        const newTheme = event.matches ? 'dark' : 'light'

        setResolvedTheme(newTheme)
      }
    }

    systemTheme.addEventListener('change', getSystemTheme)

    return () => {
      systemTheme.removeEventListener('change', getSystemTheme)
    }
  }, [theme])

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    root.classList.add(resolvedTheme)
  }, [resolvedTheme])

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.add(color)
  }, [color])

  function toggleTheme(value: Theme) {
    localStorage.setItem(`${storageKey}.theme`, value)
    setTheme(value)

    if (value === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      setResolvedTheme(systemTheme)
      return
    }

    setResolvedTheme(value)
  }

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
    resolvedTheme,
    toggleTheme,
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
