'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'
import { personalInfo, heroStats, typewriterRoles } from '@/lib/data'
import { animate, stagger } from 'animejs'
import AnimatedCounter from './ui/AnimatedCounter'

const parseStatValue = (valStr: string) => {
  const num = parseFloat(valStr);
  const suffix = valStr.replace(/[0-9.]/g, '');
  const hasDot = valStr.includes('.');
  const decimals = hasDot ? 1 : 0;
  return { num, suffix, decimals };
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const shouldReduceMotion = useReducedMotion()

  // Parallax motion tracking values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Subtle shift range (-12px to +12px), disabled if reduced motion preferred
  const x = useTransform(mouseX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-12, 12])
  const y = useTransform(mouseY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-12, 12])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Anime.js text reveal on mount
  useEffect(() => {
    if (mounted) {
      if (shouldReduceMotion) {
        animate('.hero-title-word', {
          opacity: [0, 1],
          ease: 'outQuad',
          duration: 400
        })
      } else {
        animate('.hero-title-word', {
          opacity: [0, 1],
          translateY: [25, 0],
          ease: 'outQuad',
          duration: 800,
          delay: stagger(70)
        })
      }
    }
  }, [mounted, shouldReduceMotion])

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

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const mouseXPosition = (event.clientX - rect.left) / rect.width - 0.5
    const mouseYPosition = (event.clientY - rect.top) / rect.height - 0.5
    mouseX.set(mouseXPosition)
    mouseY.set(mouseYPosition)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 pb-16"
    >
      {/* Subtle editorial grid line background */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left — Content (Spans 7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-primary border border-primary/20 px-3.5 py-1.5 rounded-sm bg-surface-container-low">
                Data Strategy & Analytics
              </span>
            </motion.div>

            {/* Main Editorial Heading Reveal */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.1] text-text-primary">
              <span className="inline-block overflow-hidden mr-3">
                <span className="hero-title-word inline-block opacity-0">Decoding</span>
              </span>
              <span className="inline-block overflow-hidden mr-3">
                <span className="hero-title-word inline-block opacity-0">Data</span>
              </span>
              <span className="inline-block overflow-hidden mr-3">
                <span className="hero-title-word inline-block opacity-0">with</span>
              </span>
              <br />
              <span className="inline-block overflow-hidden mr-3 text-primary italic font-semibold">
                <span className="hero-title-word inline-block opacity-0">Intellectual</span>
              </span>
              <span className="inline-block overflow-hidden text-primary italic font-semibold">
                <span className="hero-title-word inline-block opacity-0">Authority.</span>
              </span>
            </h1>

            {/* Interactive Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 font-mono text-sm tracking-wide text-text-secondary"
            >
              <span>Focusing on</span>
              <span className="text-primary font-semibold">
                {displayText}
                <span className="typewriter-cursor" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Transforming raw metrics into strategic insights. I engineer databases, 
              construct dynamic dashboards, and build analytics pipelines that empower 
              executive decision-making and uncover hidden operational efficiencies.
            </motion.p>

            {/* Action Buttons with Shimmer Hover Effects */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a 
                href="#projects"
                className="relative group overflow-hidden border border-primary px-6 py-3 rounded-sm bg-primary text-background font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2 shadow-md cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ left: '-100%' }}
                  whileHover={{ left: '120%' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                View Research <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a 
                href="/resume.pdf"
                download
                className="relative group overflow-hidden border border-border px-6 py-3 rounded-sm bg-surface-container-low text-text-primary hover:border-primary/50 font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2 cursor-pointer transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12"
                  initial={{ left: '-100%' }}
                  whileHover={{ left: '120%' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <Download className="w-4 h-4 text-primary" />
                Resume
              </motion.a>
            </motion.div>

            {/* Stats Grid placeholder (Redesigned in Step 2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
            >
              {heroStats.map((stat, i) => {
                const { num, suffix, decimals } = parseStatValue(stat.value);
                return (
                  <div 
                    key={stat.label}
                    className="border border-border p-4 rounded bg-surface-container-low text-center hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                      <AnimatedCounter value={num} suffix={suffix} decimals={decimals} />
                    </div>
                    <div className="font-mono text-[9px] tracking-wider uppercase text-on-surface-variant mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
            
          </div>

          {/* Right — Profile Visual (Spans 5 columns on desktop) with Mouse Parallax */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full max-w-[360px] aspect-[4/5] rounded border border-primary/20 p-2.5 bg-surface-container-low hover:border-primary/40 transition-all duration-500 group shadow-card"
            >
              <div className="relative w-full h-full overflow-hidden rounded-sm bg-surface-container">
                <Image
                  src="/profile.jpg"
                  alt="Aum Patel"
                  width={360}
                  height={450}
                  priority
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-500"
                />
                
                {/* Clean inline overlay label */}
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-low/95 border border-border/80 backdrop-blur-sm p-3 rounded">
                  <p className="font-serif text-sm font-semibold text-primary">Aum Patel</p>
                  <p className="font-mono text-[10px] tracking-wider uppercase text-on-surface-variant mt-0.5">
                    Gujarat, India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-text-muted font-mono text-[10px] tracking-widest uppercase">
            Scroll Down
          </span>
          <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5 group-hover:border-primary transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-primary rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  )
}
