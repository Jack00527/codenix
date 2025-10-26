"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import FloatingDock, { defaultDockItems } from "@/components/ui/floating-dock"
import Footer from "@/components/footer"

interface Activity {
  date: string
  title: string
  description: string
  image: string
  sessions: string[]
  isUpcoming?: boolean
  dateObj?: Date
}

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

  // Parse date from string like "19th August 2025"
  const parseDate = (dateStr: string): Date => {
    // Handle "TBA" or "Coming Soon" - return far future date to sort to top for upcoming
    if (dateStr.toLowerCase().includes("tba") || dateStr.toLowerCase().includes("coming soon")) {
      return new Date(2100, 0, 1) // Far future date to always be upcoming
    }
    
    // Handle "Various Dates"
    if (dateStr.includes("Various")) {
      return new Date(0) // Sort these to the end
    }
    
    // Try to extract date components
    const months = [
      "january", "february", "march", "april", "may", "june",
      "july", "august", "september", "october", "november", "december"
    ]
    
    const parts = dateStr.toLowerCase().trim().split(/\s+/)
    const monthName = parts[1]
    const year = parseInt(parts[2]) || 2024
    const monthIndex = months.findIndex(m => monthName.startsWith(m))
    // Handle ordinal numbers like "19th", "26th", "9th", etc.
    const dayStr = parts[0].replace(/[^\d]/g, '') // Remove non-digit characters
    const day = parseInt(dayStr) || 1
    
    if (monthIndex !== -1) {
      return new Date(year, monthIndex, day)
    }
    
    return new Date(0)
  }

  const allActivities: Activity[] = [
    {
      date: "19th August 2025",
      title: "Freshers' Interactive Kickoff Session",
      description: "A vibrant welcome event for the 2025 batch freshers featuring mythbusters about AI replacing jobs and an introduction to basic tech stacks across major domains like web development, game development, and AI/ML.",
      image: "/activities/images/Activity-19-Aug.jpg",
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
      date: "TBA - Coming Soon",
      title: "Stay Tuned for Our Next Activity!",
      description: "We're working on exciting new activities and workshops. Check back soon for updates on upcoming events, hackathons, and technical sessions.",
      image: "/activities/tba-placeholder.svg",
      sessions: [
        "New workshops and sessions are being planned",
        "Hackathon opportunities and competitions",
        "Technical skill development programs"
      ],
      isUpcoming: true
    },
    {
      date: "19th August 2025",
      title: "Will AI Replace you?",
      description: "In this session, we will discuss the impact of AI on our jobs and how it will shape the future of work. we will also discuss the skills that will be replaced by AI and the skills that will be needed in the future. Attend this session to get a clear picture of the future of work and the skills you need to acquire to stay ahead in the job market",
      image: "/activities/images/Activity_poster_1.jpg",
      sessions: [
        "AI vs Human - Discussion on the continous AI vs Human debate",
        "Adapt - Learning to adapt to the new changes in the job market",
        "Future Strategies - Effective ways to conquer the AI Revolution"
      ]
    },
    {
      date: "26th August 2025",
      title: "Hackathon Roadmap",
      description: "In this session, we will discuss the roadmap for the Smart India Hackathon 2025. we will discuss the problem statements and the solution development process. we will also discuss the tips and tricks to win the hackathon, with the help of the previous year'swinners. Attend this session to get a clear picture of how to win the hackathon and the skills you need to acquire to win the hackathon.",
      image: "/activities/images/Activity_poster_2.jpg",
      sessions: [
        "Problem Statement Selection - How to select the right problem statement.",
        "Skills needed - The skills that will be needed to win the hackathon.",
        "Roadmap - A step by step roadmap to win the hackathon by the previous winners."
      ]
    },
    {
      date: "15th September 2025",
      title: "Engineers Day Ideathon",
      description: "To celebrate Engineers Day, we the Codénix Club will be hosting an ideathon for the students of the university. The ideathon will be a 2 hour long event where the students will be given a problem statement and they will have to ideate a solution for it. The best solution will be awarded with a prize. Attend this session to get a clear picture of how to ideate a solution for a problem statement and the skills you need to acquire to win the ideathon.",
      image: "/activities/images/Activity_poster_3.jpg",
      sessions: [
        "Analytical Thinking - Learning to think analytically and creatively",
        "Skill Development - Building technical competencies like coding, problem solving, etc",
        "Teamwork - Learning to work in a team and manage time"
      ]
    },
    {
      date: "9th September 2025",
      title: "Git & Github for beginners",
      description: "In this session, we will discuss the basics of Git and Github. we will discuss the installation of Git and Github, the creation of repositories, the basic commands of Git and Github, and the collaboration with Github. Attend this session to get a clear picture of how to use Git and Github and the skills you need to acquire to use Git and Github.",
      image: "/activities/images/Activity_poster_4.jpg",
      sessions: [
        "Git Installation - How to install Git on your system",
        "Github Setup - How to setup Github on your system",
        "Basic Commands - How to use the basic commands of Git and Github"
      ]
    }
  ]

  // Sort activities by date (newest first) and separate upcoming from past
  const { upcomingActivities, pastActivities } = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    const activitiesWithDates = allActivities.map(activity => ({
      ...activity,
      dateObj: parseDate(activity.date)
    }))
    
    const upcoming = activitiesWithDates
      .filter(activity => activity.isUpcoming || activity.dateObj > today)
      .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime())
    
    const past = activitiesWithDates
      .filter(activity => !activity.isUpcoming && activity.dateObj <= today)
      .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime())
    
    return { upcomingActivities: upcoming, pastActivities: past }
  }, [])

  const renderActivityCard = (activity: Activity, index: number, isUpcoming: boolean = false) => (
    <div
      className="relative"
    >
      {/* Timeline connector line */}
      {index < (isUpcoming ? upcomingActivities : pastActivities).length - 1 && (
        <div 
          className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-primary/30"
          style={{ height: 'calc(100% + 2rem)' }}
        />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-12 h-12 flex items-center justify-center">
        <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-background shadow-lg" />
      </div>
      
      {/* Activity card */}
      <div
        className="ml-16 mb-8 rounded-xl p-6 border-l-4 border-primary overflow-hidden"
        style={{
          background: isUpcoming 
            ? "rgba(34, 139, 34, 0.1)"
            : "rgba(18, 18, 18, 0.7)",
          backdropFilter: "blur(10px)",
          border: isUpcoming
            ? "1px solid rgba(34, 139, 34, 0.3)"
            : "1px solid rgba(212, 175, 55, 0.1)",
          borderLeft: isUpcoming
            ? "4px solid #22C55E"
            : "4px solid var(--primary)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          const currentBg = isUpcoming 
            ? "rgba(34, 139, 34, 0.15)"
            : "rgba(18, 18, 18, 0.85)"
          e.currentTarget.style.background = currentBg
          e.currentTarget.style.borderColor = isUpcoming
            ? "rgba(34, 139, 34, 0.5)"
            : "rgba(212, 175, 55, 0.3)"
        }}
        onMouseLeave={(e) => {
          const currentBg = isUpcoming 
            ? "rgba(34, 139, 34, 0.1)"
            : "rgba(18, 18, 18, 0.7)"
          e.currentTarget.style.background = currentBg
          e.currentTarget.style.borderColor = isUpcoming
            ? "rgba(34, 139, 34, 0.3)"
            : "rgba(212, 175, 55, 0.1)"
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
          <div className="lg:w-2/3 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-primary font-semibold text-sm">{activity.date}</p>
                  {isUpcoming && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full font-medium">
                      Upcoming
                    </span>
                  )}
                </div>
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
            
            {activity.sessions && activity.sessions.length > 0 && !expandedCards.has(index) && (
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Sessions:</h4>
                <div className="flex flex-wrap gap-2">
                  {activity.sessions.slice(0, 2).map((session, sessionIndex) => (
                    <span key={sessionIndex} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      {session.split(' - ')[0]}
                    </span>
                  ))}
                  {activity.sessions.length > 2 && (
                    <span className="text-xs text-muted-foreground">+{activity.sessions.length - 2} more</span>
                  )}
                </div>
              </div>
            )}

            {/* Expanded Content */}
            {expandedCards.has(index) && (
              <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20 animate-in slide-in-from-top-2 duration-300">
                <h4 className="text-lg font-semibold text-foreground mb-3">Session Details:</h4>
                <div className="space-y-2 mb-4">
                  {activity.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{session}</p>
                    </div>
                  ))}
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-3">Additional Information</h4>
                <div className="space-y-3 mb-4">
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
                </div>

                {isUpcoming && !activity.date.toLowerCase().includes("tba") && (
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm">
                      Register Now
                    </button>
                    <button className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm">
                      Share Event
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
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
                Our <span className="text-primary">Activities</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Engaging Events and Workshops at GCU
              </p>
            </div>
          </div>

          {/* Upcoming Activities Section */}
          {upcomingActivities.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">
                  Upcoming <span className="text-green-500">Activities</span>
                </h2>
                <div className="flex-1 h-1 bg-green-500/20 rounded-full"></div>
              </div>
              <div className="relative">
                {upcomingActivities.map((activity, index) => 
                  <div key={`upcoming-${activity.title}-${activity.date}`}>
                    {renderActivityCard(activity, index, true)}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Past Activities Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold text-foreground">
                Past <span className="text-primary">Activities</span>
              </h2>
              <div className="flex-1 h-1 bg-primary/20 rounded-full"></div>
            </div>
            <div className="relative">
              {pastActivities.map((activity, index) => 
                <div key={`past-${activity.title}-${activity.date}`}>
                  {renderActivityCard(activity, index, false)}
                </div>
              )}
            </div>
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
      
      <Footer />
      <FloatingDock items={defaultDockItems} />
    </main>
  )
}
