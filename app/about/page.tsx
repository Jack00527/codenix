"use client"

import FloatingDock, { defaultDockItems } from "@/components/ui/floating-dock"
import Footer from "@/components/footer"
import { User, Users, Code, GraduationCap, FileText, DollarSign, UserCheck, Mail, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const committee = [
    {
      name: "Adarsh Pradhan",
      role: "Teacher Coordinator",
      bio: "Faculty advisor guiding the club's academic direction and initiatives",
      icon: UserCheck,
    },
    {
      name: "Ritanjit Das",
      role: "President",
      bio: "Leading Codénix with vision and dedication to student success",
      icon: User,
    },
    {
      name: "Subhrajyoti Goswami",
      role: "Vice President",
      bio: "Supporting club operations and member engagement initiatives",
      icon: Users,
    },
    {
      name: "Sandilya Baruah",
      role: "Treasurer",
      bio: "Managing club finances and sponsorship coordination",
      icon: DollarSign,
    },
    {
      name: "Kumar Jigyas Pritam",
      role: "Secretary",
      bio: "Handling documentation and communication for club activities",
      icon: FileText,
    },
  ]

  const committeeMembers = [
    "Akash Bora",
    "Debasish Kashyab", 
    "Suvradeep Dutta",
    "Rishav Kumar Singh",
    "Neelam Chakraborty"
  ]

  const activities = [
    {
      title: "Workshops & Sessions",
      description: "In-depth training on essential tools like Git & GitHub and other modern technologies",
      icon: Code,
    },
    {
      title: "Ideathons and Hackathons", 
      description: "Fostering innovation and collaborative problem-solving",
      icon: GraduationCap,
    },
    {
      title: "Career Guidance",
      description: "Providing roadmap and guidance for prestigious competitions like Smart India Hackathon (SIH)",
      icon: UserCheck,
    },
    {
      title: "Interactive Learning",
      description: "Engaging quizzes and tech-focused contests to make learning fun",
      icon: Users,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
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
                About <span className="text-gradient-gold animate-gradient-x">Codénix</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Official Coding Club of Girijananda Chowdhury University
              </p>
            </div>
          </div>

          <div
            className="rounded-xl p-8 mb-16 space-y-4"
            style={{
              background: "rgba(18, 18, 18, 0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(212, 175, 55, 0.1)",
            }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Codénix, the official coding club of Girijananda Chowdhury University. Established in 2024, 
              Codénix was founded by a group of passionate students dedicated to fostering a vibrant and inclusive 
              coding culture on campus.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our primary mission is to bridge the gap between theoretical knowledge and practical application. 
              We aim to create a supportive environment where students can learn, collaborate, and grow their 
              technical skills. We have a special focus on guiding our junior members as they begin their journey 
              into the world of technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're writing your first "Hello, World!" or you're a seasoned coder, there's a place for you here.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-foreground">
            What We <span className="text-primary">Do</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="rounded-xl p-6 space-y-4"
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
                <div className="flex items-center gap-4">
                  <div className="text-primary/70">
                    <activity.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{activity.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Meet Our <span className="text-primary">Committee</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committee.map((member, index) => (
              <div
                key={index}
                className="rounded-xl p-8 space-y-4 flex flex-col items-center text-center"
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
                <div className="text-5xl text-primary/70">
                  <member.icon size={48} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold text-sm">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-foreground mt-16">
            Committee <span className="text-primary">Members</span>
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {committeeMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-lg p-4 text-center"
                style={{
                  background: "rgba(18, 18, 18, 0.5)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(212, 175, 55, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(18, 18, 18, 0.7)"
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(18, 18, 18, 0.5)"
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.1)"
                }}
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <User size={24} className="text-primary/70" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{member}</h3>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Contact <span className="text-primary">Information</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div
              className="rounded-xl p-6 space-y-4"
              style={{
                background: "rgba(18, 18, 18, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(212, 175, 55, 0.1)",
              }}
            >
              <div className="flex items-center gap-3">
                <MapPin size={24} className="text-primary/70" />
                <h3 className="text-xl font-semibold text-foreground">Address</h3>
              </div>
              <p className="text-muted-foreground">
                Hathkhowapara, Azara, Guwahati, Assam 781017
              </p>
              <a 
                href="https://maps.app.goo.gl/MPQw1KhonAo4WfrK8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink size={16} />
                View on Map
              </a>
            </div>

            <div
              className="rounded-xl p-6 space-y-4"
              style={{
                background: "rgba(18, 18, 18, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(212, 175, 55, 0.1)",
              }}
            >
              <div className="flex items-center gap-3">
                <Mail size={24} className="text-primary/70" />
                <h3 className="text-xl font-semibold text-foreground">Email</h3>
              </div>
              <div className="space-y-2">
                <a 
                  href="mailto:coding_club@gcuniversity.ac.in"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  coding_club@gcuniversity.ac.in
                </a>
                <a 
                  href="mailto:info@gcuniversity.ac.in"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  info@gcuniversity.ac.in
                </a>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl p-6"
            style={{
              background: "rgba(18, 18, 18, 0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(212, 175, 55, 0.1)",
            }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">Social Media</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/cod%C3%A9nix"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/codenix_gcu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingDock items={defaultDockItems} />
    </main>
  )
}
