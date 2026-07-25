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
        background: 'var(--background)',
        foreground: 'var(--text-primary)',
        muted: 'var(--text-secondary)',
        accent: 'var(--accent-gold)',
        border: 'var(--border)',
        card: 'var(--surface-2)',
        
        // standard compatibility aliases
        primary: 'var(--accent-gold)',
        'surface-container-low': 'var(--surface-2)',
        'surface-container': 'var(--surface-3)',
        'surface-container-high': 'var(--surface-4)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
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
