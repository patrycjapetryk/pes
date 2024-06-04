import type { Metadata } from 'next';

import './globals.css';
import { poppins, roboto } from './fonts';
import { Header } from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Fundacja PES',
  description: 'Fundacja PES',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='pl'>
        <head>
          <link rel='stylesheet' href='https://use.typekit.net/gps5gjg.css' />
        </head>
        <body
          className={`${roboto.variable} ${poppins.variable} font-body text-white`}
        >
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}
