/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Custom colors for light and dark mode
        primary: {
          light: '#10B981', // Green-600
          dark: '#059669',  // Green-700
        },
        secondary: {
          light: '#3B82F6', // Blue-500
          dark: '#2563EB',  // Blue-600
        },
        danger: {
          light: '#EF4444', // Red-500
          dark: '#DC2626',  // Red-600
        },
      },
    },
  },
  plugins: [],
}; 