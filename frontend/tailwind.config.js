/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'weather-blue': '#1e40af',
        'weather-light-blue': '#3b82f6',
        'weather-gray': '#6b7280',
      },
      fontFamily: {
        'weather': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
