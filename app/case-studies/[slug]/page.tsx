import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

const caseStudies = {
  "ai-stock-scanner": {
  title: "Building an AI-Based Stock Scanner Using Natural Language",
  category: "AI",

  overview:
    "Worked on a side project to translate natural language queries into stock screening logic, simplifying how users interact with complex market data.",

  context:
    "Most stock scanners require users to manually build filters using technical indicators. This creates a barrier for users who understand what they want conceptually but struggle to translate that into structured queries.",

  problem: [
    "Users had to manually construct complex filter logic",
    "Understanding technical indicators required prior knowledge",
    "Traditional scanners were not intuitive for new users",
    "Query building was time-consuming and error-prone"
  ],

  role:
    "Worked on product thinking, defining user experience, and shaping how natural language inputs translate into structured scan logic.",

  actions: [
    "Defined how user intent in plain English maps to technical conditions",
    "Worked on structuring scan logic into a consistent and reusable format",
    "Focused on simplifying user interaction with complex financial data",
    "Tested outputs to ensure alignment with expected scan results"
  ],

  challenges: [
    "Translating vague natural language into precise logic was not always straightforward",
    "Different users described the same condition in different ways",
    "Ensuring consistency in results while maintaining flexibility in input",
    "Balancing simplicity of use with accuracy of outputs"
  ],

  outcome: [
    "Simplified how users interact with stock scanning tools",
    "Reduced friction in building complex scan conditions",
    "Improved accessibility for non-technical users",
    "Created a foundation for scalable query interpretation"
  ],

  insight:
    "The hardest part of building AI-driven products is not the model itself, but defining how human intent maps to structured system logic."
},
  "global-transparency-reporting": {
    title: "Standardizing Global Transparency Reporting Across Multiple Countries",
    category: "Compliance",
    overview:
      "Supported the design of a reporting solution for HCP and HCO expense disclosure across multiple countries with varying regulatory formats and reporting expectations.",
    context:
      "At Takeda, transparency reporting required data from multiple countries to be prepared for country-specific disclosure formats. While the underlying expense data was similar, the way it had to be represented varied significantly by country. Some markets required different categories, structures, and levels of disclosure, which made reporting harder to scale.",
    problem: [
      "The same underlying data had to be represented differently depending on country requirements",
      "Heavy manual validation was needed to confirm reports matched local formats",
      "Inconsistent reporting outputs created risk and rework",
      "The process was difficult to scale across additional countries"
    ],
    role:
      "Worked with business stakeholders and vendor teams to understand reporting requirements, review actual output formats, and help translate those needs into clearer reporting logic.",
    actions: [
      "Reviewed country-specific reporting formats to understand structural differences",
      "Helped identify where underlying data needed to be organized more consistently",
      "Worked with stakeholders to clarify expectations around categories and reporting logic",
      "Validated outputs against real report samples to confirm accuracy"
    ],
    challenges: [
      "Different countries required different reporting structures for similar data",
      "Manual validation was high because report formats were not uniform",
      "The team needed standardization without losing country-specific accuracy"
    ],
    outcome: [
      "Improved consistency across reporting outputs",
      "Reduced manual validation effort",
      "Supported a more scalable global reporting process"
    ],
    insight:
      "In global reporting systems, the hardest problem is often not the output format itself. It is designing the underlying structure so one dataset can support multiple regulatory views."
  },

  "grants-platform": {
    title: "Designing a Grants, Donations & Sponsorship Workflow Platform",
    category: "Workflow",
    overview:
      "Helped design and improve a centralized workflow platform for managing grants, donations, and sponsorship requests across multiple teams.",
    context:
      "At Takeda, external organizations submitted requests that required coordination across medical affairs, compliance, and finance teams. The process involved multiple handoffs, approvals, and payment steps, but the workflow was not fully standardized and visibility across stages was limited.",
    problem: [
      "Requests moved through multiple teams with limited visibility into current status",
      "Ownership across workflow stages was not always clear",
      "Approval steps were inconsistent across stakeholders",
      "Payment processing was disconnected from the request workflow"
    ],
    role:
      "Supported product discovery through stakeholder interviews and journey mapping, wrote functional requirements and user stories, and worked with the scrum team through iterative delivery.",
    actions: [
      "Mapped the workflow from request intake through review, approval, and payment",
      "Translated stakeholder input into structured requirements and backlog items",
      "Helped define clearer ownership and approval stages across teams",
      "Identified SAP integration opportunities to improve payment processing",
      "Supported rollout, walkthroughs, and adoption tracking across business units"
    ],
    challenges: [
      "Different stakeholders had different expectations of how the workflow should operate",
      "Handoffs between teams created delays and confusion",
      "Payment processing sat outside the main workflow and reduced end-to-end visibility"
    ],
    outcome: [
      "Improved visibility into request progress and approvals",
      "Reduced manual processing through better workflow structure",
      "Supported SAP automation opportunities for payments",
      "Improved adoption through training and change management"
    ],
    insight:
      "Workflow design is often less about adding more functionality and more about clarifying ownership, handoffs, and decision points across teams."
  },

  "payment-reliability": {
    title: "Improving Payment Reliability Through Tracking and Recovery",
    category: "Payments",
    overview:
      "Improved payment reliability by introducing better visibility into failures and a structured process for resolution and recovery.",
    context:
      "Within the grants workflow, approved payment requests were expected to flow through a vendor-managed process and into SAP. Some requests were failing before reaching SAP, but the failures were not visible immediately, which created delays and confusion for coordinators.",
    problem: [
      "Payment failures were occurring before requests reached SAP",
      "There was limited visibility into which transactions had failed",
      "Failure reasons were not easy to identify and track",
      "There was no structured process for correcting and resubmitting failed requests"
    ],
    role:
      "Helped identify the tracking gap, worked with vendor and internal teams on a reporting approach, and supported a clearer operational process for issue resolution.",
    actions: [
      "Investigated where payment requests were dropping before SAP processing",
      "Worked with the vendor to introduce daily reporting for failed requests and failure reasons",
      "Helped define a process where support teams could review failures and notify coordinators",
      "Supported a structured path for correcting issues and resubmitting requests"
    ],
    challenges: [
      "Failures were happening but were not visible until delays were noticed",
      "There was no single recovery workflow for failed requests",
      "Ownership for correction and resubmission needed to be made explicit"
    ],
    outcome: [
      "Improved visibility into failed payment requests",
      "Faster issue identification and follow-up",
      "Reduced delays caused by unresolved failures",
      "Created a more reliable recovery process"
    ],
    insight:
      "Operational issues become much easier to solve once failures are visible and ownership for recovery is clearly defined."
  },

  "ai-summarization": {
    title: "Introducing AI-Assisted Text Summarization",
    category: "AI",
    overview:
      "Worked on AI-enabled enhancements that reduced manual review effort and improved efficiency in document-heavy enterprise workflows.",
    context:
      "At Honeywell, teams were spending significant time reviewing long records and extracting key information manually. AI-assisted summarization created an opportunity to improve efficiency, but usefulness and trust were critical for adoption.",
    problem: [
      "Manual review of large text-heavy records was time-consuming",
      "Users needed faster access to key information without losing context",
      "AI output needed to feel useful and trustworthy",
      "Governance and traceability still had to be respected"
    ],
    role:
      "Translated the opportunity into product requirements, supported prioritized epics and user stories, and worked with engineering, QA, and compliance through iterative delivery.",
    actions: [
      "Helped define where summarization would add value in the user workflow",
      "Wrote requirements and acceptance criteria for the feature",
      "Positioned the AI output as assistive rather than a replacement for user judgment",
      "Used feedback to refine output quality and improve fit with user needs",
      "Considered how the feature affected connected workflows and governance expectations"
    ],
    challenges: [
      "Users did not initially trust AI-generated summaries",
      "It was hard to define what a useful summary should include",
      "The feature had to improve efficiency without creating governance concerns"
    ],
    outcome: [
      "Reduced manual review effort",
      "Improved efficiency in document-heavy workflows",
      "Supported stronger adoption of AI-enabled functionality",
      "Balanced user value with governance considerations"
    ],
    insight:
      "AI features are most useful when they improve a real workflow and still respect trust, usability, and operational controls."
  },

  "config-migration-tool": {
    title: "Enabling Governance with a Configuration Migration Tool",
    category: "Governance",
    overview:
      "Supported a tool that improved how configuration changes moved across environments by adding more structure, traceability, and control.",
    context:
      "Internal teams were making configuration changes in lower environments and promoting them upward based on customer or business needs. Without strong visibility into what had changed and what was being moved, releases carried unnecessary risk.",
    problem: [
      "Configuration changes across environments were difficult to track clearly",
      "Teams had limited visibility into what was being promoted and when",
      "Inconsistencies across environments created operational risk",
      "Auditability and release control needed improvement"
    ],
    role:
      "Worked with internal users to understand the migration process, helped define requirements for better tracking and control, and supported the structure of the tool.",
    actions: [
      "Identified gaps in how changes were tracked across environments",
      "Helped define a clearer migration workflow for moving changes upward",
      "Supported adding visibility into what was changed and promoted",
      "Improved traceability so teams had a more reliable release record"
    ],
    challenges: [
      "Teams needed control without making releases slower",
      "Tracking changes across environments was inconsistent",
      "Governance and usability both had to be considered"
    ],
    outcome: [
      "Better visibility into configuration changes",
      "Improved release control across environments",
      "Reduced risk of inconsistencies during promotion",
      "Stronger traceability for internal users"
    ],
    insight:
      "Governance works best when it is built into the workflow itself instead of being managed through manual follow-up."
  }
}
const studyOrder = [
    "ai-stock-scanner",
    "ai-summarization",
    "config-migration-tool"
    "grants-platform",
    "payment-reliability",
    "global-transparency-reporting", 
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
           {/* Challenges */}
          <div>
            <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
              Challenges
            </h2>
            <ul className="space-y-4">
              {study.challenges.map((item, i) => (
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
