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

export const metadata: Metadata = {
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
    type: 'profile',
    title: 'Aum Patel | Frontend Developer',
    description:
      'Frontend Developer passionate about TypeScript, React, Next.js, and interactive visual aesthetics.',
    siteName: 'Aum Patel Portfolio',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aum Patel | Frontend Developer',
    description:
      'Frontend Developer — TypeScript · React · Next.js · TailwindCSS · Animation',
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
