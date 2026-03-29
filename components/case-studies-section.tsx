"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    slug: "global-transparency-reporting",
    title: "Standardizing Global Transparency Reporting Across Countries",
    category: "Compliance & Governance",
    description: "Enabled scalable reporting of HCP/HCO expenses across multiple countries with varying regulatory requirements.",
    tags: ["Enterprise", "Compliance", "Global"],
  },
  {
    id: 2,
    slug: "grants-platform",
    title: "Designing a Grants, Donations & Sponsorship Workflow Platform",
    category: "Workflow Automation",
    description: "Built a centralized workflow for managing grants, donations, and sponsorships with improved visibility.",
    tags: ["Workflow", "Finance", "Operations"],
  },
  {
    id: 3,
    slug: "payment-reliability",
    title: "Improving Payment Reliability Through Tracking and Recovery",
    category: "Payments & Operations",
    description: "Improved payment reliability by introducing tracking and resolution workflows.",
    tags: ["Payments", "Reliability", "Ops"],
  },
  {
    id: 4,
    slug: "ai-summarization",
    title: "Introducing AI-Assisted Text Summarization",
    category: "AI & Automation",
    description: "Introduced AI-assisted summaries to reduce manual effort and improve efficiency.",
    tags: ["AI/ML", "Automation", "NLP"],
  },
  {
    id: 5,
    slug: "config-migration-tool",
    title: "Enabling Governance with a Configuration Migration Tool",
    category: "Developer Tools",
    description: "Improved governance with structured config migration and tracking.",
    tags: ["DevTools", "Governance", "Migration"],
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="text-sm text-accent font-medium mb-4 tracking-wide uppercase">
            Featured Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects where I led product strategy, collaborated with cross-functional teams, and delivered measurable impact.
          </p>
        </div>

        <div className="grid gap-6">
          {caseStudies.map((study, index) => (
            <Link href={`/case-studies/${study.slug}`} key={study.id}>
              <article className="group relative glass rounded-2xl p-8 sm:p-10 hover:bg-card/70 transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm text-accent font-mono font-medium">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="w-px h-4 bg-border" />
                      <span className="text-sm text-muted-foreground">
                        {study.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {study.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {study.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary/50 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
