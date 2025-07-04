import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Online Rich Text Editor',
  description: ''
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
