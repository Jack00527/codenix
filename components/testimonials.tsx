"use client"

import { Star, Quote, Users, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer at Microsoft",
    content: "Codénix provided me with the perfect platform to hone my coding skills. The workshops and hackathons were instrumental in landing my dream job at Microsoft. The community is incredibly supportive and always ready to help.",
    rating: 5,
    avatar: "/api/placeholder/40/40",
    year: "2023 Graduate",
    company: "Microsoft"
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Full Stack Developer at Google",
    content: "Being part of Codénix transformed my understanding of software development. The mentorship program and collaborative projects gave me real-world experience that textbooks couldn't provide.",
    rating: 5,
    avatar: "/api/placeholder/40/40",
    year: "2022 Graduate",
    company: "Google"
  },
  {
    id: 3,
    name: "Sneha Reddy",
    role: "Product Manager at Amazon",
    content: "The leadership opportunities in Codénix helped me develop not just technical skills but also soft skills. Organizing events and leading teams prepared me for my current role in product management.",
    rating: 5,
    avatar: "/api/placeholder/40/40",
    year: "2021 Graduate",
    company: "Amazon"
  },
  {
    id: 4,
    name: "Rahul Kumar",
    role: "Data Scientist at Netflix",
    content: "The AI/ML workshops organized by Codénix were game-changers for my career. The hands-on approach and industry connections opened doors I never thought possible.",
    rating: 5,
    avatar: "/api/placeholder/40/40",
    year: "2023 Graduate",
    company: "Netflix"
  },
  {
    id: 5,
    name: "Ananya Singh",
    role: "Frontend Developer at Spotify",
    content: "Codénix taught me that coding is not just about syntax, but about solving real problems. The project-based learning approach made all the difference in my development journey.",
    rating: 5,
    avatar: "/api/placeholder/40/40",
    year: "2022 Graduate",
    company: "Spotify"
  },
  {
    id: 6,
    name: "Vikram Joshi",
    role: "DevOps Engineer at Uber",
    content: "The collaborative environment at Codénix helped me understand the importance of teamwork in software development. The club's focus on modern technologies kept me ahead of the curve.",
    rating: 5,
    avatar: "/api/placeholder/40/40",
    year: "2021 Graduate",
    company: "Uber"
  }
]

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
      }`}
    />
  ))
}

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Community Voices</h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Hear from our alumni and current members about their journey with Codénix
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-lg transition-all duration-300 h-full"
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground text-center mb-6 flex-grow italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                      {testimonial.year}
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-green-500/20 text-green-400 border-green-500/30">
                      {testimonial.company}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">150+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">95%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Alumni at Top Companies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">4.9/5</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
