"use client"

import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Github, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/codenix-gcu", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com/codenix_gcu", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com/codenix_gcu", label: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com/company/codenix-gcu", label: "LinkedIn" },
    { icon: Github, url: "https://github.com/codenix-gcu", label: "GitHub" }
  ]

  return (
    <footer className="bg-card/30 border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-6">
          {/* Left Section - Logo and Contact */}
          <div className="md:col-span-3 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image 
                  src="/GCU-Logo-Normal.png" 
                  alt="GCU University Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Codénix</h3>
                <p className="text-xs text-muted-foreground">GCU Coding Club</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Girijananda Chowdhury University, Azara, Guwahati, Assam 781015</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:codenix@gcu.ac.in" className="hover:text-primary transition-colors">
                  codenix@gcu.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+913612351234" className="hover:text-primary transition-colors">
                  +91 361 235 1234
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest updates on our events, workshops, and coding competitions.
            </p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-background/50 border-border/50"
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background/50 hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all duration-200 group"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="md:col-span-6 space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Find Us</h4>
            <div className="w-full h-64 rounded-lg overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6494!2d91.7569!3d26.1690!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEwJzA4LjQiTiA5McKwNDUnMjQuOCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Girijananda Chowdhury University Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Codénix - Girijananda Chowdhury University. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/about" className="hover:text-primary transition-colors">About</a>
              <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
              <a href="/activities" className="hover:text-primary transition-colors">Activities</a>
              <a href="/achievements" className="hover:text-primary transition-colors">Achievements</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
