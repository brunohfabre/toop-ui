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
    colors: {
      gray: generateScale('gray'),
      mauve: generateScale('mauve'),
      slate: generateScale('slate'),
      sage: generateScale('sage'),
      olive: generateScale('olive'),
      sand: generateScale('sand'),
      gold: generateScale('gold'),
      bronze: generateScale('bronze'),
      brown: generateScale('brown'),
      yellow: generateScale('yellow'),
      amber: generateScale('amber'),
      orange: generateScale('orange'),
      tomato: generateScale('tomato'),
      red: generateScale('red'),
      ruby: generateScale('ruby'),
      crimson: generateScale('crimson'),
      pink: generateScale('pink'),
      plum: generateScale('plum'),
      purple: generateScale('purple'),
      violet: generateScale('violet'),
      iris: generateScale('iris'),
      indigo: generateScale('indigo'),
      blue: generateScale('blue'),
      cyan: generateScale('cyan'),
      teal: generateScale('teal'),
      jade: generateScale('jade'),
      green: generateScale('green'),
      grass: generateScale('grass'),
      lime: generateScale('lime'),
      mint: generateScale('mint'),
      sky: generateScale('sky'),

      primary: generateScale('primary'),
    },
    borderRadius: {
      sm: 'calc(var(--radius) - 4px)',
      md: 'var(--radius)',
      lg: 'calc(var(--radius) + 4px)',
      full: '99999px',
    },
  },
  plugins: [],
}
