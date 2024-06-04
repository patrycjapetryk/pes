import { Roboto, Poppins } from 'next/font/google';

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});
