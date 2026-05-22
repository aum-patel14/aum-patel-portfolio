'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BarChart2, Database, Grid3X3, PieChart, TrendingUp, Layers,
  Cpu, Activity, Hash, Zap, GitBranch, Code, Coffee, Terminal, Globe, Braces
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
  'trending-up': TrendingUp,
  activity: Activity,
  sigma: Hash,
  brain: Zap,
  'git-branch': GitBranch,
  coffee: Coffee,
  terminal: Terminal,
  globe: Globe,
  braces: Braces,
}

function SkillBar({ percent, inView }: { percent: number; inView: boolean }) {
  return (
    <div className="skill-bar-track">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        animate={{ width: inView ? `${percent}%` : 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Subtle white grid glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// Tech Stack"
          title="Skills & Tools"
          subtitle="Languages, frameworks, and BI tools I use to transform data into insights"
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat.key
                  ? 'bg-accent-blue text-white border-accent-blue shadow-glow-blue'
                  : 'bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-2 border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => {
              const Icon = iconMap[skill.icon] || Code
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-5 group"
                  style={{ cursor: 'default' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/10"
                      >
                        <Icon className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors" />
                      </div>
                      <span
                        className="font-outfit font-semibold text-text-primary"
                        style={{ fontFamily: 'var(--font-outfit)' }}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span
                      className="font-jetbrains text-sm font-medium text-white"
                      style={{
                        fontFamily: 'var(--font-jetbrains)',
                      }}
                    >
                      {skill.percent}%
                    </span>
                  </div>
                  <SkillBar percent={skill.percent} inView={inView} />

                  {/* Category label */}
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-text-muted text-xs capitalize tracking-wide">
                      {skill.category}
                    </span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <div
                          key={j}
                          className="w-1 h-1 rounded-full"
                          style={{
                            background: j < Math.round(skill.percent / 20)
                              ? 'var(--accent-purple-light)'
                              : 'rgba(255,255,255,0.12)',
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
