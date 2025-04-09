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
aria-label="Close notification" >
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
{/_ Rest of your page content _/}
<div className="p-8">
<h1 className="text-2xl font-bold">Welcome to Laniakea</h1>
{/_ Additional content would go here _/}
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
<div className="p-8">{/_ Page content would go here _/}</div>
</main>
)
}

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

"use client"

import { Menu, ShoppingBag, MoreVertical } from "lucide-react"

export default function LaniakeaHeader() {
return (
<header className="w-full bg-[#e0bfb8] py-4 px-6">
<div className="flex items-center justify-between">
<button className="text-[#ffffff]" aria-label="Menu">
<Menu size={24} />
</button>

        <h1 className="text-[#ffffff] text-3xl font-light tracking-wider">Laniakea</h1>

        <div className="flex items-center gap-4">
          <button className="text-[#ffffff]" aria-label="Shopping bag">
            <ShoppingBag size={24} />
          </button>

          <button className="text-[#ffffff]" aria-label="More options">
            <MoreVertical size={24} />
          </button>
        </div>
      </div>
    </header>

)
}

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingBag, Globe, User } from "lucide-react"

export default function Home() {
return (
<div className="min-h-screen bg-[#e0bfb8]">
{/_ Navigation _/}
<header className="container mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center gap-8">
<Link href="/" className="text-3xl font-light text-white">
Laniakea
</Link>
<nav className="hidden md:flex items-center gap-6">
<Link href="/themed-jewelry" className="text-white hover:text-[#ffdad3]">
Themed Jewelry
</Link>
<Link href="/categories" className="text-white hover:text-[#ffdad3]">
All Categories
</Link>
<Link href="/customized" className="text-white hover:text-[#ffdad3]">
Customized
</Link>
<Link href="/explore" className="text-white hover:text-[#ffdad3]">
Explore
</Link>
<Link href="/support" className="text-white hover:text-[#ffdad3]">
Support
</Link>
</nav>
</div>
<div className="flex items-center gap-4">
<button aria-label="Search" className="text-white">
<Search className="h-5 w-5" />
</button>
<button aria-label="Shopping bag" className="text-white">
<ShoppingBag className="h-5 w-5" />
</button>
<button aria-label="Language" className="text-white">
<Globe className="h-5 w-5" />
</button>
<Link href="/sign-in" className="bg-[#9c4330] text-white px-4 py-2 rounded-full flex items-center gap-2">
<User className="h-4 w-4" />
Sign in
</Link>
</div>
</header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-8 pb-16">
        <div className="text-center mb-4">
          <p className="text-white text-lg">Rhinestone Headband</p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-2">SILVERDINE HEADWEAR GEN 3</h1>
          <p className="text-white text-xl mb-8">For Soft Feathery Feel</p>

          <div className="flex gap-4 mb-12">
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition">
              Learn more
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition">
              Buy now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#ffdad3] rounded-full opacity-70 blur-xl"></div>
            <div className="relative z-10 flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Silverdine Headwear"
                width={600}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Model wearing headband"
              width={400}
              height={500}
              className="object-contain"
            />
          </div>
        </div>

        {/* Product Navigation */}
        <div className="mt-16 flex flex-col items-start gap-2 text-white">
          <Link href="/products/tisot-santa-crown" className="hover:underline">
            Tisot Santa Crown
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-white"></div>
            <Link href="/products/silverdine-headwear-gen-3" className="font-medium hover:underline">
              Silverdine Headwear Gen 3
            </Link>
          </div>
          <Link href="/products/lumere-forever-ring" className="hover:underline">
            Lumere Forever Ring
          </Link>
        </div>
      </main>
    </div>

)
}

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function JewelryShowcase() {
return (
<div className="min-h-screen bg-[#ffffff] flex flex-col items-center justify-center p-4 md:p-8">
<div className="max-w-5xl w-full">
<div className="mb-8 text-center">
<h1 className="text-3xl md:text-4xl font-bold text-[#14181f] mb-2">Artisanal Collection</h1>
<p className="text-[#14181f]/80 max-w-2xl mx-auto">
Handcrafted beaded jewelry with natural stones and unique designs
</p>
</div>

        <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
          {/* Main image with faded sides effect */}
          <div className="relative flex">
            {/* Left faded panel */}
            <div className="hidden md:block w-1/6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff] to-transparent z-10"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Laniakea-MktgbAAgBQU9DrUM3YMkUU7kZRAcV8.png"
                alt="Jewelry collection side view"
                width={300}
                height={600}
                className="object-cover h-full"
              />
            </div>

            {/* Center panel - main image */}
            <div className="flex-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Laniakea-MktgbAAgBQU9DrUM3YMkUU7kZRAcV8.png"
                alt="Handcrafted beaded jewelry collection in wooden display box"
                width={800}
                height={500}
                className="w-full object-cover"
                priority
              />
            </div>

            {/* Right faded panel */}
            <div className="hidden md:block w-1/6 relative">
              <div className="absolute inset-0 bg-gradient-to-l from-[#ffffff] to-transparent z-10"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Laniakea-MktgbAAgBQU9DrUM3YMkUU7kZRAcV8.png"
                alt="Jewelry collection side view"
                width={300}
                height={600}
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#14181f] mb-4">
            Discover our handcrafted beaded collection
          </h2>
          <p className="text-[#14181f]/70 mb-6 max-w-2xl mx-auto">
            Each piece is carefully made with natural stones and materials, creating unique accessories that tell a story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#14181f] hover:bg-[#14181f]/90 text-white px-6">
              Shop Collection
            </Button>
            <Button variant="outline" className="border-[#14181f] text-[#14181f]">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>

)
}
