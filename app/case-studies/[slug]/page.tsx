import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

const caseStudies = {
  "global-transparency-reporting": {
    title: "Global Transparency Reporting",
    category: "Compliance",
    overview: "Enabled scalable reporting of HCP/HCO expenses across multiple countries with varying regulatory requirements.",
    context: "Global reporting required handling data from multiple countries with different formats and regulatory structures. Each country had unique requirements that needed to be standardized without losing critical compliance details.",
    problem: ["Inconsistent data formats across countries", "Manual validation processes prone to errors", "High risk of compliance failures", "Not scalable for market expansion"],
    role: "Worked with global teams and vendor to define reporting logic and ensure compliance across all markets.",
    actions: ["Analyzed country-specific reporting formats and requirements", "Standardized data structures while maintaining compliance", "Validated outputs using real historical reports", "Created comprehensive documentation for global teams"],
    outcome: ["Reduced manual effort by 60%", "Improved data consistency across markets", "Enabled expansion to 5 new countries"],
    insight: "Standardizing data is more important than standardizing output."
  },
  "grants-platform": {
    title: "Grants & Donations Platform",
    category: "Workflow",
    overview: "Built a centralized workflow for managing grants, donations, and sponsorships with improved visibility and accountability.",
    context: "Multiple teams were using fragmented workflows with no visibility into the overall process. This led to delays, duplicate work, and compliance risks.",
    problem: ["No clear ownership of funding requests", "Significant delays in approval processes", "Disconnected payment workflows", "Lack of visibility into request status"],
    role: "Led the product design and stakeholder alignment for the end-to-end workflow platform.",
    actions: ["Mapped the complete workflow end-to-end", "Defined clear approval stages with ownership", "Integrated with SAP for payment processing", "Added real-time dashboards for visibility"],
    outcome: ["Improved visibility across all stakeholders", "Reduced approval delays by 40%", "Streamlined payment processing"],
    insight: "Workflow clarity drives efficiency."
  },
  "payment-reliability": {
    title: "Payment Reliability System",
    category: "Payments",
    overview: "Improved payment reliability by introducing tracking and resolution workflows that reduced failures and improved accountability.",
    context: "Payment failures were occurring frequently with no systematic way to identify, track, or resolve them. This created significant business and compliance risks.",
    problem: ["Payments failing before reaching SAP", "No visibility into failure reasons", "Significant delays in resolution", "No clear ownership of issues"],
    role: "Designed the tracking system and resolution workflow to improve payment reliability.",
    actions: ["Introduced daily failure reports with root cause analysis", "Built resolution workflow with clear ownership", "Assigned accountability for each failure type", "Created escalation paths for critical issues"],
    outcome: ["Faster issue resolution", "Improved overall reliability by 35%", "Clear accountability structure"],
    insight: "Visibility enables recovery."
  },
  "ai-summarization": {
    title: "AI Text Summarization",
    category: "AI",
    overview: "Introduced AI-assisted summaries to reduce manual effort and improve efficiency in document review workflows.",
    context: "Teams were spending significant time reviewing lengthy documents manually. This was inefficient and led to reviewer fatigue and inconsistent quality.",
    problem: ["Time-consuming document reviews", "Low reviewer efficiency", "Inconsistent review quality", "Reviewer fatigue leading to errors"],
    role: "Defined the AI use case and positioned the feature for user adoption and trust.",
    actions: ["Defined clear use case with measurable outcomes", "Positioned AI as assistive rather than replacement", "Iterated on feedback from early users", "Built trust through transparency in AI decisions"],
    outcome: ["Reduced review effort by 50%", "Improved reviewer efficiency", "High adoption rate among users"],
    insight: "Trust drives AI adoption."
  },
  "config-migration-tool": {
    title: "Config Migration Tool",
    category: "DevTools",
    overview: "Improved governance with structured config migration and tracking that reduced deployment risks.",
    context: "Configuration changes were being made across environments without proper tracking or approval processes. This created risks and made it difficult to audit changes.",
    problem: ["No change tracking across environments", "Risk of configuration inconsistencies", "Difficult to audit historical changes", "No approval workflow for critical configs"],
    role: "Designed the migration workflow and governance structure for the development platform.",
    actions: ["Defined structured migration workflow", "Introduced comprehensive audit logs", "Created validation checks before deployment", "Built rollback capabilities for failed migrations"],
    outcome: ["Improved control over configurations", "Reduced deployment risk by 45%", "Clear audit trail for compliance"],
    insight: "Governance should be built into systems."
  }
}

const studyOrder = [
  "global-transparency-reporting",
  "grants-platform",
  "payment-reliability",
  "ai-summarization",
  "config-migration-tool"
]

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies[slug as keyof typeof caseStudies]
  if (!study) return { title: "Case Study Not Found" }
  return {
    title: `${study.title} | Neha Barve`,
    description: study.overview,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies[slug as keyof typeof caseStudies]

  if (!study) {
    notFound()
  }

  const currentIndex = studyOrder.indexOf(slug)
  const nextSlug = studyOrder[currentIndex + 1]
  const nextStudy = nextSlug ? caseStudies[nextSlug as keyof typeof caseStudies] : null

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 lg:px-12 py-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
          <span className="text-sm text-muted-foreground">{study.category}</span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6 animate-fade-in">
            {study.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in delay-1">
            {study.overview}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="max-w-3xl mx-auto space-y-16 animate-fade-in delay-2">
          {/* Context */}
          <div>
            <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
              Context
            </h2>
            <p className="text-lg leading-relaxed">{study.context}</p>
          </div>

          {/* Problem */}
          <div>
            <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
              The Problem
            </h2>
            <ul className="space-y-4">
              {study.problem.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center text-sm text-muted-foreground flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Role */}
          <div>
            <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
              My Role
            </h2>
            <p className="text-lg leading-relaxed">{study.role}</p>
          </div>

          {/* Actions */}
          <div>
            <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
              What I Did
            </h2>
            <ul className="space-y-4">
              {study.actions.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center text-sm text-muted-foreground flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div>
            <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
              Outcome
            </h2>
            <div className="flex flex-wrap gap-3">
              {study.outcome.map((item, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Insight */}
          <div className="pt-8 border-t border-border">
            <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
              Key Insight
            </h2>
            <p className="text-2xl font-medium">{study.insight}</p>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      {nextStudy && (
        <section className="px-6 lg:px-12 py-16 lg:py-24 bg-card border-t border-border">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">Next Case Study</p>
            <Link
              href={`/case-studies/${nextSlug}`}
              className="group flex items-center justify-between"
            >
              <h3 className="text-2xl font-medium group-hover:underline underline-offset-4">
                {nextStudy.title}
              </h3>
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to home
          </Link>
        </div>
      </footer>
    </main>
  )
}
