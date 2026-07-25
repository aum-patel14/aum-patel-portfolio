'use client'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
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
    <footer 
      className="relative overflow-hidden bg-background border-t border-border/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif font-bold text-xl text-primary tracking-wide">
                AUM PATEL
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs font-sans">
              Frontend Developer from Gujarat, India. Crafting high-performance user interfaces and responsive web experiences.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-mono text-[10px] font-semibold text-text-primary mb-4 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-text-secondary text-sm hover:text-primary transition-colors duration-300 font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-mono text-[10px] font-semibold text-text-primary mb-4 uppercase tracking-widest">
              Get in Touch
            </h4>
            <p className="text-text-secondary text-sm mb-4 font-sans">
              Open to internship opportunities and data strategy roles.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-primary text-sm hover:underline font-mono"
            >
              {personalInfo.email}
            </a>
            <div className="flex gap-2.5 mt-4">
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

        {/* Bottom copyright row */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-[#2D2D2D]/60"
        >
          <p className="text-text-muted text-xs sm:text-sm flex items-center gap-1.5 font-sans">
            Built with{' '}
            <Heart className="w-3.5 h-3.5 text-primary inline fill-primary/20" />
            {' '}by{' '}
            <span className="text-text-primary font-medium">Aum Patel</span>
            {' '}· {new Date().getFullYear()}
          </p>
          <p className="text-text-muted font-mono text-[10px] tracking-wide">
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
        
      </div>
    </footer>
  )
}
