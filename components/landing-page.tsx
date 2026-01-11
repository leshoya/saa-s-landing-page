"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Check } from "lucide-react"

interface LandingPageProps {
  onStart: () => void
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const [typedWord, setTypedWord] = useState("")
  const words = ["PM", "Consulting", "Case"]
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[wordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setTypedWord(currentWord.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)

          if (charIndex + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setTypedWord(currentWord.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)

          if (charIndex === 0) {
            setIsDeleting(false)
            setWordIndex((wordIndex + 1) % words.length)
          }
        }
      },
      isDeleting ? 100 : 150,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex, words])

  const features = [
    "Master product sense & case interviews",
    "Practice with real FAANG & MBB questions",
    "AI feedback on frameworks & structure",
  ]

  const pmRoles = [
    { title: "Product Manager", description: "Lead product strategy at tech companies" },
    { title: "Associate PM (APM)", description: "Entry-level PM at Google, Meta, etc." },
    { title: "Product Analyst", description: "Data-driven product decisions" },
    { title: "Strategy & Ops", description: "Business strategy and operations" },
  ]

  const consultingRoles = [
    { title: "Management Consultant", description: "MBB and Big 4 consulting" },
    { title: "Business Analyst", description: "Entry-level consulting role" },
    { title: "Strategy Consultant", description: "Corporate strategy focus" },
    { title: "Tech Consultant", description: "Technology advisory roles" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" stroke="#22C55E" strokeWidth="2" />
              <path d="M12 16h8M16 12v8" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-bold">
              e<span className="text-primary">Merge</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {/* PM Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("pm")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition py-2">
                Product Management
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${activeDropdown === "pm" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "pm" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-card border border-border rounded-xl shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {pmRoles.map((role) => (
                    <button
                      key={role.title}
                      onClick={onStart}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition"
                    >
                      <div className="font-medium text-foreground">{role.title}</div>
                      <div className="text-sm text-muted-foreground">{role.description}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Consulting Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("consulting")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition py-2">
                Consulting
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${activeDropdown === "consulting" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "consulting" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-card border border-border rounded-xl shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {consultingRoles.map((role) => (
                    <button
                      key={role.title}
                      onClick={onStart}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition"
                    >
                      <div className="font-medium text-foreground">{role.title}</div>
                      <div className="text-sm text-muted-foreground">{role.description}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="text-sm text-foreground hover:text-primary transition">Pricing</button>
            <button className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition">
              Resources
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-sm text-foreground hover:text-primary transition hidden sm:block">Sign in</button>
            <Button
              onClick={onStart}
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
            >
              Start for Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-8">
            <span className="text-lg">🎯</span>
            <span className="text-sm font-medium text-green-700 uppercase tracking-wide">
              From CS to PM & Consulting
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight text-balance">
            Break Into Product & Consulting <br className="hidden md:block" />
            with <span className="text-primary">{typedWord}</span>
            <span className="typewriter-cursor"></span>
          </h1>

          {/* Feature List */}
          <div className="flex flex-col items-center gap-3 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">
                  {idx === 1 ? (
                    <>
                      Practice with real{" "}
                      <span className="underline decoration-dotted underline-offset-4">FAANG & MBB questions</span>
                    </>
                  ) : (
                    feature
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <p className="text-muted-foreground mb-6">
            <span className="font-semibold text-foreground">2,500+</span> CS grads placed •
            <span className="font-semibold text-foreground"> 89%</span> offer rate at target firms
          </p>

          {/* CTA Button */}
          <Button
            onClick={onStart}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Start Practicing – Free
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>

          {/* No credit card */}
          <p className="text-sm text-muted-foreground mt-4">No credit card required</p>
        </div>
      </section>

      {/* Preview Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20">
        <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-muted-foreground">See how eMerge helps you nail PM & consulting interviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card border-y border-border py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Built for CS Majors Breaking In</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Practice product sense, case interviews, and behavioral questions tailored for tech-to-consulting pivots
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Sense</h3>
              <p className="text-muted-foreground">
                Master "How would you improve X?" and product design questions from Google, Meta, and more
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Case Interviews</h3>
              <p className="text-muted-foreground">
                Practice market sizing, profitability cases, and M&A scenarios from MBB firms
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Framework Feedback</h3>
              <p className="text-muted-foreground">
                Get AI feedback on your MECE structures, hypothesis-driven thinking, and communication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 grid-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Land Your Dream PM or Consulting Role?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of CS majors who successfully pivoted to product management and consulting
          </p>
          <Button
            onClick={onStart}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold"
          >
            Start Practicing Now
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" stroke="#22C55E" strokeWidth="2" />
                  <path d="M12 16h8M16 12v8" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="font-bold">eMerge</span>
              </div>
              <p className="text-sm text-muted-foreground">AI-powered PM & consulting interview prep for CS majors</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product Management</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Product Manager
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Associate PM
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Product Analyst
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Consulting</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Management Consultant
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Business Analyst
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Strategy Consultant
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    PM Frameworks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Case Library
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 eMerge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
