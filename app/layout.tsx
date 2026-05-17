import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import StarfieldBackground from '@/components/StarfieldBackground';
import ScanlineOverlay from '@/components/ScanlineOverlay';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// TODO: personalise — update title, description, and other metadata
export const metadata: Metadata = {
  title: 'YourName — Developer',
  description: 'Personal portfolio and devlog of YourName — full-stack developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[#06080f] text-slate-100 antialiased overflow-x-hidden">
        <StarfieldBackground />
        <ScanlineOverlay />
        <Nav />
        <main className="relative z-20">{children}</main>
      </body>
    </html>
  );
}
