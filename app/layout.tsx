import type { Metadata } from 'next'
import { Playfair_Display, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aumpatel.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aum Patel | Frontend Developer — High-Performance Interfaces',
  description:
    'Aum Patel — Frontend Developer from Gujarat, India. Specializing in TypeScript, React, Next.js, Tailwind CSS, and Framer Motion. Building clean, high-performance web applications.',
  keywords: [
    'Aum Patel',
    'Frontend Developer',
    'UI Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'Framer Motion',
    'Web Developer',
    'Gujarat',
    'India',
  ],
  authors: [{ name: 'Aum Patel' }],
  creator: 'Aum Patel',
  openGraph: {
    type: 'website',
    title: 'Check out my portfolio! 🚀 | Aum Patel',
    description:
      'Frontend Developer — Crafting high-performance, beautiful web applications with TypeScript, React & Next.js.',
    siteName: 'Aum Patel Portfolio',
    locale: 'en_US',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aum Patel | Frontend Developer',
    description:
      'Frontend Developer — TypeScript · React · Next.js · TailwindCSS · Animation',
    creator: '@aumpatel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${playfair.variable} ${hanken.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-text-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
