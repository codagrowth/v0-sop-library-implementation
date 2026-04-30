import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const roboto = Roboto({ 
  subsets: ["latin"],
  variable: '--font-roboto',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'CodaGrowth · SOP Library',
  description: 'The 2026 SOP Stack - Six tool-specific Standard Operating Procedures that operationalise the Autonomous Revenue Engine.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} bg-[#132A4A]`}>
      <body className="font-sans antialiased bg-[#132A4A] text-[#F5F7FA]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
