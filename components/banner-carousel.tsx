"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Calendar, Code2 } from "lucide-react"

const bannerData = [
  {
    id: 1,
    type: "quote",
    content: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    background: "bg-gradient-to-br from-blue-900/20 to-purple-900/20"
  },
  {
    id: 2,
    type: "event",
    title: "Hackathon 2024",
    subtitle: "Innovation Unleashed",
    description: "Join our biggest coding competition of the year",
    background: "bg-gradient-to-br from-green-900/20 to-teal-900/20"
  },
  {
    id: 3,
    type: "quote",
    content: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
    background: "bg-gradient-to-br from-orange-900/20 to-red-900/20"
  },
  {
    id: 4,
    type: "event",
    title: "Tech Talk Series",
    subtitle: "Learn from Industry Leaders",
    description: "Expert sessions on cutting-edge technologies",
    background: "bg-gradient-to-br from-purple-900/20 to-pink-900/20"
  },
  {
    id: 5,
    type: "quote",
    content: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    background: "bg-gradient-to-br from-indigo-900/20 to-blue-900/20"
  }
]

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [scrambledCodenix, setScrambledCodenix] = useState("Codénix")

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Simple text animation effect
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let iteration = 0
    const targetText = "Codénix"
    
    const animateText = () => {
      setScrambledCodenix(
        targetText
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return targetText[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )
      
      if (iteration < targetText.length) {
        iteration += 1 / 3
        setTimeout(animateText, 100)
      }
    }
    
    animateText()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex => 
      prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1
    ))
  }

  const currentItem = bannerData[currentIndex]

  return (
    <section className="relative h-[300px] md:h-[350px] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
      </div>

      {/* Dynamic Background */}
      <div className={`absolute inset-0 transition-all duration-1000 ${currentItem.background}`} />

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center space-y-8 max-w-6xl mx-auto px-4">
          {/* Reactive Codénix Visual */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold">
              <span className="text-gradient-gold animate-gradient-x">
                {scrambledCodenix}
              </span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse" />
          </div>

          {/* Dynamic Content */}
          <div className="min-h-[80px] flex items-center justify-center pb-8">
            {currentItem.type === "quote" ? (
              <div className="space-y-3 max-w-4xl">
                <Quote className="h-10 w-10 text-primary/50 mx-auto" />
                <blockquote className="text-lg md:text-xl font-medium text-foreground italic leading-relaxed">
                  "{currentItem.content}"
                </blockquote>
                <cite className="text-sm text-muted-foreground">— {currentItem.author}</cite>
              </div>
            ) : (
              <div className="space-y-3 max-w-4xl pb-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Upcoming Event</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {currentItem.title}
                </h2>
                <p className="text-base md:text-lg text-primary font-semibold">
                  {currentItem.subtitle}
                </p>
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  {currentItem.description}
                </p>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-sm">
                  Learn More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent transition-all duration-200 z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent transition-all duration-200 z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-primary scale-125" 
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-bounce">
        <Code2 className="h-8 w-8 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-bounce" style={{ animationDelay: "1s" }}>
        <Code2 className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-20 animate-bounce" style={{ animationDelay: "2s" }}>
        <Code2 className="h-4 w-4 text-primary" />
      </div>
    </section>
  )
}
