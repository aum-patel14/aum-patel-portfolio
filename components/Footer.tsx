'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, BarChart2, Heart } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden"
      style={{
        background: 'var(--background)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/5"
              >
                <BarChart2 className="w-4 h-4 text-white" />
              </div>
              <span
                className="font-outfit font-bold text-lg text-text-primary"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Aum<span className="text-white">.</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Aspiring Data Analyst from Gujarat, India — transforming raw data into actionable insights through Python, SQL, and BI tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-outfit font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-text-muted text-sm hover:text-accent-blue-light transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4
              className="font-outfit font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Get in Touch
            </h4>
            <p className="text-text-muted text-sm mb-4">
              Open to internships and entry-level data roles.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-accent-blue-light text-sm hover:underline"
              style={{ color: 'var(--accent-blue-light)', fontFamily: 'var(--font-jetbrains)' }}
            >
              {personalInfo.email}
            </a>
            <div className="flex gap-2 mt-4">
              {socialLinks.map(s => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-text-muted text-sm flex items-center gap-1.5">
            Built with{' '}
            <Heart className="w-3.5 h-3.5 text-white inline" />
            {' '}by{' '}
            <span className="text-text-primary font-medium">Aum Patel</span>
            {' '}· {new Date().getFullYear()}
          </p>
          <p
            className="text-text-muted text-xs"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
