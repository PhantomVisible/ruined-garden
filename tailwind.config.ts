import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,svelte,html}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f4f1',
          100: '#dce5e0',
          200: '#b8ccc0',
          300: '#8fa8a0',
          400: '#5a8070',
          500: '#3a5f52',
          600: '#2a4a3f',
          700: '#1f3a2f',
          800: '#1B3A24',
          900: '#0f1f18',
        },
        terracotta: {
          50: '#faf5f2',
          100: '#f4e8e2',
          200: '#e8d1c5',
          300: '#d9b39d',
          400: '#c9906f',
          500: '#b87550',
          600: '#A65E46',
          700: '#8a4a38',
          800: '#6d3a2d',
          900: '#572e24',
        },
        gold: {
          50: '#fefdf8',
          100: '#fdfbf0',
          200: '#faf6e0',
          300: '#f5edcc',
          400: '#ede0b3',
          500: '#e0d09a',
          600: '#C0B283',
          700: '#a89a6f',
          800: '#8a7d5a',
          900: '#6d6547',
        },
        stone: {
          50: '#f9f7f4',
          100: '#f1ede8',
          200: '#e3dcd2',
          300: '#d1c7ba',
          400: '#b8a896',
          500: '#9d8f7d',
          600: '#8a7b6d',
          700: '#6f6456',
          800: '#5a4f47',
          900: '#4a443d',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
