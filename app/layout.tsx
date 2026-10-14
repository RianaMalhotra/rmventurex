import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Source_Serif_4, Geist } from 'next/font/google'
import './globals.css'

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RMVentureX — AI POWERED INVESTMENT INTELLIGENCE & RESEARCH',
  description:
    'RMVentureX is an AI powered equity research desk covering Indian and US-listed companies, with a thematic focus on the India–Canada investment corridor. Deep-dives, sector themes, and contrarian calls for investors who act on research.',
  metadataBase: new URL('https://www.rmventurex.com'),
  openGraph: {
    type: 'website',
    url: 'https://www.rmventurex.com',
    siteName: 'RMVentureX',
    title: 'RMVentureX | AI-Powered Investment Research',
    description: 'Independent AI-powered investment intelligence covering Indian and US equities and the India–Canada investment corridor.',
    images: [{ url: '/images/rmventurex-banner.png', width: 1500, height: 750, alt: 'RMVentureX AI-Powered Investment Intelligence & Research' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RMVentureX | AI-Powered Investment Research',
    description: 'Independent AI-powered investment intelligence covering Indian and US equities.',
    images: ['/images/rmventurex-banner.png'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#12161f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light bg-background ${geist.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
