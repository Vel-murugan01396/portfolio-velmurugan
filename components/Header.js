'use client'

import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  function scrollToSection(e, id) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-xl font-bold tracking-tight text-slate-800 hover:text-indigo-600 transition-colors"
        >
          Software Developer
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 my-1 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-4 pb-4 space-y-1 bg-white/95 backdrop-blur-md">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className="block py-3 px-4 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
