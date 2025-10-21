"use client"

import FloatingDock, { defaultDockItems } from "@/components/ui/floating-dock"

export default function BlogPage() {
  const posts = [
    {
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to manage state and side effects in your applications.",
      date: "March 15, 2025",
      author: "Alex Chen",
      category: "React",
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape web development in 2025.",
      date: "March 10, 2025",
      author: "Sarah Johnson",
      category: "Web Dev",
    },
    {
      title: "Mastering TypeScript",
      excerpt: "A comprehensive guide to TypeScript for building scalable and maintainable applications.",
      date: "March 5, 2025",
      author: "Mike Davis",
      category: "TypeScript",
    },
    {
      title: "Building Scalable APIs",
      excerpt: "Best practices for designing and implementing APIs that can handle millions of requests.",
      date: "February 28, 2025",
      author: "Emma Wilson",
      category: "Backend",
    },
    {
      title: "CSS Grid Mastery",
      excerpt: "Create complex layouts with CSS Grid and learn advanced techniques for responsive design.",
      date: "February 20, 2025",
      author: "James Brown",
      category: "CSS",
    },
    {
      title: "DevOps Essentials",
      excerpt: "Understanding CI/CD pipelines, containerization, and deployment strategies.",
      date: "February 15, 2025",
      author: "Lisa Anderson",
      category: "DevOps",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-16 text-foreground">
            Our <span className="text-primary">Blog</span>
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <article
                key={index}
                className="rounded-xl p-6 space-y-4 flex flex-col"
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
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground leading-tight">{post.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">By {post.author}</span>
                  <button className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FloatingDock items={defaultDockItems} />
    </main>
  )
}
