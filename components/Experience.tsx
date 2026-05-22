'use client'
import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import { timeline } from '@/lib/data'

const typeColors: Record<string, string> = {
  experience: '#22c55e',
  education: '#3b82f6',
  project: '#8b5cf6',
  certification: '#06b6d4',
  achievement: '#f59e0b',
  future: 'rgba(255,255,255,0.25)',
}

const typeLabels: Record<string, string> = {
  experience: 'Work Experience',
  education: 'Education',
  project: 'Project',
  certification: 'Certification',
  achievement: 'Achievement',
  future: 'Goal',
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// My Journey"
          title="Learning Timeline"
          subtitle="How I've grown as a data analyst — from Python basics to real-world analytics projects"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  item.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 md:max-w-[calc(50%-48px)] ${
                    item.side === 'right'
                      ? 'md:pl-12 lg:pl-16'
                      : 'md:pr-12 lg:pr-16 md:text-right'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="glass-card p-6"
                  >
                    {/* Type badge + year */}
                    <div
                      className={`flex items-center gap-2 mb-3 ${
                        item.side === 'right' || item.side === 'left' && false
                          ? ''
                          : 'md:justify-end'
                      }`}
                    >
                      <span
                        className="inline-block px-2 py-0.5 rounded-md text-xs font-medium"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          color: 'var(--text-secondary)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          fontFamily: 'var(--font-jetbrains)',
                        }}
                      >
                        {typeLabels[item.type]}
                      </span>
                      <span
                        className="text-xs font-semibold text-white"
                        style={{
                          fontFamily: 'var(--font-jetbrains)',
                        }}
                      >
                        {item.year}
                      </span>
                    </div>

                    <h3
                      className="font-outfit font-bold text-lg text-text-primary mb-1"
                      style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm font-medium mb-3 text-text-secondary"
                    >
                      {item.subtitle}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 justify-start md:group-hover:justify-end">
                      {item.tags.map(tag => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Dot (center) */}
                <div className="relative z-10 flex-shrink-0 hidden md:flex items-center justify-center w-24">
                  <div className="timeline-dot" style={{
                    background: item.type === 'future' ? '#27272a' : '#ffffff',
                    boxShadow: item.type === 'future'
                      ? 'none'
                      : '0 0 0 4px rgba(255,255,255,0.1), 0 0 15px rgba(255,255,255,0.3)',
                  }} />
                </div>

                {/* Empty spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
