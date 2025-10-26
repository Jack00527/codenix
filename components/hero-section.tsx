"use client"

import { Code2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()

  const handleJoinUs = () => {
    router.push('/about')
  }

  const handleLearnMore = () => {
    router.push('/about')
  }

  return (
    <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mobile centered, PC left-aligned */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Welcome to <span className="text-gradient-gold animate-gradient-x">Codénix</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              The official coding club of Girijananda Chowdhury University, dedicated to fostering innovation, 
              collaboration, and excellence in software development. Join us on a journey of continuous learning and growth.
            </p>
            <div className="flex flex-row justify-center md:justify-start gap-4 pt-4">
              <button 
                onClick={handleJoinUs}
                className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold"
              >
                Join Us
              </button>
              <button 
                onClick={handleLearnMore}
                className="px-6 sm:px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Hidden on mobile, shown on PC */}
          <div
            className="hidden md:flex relative h-96 md:h-full min-h-96 rounded-2xl p-8 items-center justify-center"
            style={{
              background: "rgba(18, 18, 18, 0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(212, 175, 55, 0.1)",
            }}
          >
            <div className="text-center space-y-6">
              <div className="relative w-48 h-16 mx-auto">
                <Image 
                  src="/Club-Banner.png" 
                  alt="Club Banner" 
                  fill 
                  className="object-contain"
                />
              </div>
              <p className="text-muted-foreground">Code. Create. Innovate.</p>
            </div>
          </div>
        </div>

        {/* Mobile Image Section - Only visible on mobile */}
        <div className="md:hidden flex justify-center pt-8">
          <div
            className="relative h-48 w-48 rounded-2xl p-6 flex items-center justify-center"
            style={{
              background: "rgba(18, 18, 18, 0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(212, 175, 55, 0.1)",
            }}
          >
            <div className="text-center space-y-4">
              <div className="relative w-32 h-10 mx-auto">
                <Image 
                  src="/codenix-logo.svg" 
                  alt="CODÉNIX Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">Code. Create. Innovate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
