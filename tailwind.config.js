/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'wierd-gray': '#1d1f21',
      },
    },
  },
  plugins: [],
}

