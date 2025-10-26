"use client"

import { Calendar, ExternalLink, Bell, Trophy, BookOpen, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

const newsData = [
  {
    id: 1,
    title: "Hackathon 2024 Registration Now Open",
    description: "Join our biggest coding competition of the year. Prizes worth ₹50,000 up for grabs!",
    date: "2024-01-15",
    type: "event",
    priority: "high",
    icon: Trophy,
    color: "text-red-500"
  },
  {
    id: 2,
    title: "New Workshop Series: AI & Machine Learning",
    description: "Learn the fundamentals of AI and ML with hands-on projects and expert guidance.",
    date: "2024-01-10",
    type: "workshop",
    priority: "medium",
    icon: BookOpen,
    color: "text-blue-500"
  },
  {
    id: 3,
    title: "Club Meeting: Project Showcase",
    description: "Members will present their latest projects and get feedback from the community.",
    date: "2024-01-08",
    type: "meeting",
    priority: "low",
    icon: Users,
    color: "text-green-500"
  },
  {
    id: 4,
    title: "Guest Speaker: Industry Expert Session",
    description: "Join us for an inspiring talk by a senior software engineer from Google.",
    date: "2024-01-05",
    type: "speaker",
    priority: "high",
    icon: Bell,
    color: "text-purple-500"
  }
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "bg-red-500/20 text-red-400 border-red-500/30"
    case "medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    case "low": return "bg-green-500/20 text-green-400 border-green-500/30"
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }
}

export default function NewsAnnouncements() {
  const router = useRouter()

  const handleViewAllNews = () => {
    router.push('/blog')
  }

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <Bell className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">News & Announcements</h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Stay updated with the latest news, events, and announcements from Codénix
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {newsData.map((item) => (
            <Card 
              key={item.id}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg bg-primary/10 ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getPriorityColor(item.priority)}`}
                  >
                    {item.priority.toUpperCase()}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <button className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors duration-200">
                    <span className="text-xs sm:text-sm font-medium">Read More</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllNews}
            className="inline-flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-sm sm:text-base"
          >
            <span>View All News</span>
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

