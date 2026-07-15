import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-hanken)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        background: '#131313',
        surface: '#131313',
        'surface-container-low': '#1c1b1b',
        'surface-container': '#201f1f',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353534',
        primary: '#e8bf97',
        'primary-container': '#c8a27c',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#d3c4b8',
        outline: '#9b8e84',
        'outline-variant': '#4f453c',
        'text-primary': '#e5e2e1',
        'text-secondary': '#d3c4b8',
        'text-muted': '#9b8e84',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.002))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.02)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(200, 162, 124, 0.2)',
      },
    },
  },
  plugins: [],
}

export default config
