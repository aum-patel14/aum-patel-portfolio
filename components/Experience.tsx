'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

export default function Experience() {
  const experiences = [
    {
      year: 'Mar 2024 – Jul 2025',
      title: 'QA Tester & UI Analyst',
      subtitle: 'Apollo Tyres Ltd.',
      description: 'Performed rigorous software QA testing on enterprise inventory and logistics software. Focused on UI/UX cross-browser compatibility, usability audits, automated regression testing, and worked closely with frontend engineering teams to squash layout defects.',
      tags: ['UI/UX QA', 'Cross-browser Testing', 'Defect Tracking', 'Usability Audits', 'Automated Testing']
    },
    {
      year: '2026 & Beyond',
      title: 'Target: Dedicated Frontend Developer',
      subtitle: 'Professional Goal',
      description: 'Leveraging my detail-oriented UI QA background from Apollo Tyres and strong React/Next.js foundation to land a high-impact Frontend Developer or UI Engineer role.',
      tags: ['React Developer', 'UI Engineer', 'Next.js specialist', 'Full-time']
    }
  ]

  const education = [
    {
      year: '2024 – 2027 (Expected)',
      title: 'B.Tech in Computer Science & Engineering',
      subtitle: 'Parul University, Vadodara',
      description: 'Pursuing advanced computational theory, human-computer interaction (HCI), frontend systems engineering, and modern web applications architecture.',
      tags: ['Computer Science', 'Frontend Architecture', 'Human-Computer Interaction', 'Systems Design']
    },
    {
      year: '2024 – 2025',
      title: 'Core Web Architect & UI Designer',
      subtitle: 'Advanced Web Applications Development',
      description: 'Designed and built ChessMaster Pro, an interactive, full-featured web-based chess app powered by React 19 and Stockfish AI, alongside custom-crafted UI design systems.',
      tags: ['React 19', 'Next.js', 'Stockfish WASM', 'Framer Motion', 'TailwindCSS']
    },
    {
      year: '2021 – 2024',
      title: 'Diploma in Computer Engineering',
      subtitle: 'Parul University, Vadodara',
      description: 'Acquired core programming fundamentals, data structures, algorithm optimization, and software development lifecycles.',
      tags: ['Data Structures', 'Java', 'C/C++', 'Relational Databases']
    }
  ]

  // Refs for tracking scroll path drawing
  const col1Ref = useRef<HTMLDivElement>(null)
  const col2Ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress: col1Progress } = useScroll({
    target: col1Ref,
    offset: ["start end", "end center"]
  })
  const scaleY1 = useTransform(col1Progress, [0, 0.95], [0, 1])

  const { scrollYProgress: col2Progress } = useScroll({
    target: col2Ref,
    offset: ["start end", "end center"]
  })
  const scaleY2 = useTransform(col2Progress, [0, 0.95], [0, 1])

  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="// My Journey"
          title="Experience & Education"
          subtitle="A structured timeline of my professional work and educational background"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12">
          
          {/* Column 1 — Professional Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <Briefcase className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl sm:text-2xl text-text-primary">
                Professional Experience
              </h2>
            </div>

            {/* Scroll-drawn vertical timeline line */}
            <div ref={col1Ref} className="relative pl-6 space-y-10">
              {/* Background trace line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />
              {/* Foreground animated line */}
              <motion.div 
                style={{ scaleY: scaleY1 }}
                className="absolute left-0 top-2 bottom-2 w-px bg-primary origin-top"
              />

              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Custom Gold Dot Indicator */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-all duration-300 z-10" />
                  
                  <span className="font-mono text-[10px] tracking-wider uppercase text-primary font-semibold block mb-1">
                    {exp.year}
                  </span>
                  
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-0.5 group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <h4 className="text-sm font-medium text-text-secondary mb-3">
                    {exp.subtitle}
                  </h4>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map(tag => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2 — Education & Learning */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-border">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl sm:text-2xl text-text-primary">
                Education & Learning
              </h2>
            </div>

            {/* Scroll-drawn vertical timeline line */}
            <div ref={col2Ref} className="relative pl-6 space-y-10">
              {/* Background trace line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />
              {/* Foreground animated line */}
              <motion.div 
                style={{ scaleY: scaleY2 }}
                className="absolute left-0 top-2 bottom-2 w-px bg-primary origin-top"
              />

              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Custom Gold Dot Indicator */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-all duration-300 z-10" />
                  
                  <span className="font-mono text-[10px] tracking-wider uppercase text-primary font-semibold block mb-1">
                    {edu.year}
                  </span>
                  
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-0.5 group-hover:text-primary transition-colors duration-300">
                    {edu.title}
                  </h3>
                  
                  <h4 className="text-sm font-medium text-text-secondary mb-3">
                    {edu.subtitle}
                  </h4>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {edu.tags.map(tag => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
