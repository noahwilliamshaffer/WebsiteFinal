import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Noah Shaffer | Cybersecurity Engineer',
  description:
    'Cybersecurity Engineer and Associate of (ISC)² — passed the CISSP exam, accruing experience toward full certification. Specializing in AWS-native security, DevSecOps, ML threat intelligence, and Zero Trust. Founding Engineer at Aurepath.',
  keywords: [
    'cybersecurity engineer',
    'CISSP',
    'DevSecOps',
    'AWS security',
    'Zero Trust',
    'penetration testing',
    'ML security',
    'Noah Shaffer',
    'Tallahassee',
    'cloud security',
  ],
  authors: [{ name: 'Noah Shaffer', url: 'https://noahwilliamshaffer.com' }],
  creator: 'Noah Shaffer',
  metadataBase: new URL('https://noahwilliamshaffer.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://noahwilliamshaffer.com',
    title: 'Noah Shaffer | Cybersecurity Engineer',
    description:
      'Cybersecurity Engineer, Associate of (ISC)² — CISSP exam passed, AWS security, DevSecOps, ML threat intelligence, Zero Trust.',
    siteName: 'Noah Shaffer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Noah Shaffer — Cybersecurity Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noah Shaffer | Cybersecurity Engineer',
    description:
      'CISSP-certified Cybersecurity Engineer — AWS security, DevSecOps, ML threat intelligence.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
