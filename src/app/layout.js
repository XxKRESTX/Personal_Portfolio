"use client";
import { ReactLenis, useLenis } from 'lenis/react'

import "./globals.css";



export default function RootLayout({ children }) {

    
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <title>Nathan's Portfolio</title>
      <ReactLenis root>
      <body>
        {children}
      </body>
      </ReactLenis>
    </html>
  );
}
