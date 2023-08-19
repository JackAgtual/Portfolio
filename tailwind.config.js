/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'main-vh': 'calc(100vh - 64px)',
      },
    },
  },
  plugins: [],
}
