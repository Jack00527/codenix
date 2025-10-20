"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Activity, Trophy, BookOpenText, Info } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { label: "Activities", href: "/activities" },
    { label: "Achievements", href: "/achievements" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Hide navbar when scrolling down (but not at the very top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-40 mx-auto w-auto max-w-[calc(100vw-2rem)] transition-all duration-300 ease-in-out ${
        isVisible ? 'top-4 opacity-100' : '-top-20 opacity-0'
      } gradient-border`}
      style={{
        background: "rgba(18, 18, 18, 0.7)",
        backdropFilter: "blur(10px)",
        borderRadius: "1rem",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="px-6 sm:px-8 py-3">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold mr-4">
            <span className="text-gradient-gold animate-gradient-x">Codénix</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 ml-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground transition-colors duration-300 relative group"
              >
                <span className="gradient-underline">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Icons Only */}
        {isOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-primary/20 animate-slide-up">
            <div className="grid grid-cols-4 gap-3">
              <Link
                href="/activities"
                className="flex flex-col items-center justify-center gap-1 py-2 rounded hover:bg-primary/10 transition-colors text-foreground"
                aria-label="Activities"
                onClick={() => setIsOpen(false)}
              >
                <Activity size={22} />
                <span className="sr-only">Activities</span>
              </Link>
              <Link
                href="/achievements"
                className="flex flex-col items-center justify-center gap-1 py-2 rounded hover:bg-primary/10 transition-colors text-foreground"
                aria-label="Achievements"
                onClick={() => setIsOpen(false)}
              >
                <Trophy size={22} />
                <span className="sr-only">Achievements</span>
              </Link>
              <Link
                href="/blog"
                className="flex flex-col items-center justify-center gap-1 py-2 rounded hover:bg-primary/10 transition-colors text-foreground"
                aria-label="Blog"
                onClick={() => setIsOpen(false)}
              >
                <BookOpenText size={22} />
                <span className="sr-only">Blog</span>
              </Link>
              <Link
                href="/about"
                className="flex flex-col items-center justify-center gap-1 py-2 rounded hover:bg-primary/10 transition-colors text-foreground"
                aria-label="About"
                onClick={() => setIsOpen(false)}
              >
                <Info size={22} />
                <span className="sr-only">About</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
