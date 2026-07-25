'use client'
import { motion } from 'framer-motion'
import { Target, BarChart2, Code, Database, Terminal, Verified, Quote } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { skills, personalInfo } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background gradient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(163, 230, 53, 0.015), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="// Who I Am"
          title="About & Philosophy"
          subtitle="Combining computational training with analytical rigor"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left — Editorial Biography (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed font-sans"
            >
              <p>
                I&apos;m <span className="text-text-primary font-semibold">Aum Patel</span>, a passionate 
                Frontend Developer currently pursuing my B.Tech in Computer Science & Engineering at Parul University.
              </p>
              <p>
                My professional experience includes <span className="text-text-primary font-medium">1.5 years as a QA Tester & UI Analyst at Apollo Tyres</span>. 
                This tenure trained me to design interfaces with extreme precision—ensuring cross-browser compatibility, auditing usability layouts, and collaborating with frontend teams to ship high-quality products.
              </p>
              <p>
                Today, I build optimized web applications, structure clean responsive layouts, and design physics-based 
                micro-animations like the ones in <span className="text-text-primary font-medium">ChessMaster Pro</span>. I enjoy working at 
                the intersection of layout architecture, clean code, and interactive visual aesthetics.
              </p>
            </motion.div>
          </div>

          {/* Right — Bento Grid Highlights (Spans 7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
              
              {/* Core Expertise Card (Spans 2 cols) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bento-card bg-surface-container-low p-6 md:col-span-2 flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-4 h-4 text-primary" />
                  <h3 className="font-mono text-xs uppercase tracking-wider text-text-primary">
                    Core Expertise
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {['Python', 'SQL', 'Excel', 'Pandas', 'Power BI', 'NumPy', 'Tableau', 'Machine Learning'].map((tech) => (
                    <span
                      key={tech}
                      className="bg-surface-container-high px-3.5 py-1.5 font-mono text-[11px] text-text-secondary rounded border border-border/40 hover:border-primary/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats Card (Spans 1 col) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bento-card bg-surface-container-low p-6 flex flex-col justify-center items-center text-center"
              >
                <Verified className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-serif text-3xl font-bold text-primary mb-1">1.5</h4>
                <p className="font-mono text-[9px] tracking-widest uppercase text-on-surface-variant">
                  Years QA & Data Experience
                </p>
              </motion.div>

              {/* Analytical Philosophy Quote Card (Spans 3 cols) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bento-card bg-surface-container-low p-8 md:col-span-3 flex flex-col justify-center relative overflow-hidden min-h-[160px]"
              >
                <div className="absolute right-6 top-6 opacity-[0.03]">
                  <Quote className="w-32 h-32 text-primary" />
                </div>
                
                <p className="font-serif text-lg md:text-xl text-text-secondary italic leading-relaxed relative z-10 text-center max-w-2xl mx-auto">
                  &ldquo;Data without context is merely noise. True analytical value lies in forging the narrative that bridges complex metrics with actionable strategy.&rdquo;
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
