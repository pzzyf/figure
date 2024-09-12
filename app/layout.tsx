import { Header } from '@/components/layout/header/Header';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "afe1's Blog",
  description: "Don't go gentle into that good night",
  icons: {
    icon: '/favicon.ico',
  },
};


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
