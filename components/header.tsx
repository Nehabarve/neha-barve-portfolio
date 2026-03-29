"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#case-studies", label: "Work" },
  { href: "#how-i-think", label: "Approach" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 py-4">
        <Link 
          href="/" 
          className="text-lg font-semibold tracking-tight hover:text-accent transition-colors"
        >
          Neha Barve
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-4">
            <Link
              href="#contact"
              className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-border/50">
          <ul className="flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="#contact"
                className="block px-4 py-3 text-center font-medium bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
