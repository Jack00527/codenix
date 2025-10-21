"use client"

import { BookOpen, Zap, Target, Users } from "lucide-react"

export default function FeaturedSection() {
  const features = [
    {
      title: "Workshops",
      description: "Learn from industry experts and experienced developers",
      icon: BookOpen,
    },
    {
      title: "Hackathons",
      description: "Compete and collaborate in exciting coding challenges",
      icon: Zap,
    },
    {
      title: "Mentorship",
      description: "Get guidance from senior members and professionals",
      icon: Target,
    },
    {
      title: "Community",
      description: "Connect with passionate developers and build lasting friendships",
      icon: Users,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 space-y-4 group"
              style={{
                background: "rgba(18, 18, 18, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(212, 175, 55, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(18, 18, 18, 0.85)"
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(18, 18, 18, 0.7)"
                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.1)"
              }}
            >
              <div className="text-4xl text-primary/70 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={40} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
