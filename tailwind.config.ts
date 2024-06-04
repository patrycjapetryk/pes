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
      },
    },
  },
  plugins: [],
};
export default config;
