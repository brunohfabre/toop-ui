import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          950: 'var(--primary-950)',
        },
        gray: colors.neutral,
      },
      fontFamily: {
        sans: '"Plus Jakarta Sans", sans-serif',
      },
    },
    borderRadius: {
      sm: 'calc(var(--radius) - (var(--radius) / 2))',
      md: 'var(--radius)',
      lg: 'calc(var(--radius) + (var(--radius) / 2))',
      full: '99999px',
    },
  },
  plugins: [],
}
