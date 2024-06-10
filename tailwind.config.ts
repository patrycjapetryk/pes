import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
        '2xl': '1400px',
        '3xl': '1920px',
      },
      colors: {
        blue: '#2A22AF',
        'dark-blue': '#05134A',
        gray: '#7C7C7C',
        'darker-gray': '#707070',
        'dark-gray': '#263646',
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'helvetica', 'arial', 'sans-serif'],
        display: ['var(--font-poppins)', 'helvetica', 'arial', 'sans-serif'],
        body: ['futura-pt', 'helvetica', 'arial', 'sans-serif'],
      },
      backgroundImage: {
        'blue-pattern-1': "url('../public/images/background-1.jpg')",
        'blue-pattern-2': "url('../public/images/background-2.jpg')",
        'blue-pattern-3': "url('../public/images/background-3.jpg')",
        'blue-pattern-4': "url('../public/images/background-4.jpg')",
        'blue-pattern-mobile-1':
          "url('../public/images/background-mobile-1.jpg')",
        'blue-pattern-mobile-2':
          "url('../public/images/background-mobile-2.jpg')",
        'blue-pattern-mobile-3':
          "url('../public/images/background-mobile-3.jpg')",
        'blue-pattern-mobile-4':
          "url('../public/images/background-mobile-4.jpg')",
        'gradient-radial':
          'radial-gradient(circle at center, rgba(39, 37, 38, 1) 0, rgba(39, 37, 38, 1) 3px, rgba(39, 37, 38, 0) 3px, rgba(39, 37, 38, 0) 100%)',
      },
      animation: {
        dots: 'dots 1s steps(4) infinite',
      },
      keyframes: {
        dots: {
          '0%': { 'clip-path': 'inset(0 100% 0 0)' },
          '100%': { 'clip-path': 'inset(0 -34% 0 0)' },
        },
      },
      clipPath: {
        dots: 'inset(0 100% 0 0)',
      },
    },
  },
  plugins: [],
};
export default config;
