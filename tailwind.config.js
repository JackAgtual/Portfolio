/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'main-vh': 'calc(100vh - 64px)',
      },
      backgroundColor: {
        'primary-bg': '#fafaf9',
        'secondary-bg': '#91AF65',
        'tertiary-bg': '#d1d5db',
      },
      textColor: {
        'secondary-text': '#f5f5f5',
      },
      colors: {
        'primary-bg': '#fafaf9',
        'secondary-bg': '#91AF65',
      },
    },
  },
  plugins: [],
}
