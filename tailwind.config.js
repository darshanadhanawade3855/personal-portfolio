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
        bg: {
          primary: '#050505',
          secondary: '#0A0A0A',
          card: '#0D0D0D',
          hover: '#141414',
          subtle: '#18181B',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.14)',
          glow: 'rgba(139, 92, 246, 0.3)',
          cyan: 'rgba(56, 189, 248, 0.3)',
        },
        accent: {
          violet: '#8B5CF6',
          indigo: '#6366F1',
          cyan: '#38BDF8',
          blue: '#3B82F6',
          emerald: '#10B981',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          muted: '#71717A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 40px -10px rgba(139, 92, 246, 0.25)',
        'glow-cyan': '0 0 40px -10px rgba(56, 189, 248, 0.25)',
        'glow-subtle': '0 0 30px -5px rgba(255, 255, 255, 0.05)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.12) 0%, rgba(56, 189, 248, 0.06) 40%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
