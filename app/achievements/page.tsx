"use client"

import FloatingDock, { defaultDockItems } from "@/components/ui/floating-dock"
import { Trophy, Star, Medal, Users, Rocket, Handshake } from "lucide-react"
import Image from "next/image"

export default function AchievementsPage() {
  const mainAchievement = {
    year: "2024",
    title: "SIH Winner 2024 - Team Terabyte",
    description: "GCU celebrated the achievement of Team Terabyte, winners of the 1st Prize at the Smart India Hackathon 2024, held at Welingkar Institute of Management, Mumbai, on 11–12 December 2024. The team secured a cash prize of ₹1 lakh and received a warm felicitation from the GCU community in the presence of the Hon'ble Vice Chancellor, Registrar, Deans, and HoDs.",
    mentor: "Their mentor, Mr. Adarsh Pradhan, Assistant Professor, CSE Department, emphasized the value of perseverance and learning from failure. Team members shared their experiences and thanked the university for its support.",
    recognition: "Recognizing their achievement, the Vice Chancellor announced an additional reward of ₹1.5 lakh for the team and their mentor, calling it a proud milestone for GCU and urging everyone to continue motivating students toward excellence.",
    image: "/sih-2024-winner.jpg"
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-16 text-foreground">
            Our <span className="text-primary">Achievements</span>
          </h1>

          <div className="flex justify-center">
            <div
              className="rounded-xl p-8 space-y-6 max-w-6xl w-full"
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
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={mainAchievement.image}
                    alt="SIH 2024 Winner Team Terabyte"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-2xl"
                    priority
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl text-primary/70">
                      <Trophy size={48} />
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-sm">{mainAchievement.year}</p>
                      <h3 className="text-2xl font-bold text-foreground">{mainAchievement.title}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{mainAchievement.description}</p>
                    
                    <div className="flex items-start gap-3">
                      <Medal className="text-primary/70 mt-1 flex-shrink-0" size={20} />
                      <p className="text-muted-foreground text-sm leading-relaxed">{mainAchievement.mentor}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Star className="text-primary/70 mt-1 flex-shrink-0" size={20} />
                      <p className="text-muted-foreground text-sm leading-relaxed">{mainAchievement.recognition}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FloatingDock items={defaultDockItems} />
    </main>
  )
}
