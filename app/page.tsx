"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import WelcomeOverlay from "@/components/welcome-overlay"
import HeroSection from "@/components/hero-section"
import FeaturedSection from "@/components/featured-section"

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {showOverlay ? (
        <WelcomeOverlay />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <FeaturedSection />
        </>
      )}
    </main>
  )
}
