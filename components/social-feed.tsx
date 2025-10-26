"use client"

import { Twitter, Instagram, Linkedin, Github, ExternalLink, Heart, MessageCircle, Share, Users } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const socialPosts = [
  {
    id: 1,
    platform: "Twitter",
    username: "@codenix_gcu",
    handle: "codenix_gcu",
    content: "🚀 Excited to announce our upcoming Hackathon 2024! Join us for 48 hours of coding, innovation, and networking. Prizes worth ₹50,000 up for grabs! #Hackathon2024 #Coding #Innovation",
    timestamp: "2 hours ago",
    likes: 42,
    comments: 8,
    shares: 12,
    avatar: "/api/placeholder/40/40",
    icon: Twitter,
    color: "text-blue-400"
  },
  {
    id: 2,
    platform: "Instagram",
    username: "@codenix_gcu",
    handle: "codenix_gcu",
    content: "Behind the scenes of our latest workshop! Our members are learning React fundamentals with hands-on projects. The energy in the room is incredible! 💻✨",
    timestamp: "5 hours ago",
    likes: 89,
    comments: 15,
    shares: 6,
    avatar: "/api/placeholder/40/40",
    icon: Instagram,
    color: "text-pink-400"
  },
  {
    id: 3,
    platform: "LinkedIn",
    username: "Codénix - GCU",
    handle: "codenix-gcu",
    content: "Proud to share that our alumni Priya Sharma has joined Microsoft as a Software Engineer! Her journey from our club to one of the world's leading tech companies is truly inspiring. Congratulations! 🎉",
    timestamp: "1 day ago",
    likes: 156,
    comments: 23,
    shares: 18,
    avatar: "/api/placeholder/40/40",
    icon: Linkedin,
    color: "text-blue-600"
  },
  {
    id: 4,
    platform: "GitHub",
    username: "codenix-gcu",
    handle: "codenix-gcu",
    content: "Just released our new open-source project: 'Codenix Learning Platform' - A comprehensive resource for coding tutorials and practice problems. Check it out and contribute!",
    timestamp: "2 days ago",
    likes: 34,
    comments: 7,
    shares: 9,
    avatar: "/api/placeholder/40/40",
    icon: Github,
    color: "text-gray-400"
  }
]

const socialLinks = [
  { platform: "Twitter", handle: "@codenix_gcu", url: "https://twitter.com/codenix_gcu", icon: Twitter, color: "hover:text-blue-400" },
  { platform: "Instagram", handle: "@codenix_gcu", url: "https://instagram.com/codenix_gcu", icon: Instagram, color: "hover:text-pink-400" },
  { platform: "LinkedIn", handle: "Codénix - GCU", url: "https://linkedin.com/company/codenix-gcu", icon: Linkedin, color: "hover:text-blue-600" },
  { platform: "GitHub", handle: "codenix-gcu", url: "https://github.com/codenix-gcu", icon: Github, color: "hover:text-gray-400" }
]

export default function SocialFeed() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Social Feed</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay connected with our latest updates, achievements, and community highlights
          </p>
          
          {/* Social Links */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto sm:flex sm:justify-center sm:space-x-6 sm:max-w-none">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-200 ${social.color}`}
              >
                <social.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{social.platform}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Social Posts */}
        <div className="grid md:grid-cols-2 gap-6">
          {socialPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.avatar} alt={post.username} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {post.username.charAt(1).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{post.username}</h4>
                        <post.icon className={`h-4 w-4 ${post.color}`} />
                      </div>
                      <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {post.platform}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.content}
                </p>
                
                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share className="h-4 w-4" />
                      <span>{post.shares}</span>
                    </div>
                  </div>
                  <a
                    href={`https://${post.platform.toLowerCase()}.com/${post.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    <span>View Post</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Follow Us CTA */}
        <div className="text-center mt-12">
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Follow Our Journey</h3>
              <p className="text-muted-foreground max-w-md">
                Get real-time updates, behind-the-scenes content, and connect with our community
              </p>
              <div className="grid grid-cols-2 gap-4 justify-center max-w-md mx-auto sm:flex sm:space-x-4 sm:max-w-none">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}


