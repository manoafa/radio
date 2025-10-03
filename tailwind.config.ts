import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Radio station brand colors based on logo
        primary: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fbd7a5',
          300: '#f8bb6d',
          400: '#f59533',
          500: '#f2760b', // Main orange
          600: '#e35d06',
          700: '#bc4507',
          800: '#96360c',
          900: '#792e0d',
        },
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6fe',
          300: '#a5b8fc',
          400: '#8191f8',
          500: '#6366f1', // Main navy blue
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'radio-gradient': 'linear-gradient(135deg, #1e293b 0%, #312e81 50%, #f2760b 100%)',
        'navy-gradient': 'linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)',
        'orange-gradient': 'linear-gradient(135deg, #f2760b 0%, #f59533 50%, #f8bb6d 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #f2760b, 0 0 10px #f2760b, 0 0 15px #f2760b' },
          '100%': { boxShadow: '0 0 10px #f2760b, 0 0 20px #f2760b, 0 0 30px #f2760b' },
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'radio': '0 10px 25px -5px rgba(49, 46, 129, 0.1), 0 10px 10px -5px rgba(49, 46, 129, 0.04)',
        'orange': '0 10px 25px -5px rgba(242, 118, 11, 0.1), 0 10px 10px -5px rgba(242, 118, 11, 0.04)',
        'glow-orange': '0 0 20px rgba(242, 118, 11, 0.3)',
        'glow-navy': '0 0 20px rgba(49, 46, 129, 0.3)',
      }
    },
  },
  plugins: [],
};

export default config;
