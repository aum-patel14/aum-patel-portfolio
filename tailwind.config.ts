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
        outfit: ['var(--font-outfit)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        background: '#000000',
        surface: '#09090B',
        'surface-2': '#18181B',
        'surface-3': '#27272A',
        'accent-blue': '#3b82f6',
        'accent-blue-light': '#60a5fa',
        'accent-purple': '#8b5cf6',
        'accent-purple-light': '#a78bfa',
        'accent-cyan': '#06b6d4',
        'text-primary': '#ffffff',
        'text-secondary': '#94a3b8',
        'text-muted': '#64748b',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-blue-purple': 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.005))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,255,255,0.03)' },
          '50%': { boxShadow: '0 0 40px rgba(255,255,255,0.08), 0 0 80px rgba(255,255,255,0.02)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.15)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.15)',
        'glow-sm': '0 0 15px rgba(139, 92, 246, 0.1)',
        'card': '0 4px 32px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.9), 0 0 0 1px rgba(255, 255, 255, 0.12)',
      },
    },
  },
  plugins: [],
}

export default config
