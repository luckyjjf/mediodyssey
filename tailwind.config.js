/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MediOdyssey Brand Palette - Teal Health Theme
        primary: '#0d9488',
        'primary-light': '#14b8a6',
        'primary-dark': '#0f766e',
        secondary: '#059669',
        accent: '#d97706',
        // Backgrounds
        canvas: '#f8fafc',
        'canvas-alt': '#f1f5f9',
        // Functional colors
        success: '#15803D',
        warning: '#d97706',
        error: '#DC2626',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
