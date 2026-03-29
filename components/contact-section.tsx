"use client"

import { ArrowUpRight, Mail, Linkedin, FileText, MapPin } from "lucide-react"
import Link from "next/link"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nehabarve.com",
    href: "mailto:hello@nehabarve.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nehabarve",
    href: "https://linkedin.com/in/nehabarve",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "#",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="mx-auto max-w-7xl">
        <div className="glass-strong rounded-3xl p-10 sm:p-16 lg:p-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <p className="text-sm text-accent font-medium mb-4 tracking-wide uppercase">
                Contact
              </p>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
                {"Let's work together"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
                {"I'm always open to discussing new opportunities, interesting projects, or just having a conversation about product management."}
              </p>
              
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between p-6 glass rounded-2xl hover:bg-card/70 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <link.icon size={22} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                      <p className="font-medium group-hover:text-accent transition-colors">{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
