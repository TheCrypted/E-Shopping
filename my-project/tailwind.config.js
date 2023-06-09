/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "translucentWhite": "rgba(50, 50, 50, 0.4)"
      }
    },
  },
  plugins: [],
}

