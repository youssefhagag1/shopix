import { SanityLive } from '@/sanity/lib/live'
import React from 'react'
import "./globals.css";
import {Toaster} from "react-hot-toast"
function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
        <body className="font-poppins antialiased">
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style : {
                background : "#000000",
                color : "#fff"
              }
            }}
          />
          </body>
        <SanityLive />
    </html>
  )
}

export default RootLayout
