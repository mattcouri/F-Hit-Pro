/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D9FF',
          hover: '#00C3E6',
          pressed: '#00ADCC',
        },
        success: {
          DEFAULT: '#00FF88',
          hover: '#00E676',
          dark: '#00CC5F',
        },
        warning: {
          DEFAULT: '#FF6B35',
          hover: '#FF5722',
          alert: '#FF3D00',
        },
        error: {
          DEFAULT: '#FF3366',
          alert: '#FF1A4D',
        },
        neon: {
          cyan: '#00FFFF',
          pink: '#FF0080',
          purple: '#CC00FF',
          green: '#00FF00',
          yellow: '#FFFF00',
          orange: '#FF6B00',
        },
        vulnerable: '#FF3366',
        building: '#FF6B35',
        stable: '#00D9FF',
        independent: '#00FF88',
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          interactive: 'var(--bg-interactive)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          inverse: 'var(--text-inverse)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'SF Mono', 'Courier New', 'monospace'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
