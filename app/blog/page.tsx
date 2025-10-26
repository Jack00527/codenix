"use client"

import { useState, useMemo } from "react"
import FloatingDock, { defaultDockItems } from "@/components/ui/floating-dock"
import Footer from "@/components/footer"
import Image from "next/image"
import BlogModal from "@/components/blog-modal"
import { blogPosts, BlogPost } from "@/lib/blog-data"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const allPosts: BlogPost[] = [
    ...blogPosts,
    {
      id: 5,
      title: "Coming Soon...",
      excerpt: "We're working on more exciting content for you! Stay tuned for upcoming articles on cutting-edge technologies, programming insights, and industry trends.",
      date: "TBA",
      author: "Codenix Team",
      category: "Coming Soon",
      readTime: "TBA",
      content: "",
      isComingSoon: true,
    },
  ]

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))]

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [allPosts, searchQuery, selectedCategory])

  const handleReadMore = (post: BlogPost) => {
    if (post.isComingSoon) return
    const fullPost = blogPosts.find(p => p.title === post.title)
    if (fullPost) {
      setSelectedPost(fullPost)
      setIsModalOpen(true)
    }
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
    <main className="min-h-screen bg-background">
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="relative w-32 h-32">
              <Image 
                src="/Logo-White.png" 
                alt="Codénix Logo"
                fill 
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2 text-foreground">
            Our <span className="text-primary">Blog</span>
          </h1>
              <p className="text-lg text-muted-foreground">
                Insights and Stories from the GCU Community
              </p>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search blog posts by title, author, or content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/50 border-border/50 focus:border-primary/50"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 bg-background/50 border border-border/50 rounded-md text-sm focus:outline-none focus:border-primary/50"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
              {filteredPosts.length === allPosts.length 
                ? `Showing all ${allPosts.length} posts`
                : `Showing ${filteredPosts.length} of ${allPosts.length} posts`
              }
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
              <article
                key={index}
                className={`rounded-xl p-6 space-y-4 flex flex-col ${
                  post.isComingSoon ? 'opacity-75' : ''
                }`}
                style={{
                  background: post.isComingSoon 
                    ? "rgba(18, 18, 18, 0.5)" 
                    : "rgba(18, 18, 18, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: post.isComingSoon 
                    ? "1px solid rgba(128, 128, 128, 0.3)" 
                    : "1px solid rgba(212, 175, 55, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (!post.isComingSoon) {
                  e.currentTarget.style.background = "rgba(18, 18, 18, 0.85)"
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!post.isComingSoon) {
                  e.currentTarget.style.background = "rgba(18, 18, 18, 0.7)"
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.1)"
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    post.isComingSoon 
                      ? 'text-gray-400 bg-gray-500/10' 
                      : 'text-primary bg-primary/10'
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className={`text-xl font-bold leading-tight ${
                  post.isComingSoon ? 'text-gray-400' : 'text-foreground'
                }`}>
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">By {post.author}</span>
                  {post.isComingSoon ? (
                    <span className="text-xs text-gray-500 italic">Coming Soon</span>
                  ) : (
                    <button 
                      onClick={() => handleReadMore(post)}
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                    >
                    Read More →
                  </button>
                  )}
                </div>
              </article>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No posts found</h3>
                  <p className="text-sm">
                    Try adjusting your search terms or category filter
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingDock items={defaultDockItems} />

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
    </main>
  )
}
