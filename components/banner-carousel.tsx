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

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

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
    <section className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
      </div>

      {/* Dynamic Background */}
      <div className={`absolute inset-0 transition-all duration-1000 ${currentItem.background}`} />

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-6xl mx-auto px-4">
          {/* Codénix Visual */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              <span className="text-gradient-gold animate-gradient-x">
                Codénix
              </span>
            </h1>
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse" />
          </div>

          {/* Dynamic Content */}
          <div className="min-h-[60px] sm:min-h-[80px] flex items-center justify-center pb-4 sm:pb-6 md:pb-8">
            {currentItem.type === "quote" ? (
              <div className="space-y-2 sm:space-y-3 max-w-4xl">
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary/50 mx-auto" />
                <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-foreground italic leading-relaxed px-2">
                  "{currentItem.content}"
                </blockquote>
                <cite className="text-xs sm:text-sm text-muted-foreground">— {currentItem.author}</cite>
              </div>
            ) : (
              <div className="space-y-2 sm:space-y-3 max-w-4xl pb-2 sm:pb-4">
                <div className="flex items-center justify-center space-x-2 mb-1 sm:mb-2">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Upcoming Event</span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                  {currentItem.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-primary font-semibold">
                  {currentItem.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto px-2">
                  {currentItem.description}
                </p>
                <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-xs sm:text-sm">
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
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-transparent hover:bg-background/20 backdrop-blur-sm border border-transparent hover:border-border/30 transition-all duration-200 z-20"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-foreground/70 hover:text-foreground" />
      </button>
      
      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-transparent hover:bg-background/20 backdrop-blur-sm border border-transparent hover:border-border/30 transition-all duration-200 z-20"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-foreground/70 hover:text-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {bannerData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-primary opacity-100" 
                : "bg-muted-foreground/25 hover:opacity-50"
            }`}
            style={{ width: '13px', height: '13px', minWidth: 'unset', minHeight: 'unset' }}
          />
        ))}
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 opacity-20 animate-bounce">
        <Code2 className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
      </div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 opacity-20 animate-bounce" style={{ animationDelay: "1s" }}>
        <Code2 className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-primary" />
      </div>
      <div className="absolute top-1/3 right-8 sm:right-20 opacity-20 animate-bounce" style={{ animationDelay: "2s" }}>
        <Code2 className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 text-primary" />
      </div>
    </section>
  )
}
