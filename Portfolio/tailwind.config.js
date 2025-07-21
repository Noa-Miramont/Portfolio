/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans-serif'],
        kalnia: ['Kalnia', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'xlpanel': '1075px'
      }
    },
  },
  plugins: [],
} 