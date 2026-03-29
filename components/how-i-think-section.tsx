"use client"

import { 
  Target, 
  Users, 
  MessageSquare, 
  Handshake, 
  Lightbulb, 
  Zap 
} from "lucide-react"

const skills = [
  {
    icon: Target,
    title: "Prioritization",
    description: "Balancing business impact, user value, and technical feasibility to focus on what matters most.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong partnerships across engineering, design, and business teams to deliver cohesive products.",
  },
  {
    icon: MessageSquare,
    title: "Conflict Resolution",
    description: "Navigating competing priorities and aligning stakeholders through clear communication and empathy.",
  },
  {
    icon: Handshake,
    title: "Stakeholder Management",
    description: "Maintaining trust and transparency with executives, customers, and cross-functional partners.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Breaking down complex challenges into actionable steps with creative, data-informed solutions.",
  },
  {
    icon: Zap,
    title: "Agile Execution",
    description: "Driving iterative delivery with a focus on learning, adapting, and shipping value continuously.",
  },
]

export function HowIThinkSection() {
  return (
    <section id="how-i-think" className="py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="text-sm text-accent font-medium mb-4 tracking-wide uppercase">
            My Approach
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            How I Think
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Core principles and frameworks that guide my product thinking and leadership style.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.title} 
              className="group glass rounded-2xl p-8 hover:bg-card/70 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <skill.icon size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
