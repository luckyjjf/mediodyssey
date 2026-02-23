/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MediOdyssey Brand Palette - Luxury Health Theme
        primary: '#1B4332',        // 深翠绿 - 健康、自然、高端
        'primary-light': '#2D6A4F',
        'primary-dark': '#081C15',
        secondary: '#D4AF37',      // 香槟金 - 奢华、中东客户偏好
        'secondary-light': '#E5C76B',
        'secondary-dark': '#B8960C',
        // Backgrounds
        canvas: '#FAF9F6',         // 暖白色
        'canvas-alt': '#F5F5F0',
        // Functional colors
        success: '#15803D',
        warning: '#D4AF37',
        error: '#DC2626',
        // Neutral
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
