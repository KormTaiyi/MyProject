/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#",
        brandBlack: "#000000",
      }
    }
  },
  plugins: [],
}

