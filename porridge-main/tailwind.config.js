/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#851E3D',
          light: '#601731',
          dark: '#511D39',
        },
        primary: {
          DEFAULT: '#5D2D48',
          light: '#601731',
          dark: '#511D39',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
