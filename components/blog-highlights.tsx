"use client"

import { useState } from "react"
import { Calendar, User, ArrowRight, BookOpen, Code, Database, Smartphone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import BlogModal from "@/components/blog-modal"
import { blogPosts, BlogPost } from "@/lib/blog-data"

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Experience": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    case "Web Dev": return "bg-purple-500/20 text-purple-400 border-purple-500/30"
    case "Programming": return "bg-green-500/20 text-green-400 border-green-500/30"
    case "AI/ML": return "bg-orange-500/20 text-orange-400 border-orange-500/30"
    case "Tutorial": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    case "Industry": return "bg-purple-500/20 text-purple-400 border-purple-500/30"
    case "Backend": return "bg-green-500/20 text-green-400 border-green-500/30"
    case "Mobile": return "bg-orange-500/20 text-orange-400 border-orange-500/30"
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }
}

export default function BlogHighlights() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPost(null)
  }

  const handlePrevious = () => {
    if (!selectedPost) return
    const currentIndex = blogPosts.findIndex(post => post.id === selectedPost.id)
    if (currentIndex > 0) {
      setSelectedPost(blogPosts[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (!selectedPost) return
    const currentIndex = blogPosts.findIndex(post => post.id === selectedPost.id)
    if (currentIndex < blogPosts.length - 1) {
      setSelectedPost(blogPosts[currentIndex + 1])
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Blog Highlights</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and industry trends from our community of developers
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <div className="lg:col-span-2">
              <Card className="group hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary/50" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className="absolute top-4 left-4 bg-primary/20 text-primary border-primary/30"
                  >
                    Featured
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getCategoryColor(featuredPost.category)}`}
                    >
                      {featuredPost.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-200">
                    {featuredPost.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleReadMore(featuredPost)}
                      className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Regular Posts */}
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleReadMore(post)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getCategoryColor(post.category)}`}
                    >
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-sm sm:text-base">
            <span>View All Posts</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>

      {/* Blog Modal */}
      <BlogModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={selectedPost ? blogPosts.findIndex(post => post.id === selectedPost.id) > 0 : false}
        hasNext={selectedPost ? blogPosts.findIndex(post => post.id === selectedPost.id) < blogPosts.length - 1 : false}
      />
    </section>
  )
}

