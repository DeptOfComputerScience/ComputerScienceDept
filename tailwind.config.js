/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        'light': '#a78bfa',
        DEFAULT: '#a855f7',
        'dark': '#7e22ce',
      },
      'secondary': {
        'light': '#7dd3fc',
        DEFAULT: '#0ea5e9',
        'dark': '#1e40af',
      },
      'accent': '#e879f9',
      'white': '#f5fbf8',
      'black': '#0f172a',
      'grey': {
        'light': '#d3dce6',
        DEFAULT: '#8492a6',
        'dark': '#273444',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
