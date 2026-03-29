"use client"

import { useState } from "react"
import {
  Target,
  Users,
  MessageSquare,
  Handshake,
  Lightbulb,
  Zap,
  ChevronDown,
} from "lucide-react"

const skills = [
  {
    icon: Target,
    title: "Prioritization",
    principle: "I prioritize based on long-term impact, not just visibility.",
    example:
      "In grants workflow work, identifying SAP payment integration opportunities created stronger operational value than focusing only on front-end improvements.",
    takeaway:
      "The best decision is often the one that removes friction from the full workflow, not just the visible layer.",
  },
  {
    icon: Users,
    title: "Collaboration",
    principle: "Good product work comes from shared understanding across teams.",
    example:
      "I partnered with engineering, QA, compliance, and business stakeholders to translate requirements into clear deliverables and compliant releases.",
    takeaway:
      "The goal is not just communication. It is alignment around what needs to be built and why.",
  },
  {
    icon: MessageSquare,
    title: "Conflict Resolution",
    principle: "Most conflicts are trade-offs that need structure.",
    example:
      "In cross-functional workflow projects, I balanced process efficiency with governance and approval controls instead of choosing one side over the other.",
    takeaway:
      "The right solution usually comes from clarifying trade-offs, not picking winners and losers.",
  },
  {
    icon: Handshake,
    title: "Stakeholder Management",
    principle: "Alignment early reduces rework later.",
    example:
      "I worked across medical affairs, compliance, and finance stakeholders to turn user research and journey mapping into actionable platform improvements.",
    takeaway:
      "Clear ownership and shared expectations make execution much smoother.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    principle: "I focus on making operational problems visible before trying to solve them.",
    example:
      "I built dashboards for cycle time, adoption, and quality targets so teams could identify bottlenecks and decide where to iterate next.",
    takeaway:
      "Visibility is often the first step toward better product decisions.",
  },
  {
    icon: Zap,
    title: "Agile Execution",
    principle: "Clear backlog and clear stories lead to better delivery.",
    example:
      "I wrote epics, user stories, and acceptance criteria so scrum teams could work through iterative delivery with less ambiguity.",
    takeaway:
      "Agile works best when teams know exactly what problem they are solving and what good delivery looks like.",
  },
]

export function HowIThinkSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="how-i-think" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm text-accent font-medium mb-3 tracking-wide uppercase">
            My Approach
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            How I Think
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Product principles shaped by real work across enterprise workflows,
            compliance-heavy systems, and AI-enabled improvements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const isOpen = openIndex === index

            return (
              <button
                key={skill.title}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="text-left group bg-card/70 rounded-2xl border border-border/60 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <skill.icon size={24} className="text-accent" />
                  </div>

                  <ChevronDown
                    size={18}
                    className={`text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2 tracking-tight">
                  {skill.title}
                </h3>

                <p className="text-foreground leading-relaxed mb-3">
                  {skill.principle}
                </p>

                {isOpen && (
                  <div className="pt-4 border-t border-border/50 space-y-4">
                    <div>
                      <p className="text-sm font-medium text-accent mb-1">
                        Example
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.example}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-accent mb-1">
                        Takeaway
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.takeaway}
                      </p>
                    </div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
