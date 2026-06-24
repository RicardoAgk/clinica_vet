import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vet Santa Maria",
  description: "Clínica veterinária de Santa Maria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b border-zinc-800 bg-black/95 px-6 py-4">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Clínica veterinária de Santa Maria
            </Link>
            <div className="flex items-center gap-6 text-sm font-medium text-zinc-300">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/sobre" className="transition hover:text-white">
                Sobre
              </Link>
              <Link href="/servicos" className="transition hover:text-white">
                Serviços
              </Link>
            </div>
          </div>
        </nav>{children}</body>
    </html>
  );
}
