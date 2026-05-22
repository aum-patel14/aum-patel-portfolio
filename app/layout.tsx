import type { Metadata } from 'next'
import { Outfit, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aum Patel | Data Analyst — Transforming Data into Insights',
  description:
    'Aum Patel — Aspiring Data Analyst from Gujarat, India. Specializing in Python, SQL, Power BI, Tableau, and dashboard analytics. Building data-driven solutions for real-world problems.',
  keywords: [
    'Aum Patel',
    'Data Analyst',
    'Python',
    'SQL',
    'Power BI',
    'Tableau',
    'Data Visualization',
    'Gujarat',
    'India',
    'Analytics',
    'Dashboard',
    'Business Intelligence',
  ],
  authors: [{ name: 'Aum Patel' }],
  creator: 'Aum Patel',
  openGraph: {
    type: 'profile',
    title: 'Aum Patel | Data Analyst',
    description:
      'Aspiring Data Analyst passionate about Python, SQL, dashboards, and transforming raw data into actionable insights.',
    siteName: 'Aum Patel Portfolio',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aum Patel | Data Analyst',
    description:
      'Aspiring Data Analyst — Python · SQL · Power BI · Tableau · Analytics',
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
        className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-dm antialiased bg-background text-text-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
