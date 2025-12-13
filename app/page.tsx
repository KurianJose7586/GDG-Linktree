"use client"

import Image from "next/image"
// FIX: Added 'Calendar' to the import list below
import { Instagram, Linkedin, MessageCircle, Globe, MessageSquare, Calendar } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const links = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "Join our Discord Server",
      href: "https://discord.gg/gdggalgotias",
      bgColor: "bg-[#5865F2]",
      hoverScale: "hover:scale-[1.03]",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "Connect with us LinkedIn",
      href: "https://linkedin.com/company/gdg-galgotias-university",
      bgColor: "bg-[#0A66C2]",
      hoverScale: "hover:scale-[1.03]",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "Join our WhatsApp Community",
      href: "https://whatsapp.com/channel/gdggalgotias",
      bgColor: "bg-[#25D366]",
      hoverScale: "hover:scale-[1.03]",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Follow us on Instagram",
      href: "https://instagram.com/gdggalgotias",
      bgColor: "bg-[#E4405F]",
      hoverScale: "hover:scale-[1.03]",
    },
    // New Commudle Button
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Register for Events on Commudle",
      href: "https://www.commudle.com/communities/gdg-galgotias-university",
      bgColor: "bg-[#6366f1]",
      hoverScale: "hover:scale-[1.03]",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Official Website (Coming Soon!)",
      href: "#",
      bgColor: "bg-gray-600",
      hoverScale: "hover:scale-[1.03]",
    },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 md:p-8 scroll-smooth">
      <div className="absolute inset-0 bg-white">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-[#EA4335] rounded-bl-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#34A853] rounded-tr-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FBBC04] rounded-tl-[120px]"></div>
      </div>

      <div
        className={`relative w-full max-w-md md:max-w-3xl z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-gray-900 p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="mb-6 ml-3">
              <Image
                src="/GDG-logo.svg"
                alt="Google developer groups logo"
                width={240}
                height={80}
                className="w-auto h-16"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 text-balance">
              On Campus Galgotias University
            </h1>
            <p className="text-sm md:text-base text-gray-700 max-w-xl text-balance leading-relaxed">
              The Tech Community You actually Want to Join!<br></br> Join GDG on Campus Galgotias University to connect, learn, and grow with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.bgColor} rounded-2xl p-5 flex items-center gap-4 transition-all duration-150 hover:shadow-xl hover:scale-[1.03] active:scale-[0.97] active:shadow-md border-2 border-gray-900 active:border-gray-950 group`}
              >
                <div className="flex-shrink-0 text-white group-hover:scale-110 transition-transform">{link.icon}</div>
                <span className="text-base font-semibold text-white text-left">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center pt-6 border-t-2 border-gray-900">
            <p className="text-xs text-gray-500">
              © 2025 Google Developers Group on Campus GU | Maintained by the cool kids of GDG GU
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}