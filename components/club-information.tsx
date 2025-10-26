"use client"

import { Users, Target, Award, Calendar, MapPin, Mail, Phone, Code2, BookOpen, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const stats = [
  { label: "Active Members", value: "150+", icon: Users },
  { label: "Projects Completed", value: "25+", icon: Target },
  { label: "Events Organized", value: "12+", icon: Calendar },
  { label: "Awards Won", value: "8+", icon: Award }
]

const features = [
  {
    title: "Workshops",
    description: "Learn from industry experts and experienced developers",
    icon: BookOpen,
  },
  {
    title: "Hackathons",
    description: "Compete and collaborate in exciting coding challenges",
    icon: Zap,
  },
  {
    title: "Mentorship",
    description: "Get guidance from senior members and professionals",
    icon: Target,
  },
  {
    title: "Community",
    description: "Connect with passionate developers and build lasting friendships",
    icon: Users,
  },
]

const mission = [
  "Foster a collaborative learning environment for aspiring developers",
  "Bridge the gap between academic knowledge and industry requirements",
  "Promote innovation through hands-on projects and real-world challenges",
  "Build a strong community of passionate coders and tech enthusiasts"
]

export default function ClubInformation() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <div className="relative w-24 h-8 sm:w-32 sm:h-10">
              <Image 
                src="/codenix-logo.svg" 
                alt="CODÉNIX Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">About Codénix</h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Girijananda Chowdhury University's premier coding club, dedicated to nurturing the next generation of software developers and tech innovators.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-4 sm:pt-6">
                <div className="text-3xl sm:text-4xl text-primary/70 group-hover:scale-110 transition-transform duration-300 mb-2">
                  <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 mx-auto" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4 group hover:shadow-lg transition-all duration-300"
              style={{
                background: "rgba(18, 18, 18, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(212, 175, 55, 0.1)",
              }}
            >
              <div className="text-3xl sm:text-4xl text-primary/70 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={32} className="sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center space-x-2">
              <Target className="h-6 w-6 text-primary" />
              <span>Our Mission</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {mission.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="mt-12 group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground text-center">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <MapPin className="h-6 w-6 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-sm text-muted-foreground">
                  Girijananda Chowdhury University<br />
                  Guwahati, Assam
                </p>
              </div>
              <div className="space-y-2">
                <Mail className="h-6 w-6 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-sm text-muted-foreground">
                  codenix@gcu.edu.in
                </p>
              </div>
              <div className="space-y-2">
                <Phone className="h-6 w-6 text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Phone</h4>
                <p className="text-sm text-muted-foreground">
                  +91 98765 43210
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

