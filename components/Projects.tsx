'use client'
import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { projects } from '@/lib/data'
import { animate } from 'animejs'

const projectImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBnjcQFnPpTf3tUOW3KFSGT2BsFhz02ZNeHcNIUavdhwvNou6FvgEr_S_5J0sezh0AVYZbKsLL523YpLjF7C-hf_5TWdZcyY5y-foTUY5WoHOqqb-kJSgiieTsy91n0Xsl0BJ0PkuBCcJcLidkD7iRbujqESYMORWjXaxYKoYESUTxFrc37-fddk-VYfXgSzkiSqkhllLxmhMD6o9CFt6GnrGcjc9bEDNsaMOqEKD44pTvWOwxuSzaqVD2Tjdd6djc7Q7tjsfmAVA0',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBmdrWUNknxR0GFWVTTG4Ke9fRk1Wp15N6jUtT6YIx4eIwlSarPsmcx_vULrSgvbi6cj9q0z4mvRYgxnQC3rz1A4ousKpGthLcwU_V6ip0eATIviB5RhzU9uVcEtcqHBy3jx-gT5f1280AoDBs00dRv7jzRu2bOCXlx_9Hz_zeO30U_3ldzEb-5gRLu4H70bO10a802wlvsN4O1sRNaWjtEFUV1DC5T6kOcfC36l2-60kARnyAp8ibpVYY0fo46PIDp4KjNQjif3Hs'
]

// Staggered tag animations on hover
const tagContainerVariants = {
  initial: {},
  hovered: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

const tagVariants = {
  initial: { opacity: 0.5, scale: 0.95 },
  hovered: { 
    opacity: 1, 
    scale: 1,
    borderColor: 'var(--accent-gold)',
    transition: { duration: 0.3 }
  }
}

export default function Projects() {
  const [isChessHovered, setIsChessHovered] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Anime.js Chess knight dash-array loops on hover, bypassed if user prefers reduced motion
  useEffect(() => {
    let animation: any = null
    if (isChessHovered && !shouldReduceMotion) {
      animation = animate('.chess-knight-svg path', {
        strokeDashoffset: [80, 0],
        ease: 'inOutSine',
        duration: 1400,
        alternate: true,
        loop: true
      })
    }
    return () => {
      if (animation) animation.revert()
    }
  }, [isChessHovered, shouldReduceMotion])

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      <div
        className="absolute right-0 top-1/3 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200, 162, 124, 0.012) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          tag="// My Work"
          title="Selected Research & Development"
          subtitle="Detailed analytical builds demonstrating structural logic and data extraction"
        />

        <div className="space-y-12">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0
            const displayImage = projectImages[idx] || projectImages[0]
            const isChessCard = project.id === 2

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                whileHover="hovered"
                onMouseEnter={() => { if (isChessCard) setIsChessHovered(true) }}
                onMouseLeave={() => { if (isChessCard) setIsChessHovered(false) }}
                className={`bento-card bg-surface-container-low overflow-hidden flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } group cursor-default relative`}
                style={{ originY: 0.5 }}
                variants={{
                  hovered: {
                    y: shouldReduceMotion ? 0 : -6,
                    boxShadow: shouldReduceMotion 
                      ? "0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.02)" 
                      : "0 20px 48px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.03)"
                  }
                }}
              >
                
                {/* Left/Right Column — Visual (Image Backdrop) */}
                <div className="w-full lg:w-[45%] h-64 lg:h-auto relative border-b lg:border-b-0 lg:border-r border-[#2D2D2D] overflow-hidden bg-[#0A0A0C]">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-70 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-700"
                    style={{ backgroundImage: `url('${displayImage}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-30 pointer-events-none" />

                  {/* Inline chess piece overlay (ChessMaster Pro only) */}
                  {isChessCard && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="p-4 rounded-full border border-primary/20 bg-surface-container-low/90 text-primary shadow-xl">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="chess-knight-svg">
                          <path 
                            strokeDasharray="80"
                            strokeDashoffset="0"
                            d="M19 22H5C5 20 6 18 7.5 16.5C8.5 15.5 8.5 14.5 7.5 13.5C5.5 11.5 5 9 6.5 6.5C7.5 5 9 4.5 10 4.5C11 4.5 12 3 13.5 3C15.5 3 17 4.5 17 6.5C17 8 16 9.5 15.5 10.5C15 11.5 15.5 12 16.5 12C17.5 12 18.5 13 18.5 14.5C18.5 16.5 18 19.5 19 22Z" 
                          />
                          <circle cx="11" cy="8" r="1.2" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Column */}
                <div className="p-8 sm:p-12 w-full lg:w-[55%] flex flex-col justify-center space-y-5">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-mono text-[10px] tracking-widest text-primary uppercase border border-primary/20 px-3 py-1.5 rounded-sm bg-surface-container-high">
                      {project.category === 'ml' ? 'Machine Learning' : 'Algorithms & Systems'}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">
                      {project.id === 1 ? '2023 - 2024' : '2024 - 2025'}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-text-primary group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullet methodology details (problem + insights) */}
                  <div className="border-t border-border/80 pt-4 space-y-3.5">
                    <div>
                      <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block">
                        Problem Statement
                      </span>
                      <p className="text-text-secondary text-xs sm:text-sm mt-1">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block">
                        Key Insights & Impact
                      </span>
                      <p className="text-text-secondary text-xs sm:text-sm mt-1">
                        {project.insights}
                      </p>
                    </div>
                  </div>

                  {/* Metric & Tech Stack Stagger on Hover */}
                  <div className="pt-2 flex flex-wrap gap-2 items-center">
                    <span className="font-mono text-[11px] text-primary border border-primary/30 px-3 py-1 rounded-sm bg-primary/5 mr-2">
                      {project.metric}
                    </span>
                    <motion.div 
                      variants={tagContainerVariants} 
                      className="flex flex-wrap gap-1.5"
                    >
                      {project.techStack.map(tech => (
                        <motion.span
                          key={tech}
                          variants={tagVariants}
                          className="bg-surface-container px-3 py-1 font-mono text-[10px] text-text-secondary rounded border border-border/30 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-6 pt-4 border-t border-border/40">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs uppercase tracking-widest text-text-primary hover:text-primary transition-colors duration-300 flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Repository <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs uppercase tracking-widest text-primary hover:text-primary-container transition-colors duration-300 flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Showcase <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>

              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
