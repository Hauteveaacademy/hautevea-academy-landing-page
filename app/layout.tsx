import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
 
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})
 
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})
 
export const metadata: Metadata = {
  title: 'HAUTEVEA ACADEMY  San Kode, San Devlopè. Kreye App ak AI.',
  description:
    'Aprann kreye sit entènèt ak aplikasyon pwofesyonèl ak zouti AI  Bolt.new, V0, Lovable, Framer  menm si ou pa janm kode yon sèl liy. Kou konplè pa Samson Janvier.',
  generator: 'HAUTEVEA ACADEMY',
  keywords: ['AI', 'no-code', 'Haitian Creole', 'web design', 'Bolt.new', 'V0', 'Lovable', 'Framer'],
  authors: [{ name: 'Samson Janvier' }],
  openGraph: {
    title: 'HAUTEVEA ACADEMY — Kreye App ak AI',
    description: 'Aprann kreye sit ak app ak AI san kode. Kou konplè pa Samson Janvier.',
    type: 'website',
    url: 'https://hauteveaacademy.com',
    siteName: 'HAUTEVEA ACADEMY',
    images: [
      {
        url: 'https://hauteveaacademy.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HAUTEVEA ACADEMY — Kreye App ak AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HAUTEVEA ACADEMY — Kreye App ak AI',
    description: 'Aprann kreye sit ak app ak AI san kode. Kou konplè pa Samson Janvier.',
    images: ['https://hauteveaacademy.com/og-image.jpg'],
  },
}
 
export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ht" className={`${syne.variable} ${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased text-foreground">
        {children}
      </body>
    </html>
  )
}
 