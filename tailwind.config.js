/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'dark-blue': 'hsl(209, 23%, 22%)',
      'dark': 'hsl(207, 26%, 17%)',
      'light': 'hsl(0, 0%, 98%)',
      'font-light': 'hsl(200, 15%, 8%)',
      'font-dark': 'hsl(0, 0%, 100%)',
      'input-light': 'hsl(0, 0%, 52%)'
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}

