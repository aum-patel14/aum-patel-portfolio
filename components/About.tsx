'use client'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Calendar, Flame, Mail, CheckCircle, Target, BarChart2, Code, Database } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { aboutHighlights, personalInfo } from '@/lib/data'

const infoCards = [
  { icon: MapPin, label: 'Location', value: personalInfo.location, color: '#3b82f6' },
  { icon: GraduationCap, label: 'Degree', value: 'B.Tech (CSE) & Diploma', color: '#8b5cf6' },
  { icon: Calendar, label: 'Duration', value: '2024 – 2027 (Expected)', color: '#06b6d4' },
  { icon: Flame, label: 'Interests', value: 'Analytics · BI · Python', color: '#f59e0b' },
  { icon: Mail, label: 'Email', value: personalInfo.email, color: '#ec4899' },
  { icon: CheckCircle, label: 'Status', value: 'Open to Opportunities', color: '#22c55e' },
]

const iconMap: Record<string, React.ElementType> = {
  target: Target,
  'bar-chart': BarChart2,
  code: Code,
  database: Database,
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.015), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="// Who I Am"
          title="About Me"
          subtitle="A data enthusiast from Gujarat building industry-ready analytical skills"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="space-y-6 mb-10"
            >
              <p className="text-text-secondary leading-relaxed text-lg">
                I&apos;m{' '}
                <span className="text-text-primary font-semibold">Aum Patel</span>, an aspiring
                Data Analyst from Gujarat, India. From the moment I discovered the power of data
                to tell stories and drive decisions, I knew this was my path.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                My journey began with{' '}
                <span className="text-text-primary font-medium">Python and statistics</span>, then
                expanded into databases, SQL queries, and dashboard creation. I love working at
                the intersection of data, logic, and{' '}
                <span className="text-text-primary font-medium">real business impact</span>.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                Today, I build{' '}
                <span className="text-text-primary font-medium">interactive Power BI dashboards</span>,
                write complex{' '}
                <span className="text-text-primary font-medium">SQL analytical queries</span>, and
                use Python&apos;s data ecosystem (Pandas, NumPy, Matplotlib) to extract insights
                from messy, real-world datasets.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                My goal is to join a data-driven organization as a{' '}
                <span className="gradient-text font-semibold">Data Analyst</span> and contribute
                to decisions that create measurable value. I bring a self-learning mindset,
                attention to detail, and a relentless curiosity for data.
              </p>
            </motion.div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutHighlights.map((item, i) => {
                const Icon = iconMap[item.icon] || Target
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="glass-card p-5"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h4
                      className="font-outfit font-semibold text-text-primary mb-1"
                      style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                      {item.label}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right — Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {infoCards.map((card, i) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card p-4 flex items-center gap-4"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: card.label === 'Status' ? 'rgba(34,197,94,0.06)' : 'rgba(255,255,255,0.03)',
                        border: card.label === 'Status' ? '1px solid rgba(34,197,94,0.15)' : '1px solid rgba(255,255,255,0.06)'
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: card.label === 'Status' ? '#4ade80' : '#ffffff' }} />
                    </div>
                    <div>
                      <div className="text-text-muted text-xs mb-0.5 font-medium uppercase tracking-wider">
                        {card.label}
                      </div>
                      <div
                        className={`text-sm font-semibold ${
                          card.label === 'Status' ? 'text-green-400' : 'text-text-primary'
                        }`}
                      >
                        {card.value}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Personal brand statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden p-6"
              style={{
                background: '#09090b',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none" style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.02), transparent 70%)',
              }} />
              <p
                className="font-outfit text-xl font-semibold leading-relaxed gradient-text mb-3"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                &ldquo;I am an aspiring Data Analyst passionate about solving real-world problems
                using data.&rdquo;
              </p>
              <p className="text-text-muted text-sm">
                — Focused on Python, SQL, dashboards, and continuous growth toward industry-ready skills.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
