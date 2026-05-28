import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './features/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#020617',
        panel: '#0f172a',
        accent: '#22d3ee'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(56,189,248,0.15) 1px, transparent 0)'
      }
    }
  },
  plugins: []
} satisfies Config;
