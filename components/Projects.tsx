'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BarChart2, Users, Film, ShoppingCart, Database, TrendingUp,
  Github, ExternalLink, ArrowRight, ChevronDown, ChevronUp, Gamepad2
} from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { projects, projectFilters } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  'bar-chart-2': BarChart2,
  users: Users,
  film: Film,
  'shopping-cart': ShoppingCart,
  database: Database,
  'trending-up': TrendingUp,
  gamepad: Gamepad2,
}

const accentMap: Record<string, string> = {
  blue: '#3b82f6',
  purple: '#8b5cf6',
  red: '#ef4444',
  green: '#22c55e',
  cyan: '#06b6d4',
  yellow: '#f59e0b',
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div
        className="absolute right-0 top-1/3 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          tag="// My Work"
          title="Featured Projects"
          subtitle="Real-world analytics projects showcasing data skills, insights, and problem-solving"
        />

        {/* Filter Buttons */}
        {projects.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {projectFilters.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  activeFilter === f.key
                    ? 'bg-accent-blue text-white border-accent-blue shadow-glow-blue'
                    : 'bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-2 border-white/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 ${
          filtered.length === 2
            ? 'md:grid-cols-2 max-w-4xl mx-auto'
            : 'md:grid-cols-2 lg:grid-cols-3'
        } gap-6`}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const Icon = iconMap[project.icon] || BarChart2
              const isExpanded = expandedId === project.id

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="project-card flex flex-col group"
                  style={{ cursor: 'default' }}
                >
                  {/* Card top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/10"
                    >
                      <Icon className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon w-10 h-10 rounded-xl"
                        aria-label="GitHub"
                        style={{ width: 42, height: 42, borderRadius: 10 }}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon w-10 h-10 rounded-xl"
                        aria-label="Live Demo"
                        style={{ width: 42, height: 42, borderRadius: 10 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Title & description */}
                  <h3
                    className="font-outfit text-xl font-bold text-text-primary mb-2"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Metric highlight */}
                  <div className="mb-4">
                    <span className="metric-highlight">{project.metric}</span>
                  </div>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/06 pt-4 mb-4 space-y-3">
                          <div>
                            <span
                              className="text-xs font-jetbrains text-text-muted uppercase tracking-wider"
                              style={{ fontFamily: 'var(--font-jetbrains)' }}
                            >
                              Problem
                            </span>
                            <p className="text-text-secondary text-sm mt-1">{project.problem}</p>
                          </div>
                          <div>
                            <span
                              className="text-xs font-jetbrains text-text-muted uppercase tracking-wider"
                              style={{ fontFamily: 'var(--font-jetbrains)' }}
                            >
                              Key Insights
                            </span>
                            <p className="text-text-secondary text-sm mt-1">{project.insights}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech Stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {/* Expand toggle */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-blue-light transition-colors duration-200"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5" /> Less details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5" /> More details
                      </>
                    )}
                  </button>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a href="https://github.com/aumpatel" target="_blank" rel="noopener noreferrer" className="btn-outline">
            View All Projects on GitHub
            <Github className="w-4 h-4" />
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
