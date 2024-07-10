/** @type {import('tailwindcss').Config} */

function generateScale(name) {
  const scale = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1
    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}-a${id})`],
    ]
  }).flat()

  return Object.fromEntries(scale)
}

export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: generateScale('gray'),
      },
    },
  },
  plugins: [],
}
