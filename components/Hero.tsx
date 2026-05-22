'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react'
import { personalInfo, heroStats, typewriterRoles } from '@/lib/data'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex]
    const speed = isDeleting ? 50 : 80
    const pauseTime = isDeleting ? 100 : 1800

    if (!isDeleting && displayText === currentRole) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime)
      return
    }
    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex(i => (i + 1) % typewriterRoles.length)
      return
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeoutRef.current)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-[70vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.03), transparent)',
        }}
      />
      <div
        className="hero-glow w-[600px] h-[600px] top-[-200px] right-[-200px] opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05), transparent 70%)' }}
      />
      <div
        className="hero-glow w-[400px] h-[400px] bottom-[-100px] left-[-100px] opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03), transparent 70%)' }}
      />

      {/* Particle dots */}
      {mounted && Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 8}s`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <span className="hero-badge">
                <span className="badge-dot" />
                Available for Internships & Entry-Level Roles
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Aspiring{' '}
              <span className="gradient-text">Data</span>
              <br />
              <span className="gradient-text">Analyst</span>
              <br />
              <span className="text-text-primary">Building Insights</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-text-secondary text-lg">I am a </span>
              <span
                className="text-accent-blue-light text-lg font-semibold font-mono"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
              >
                {displayText}
                <span className="typewriter-cursor" />
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg"
            >
              I analyze data, build dashboards, solve problems, and create insights that drive{' '}
              <span className="text-text-primary font-medium">smarter decisions</span>.
              Passionate about Python, SQL, Power BI, and turning raw numbers into{' '}
              <span className="text-text-primary font-medium">real business value</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a href="#contact" className="btn-outline">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="grid grid-cols-4 gap-4"
            >
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  className="stat-card"
                >
                  <div
                    className="font-outfit text-2xl sm:text-3xl font-bold gradient-text"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-3 mt-8"
            >
              <span className="text-text-muted text-sm">Find me on</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Profile Image with fine zinc border and hover scaling */}
              <div
                className="relative mx-auto w-[420px] h-[420px] rounded-3xl overflow-hidden group"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Aum Patel Profile"
                  width={420}
                  height={420}
                  priority
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Sleek dark gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.8) 100%)',
                  }}
                />
                {/* Float tag metric overlay */}
                <div className="absolute bottom-6 left-6 bg-black/60 border border-white/10 backdrop-blur-md py-1.5 px-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
                      Data Analytics Active
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-text-muted text-xs tracking-widest uppercase font-jetbrains">
            Scroll
          </span>
          <div
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-accent-blue transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-accent-blue rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  )
}
