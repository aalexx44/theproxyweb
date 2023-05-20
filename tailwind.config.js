/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{jsx, js}",
    "./src/**/*.{jsx, js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#FFF8D6',
        'second': '#F7E1AE'
      },
      screens: {
        'uxl': '1780px'
      },
    },
  },
  plugins: [],
}

