'use client'
import { motion } from 'framer-motion'
import { Download, FileText, Eye, CheckCircle } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

const resumeHighlights = [
  'TypeScript, JavaScript, React 19, Next.js, Tailwind CSS',
  'Responsive web design & modern layouts (CSS Grid/Flexbox)',
  'Aesthetic animations (Framer Motion, Anime.js, SVG paths)',
  'Cross-browser UI compatibility, testing & site optimization',
  'Interactive client interfaces & RESTful state integrations',
  '1.5 Years professional UI/UX QA & layout verification experience',
]

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-background relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="// Resume"
          title="My Resume"
          subtitle="A summary of my core UI engineering capabilities and projects"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          
          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card relative overflow-hidden group shadow-card"
          >
            {/* Simulated resume page mockup */}
            <div className="p-8" style={{ minHeight: 480 }}>
              
              {/* Mockup Header */}
              <div className="border-b border-border/80 pb-5 mb-5">
                <div className="h-6 rounded-sm mb-2.5 w-48 bg-primary/20" />
                <div className="h-3 rounded-sm w-64 mb-2 bg-[#2D2D2D]" />
                <div className="h-3 rounded-sm w-56 bg-[#2D2D2D]/60" />
              </div>
              
              {/* Mockup Summary */}
              <div className="mb-5">
                <div className="h-3 rounded-sm mb-3.5 w-24 bg-primary/10" />
                <div className="space-y-2">
                  {[90, 100, 80, 95].map((w, i) => (
                    <div key={i} className="h-2 rounded-sm bg-[#2D2D2D]/40" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>
              
              {/* Mockup Skills */}
              <div className="mb-5">
                <div className="h-3 rounded-sm mb-3.5 w-20 bg-primary/10" />
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'Power BI', 'Tableau', 'Excel', 'Pandas', 'NumPy', 'Statistics'].map(s => (
                    <div key={s} className="h-5 px-2 rounded-sm bg-surface-container border border-border flex items-center">
                      <span className="text-[10px] font-mono text-text-secondary">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mockup Experience */}
              <div className="mb-5">
                <div className="h-3 rounded-sm mb-3.5 w-28 bg-primary/10" />
                {[1, 2].map(j => (
                  <div key={j} className="mb-3.5">
                    <div className="flex justify-between mb-2">
                      <div className="h-2.5 rounded-sm w-40 bg-[#2D2D2D]" />
                      <div className="h-2.5 rounded-sm w-20 bg-[#2D2D2D]/40" />
                    </div>
                    <div className="space-y-1.5">
                      {[85, 100].map((w, k) => (
                        <div key={k} className="h-2 rounded-sm bg-[#2D2D2D]/40" style={{ width: `${w}%` }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Watermark label */}
              <div className="absolute bottom-6 right-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-sm bg-surface-container border border-border flex items-center justify-center">
                    <FileText className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-[10px] font-mono text-text-muted">Aum Patel — Resume.pdf</span>
                </div>
              </div>

            </div>

            {/* Hover preview overlay */}
            <div 
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-surface/90 backdrop-blur-sm"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Eye className="w-4 h-4" /> Preview Resume
              </a>
            </div>
            
          </motion.div>

          {/* Right — Highlights & Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Core Competencies Bento Module */}
            <div className="bento-card bg-surface-container-low p-6">
              <h3 className="font-serif text-xl text-text-primary mb-5">
                Core Competencies
              </h3>
              <div className="space-y-4">
                {resumeHighlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3.5"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0 text-primary" />
                    <span className="text-text-secondary text-sm font-sans">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Download CTA Module */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card bg-surface-container-low p-6 text-center relative overflow-hidden"
            >
              <FileText className="w-8 h-8 mx-auto mb-3.5 text-primary" />
              <h4 className="font-serif text-lg text-text-primary mb-2">
                Download PDF
              </h4>
              <p className="text-text-secondary text-xs sm:text-sm mb-5 leading-relaxed max-w-sm mx-auto">
                Secure an ATS-optimized, fully detailed version of my profile for your recruitment database.
              </p>
              
              <a href="/resume.pdf" download className="btn-primary justify-center w-full">
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
              
              <p className="text-text-muted font-mono text-[9px] tracking-wider uppercase mt-4">
                Last updated: May 2026
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
