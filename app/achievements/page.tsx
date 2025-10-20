"use client"

import Navbar from "@/components/navbar"

export default function AchievementsPage() {
  const achievements = [
    {
      year: "2024",
      title: "Best Hackathon Team",
      description: "Won first place in the National Coding Championship",
      icon: "🏆",
    },
    {
      year: "2024",
      title: "Innovation Award",
      description: "Recognized for groundbreaking project development",
      icon: "⭐",
    },
    {
      year: "2023",
      title: "Community Excellence",
      description: "Outstanding contribution to the tech community",
      icon: "🎖️",
    },
    {
      year: "2023",
      title: "Mentorship Program",
      description: "Successfully mentored 50+ junior developers",
      icon: "👥",
    },
    {
      year: "2022",
      title: "Tech Leadership",
      description: "Pioneered new initiatives in coding education",
      icon: "🚀",
    },
    {
      year: "2022",
      title: "Industry Partnership",
      description: "Established partnerships with leading tech companies",
      icon: "🤝",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-16 text-foreground">
            Our <span className="text-primary">Achievements</span>
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="rounded-xl p-8 space-y-4 flex flex-col items-center text-center animate-fade-in"
                style={{
                  background: "rgba(18, 18, 18, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(212, 175, 55, 0.1)",
                  transition: "all 0.3s ease",
                  animationDelay: `${index * 0.1}s`,
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
                <div className="text-5xl">{achievement.icon}</div>
                <p className="text-primary font-semibold text-sm">{achievement.year}</p>
                <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
