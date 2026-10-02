import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        sans: ['var(--font-instrument)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg: '#0C0C0E',
        surface: '#131317',
        border: '#1E1E26',
        'border-glow': 'rgba(147,130,255,0.2)',
        ink: '#F0EFF8',
        'ink-muted': '#8B8A9A',
        'ink-dim': '#44445A',
        signal: '#9382FF',
        'signal-lt': 'rgba(147,130,255,0.08)',
        'signal-border': 'rgba(147,130,255,0.25)',
        teal: '#2DD4BF',
        'teal-lt': 'rgba(45,212,191,0.08)',
        gold: '#F0C060',
        'gold-lt': 'rgba(240,192,96,0.08)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
