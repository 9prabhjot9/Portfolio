import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { FloatingNav } from "@/components/floating-nav"


export const metadata: Metadata = {
  title: "Hi! I'm Prahjot Singh",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.className} bg-black text-white overflow-x-hidden`}>
        {children}
        <FloatingNav />
      </body>
    </html>
  )
}

