'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Github, Linkedin, BarChart2 } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-blur' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2 group"
            >
              <span className="font-serif font-bold text-xl text-text-primary tracking-wide hover:text-primary transition-colors duration-300">
                AUM PATEL
              </span>
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-4">
              {navLinks.map(link => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className={`relative px-3 py-2 text-xs uppercase tracking-widest font-mono font-medium transition-all duration-200 block ${
                        isActive
                          ? 'text-primary'
                          : 'text-on-surface-variant hover:text-primary'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary"
                          transition={{ type: 'spring', duration: 0.4 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="/resume.pdf" download className="btn-primary text-xs py-2 px-5">
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden social-icon"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 w-full px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="text-xl font-serif font-semibold text-text-primary hover:text-primary transition-all duration-200 block text-center"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-6 border-t border-border w-full flex flex-col items-center gap-4">
                <a href="/resume.pdf" download className="btn-primary w-full justify-center">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <div className="flex gap-3">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
