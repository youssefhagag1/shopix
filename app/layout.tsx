import { SanityLive } from '@/sanity/lib/live'
import React from 'react'
import "./globals.css";

function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
        <body className="font-poppins antialiased">{children}</body>
        <SanityLive />
    </html>
  )
}

export default RootLayout
