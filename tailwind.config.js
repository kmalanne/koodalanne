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
      miamiPink: {
        DEFAULT: '#f890e7',
        light: 'rgba(248,144,231,0.7)',
      },
      white: '#ffffff',
    },
  },
  plugins: [],
}
