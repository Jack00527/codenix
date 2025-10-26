"use client"

import { X, Calendar, User, Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  content: string
}

interface BlogModalProps {
  post: BlogPost | null
  isOpen: boolean
  onClose: () => void
  onPrevious?: () => void
  onNext?: () => void
  hasPrevious?: boolean
  hasNext?: boolean
}

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

export default function BlogModal({ 
  post, 
  isOpen, 
  onClose, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext 
}: BlogModalProps) {
  if (!post) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {post.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Post Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <Badge 
              variant="outline" 
              className={`text-xs ${getCategoryColor(post.category)}`}
            >
              {post.category}
            </Badge>
          </div>

          {/* Post Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* Navigation */}
          {(hasPrevious || hasNext) && (
            <div className="flex justify-between items-center pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={onPrevious}
                disabled={!hasPrevious}
                className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2"
              >
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Previous</span>
              </Button>
              <Button
                variant="outline"
                onClick={onNext}
                disabled={!hasNext}
                className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2"
              >
                <span>Next</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
