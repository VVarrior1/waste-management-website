/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1A2B3C',
          DEFAULT: '#1A2B3C',
          dark: '#0F1A24',
        },
        secondary: {
          light: '#FF0000',
          DEFAULT: '#C8102E',
          dark: '#8B0000',
        },
        danger: {
          light: '#FF0000',
          DEFAULT: '#C8102E',
          dark: '#8B0000',
        },
      },
    },
  },
  plugins: [],
}; 