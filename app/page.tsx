import Link from "next/link"
import { ArrowRight, Mail, Linkedin, Briefcase, Shield, BarChart3, Cpu,Workflow, Lightbulb, Users, Scale, UserCheck, Puzzle, ListChecks } from "lucide-react"

const credibilityCards =[
  {
    icon: Workflow,
    title: "Workflow Systems",
    text: "Designing systems that support real operational workflows end to end",
  },
  {
    icon: Shield,
    title: "Compliance & Governance",
    text: "Building products that align with regulatory, privacy, and approval requirements",
  },
  {
    icon: Briefcase,
    title: "Execution & Delivery",
    text: "Turning requirements into clear backlog, user stories, and shipped features",
  },
  {
    icon: Cpu,
    title: "AI in Products",
    text: "Applying AI where it improves user workflows and reduces manual effort",
  }
]

const caseStudies = [
    {
    slug: "ai-stock-scanner",
    title: "Building an AI-Based Stock Scanner Using Natural Language",
    summary:"Built a side project with a small team to translate natural language queries into stock screening logic, simplifying how users interact with market data.",
    tags: ["AI", "Side Project", "Product Thinking"],
    },
    {
    slug: "ai-text-summarization",
    title: "Introducing AI-Assisted Text Summarization",
    summary: "Introduced AI-based text summarization to reduce manual review effort and improve efficiency in document-heavy workflows.",
    tags: ["AI", "Enterprise", "Efficiency"],
    },
 
    {
    slug: "grants-workflow-platform",
    title: "Designing a Grants, Donations & Sponsorship Workflow Platform",
    summary: "Designed and improved a multi-team workflow covering request intake, approvals, and SAP payment integration, improving visibility and reducing processing delays.",
    tags: ["Workflow", "SAP", "Stakeholders"],
    },
   {
    slug: "global-transparency-reporting",
    title: "Standardizing Global Transparency Reporting Across Countries",
    summary: "Standardized reporting across multiple countries with different regulatory formats, improving consistency and reducing manual effort.",
    tags: ["Compliance", "Reporting", "Global"],
    },

]

const howIThink = [
  {
    icon: Lightbulb,
    title: "Prioritization",
    principle: "I prioritize based on long-term impact, not just visibility.",
    example: "In grants workflow work, identifying SAP payment integration opportunities created stronger operational value than focusing only on front-end improvements.",
  },
  {
    icon: Users,
    title: "Collaboration",
    principle: "Good product work comes from shared understanding across teams.",
    example: "I partnered with engineering, QA, compliance, and business stakeholders to translate requirements into clear deliverables and compliant releases.",
  },
  {
    icon: Scale,
    title: "Conflict Resolution",
    principle: "Most conflicts are trade-offs that need structure.",
    example: "In cross-functional workflow projects, I balanced process efficiency with governance and approval controls instead of choosing one side over the other.",
  },
  {
    icon: UserCheck,
    title: "Stakeholder Management",
    principle: "Alignment early reduces rework later.",
    example: "I worked across medical affairs, compliance, and finance stakeholders to turn user research and journey mapping into actionable platform improvements.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    principle: "Visibility usually comes before improvement.",
    example: "I built dashboards for cycle time, adoption, and quality targets so teams could identify where to iterate next.",
  },
  {
    icon: ListChecks,
    title: "Agile Execution",
    principle: "Clear backlog and clear stories lead to better delivery.",
    example: "I wrote epics, user stories, and acceptance criteria so scrum teams could work through iterative delivery with less ambiguity.",
  },
]

