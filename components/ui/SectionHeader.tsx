'use client'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  tag: string
  title: string
  subtitle: string
  center?: boolean
}

export default function SectionHeader({ tag, title, subtitle, center = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      <span className="section-tag">{tag}</span>
      <h2
        className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 mb-4 text-text-primary"
      >
        {title}
      </h2>
      <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  )
}
