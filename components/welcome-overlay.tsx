"use client"

import { useEffect, useState } from "react"
import { useTextScramble } from "@/hooks/use-text-scramble"

export default function WelcomeOverlay() {
  const [isVisible, setIsVisible] = useState(true)
  const [isBlurring, setIsBlurring] = useState(false)
  const { displayText: scrambledCodenix } = useTextScramble("Codénix", 60)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurring(true)
      setTimeout(() => setIsVisible(false), 800)
    }, 3200)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-800 ${
        isBlurring ? "animate-blur-out" : "animate-blur-in"
      }`}
    >
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="text-gradient-gold animate-gradient-x">{scrambledCodenix}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Girijananda Chowdhury University Coding Club
        </p>
        <div className="flex justify-center gap-2 pt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-glow"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
