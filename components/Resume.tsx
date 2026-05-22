'use client'
import { motion } from 'framer-motion'
import { Download, FileText, Eye, CheckCircle } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

const resumeHighlights = [
  'Python, SQL, Excel, Power BI, Tableau',
  'Data cleaning, EDA, visualization',
  'Dashboard creation & BI reporting',
  'Machine learning & dynamic segmentation',
  'Statistical analysis & storytelling',
  '1.5 Years professional QA & Data experience',
]

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// Resume"
          title="My Resume"
          subtitle="ATS-optimized resume highlighting data analytics skills and project experience"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="resume-preview relative overflow-hidden"
          >
            {/* Simulated resume page */}
            <div className="p-8" style={{ minHeight: 480 }}>
              {/* Resume header */}
              <div className="border-b border-white/08 pb-5 mb-5">
                <div className="h-6 rounded-md mb-2 w-48 bg-white/10" />
                <div className="h-3 rounded w-64 mb-1.5" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <div className="h-3 rounded w-56" style={{ background: 'rgba(255,255,255,0.04)' }} />
              </div>
              {/* Summary section */}
              <div className="mb-5">
                <div className="h-3 rounded mb-3 w-24 bg-white/15" />
                <div className="space-y-1.5">
                  {[90, 100, 80, 95, 70].map((w, i) => (
                    <div key={i} className="h-2 rounded" style={{ width: `${w}%`, background: 'rgba(255,255,255,0.04)' }} />
                  ))}
                </div>
              </div>
              {/* Skills section */}
              <div className="mb-5">
                <div className="h-3 rounded mb-3 w-20 bg-white/15" />
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'Power BI', 'Tableau', 'Excel', 'Pandas', 'NumPy', 'Statistics'].map(s => (
                    <div key={s} className="h-5 px-2 rounded-md flex items-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <span className="text-xs" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-jetbrains)' }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Experience section */}
              <div className="mb-5">
                <div className="h-3 rounded mb-3 w-28 bg-white/15" />
                {[1, 2].map(j => (
                  <div key={j} className="mb-3">
                    <div className="flex justify-between mb-1.5">
                      <div className="h-2.5 rounded w-40" style={{ background: 'rgba(255,255,255,0.08)' }} />
                      <div className="h-2.5 rounded w-20" style={{ background: 'rgba(255,255,255,0.04)' }} />
                    </div>
                    <div className="space-y-1">
                      {[85, 100].map((w, k) => (
                        <div key={k} className="h-2 rounded" style={{ width: `${w}%`, background: 'rgba(255,255,255,0.04)' }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Watermark */}
              <div className="absolute bottom-6 right-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-white/10 border border-white/10 flex items-center justify-center">
                    <FileText className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs text-text-muted" style={{ fontFamily: 'var(--font-jetbrains)' }}>Aum Patel — Resume.pdf</span>
                </div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Eye className="w-4 h-4" /> Preview Resume
              </a>
            </div>
          </motion.div>

          {/* Right — Info & Download */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* What's inside */}
            <div className="glass-card p-6">
              <h3
                className="font-outfit font-bold text-xl text-text-primary mb-5"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                What&apos;s Inside
              </h3>
              <div className="space-y-3">
                {resumeHighlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0 text-white" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl p-6 overflow-hidden text-center bg-surface border border-white/5"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.02), transparent 70%)' }}
              />
              <FileText className="w-10 h-10 mx-auto mb-3 text-white" />
              <h4
                className="font-outfit font-bold text-xl text-text-primary mb-2"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Download My Resume
              </h4>
              <p className="text-text-secondary text-sm mb-5">
                ATS-friendly PDF. Showcases all skills, projects, and professional experience.
              </p>
              <a href="/resume.pdf" download className="btn-primary justify-center w-full">
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
              <p className="text-text-muted text-xs mt-3" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                Last updated: May 2025
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
