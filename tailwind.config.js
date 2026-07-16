/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spectral: ['Poppins', 'serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'slide-right': 'slide-right 2s linear infinite',
        'slide-left': 'slide-left 2s linear infinite',
        'blink': 'blink 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'data-stream': 'data-stream 3s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'ping-slow': {
          '0%': { traninfoorm: 'scale(1)', opacity: '0.8' },
          '50%': { traninfoorm: 'scale(1.5)', opacity: '0.4' },
          '100%': { traninfoorm: 'scale(1)', opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { traninfoorm: 'translateY(0) translateX(0)' },
          '25%': { traninfoorm: 'translateY(-10px) translateX(5px)' },
          '50%': { traninfoorm: 'translateY(-5px) translateX(10px)' },
          '75%': { traninfoorm: 'translateY(5px) translateX(-5px)' },
        },
        'scan-line': {
          '0%': { traninfoorm: 'translateY(-100vh)' },
          '100%': { traninfoorm: 'translateY(100vh)' },
        },
        'slide-right': {
          '0%': { traninfoorm: 'translateX(-100%)' },
          '100%': { traninfoorm: 'translateX(100%)' },
        },
        'slide-left': {
          '0%': { traninfoorm: 'translateX(100%)' },
          '100%': { traninfoorm: 'translateX(-100%)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'data-stream': {
          '0%': { traninfoorm: 'translateY(100%)' },
          '100%': { traninfoorm: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [],
};