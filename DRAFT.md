notification-banner.tsx


"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="w-full bg-white py-3 px-4 flex items-center justify-center relative border-b border-[#d9d9d9]">
      <div className="text-[#1c1b1f] text-sm">
        Download the Laniakea Store app available both on android and ios.{" "}
        <Link href="#" className="text-[#9c4330] hover:underline">
          Download the App &gt;
        </Link>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 text-[#000000] hover:text-[#9c4330]"
        aria-label="Close notification"
      >
        <X size={18} />
      </button>
    </div>
  )
}



page.tsx


import NotificationBanner from "@/app/components/notification-banner"

export default function Home() {
  return (
    <main>
      <NotificationBanner />
      {/* Rest of your page content */}
      <div className="p-8">
        <h1 className="text-2xl font-bold">Welcome to Laniakea</h1>
        {/* Additional content would go here */}
      </div>
    </main>
  )
}



xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


import Link from "next/link"
import { Search, ShoppingBag, Globe, User } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="w-full bg-[#e0bfb8] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="text-[#ffffff] text-3xl font-light">
              Laniakea
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/themed-jewelry" className="text-[#ffffff] hover:text-[#d9d9d9] text-sm font-medium">
                Themed Jewelry
              </Link>
              <Link href="/all-categories" className="text-[#ffffff] hover:text-[#d9d9d9] text-sm font-medium">
                All Categories
              </Link>
              <Link href="/customized" className="text-[#ffffff] hover:text-[#d9d9d9] text-sm font-medium">
                Customized
              </Link>
              <Link href="/explore" className="text-[#ffffff] hover:text-[#d9d9d9] text-sm font-medium">
                Explore
              </Link>
              <Link href="/support" className="text-[#ffffff] hover:text-[#d9d9d9] text-sm font-medium">
                Support
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="text-[#ffffff] hover:text-[#d9d9d9]">
              <Search size={20} />
            </button>
            <button aria-label="Shopping bag" className="text-[#ffffff] hover:text-[#d9d9d9]">
              <ShoppingBag size={20} />
            </button>
            <button aria-label="Language" className="text-[#ffffff] hover:text-[#d9d9d9]">
              <Globe size={20} />
            </button>
            <Link
              href="/sign-in"
              className="bg-[#9c4330] text-[#ffffff] px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <User size={18} />
              <span>Sign in</span>
            </Link>
          </div>
        </div>
      </header>
      <div className="p-8">{/* Page content would go here */}</div>
    </main>
  )
}