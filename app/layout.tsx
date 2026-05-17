import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'WayuuArte | Artesanías Guajiras Tejidas a Mano',
  description: 'Descubre hermosas artesanías wayuu auténticas: mochilas, bolsos y muñecos tejidos a crochet. Hechos a mano con amor en La Guajira, Colombia. Pedidos por WhatsApp.',
  keywords: ['wayuu', 'artesanías', 'mochilas wayuu', 'bolsos tejidos', 'crochet', 'guajira', 'colombia', 'artesanal', 'muñecos crochet'],
  authors: [{ name: 'WayuuArte' }],
  creator: 'WayuuArte',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    title: 'WayuuArte | Artesanías Guajiras Tejidas a Mano',
    description: 'Mochilas wayuu, bolsos y muñecos tejidos a crochet. 100% artesanal desde La Guajira.',
    siteName: 'WayuuArte',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WayuuArte | Artesanías Guajiras',
    description: 'Mochilas wayuu, bolsos y muñecos tejidos a crochet. 100% artesanal.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#dc2626' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
