import { Manrope } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { ContactModalProvider } from '@/app/context/ContactModalContext'
import { CurrencyProvider } from '@/app/context/CurrencyContext'
const font = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Astria & Co | Digital Agency',
  description: 'Astria & Co - Dedicated to bring your ideas to life.',
  metadataBase: new URL('https://www.astria.co.in/'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <CurrencyProvider>
          <ContactModalProvider>
            <Aoscompo>
              <Header />
              {children}
              <Footer />
            </Aoscompo>
            <ScrollToTop />
          </ContactModalProvider>
        </CurrencyProvider>
      </body>
    </html>
  )
}
