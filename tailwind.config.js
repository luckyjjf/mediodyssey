/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4332',
        'primary-light': '#2D6A4F',
        'primary-dark': '#081C15',
        secondary: '#D4AF37',
        'secondary-light': '#E5C76B',
        'secondary-dark': '#B8960C',
        canvas: '#FAF9F6',
        'canvas-alt': '#F5F5F0',
        success: '#15803D',
        warning: '#D4AF37',
        error: '#DC2626',
        ink: '#1a1a1a',
        'ink-light': '#4a4a4a',
        'ink-muted': '#7a7a7a',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
