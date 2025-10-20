"use client"

import Navbar from "@/components/navbar"

export default function AboutPage() {
  const committee = [
    {
      name: "Alex Chen",
      role: "President",
      bio: "Full-stack developer passionate about building scalable applications",
      icon: "👨‍💼",
    },
    {
      name: "Sarah Johnson",
      role: "Vice President",
      bio: "AI/ML enthusiast and data science expert",
      icon: "👩‍💼",
    },
    {
      name: "Mike Davis",
      role: "Technical Lead",
      bio: "DevOps specialist with 5+ years of industry experience",
      icon: "👨‍💻",
    },
    {
      name: "Emma Wilson",
      role: "Events Coordinator",
      bio: "Organizes workshops and hackathons for the community",
      icon: "👩‍🎓",
    },
    {
      name: "James Brown",
      role: "Content Manager",
      bio: "Creates educational content and technical blogs",
      icon: "📝",
    },
    {
      name: "Lisa Anderson",
      role: "Treasurer",
      bio: "Manages club finances and sponsorships",
      icon: "💰",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-foreground">
            About <span className="text-gradient-gold animate-gradient-x">Codénix</span>
          </h1>

          <div
            className="rounded-xl p-8 mb-16 space-y-4 animate-fade-in"
            style={{
              background: "rgba(18, 18, 18, 0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(212, 175, 55, 0.1)",
            }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Codénix is a premier university coding club dedicated to fostering innovation, collaboration, and
              excellence in software development. Founded in 2020, we have grown into a vibrant community of passionate
              developers, designers, and tech enthusiasts.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to provide a platform for students to learn, grow, and collaborate on exciting projects.
              Through workshops, hackathons, mentorship programs, and community events, we empower the next generation
              of tech leaders.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Meet Our <span className="text-primary">Committee</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committee.map((member, index) => (
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
                <div className="text-5xl">{member.icon}</div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold text-sm">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
