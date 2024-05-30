import type { Metadata } from 'next';

import './globals.css';
import { inter } from './fonts';

export const metadata: Metadata = {
  title: 'Fundacja PES',
  description: 'Fundacja PES',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
