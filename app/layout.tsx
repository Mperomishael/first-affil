import './globals.css'
import { Inter } from 'next/font/google'
import PageTransition from './components/PageTransition'
import WhatsAppChat from './components/WhatsAppChat'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Explore Your Infinite Potential With Empire Affiliate',
  description: 'Join Empire Affiliate and explore your infinite potential. Learn affiliate marketing, earn passive income, and be your own boss. Expert training and support provided.',
  keywords: [
    'Empire Affiliate',
    'affiliate marketing',
    'digital marketing',
    'online business',
    'passive income',
    'financial freedom',
    'work from home',
    'affiliate program',
    'make money online',
    'digital entrepreneurship',
    'Mishael Yakubu',
    'business opportunity',
    'online training',
    'marketing education',
    'affiliate marketing training'
  ],
  authors: [{ name: 'Mishael Yakubu' }],
  creator: 'Empire Affiliate',
  publisher: 'Empire Affiliate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.empireaffiliate.us.kg',
    siteName: 'Empire Affiliate',
    title: 'Explore Your Infinite Potential With Empire Affiliate',
    description: 'Transform your life through affiliate marketing with Empire Affiliate. Expert training, support, and proven strategies for success.',
    images: [
      {
        url: 'https://i.ibb.co/Cmt4q3S/20250110-160225-1.png',
        width: 800,
        height: 600,
        alt: 'Empire Affiliate Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Your Infinite Potential With Empire Affiliate',
    description: 'Transform your life through affiliate marketing with Empire Affiliate. Expert training, support, and proven strategies for success.',
    images: ['https://i.ibb.co/Cmt4q3S/20250110-160225-1.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="canonical" href="https://www.empireaffiliate.us.kg" />
      </head>
      <body className={`${inter.className} bg-navy text-white`}>
        <PageTransition>
          {children}
        </PageTransition>
        <WhatsAppChat />
      </body>
    </html>
  )
}

