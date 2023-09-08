/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'main-vh': 'calc(100vh - 64px)',
      },
      backgroundColor: {
        'primary-bg': '#f5f5f4',
        'secondary-bg': '#7c9d47',
        'tertiary-bg': '#d1d5db',
      },
      textColor: {
        'secondary-text': '#f5f5f5',
      },
      colors: {},
    },
  },
  plugins: [],
}
