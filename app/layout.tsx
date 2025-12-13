import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google" //
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Configure the DM Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans", // This defines the CSS variable name
  display: "swap",
})

export const metadata: Metadata = {
  title: "GDG on Campus - Galgotias University",
  description:
    "Empowering student developers at Galgotias University. Join our community of learners, innovators, and builders!",
  generator: "KurianThegr8",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Add the font variable to the body class list */}
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}