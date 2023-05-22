/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      transform: ['hover'],
    },
    colors: {
      black: '#000000',
      miamiBlue: '#0bd3d3',
      miamiPink: '#f890e7',
      white: '#ffffff',
    },
  },
  plugins: [],
}