const additionalWork = [
  {
    title: "Configuration Migration Tool",
    summary:
      "Improved how configuration changes were promoted across environments by introducing structure and traceability, reducing risk during releases.",
  },
  {
    title: "Cycle Time Metrics & Dashboards",
    summary:
      "Defined and tracked cycle time, adoption, and quality metrics, enabling teams to identify bottlenecks and improve workflow efficiency.",
  },
  {
    title: "Credentialing Platform for Licensed Professionals",
    summary:
      "Contributed to building a platform for managing license renewal and compliance by gathering requirements, designing workflows, and supporting testing across releases.",
  },
  {
    title: "Training & HR Workflow Improvements",
    summary:
      "Improved training and HR workflows by bringing structure to employee lifecycle and coordination processes in the absence of a centralized HR system.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl animate-fade-in">
           
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-white">
            Hi, I'm Neha Barve </h1>
       <p className="text-primary text-sm font-medium mb-4 tracking-wide">
              Product Manager | AI-Enabled Enterprise Products | Agile Delivery & Compliance
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
            I am Product Manager with 5+ years of experience focused on enterprise workflows, platforms, and AI-driven product improvements.
            I have worked across the product development life cycle, from discovery and requirements through delivery and post-launch optimization. My experience includes backlog management, epics and user stories, AI-enabled enhancements, governance, privacy, compliance, and cross-functional delivery.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
             <ArrowRight size={18} className="group-hover:text-primary-foreground transition-all duration-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-card transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Credibility Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in delay-1">
            {credibilityCards.map((card) => (
              <div
                key={card.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <card.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="work" className="px-6 py-16 lg:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
         <p className="text-primary text-sm font-medium mb-2">Case Studies</p>  
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4"> Building & Improving Enterprise Products</h2>
          <p className="text-muted-foreground max-w-2xl"> Product work focused on solving real operational problems across enterprise platforms and regulated environments.</p>
          </div>

        <div className="grid gap-6 animate-fade-in delay-1">
  {caseStudies.map((study) => (
    <Link
      key={study.slug}
      href={`/case-studies/${study.slug}`}
      className="group block p-6 lg:p-8 bg-card rounded-2xl border border-border/80 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
            {study.title}
          </h3>

          <p className="text-muted-foreground">
            {study.summary}
          </p>
        </div>

        <div className="flex-shrink-0">
          <div className="w-11 h-11 rounded-full border border-border/80 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-105 transition-all duration-300">
            <ArrowRight
              size={18}
              className="group-hover:text-primary-foreground transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>     
          {/* How I Think */}
      <section id="approach" className="px-6 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <p className="text-primary text-sm font-medium mb-2">My Approach</p>
            <h2 className="text-3xl lg:text-4xl font-semibold">How I Think</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in delay-1">
            {howIThink.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground mb-3">{item.principle}</p>
                <p className="text-sm text-muted-foreground">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Work */}
      <section className="px-6 py-16 lg:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <p className="text-primary text-sm font-medium mb-2">More Projects</p>
            <h2 className="text-3xl lg:text-4xl font-semibold">Additional Work</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8 animate-fade-in delay-1">
            {additionalWork.map((work) => (
              <div
                key={work.title}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <h3 className="font-semibold mb-2">{work.title}</h3>
                <p className="text-sm text-muted-foreground">{work.summary}</p>
              </div>
            ))}
          </div>

          <div className="animate-fade-in delay-2">
            <Link
              href="/additional-work"
              className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
            >
              View More
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="px-6 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl animate-fade-in">
            <p className="text-primary text-sm font-medium mb-2">Background</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">About</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I am a product professional with experience building and improving enterprise platforms in regulated environments. My work spans discovery, journey mapping, requirements, backlog management, Agile delivery, governance, AI-enabled product enhancements, and post-launch optimization. I enjoy turning complex business needs into clear product decisions and practical systems that improve the end-user experience.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-card transition-colors"
            >
              Read More
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="px-6 py-16 lg:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl animate-fade-in">
            <p className="text-primary text-sm font-medium mb-2">Get in Touch</p>
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Contact</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {"I'm open to product, product operations, business analysis, and enterprise platform opportunities."}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:neha.barve@email.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <Mail size={18} />
                Email
              </a>
              <a
                href="https://linkedin.com/in/nehabarve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-card transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">Neha Barve</p>
          <p className="text-sm text-muted-foreground">Built with care</p>
        </div>
      </footer>
    </main>
  )
}
