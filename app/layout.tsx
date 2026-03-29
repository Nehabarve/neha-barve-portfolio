import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'Neha Barve | Senior Product Associate',
  description: 'Product professional with 5+ years of experience building enterprise platforms in regulated environments. Portfolio showcasing work in reporting, workflow automation, AI-enabled enhancements, and governance.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
