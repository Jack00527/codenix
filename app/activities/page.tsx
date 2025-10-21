"use client"

import { useState } from "react"
import Image from "next/image"
import FloatingDock, { defaultDockItems } from "@/components/ui/floating-dock"

export default function ActivitiesPage() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null)
  const [fullscreenImage, setFullscreenImage] = useState<{ src: string; alt: string } | null>(null)

  const toggleCardExpansion = (index: number) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCards(newExpanded)
  }

  const handleLearnMore = (index: number) => {
    setSelectedActivity(selectedActivity === index ? null : index)
    toggleCardExpansion(index)
  }

  const openFullscreen = (src: string, alt: string) => {
    setFullscreenImage({ src, alt })
  }

  const closeFullscreen = () => {
    setFullscreenImage(null)
  }

  const activities = [
    {
      date: "19th August 2025",
      title: "Freshers' Interactive Kickoff Session",
      description: "A vibrant welcome event for the 2025 batch freshers featuring mythbusters about AI replacing jobs and an introduction to basic tech stacks across major domains like web development, game development, and AI/ML.",
      image: "/activities/images/Activity_poster_1.jpg",
      sessions: [
        "Mythbusters – 'Will AI Take Our Jobs?' - Interactive discussion debunking myths about AI replacing human jobs",
        "Understanding the Basic Tech Stack - Introduction to foundational tech stacks across major domains with industry-recommended guidance"
      ]
    },
    {
      date: "26th August 2025",
      title: "SIH Hackathon Roadmap Guide - Session 1",
      description: "A comprehensive session providing strategic guidance for Smart India Hackathon participation with hands-on HTML basics introduction.",
      image: "/activities/images/Activity-26-Aug_1.jpg",
      sessions: [
        "Smart India Hackathon (SIH) Roadmap - Strategic walkthrough by previous SIH winners covering participation, problem statement selection, and prototype building",
        "HTML Basics - A Gentle Introduction - Learning core concepts including tags, nesting, attributes, and common HTML elements"
      ]
    },
    {
      date: "26th August 2025",
      title: "SIH Hackathon Roadmap Guide - Session 2",
      description: "Continuation of the SIH roadmap session with advanced guidance and practical implementation strategies.",
      image: "/activities/images/Activity-26-Aug_2.jpg",
      sessions: [
        "Advanced SIH Strategies - Deep dive into problem statement analysis and solution development",
        "Practical Implementation - Hands-on coding and prototype development techniques"
      ]
    },
    {
      date: "9th September 2025",
      title: "Git & GitHub for Beginners - Session 1",
      description: "An introductory session on essential version control skills covering Git installation, repository creation, and basic commands.",
      image: "/activities/images/Activity-9-Sept_1.jpg",
      sessions: [
        "Git Installation and Setup - Step-by-step guidance for various operating systems",
        "Repository Management - Creating local repositories and connecting to GitHub",
        "Basic Git Commands - Hands-on usage of git init, add, commit, push, and clone"
      ]
    },
    {
      date: "9th September 2025",
      title: "Git & GitHub for Beginners - Session 2",
      description: "Advanced Git concepts and GitHub collaboration workflows with practical demonstrations.",
      image: "/activities/images/Activity-9-Sept_2.jpg",
      sessions: [
        "Advanced Git Commands - Branching, merging, and conflict resolution",
        "GitHub Collaboration - Pull requests, code reviews, and team workflows",
        "GitHub Profile Setup - Account creation and GitHub Student Developer Pack application"
      ]
    },
    {
      date: "15th September 2025",
      title: "Engineers Day Ideathon - Session 1",
      description: "An internal ideation competition for Smart India Hackathon 2025, featuring team presentations and initial evaluations.",
      image: "/activities/images/Activity-15-Sept_1.jpg",
      sessions: [
        "Team Presentations - Students present their innovative ideas and solutions",
        "Initial Evaluation - Assessment based on problem understanding and technical approach",
        "Peer Feedback - Collaborative discussion and idea refinement"
      ]
    },
    {
      date: "15th September 2025",
      title: "Engineers Day Ideathon - Session 2",
      description: "Continuation of the ideathon with final presentations, judge evaluations, and constructive feedback sessions.",
      image: "/activities/images/Activity-15-Sept_2.jpg",
      sessions: [
        "Final Presentations - Refined team presentations with improved solutions",
        "Judge Evaluation - Comprehensive assessment by esteemed judges",
        "Feedback Sessions - Constructive guidance for idea refinement and improvement"
      ]
    },
    {
      date: "16th September 2025",
      title: "Smart India Hackathon - Internal Round - Session 1",
      description: "The official internal round for SIH 2025, featuring team evaluations and peer learning sessions.",
      image: "/activities/images/Activity-16-Sept_1.jpg",
      sessions: [
        "Team Evaluations - Comprehensive assessment by esteemed judges",
        "Peer Learning - Active club member participation and discussion",
        "Solution Refinement - Teams work on improving their proposals"
      ]
    },
    {
      date: "16th September 2025",
      title: "Smart India Hackathon - Internal Round - Session 2",
      description: "Final evaluation round with team shortlisting for the national competition.",
      image: "/activities/images/Activity-16-Sept_2.jpg",
      sessions: [
        "Final Team Presentations - Complete solution demonstrations",
        "Final Judging - Comprehensive evaluation of all aspects",
        "Team Shortlisting - Selection of top-performing teams for national competition"
      ]
    },
    {
      date: "14th October 2025",
      title: "Introduction to Open Source",
      description: "A club activity focused on understanding Open Source Software, its importance, real-world examples, and how to contribute to open source projects.",
      image: "/activities/images/upcoming_activity_poster.jpg",
      sessions: [
        "Understanding OSS - Introduction to Open Source Software concepts",
        "Why Open Source Matters - Discussion on the importance and impact of open source",
        "Real-world Examples - Showcasing successful open source projects",
        "How to Contribute - Practical guidance on getting started with open source contributions"
      ]
    },
    {
      date: "Various Dates",
      title: "Activity Poster Collection 1",
      description: "Promotional materials and event posters showcasing various CODÉNIX club activities and events throughout the academic year.",
      image: "/activities/images/Activity_poster_1.jpg",
      sessions: [
        "Event Promotion - Creating engaging promotional materials",
        "Design Workshops - Learning graphic design and poster creation",
        "Marketing Strategies - Effective ways to promote club activities"
      ]
    },
    {
      date: "Various Dates",
      title: "Activity Poster Collection 2",
      description: "Additional promotional materials and event posters highlighting the diverse range of technical workshops and competitions organized by CODÉNIX.",
      image: "/activities/images/Activity_poster_2.jpg",
      sessions: [
        "Technical Workshops - Hands-on learning sessions",
        "Competition Announcements - Hackathons and coding contests",
        "Community Building - Fostering a strong tech community"
      ]
    },
    {
      date: "Various Dates",
      title: "Activity Poster Collection 3",
      description: "More promotional materials showcasing the club's commitment to technical education and student development in computer science and engineering.",
      image: "/activities/images/Activity_poster_3.jpg",
      sessions: [
        "Educational Initiatives - Learning-focused activities",
        "Skill Development - Building technical competencies",
        "Industry Connections - Bridging academia and industry"
      ]
    },
    {
      date: "Various Dates",
      title: "Activity Poster Collection 4",
      description: "Final collection of promotional materials demonstrating the comprehensive range of activities and opportunities provided by the CODÉNIX club.",
      image: "/activities/images/Activity_poster_4.jpg",
      sessions: [
        "Comprehensive Learning - Full-spectrum technical education",
        "Student Engagement - Active participation and involvement",
        "Future Opportunities - Career and academic advancement"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-16 text-foreground">
            Our <span className="text-primary">Activities</span>
          </h1>

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="rounded-xl p-8 border-l-4 border-primary overflow-hidden"
                style={{
                  background: "rgba(18, 18, 18, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(212, 175, 55, 0.1)",
                  borderLeft: "4px solid var(--primary)",
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
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Image Section */}
                  <div className="lg:w-1/3">
                    <div className="relative h-48 lg:h-full rounded-lg overflow-hidden group">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Fullscreen Button Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <button
                          onClick={() => openFullscreen(activity.image, activity.title)}
                          className="opacity-0 group-hover:opacity-100 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-300 transform hover:scale-110"
                          title="View fullscreen"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-2/3 flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-primary font-semibold text-sm mb-2">{activity.date}</p>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{activity.title}</h3>
                        <p className="text-muted-foreground">{activity.description}</p>
                      </div>
                      <button 
                        onClick={() => handleLearnMore(index)}
                        className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 whitespace-nowrap transform hover:scale-105 active:scale-95"
                      >
                        {expandedCards.has(index) ? "Show Less" : "Learn More"}
                      </button>
                    </div>
                    
                    {activity.sessions && activity.sessions.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Session Details:</h4>
                        <div className="space-y-2">
                          {activity.sessions.map((session, sessionIndex) => (
                            <div key={sessionIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-muted-foreground">{session}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Expanded Content */}
                    {expandedCards.has(index) && (
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 animate-in slide-in-from-top-2 duration-300">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Additional Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                              <strong>Duration:</strong> 1.5-2 hours per session
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                              <strong>Venue:</strong> MCA Lab, 4th Floor GIMT
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                              <strong>Participants:</strong> Open to all CODÉNIX members
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                              <strong>Prerequisites:</strong> Basic programming knowledge recommended
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-primary/20">
                          <h5 className="text-md font-semibold text-foreground mb-2">What You'll Learn:</h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Hands-on practical experience</li>
                            <li>• Industry best practices and standards</li>
                            <li>• Collaborative learning and teamwork</li>
                            <li>• Real-world project development</li>
                            <li>• Networking with fellow students</li>
                          </ul>
                        </div>

                        <div className="mt-4 flex gap-2">
                          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm">
                            Register Now
                          </button>
                          <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm">
                            Share Event
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
              title="Close fullscreen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full">
              <Image
                src={fullscreenImage.src}
                alt={fullscreenImage.alt}
                width={1200}
                height={800}
                className="object-contain max-h-[90vh] w-auto mx-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm">
              {fullscreenImage.alt}
            </div>
          </div>
        </div>
      )}
      
      <FloatingDock items={defaultDockItems} />
    </main>
  )
}
