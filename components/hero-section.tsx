"use client"

import { ArrowDown, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl w-full">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <Sparkles size={14} className="text-accent" />
              <span className="text-sm text-muted-foreground">Product Manager</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] mb-8 animate-fade-up-delay-1">
            <span className="block">Building products</span>
            <span className="block text-muted-foreground">that matter</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12 animate-fade-up-delay-2">
            {"I'm"} Neha Barve, product professional with 5+ years of experience across enterprise platforms, workflow systems, and AI-enabled products in regulated environments.
          </p>
<p className="mt-3 max-w-2xl text-base text-gray-400">
  Focused on turning complex systems into clear, scalable product experiences.
</p>
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up-delay-3">
            <Link 
              href="#case-studies"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-all"
            >
              View my work
              <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </Link>
            <Link 
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 glass rounded-lg font-medium hover:bg-secondary/50 transition-all"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
