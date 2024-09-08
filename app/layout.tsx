import { Header } from '@/components/layout/header/Header';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics mode={'production'} />
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
