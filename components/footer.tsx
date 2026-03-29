import Link from "next/link"

const footerLinks = [
  { href: "#case-studies", label: "Work" },
  { href: "#how-i-think", label: "Approach" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Neha Barve
            </Link>
            <nav className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Neha Barve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
