"use client"

import Navbar from "@/components/navbar"

export default function ActivitiesPage() {
  const activities = [
    {
      date: "January 2025",
      title: "Web Development Workshop",
      description: "Learn modern web development with React and Next.js",
    },
    {
      date: "February 2025",
      title: "Hackathon 2025",
      description: "Annual 24-hour coding competition with amazing prizes",
    },
    {
      date: "March 2025",
      title: "AI & Machine Learning Seminar",
      description: "Explore the latest trends in AI and ML technologies",
    },
    {
      date: "April 2025",
      title: "Code Review Session",
      description: "Get feedback on your code from experienced developers",
    },
    {
      date: "May 2025",
      title: "Career Talk Series",
      description: "Meet professionals from top tech companies",
    },
    {
      date: "June 2025",
      title: "Summer Project Showcase",
      description: "Present your summer projects to the community",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-16 text-foreground">
            Our <span className="text-primary">Activities</span>
          </h1>

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="rounded-xl p-8 border-l-4 border-primary animate-fade-in"
                style={{
                  background: "rgba(18, 18, 18, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(212, 175, 55, 0.1)",
                  borderLeft: "4px solid var(--primary)",
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
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-primary font-semibold text-sm mb-2">{activity.date}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </div>
                  <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 whitespace-nowrap">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
