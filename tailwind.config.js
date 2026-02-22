/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1a5f5a",
          light: "#d8f0ed",
          dark: "#164f4a",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#2a9d8f",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#d69e2e",
          foreground: "#1a365d",
        },
        teal: {
          50: '#f0fdfa',
          100: '#d8f0ed',
          200: '#b0e0db',
          300: '#7ecbc4',
          400: '#4ab0a7',
          500: '#2a9d8f',
          600: '#1a5f5a',
          700: '#164f4a',
          800: '#123f3b',
          900: '#0d2f2c',
        },
        cream: '#fffaf0',
        dark: '#164f4a',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Figtree', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        glow: "0 0 20px rgba(42, 157, 143, 0.3)",
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
