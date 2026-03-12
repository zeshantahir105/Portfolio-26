'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Track active section
      const sections = ['skills', 'projects', 'why-work', 'contact']
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
      if (window.scrollY < 200) setActiveSection('')
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Me', href: '#why-work' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-neutral-200 shadow-sm'
          : 'bg-white/80'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-violet-500/50 ring-offset-2 ring-offset-white transition-all duration-300 group-hover:ring-violet-400">
              <Image
                src="/profile.png"
                alt="Muhammad Zeshan Tahir"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-lg font-semibold text-neutral-900 hidden sm:block transition-colors group-hover:text-violet-500">
              MZT
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.href === '#' 
                ? activeSection === '' 
                : activeSection === link.href.slice(1)
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'text-violet-600'
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-400 rounded-full" />
                  )}
                </a>
              )
            })}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-400/25"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out-expo ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-6 pt-2 space-y-1 bg-white">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-center font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
