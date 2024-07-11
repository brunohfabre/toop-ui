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
export type Color = (typeof colors)[number]

export const themes = ['light', 'dark', 'system']
export type Theme = (typeof themes)[number]

export const radii = ['0', '0.25', '0.5', '0.75', '1']
export type Radius = (typeof radii)[number]

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
  defaultColor?: Color
  defaultRadius?: Radius
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  resolvedTheme: string
  toggleTheme: (value: Theme) => void

  color: Color
  changeColor: (value: Color) => void

  radius: Radius
  changeRadius: (value: Radius) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  resolvedTheme: '',
  toggleTheme: () => null,
  color: 'gray',
  changeColor: () => null,
  radius: '0.5',
  changeRadius: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  defaultColor = 'gray',
  defaultRadius = '0.5',
  storageKey = 'toop-ui',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () =>
      (localStorage.getItem(`${storageKey}.theme`) as Theme) || defaultTheme,
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
  const [color, setColor] = useState<Color>(
    () =>
      (localStorage.getItem(`${storageKey}.color`) as Color) || defaultColor,
  )
  const [radius, setRadius] = useState<Radius>(
    () =>
      (localStorage.getItem(`${storageKey}.radius`) as Radius) || defaultRadius,
  )

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

  useEffect(() => {
    const root = window.document.documentElement

    root.style.setProperty('--radius', `${radius}rem`)
  }, [radius])

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

  function changeRadius(value: Radius) {
    localStorage.setItem(`${storageKey}.radius`, value)
    setRadius(value)
  }

  const value = {
    theme,
    resolvedTheme,
    toggleTheme,
    color,
    changeColor,
    radius,
    changeRadius,
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
