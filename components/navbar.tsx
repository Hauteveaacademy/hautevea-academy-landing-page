'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Apwopo', href: '#solution' },
    { label: 'Pwogram', href: '#curriculum' },
    { label: 'Pri', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#222]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-syne)] text-base uppercase select-none"
        >
          <span className="font-extrabold text-[#e8b94f] tracking-[0.05em]">HAUTEVEA</span>
          <span className="font-bold text-[#f5f0e8] tracking-[0.05em] ml-2">ACADEMY</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-[#f5f0e8]/60 hover:text-[#f5f0e8] transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://whop.com/checkout/plan_9dP3Ao1LHq9OW"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-gold px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide uppercase"
        >
          Enskri $97
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#f5f0e8] transition-all duration-200 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#f5f0e8] transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#f5f0e8] transition-all duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#222] px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4 mb-6">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-[#f5f0e8]/70 hover:text-[#f5f0e8] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://whop.com/checkout/plan_9dP3Ao1LHq9OW"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-gold w-full flex justify-center px-5 py-3 rounded-lg text-sm font-bold tracking-wide uppercase"
          >
            Enskri  $97
          </a>
        </div>
      )}
    </header>
  )
}
