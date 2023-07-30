import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
// import { ClerkProvider } from '@clerk/nextjs/dist/types/components.server'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Toko Online',
  description: 'Beli semua di sini!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
      </ClerkProvider>
    </html>
  )
}
