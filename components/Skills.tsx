'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BarChart2, Database, Grid3X3, PieChart, Layers,
  Cpu, Code, Coffee, Terminal, Globe, Braces
} from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { skills, skillCategories } from '@/lib/data'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

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

// Framer Motion parent/child variants for staggered reveals
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 } 
  }
}

const barVariants = {
  hidden: { width: 0 },
  visible: (percent: number) => ({
    width: `${percent}%`,
    transition: { duration: 0.8, ease: 'easeOut' }
  })
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'bar' | 'radar'>('bar')

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  // Aggregate category averages from the raw dataset dynamically
  const categories = ['languages', 'visualization', 'analytics', 'tools']
  const radarData = categories.map(cat => {
    const categorySkills = skills.filter(s => s.category === cat)
    const avg = categorySkills.reduce((sum, s) => sum + s.percent, 0) / categorySkills.length
    return {
      subject: cat.charAt(0).toUpperCase() + cat.slice(1),
      value: Math.round(avg),
      fullMark: 100
    }
  })

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
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

        {/* View Switcher Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setViewMode('bar')}
            className={`px-4 py-2 font-mono text-[10px] tracking-wider uppercase rounded-sm border transition-all duration-300 ${
              viewMode === 'bar'
                ? 'bg-primary text-background border-primary'
                : 'bg-surface-container-low text-text-secondary border-border/40 hover:text-text-primary'
            }`}
          >
            Bar View
          </button>
          <button
            onClick={() => setViewMode('radar')}
            className={`px-4 py-2 font-mono text-[10px] tracking-wider uppercase rounded-sm border transition-all duration-300 ${
              viewMode === 'radar'
                ? 'bg-primary text-background border-primary'
                : 'bg-surface-container-low text-text-secondary border-border/40 hover:text-text-primary'
            }`}
          >
            Radar View
          </button>
        </div>

        {/* Filters — Hidden when in Radar Mode */}
        <AnimatePresence>
          {viewMode === 'bar' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap justify-center gap-2 mb-12">
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Layout rendering */}
        <AnimatePresence mode="wait">
          {viewMode === 'bar' ? (
            <motion.div
              key="bar-grid"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((skill) => {
                const Icon = iconMap[skill.icon] || Code
                return (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    layout
                    className="bento-card p-6 group cursor-default"
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

                    {/* Staggered progress bar width animate */}
                    <div className="skill-bar-track">
                      <motion.div
                        className="h-full rounded-[2px]"
                        style={{ background: 'var(--accent-gold)' }}
                        variants={barVariants}
                        custom={skill.percent}
                      />
                    </div>

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
            </motion.div>
          ) : (
            <motion.div
              key="radar-chart"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bento-card p-6 sm:p-8 flex flex-col items-center justify-center max-w-2xl mx-auto w-full border border-border bg-surface-container-low"
            >
              <h3 className="font-serif text-lg text-text-primary mb-6">Expertise Distribution</h3>
              <div className="w-full h-[360px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                    <PolarGrid stroke="#2D2D2D" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: '#d3c4b8', fontSize: 11, fontFamily: 'var(--font-jetbrains)' }} 
                    />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 100]} 
                      tick={{ fill: '#9b8e84', fontSize: 9 }}
                      stroke="#2D2D2D"
                    />
                    <Radar
                      name="Averages"
                      dataKey="value"
                      stroke="var(--accent-gold)"
                      fill="var(--accent-gold)"
                      fillOpacity={0.15}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
