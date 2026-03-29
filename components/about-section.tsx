"use client"

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "15+", label: "Products Launched" },
  { value: "50M+", label: "Users Impacted" },
  { value: "12+", label: "Countries Served" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left column */}
          <div className="lg:col-span-5">
            <p className="text-sm text-accent font-medium mb-4 tracking-wide uppercase">
              About Me
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
              A bit about me
            </h2>
            
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-6">
                  <p className="text-3xl sm:text-4xl font-semibold text-accent mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl sm:text-2xl leading-relaxed font-medium">
              {"I'm a Senior Product Manager with over 8 years of experience building products that drive meaningful business outcomes."}
            </p>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                My work spans enterprise software, fintech, and AI-powered tools. I believe great products emerge from deep customer empathy, rigorous prioritization, and close collaboration with engineering and design teams.
              </p>
              <p>
                {"I've led product initiatives at companies ranging from early-stage startups to Fortune 500 enterprises, always focused on delivering measurable value while building strong team cultures."}
              </p>
              <p>
                {"When I'm not building products, you can find me exploring new cities, reading about behavioral economics, or experimenting with new cooking recipes."}
              </p>
            </div>

            {/* Skills tags */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wide">Areas of Expertise</p>
              <div className="flex flex-wrap gap-2">
                {["Product Strategy", "User Research", "Data Analytics", "Agile/Scrum", "Cross-functional Leadership", "AI/ML Products", "Enterprise SaaS", "B2B Products"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 text-sm font-medium glass rounded-full hover:bg-secondary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
