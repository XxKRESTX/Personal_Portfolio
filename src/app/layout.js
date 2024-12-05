"use client";
//Referenced from https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md
import { ReactLenis, useLenis } from 'lenis/react'

import "./globals.css";



export default function RootLayout({ children }) {

  //Referenced from https://github.com/darkroomengineering/lenis/blob/main/packages/react/README.md

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
