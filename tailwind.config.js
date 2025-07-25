/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6c63ff',
        'primary-light': '#e8e6ff',
        'ternary-dark': '#2d3748',
      },
    },
  },
  plugins: [],
}