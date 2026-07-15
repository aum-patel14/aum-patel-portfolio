'use client'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

export default function Experience() {
  const experiences = [
    {
      year: 'Mar 2024 – Jul 2025',
      title: 'QA Tester & Data Analyst',
      subtitle: 'Apollo Tyres Ltd.',
      description: 'Worked for 1.5 years performing software QA testing on enterprise inventory and logistics software. Extracted manufacturing logs, analyzed product defect rates, built dynamic metrics dashboards, and delivered structured QA and analytics insights to senior operational management.',
      tags: ['QA Testing', 'Data Analysis', 'Excel', 'Reporting', 'Defect Tracking', 'Manufacturing Metrics']
    },
    {
      year: '2026 & Beyond',
      title: 'Target: Dedicated Data Analyst',
      subtitle: 'Professional Goal',
      description: 'Leveraging my analytical rigor from Apollo Tyres and solid coding foundation to land a full-time, high-impact Data Analyst, Business Intelligence Engineer, or Analytics Consultant role.',
      tags: ['Business Intelligence', 'Data Strategy', 'Data Engineering', 'Full-time']
    }
  ]

  const education = [
    {
      year: '2024 – 2027 (Expected)',
      title: 'B.Tech in Computer Science & Engineering',
      subtitle: 'Parul University, Vadodara',
      description: 'Pursuing advanced computational theory, data systems, and system design, while deepening expertise in data science, predictive analytics, and machine learning pipelines.',
      tags: ['Computer Science', 'Machine Learning', 'Data Pipelines', 'Advanced Engineering']
    },
    {
      year: '2024 – 2025',
      title: 'Core Analytics & Web Architect',
      subtitle: 'Advanced Machine Learning & Web App Development',
      description: 'Developed a real-time customer behavior segmentation system using Scikit-learn and designed ChessMaster Pro, an interactive, full-featured web-based chess app powered by React 19 and Stockfish AI.',
      tags: ['React 19', 'Stockfish WASM', 'Scikit-learn', 'Firebase', 'Python']
    },
    {
      year: '2021 – 2024',
      title: 'Diploma in Computer Engineering',
      subtitle: 'Parul University, Vadodara',
      description: 'Acquired core hardware and software fundamentals, relational databases (DBMS), data structures, and computer programming (Java, C/C++).',
      tags: ['DBMS', 'Data Structures', 'Java', 'C/C++']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="// My Journey"
          title="Experience & Education"
          subtitle="A structured timeline of my professional work and educational background"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12">
          
          {/* Column 1 — Professional Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2D2D2D]">
              <Briefcase className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl sm:text-2xl text-text-primary">
                Professional Experience
              </h2>
            </div>

            <div className="relative pl-6 border-l border-[#2D2D2D] space-y-10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Custom Gold Dot Indicator */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-all duration-300" />
                  
                  <span className="font-mono text-[10px] tracking-wider uppercase text-primary font-semibold block mb-1">
                    {exp.year}
                  </span>
                  
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-0.5 group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <h4 className="text-sm font-medium text-text-secondary mb-3">
                    {exp.subtitle}
                  </h4>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map(tag => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2 — Education & Learning */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2D2D2D]">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl sm:text-2xl text-text-primary">
                Education & Learning
              </h2>
            </div>

            <div className="relative pl-6 border-l border-[#2D2D2D] space-y-10">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Custom Gold Dot Indicator */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-all duration-300" />
                  
                  <span className="font-mono text-[10px] tracking-wider uppercase text-primary font-semibold block mb-1">
                    {edu.year}
                  </span>
                  
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-0.5 group-hover:text-primary transition-colors duration-300">
                    {edu.title}
                  </h3>
                  
                  <h4 className="text-sm font-medium text-text-secondary mb-3">
                    {edu.subtitle}
                  </h4>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {edu.tags.map(tag => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
