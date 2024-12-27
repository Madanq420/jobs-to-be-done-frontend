import type { Metadata } from 'next'

import '../(main)/globals.css'

import { Manrope } from 'next/font/google'
import Footer from '../_components/Footer/Footer'
import 'aos/dist/aos.css'
import Heading from '../_components/Header/Heading'

export const metadata: Metadata = {
  title: 'Jobs To Be Done (JTBD) Framework - Understand Customer Needs',
  description: 'Discover how the Jobs To Be Done (JTBD) framework helps businesses understand customer needs, create better products, and drive innovation. Learn its principles, applications, and examples.',
  keywords: [
    'Jobs To Be Done',
    'JTBD Framework',
    'Customer Needs',
    'Product Innovation',
    'User-Centered Design',
    'Customer Insights',
    'Product Development',
    'JTBD Examples',
    'JTBD Methodology',
  ],
  generator: 'Jobs To Be Ok',
  applicationName: 'JobsToBeOk',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'The Nimto', url: 'https://jobstobeok.com' }],
  creator: 'Jobs To Be Ok',
  publisher: 'Jobs To Be Ok',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://jobstobeok.com'),
}
const inter = Manrope({ subsets: ['latin'] })
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col gap-6`}>
        <Heading />
        {children}
        <Footer />
      </body>
    </html>
  )
}
