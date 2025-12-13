// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
// 1. Import the font from Google
import { DM_Sans } from "next/font/google" 
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// 2. Configure the font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular, Medium, Bold
  variable: "--font-dm-sans", // We will use this variable in CSS
  display: "swap",
})

export const metadata: Metadata = {
  title: "GDG on Campus - Galgotias University",
  description:
    "Empowering student developers at Galgotias University. Join our community of learners, innovators, and builders!",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Remove the manual <link> tags for fonts here */}
      </head>
      {/* 3. Add the font variable to the body class */}
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}