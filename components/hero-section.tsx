"use client"

import { Code2 } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Welcome to <span className="text-gradient-gold animate-gradient-x">Codénix</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The official coding club of Girijananda Chowdhury University, dedicated to fostering innovation, 
              collaboration, and excellence in software development. Join us on a journey of continuous learning and growth.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold">
                Join Us
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="relative h-96 md:h-full min-h-96 rounded-2xl p-8 flex items-center justify-center"
            style={{
              background: "rgba(18, 18, 18, 0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(212, 175, 55, 0.1)",
            }}
          >
            <div className="text-center space-y-4">
              <div className="text-primary/30">
                <Code2 size={80} />
              </div>
              <p className="text-muted-foreground">Code. Create. Innovate.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
