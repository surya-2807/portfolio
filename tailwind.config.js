/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        brand: {
          bg: '#05080f',
          surface: '#0b1121',
          card: '#0d1528',
          border: 'rgba(255,255,255,0.07)',
        },
        accent: {
          blue: '#4f8ef7',
          cyan: '#06b6d4',
          indigo: '#6366f1',
          purple: '#a855f7',
          amber: '#f59e0b',
          emerald: '#10b981',
        }
      },
      boxShadow: {
        'glow-blue': '0 0 40px -10px rgba(79, 142, 247, 0.35)',
        'glow-sm': '0 0 20px -5px rgba(79, 142, 247, 0.2)',
        'glow-amber': '0 0 30px -8px rgba(245, 158, 11, 0.3)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 8px 32px -4px rgba(0, 0, 0, 0.8)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.96) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.2s ease-out forwards',
        'scaleUp': 'scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slideUp': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(rgba(79, 142, 247, 0.07) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(79, 142, 247, 0.13) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, #0d1528 0%, #080f1e 100%)',
        'border-gradient': 'linear-gradient(90deg, transparent, rgba(79,142,247,0.4), transparent)',
      },
      backgroundSize: {
        'dot-grid': '28px 28px',
      },
    },
  },
  plugins: [],
}
