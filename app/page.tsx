"use client"

import { useEffect, useState } from "react"
import WelcomeOverlay from "@/components/welcome-overlay"
import BannerCarousel from "@/components/banner-carousel"
import NewsAnnouncements from "@/components/news-announcements"
import ClubInformation from "@/components/club-information"
import BlogHighlights from "@/components/blog-highlights"
import Testimonials from "@/components/testimonials"
import SocialFeed from "@/components/social-feed"
import ProjectGallery from "@/components/project-gallery"
import FloatingDock, { defaultDockItems } from "@/components/ui/floating-dock"
import Footer from "@/components/footer"

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    // Show welcome overlay on first visit or page refresh
    const hasVisited = sessionStorage.getItem('hasVisited')
    const isPageRefresh = performance.navigation.type === 1 || document.referrer === ''
    
    // Show welcome animation if it's the first visit or a page refresh
    if (!hasVisited || isPageRefresh) {
      setShowOverlay(true)
      sessionStorage.setItem('hasVisited', 'true')
      
      const timer = setTimeout(() => {
        setShowOverlay(false)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {showOverlay ? (
        <WelcomeOverlay />
      ) : (
        <>
          <BannerCarousel />
          <NewsAnnouncements />
          <ClubInformation />
          <BlogHighlights />
          <Testimonials />
          <SocialFeed />
          <ProjectGallery />
          <Footer />
          <FloatingDock items={defaultDockItems} />
        </>
      )}
    </main>
  )
}
