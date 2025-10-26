"use client"

import { ExternalLink, Github, Play, Code, Smartphone, Globe, Database, Cpu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-Learning Platform",
    description: "A comprehensive online learning management system with video streaming, quizzes, and progress tracking.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "Web App",
    status: "Completed",
    githubUrl: "https://github.com/codenix-gcu/elearning-platform",
    demoUrl: "https://elearning-demo.codenix.com",
    team: ["Priya Sharma", "Arjun Patel", "Sneha Reddy"],
    year: "2024",
    icon: Globe
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "A secure mobile banking application with biometric authentication and real-time transaction monitoring.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL"],
    category: "Mobile App",
    status: "In Progress",
    githubUrl: "https://github.com/codenix-gcu/mobile-banking",
    demoUrl: "https://banking-demo.codenix.com",
    team: ["Rahul Kumar", "Ananya Singh"],
    year: "2024",
    icon: Smartphone
  },
  {
    id: 3,
    title: "AI Chatbot Assistant",
    description: "An intelligent chatbot powered by machine learning for customer support and information retrieval.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "TensorFlow", "Flask", "OpenAI API"],
    category: "AI/ML",
    status: "Completed",
    githubUrl: "https://github.com/codenix-gcu/ai-chatbot",
    demoUrl: "https://chatbot-demo.codenix.com",
    team: ["Vikram Joshi", "Priya Sharma"],
    year: "2023",
    icon: Cpu
  },
  {
    id: 4,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing e-commerce operations with analytics and reporting.",
    image: "/api/placeholder/400/250",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Chart.js"],
    category: "Web App",
    status: "Completed",
    githubUrl: "https://github.com/codenix-gcu/ecommerce-dashboard",
    demoUrl: "https://dashboard-demo.codenix.com",
    team: ["Arjun Patel", "Sneha Reddy", "Rahul Kumar"],
    year: "2023",
    icon: Database
  },
  {
    id: 5,
    title: "IoT Smart Home System",
    description: "An Internet of Things solution for home automation with sensor monitoring and remote control.",
    image: "/api/placeholder/400/250",
    technologies: ["Arduino", "Raspberry Pi", "Python", "MQTT"],
    category: "IoT",
    status: "Prototype",
    githubUrl: "https://github.com/codenix-gcu/smart-home",
    demoUrl: "https://smarthome-demo.codenix.com",
    team: ["Ananya Singh", "Vikram Joshi"],
    year: "2024",
    icon: Cpu
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "A secure and transparent voting system built on blockchain technology for fair elections.",
    image: "/api/placeholder/400/250",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    category: "Blockchain",
    status: "Completed",
    githubUrl: "https://github.com/codenix-gcu/blockchain-voting",
    demoUrl: "https://voting-demo.codenix.com",
    team: ["Priya Sharma", "Arjun Patel", "Rahul Kumar", "Sneha Reddy"],
    year: "2023",
    icon: Database
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed": return "bg-green-500/20 text-green-400 border-green-500/30"
    case "In Progress": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    case "Prototype": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }
}

export default function ProjectGallery() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Project Demo Gallery</h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Explore innovative projects created by our talented members. From web applications to AI solutions, 
            see the creativity and technical excellence of our community.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => {
            const ProjectIcon = project.icon
            
            return (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <ProjectIcon className="h-16 w-16 text-primary/50" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Team */}
                  <div className="text-xs text-muted-foreground mb-4">
                    <span className="font-medium">Team: </span>
                    {project.team.join(", ")}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs sm:text-sm px-2 sm:px-4"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 text-xs sm:text-sm px-2 sm:px-4"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <Play className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-8 sm:mt-12">
          <Button 
            className="px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
            onClick={() => window.open('/projects', '_self')}
          >
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            View All Projects
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">25+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">8</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Technologies Used</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Contributors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">15+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  )
}

