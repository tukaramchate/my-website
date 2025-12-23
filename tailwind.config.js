/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'picto-primary': '#9929fb',
        'picto-primary-dark': '#650fa0',
        'soft-white': '#f0f1f3',
        'soft-dark': '#87909d',
      },
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
      },
      maxWidth: {
        'container': '1320px',
      },
      spacing: {
        '15': '3.75rem',
        '17.5': '4.375rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '25': '6.25rem',
        '27.5': '6.875rem',
        '30': '7.5rem',
        '31.5': '7.875rem',
        '35': '8.75rem',
        '37.5': '9.375rem',
        '106': '26.5rem',
        '117': '29.25rem',
        '126': '31.5rem',
        '134': '33.5rem',
        '135': '33.75rem',
        '144.25': '36.0625rem',
      },
    },
  },
  plugins: [],
}
