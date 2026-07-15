'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BarChart2, Database, Grid3X3, PieChart, Layers,
  Cpu, Hash, Code, Coffee, Terminal, Globe, Braces
} from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { skills, skillCategories } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  python: Code,
  database: Database,
  table: Grid3X3,
  'bar-chart': BarChart2,
  'pie-chart': PieChart,
  layers: Layers,
  cpu: Cpu,
  coffee: Coffee,
  terminal: Terminal,
  globe: Globe,
  braces: Braces,
}

function SkillBar({ percent, inView }: { percent: number; inView: boolean }) {
  return (
    <div className="skill-bar-track">
      <motion.div
        className="h-full rounded-[2px]"
        style={{ background: 'var(--accent-gold)' }}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${percent}%` : 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      />
    </div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200, 162, 124, 0.012), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="// Tech Stack"
          title="Skills & Tools"
          subtitle="Analytical libraries, database structures, and business intelligence suites"
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4.5 py-2 rounded-sm text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 border ${
                activeCategory === cat.key
                  ? 'bg-primary text-background border-primary'
                  : 'bg-surface-container-low text-text-secondary hover:text-text-primary hover:bg-surface-container border-border/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => {
              const Icon = iconMap[skill.icon] || Code
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="bento-card p-6 group"
                  style={{ cursor: 'default' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded flex items-center justify-center bg-surface-container border border-border group-hover:scale-105 group-hover:border-primary/30 transition-all duration-300">
                        <Icon className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="font-sans font-medium text-text-primary">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-primary">
                      {skill.percent}%
                    </span>
                  </div>

                  <SkillBar percent={skill.percent} inView={inView} />

                  {/* Rating dots */}
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-on-surface-variant">
                      {skill.category}
                    </span>
                    <div className="flex gap-1.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <div
                          key={j}
                          className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                          style={{
                            background: j < Math.round(skill.percent / 20)
                              ? 'var(--accent-gold)'
                              : 'rgba(255,255,255,0.06)',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
