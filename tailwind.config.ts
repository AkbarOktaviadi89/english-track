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
      colors: {
        brand: {
          50:  '#eef9f4',
          100: '#d5f1e3',
          200: '#aee3cb',
          300: '#7acdb0',
          400: '#45b290',
          500: '#259775',
          600: '#18785e',
          700: '#15604c',
          800: '#134d3e',
          900: '#113f33',
          950: '#082419',
        },
        // Surface uses CSS variables so dark mode remaps automatically
        surface: {
          0:   'rgb(var(--s0) / <alpha-value>)',
          50:  'rgb(var(--s50) / <alpha-value>)',
          100: 'rgb(var(--s100) / <alpha-value>)',
          200: 'rgb(var(--s200) / <alpha-value>)',
          300: 'rgb(var(--s300) / <alpha-value>)',
          400: 'rgb(var(--s400) / <alpha-value>)',
          500: 'rgb(var(--s500) / <alpha-value>)',
          600: 'rgb(var(--s600) / <alpha-value>)',
          700: 'rgb(var(--s700) / <alpha-value>)',
          800: 'rgb(var(--s800) / <alpha-value>)',
          900: 'rgb(var(--s900) / <alpha-value>)',
          950: 'rgb(var(--s950) / <alpha-value>)',
        },
        // white also remaps to dark card bg in dark mode
        white: 'rgb(var(--sw) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft':     '0 2px 8px 0 rgba(0,0,0,0.06), 0 1px 2px 0 rgba(0,0,0,0.04)',
        'card':     '0 4px 16px 0 rgba(0,0,0,0.08), 0 1px 4px 0 rgba(0,0,0,0.04)',
        'elevated': '0 8px 32px 0 rgba(0,0,0,0.10), 0 2px 8px 0 rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-in':   'fadeIn 0.4s ease-out',
        'slide-up':  'slideUp 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' },                              '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(12px)'},'100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}

export default config
