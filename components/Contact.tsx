'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { personalInfo } from '@/lib/data'
import { animate } from 'animejs'

const socialLinks = [
  { icon: Github, label: 'GitHub', href: personalInfo.github, handle: 'aum-patel14' },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin, handle: 'in/aum-patel-573269393' },
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, handle: personalInfo.email },
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [showSuccessCheck, setShowSuccessCheck] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(resolve => setTimeout(resolve, 1400))
    setStatus('success')
    setFormState({ name: '', email: '', subject: '', message: '' })
    
    // Draw in checkmark SVG
    setShowSuccessCheck(true)

    // Revert checkmark to normal submit button after 2.2 seconds
    setTimeout(() => {
      setShowSuccessCheck(false)
      setStatus('idle')
    }, 2200)
  }

  // Anime.js Success Checkmark path draw-in effect
  useEffect(() => {
    if (showSuccessCheck) {
      animate('.success-checkmark-svg path', {
        strokeDashoffset: [32, 0],
        ease: 'outQuad',
        duration: 700
      })
    }
  }, [showSuccessCheck])

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      
      <div
        className="absolute left-0 bottom-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(163, 230, 53, 0.012) 0%, transparent 70%)',
          filter: 'blur(65px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <SectionHeader
          tag="// Get in Touch"
          title="Contact Me"
          subtitle="Open to frontend developer roles, technical collaborations, and UI engineering consultations"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          
          {/* Left Column — Contact Info Details (Spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Location Module */}
            <div className="bento-card bg-surface-container-low p-6">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded flex items-center justify-center bg-surface-container border border-border">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-wider uppercase text-text-muted">Location</div>
                  <div className="text-text-primary text-sm font-semibold">Gujarat, India</div>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Looking to expand my analytical footprint. Actively seeking full-time junior positions, internships, or consultancy roles globally.
              </p>
            </div>

            {/* Social Channels Module */}
            <div className="bento-card bg-surface-container-low p-6">
              <h3 className="font-serif text-lg text-text-primary mb-4">
                Find Me On
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3.5 p-3 rounded bg-surface-container/50 hover:bg-surface-container border border-border/40 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded flex items-center justify-center bg-surface-container border border-border group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <div className="text-text-primary text-sm font-medium group-hover:text-primary transition-colors">
                          {link.label}
                        </div>
                        <div className="text-text-muted font-mono text-[10px]">
                          {link.handle}
                        </div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column — Contact Form (Spans 3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bento-card bg-surface-container-low p-8">
              <h3 className="font-serif text-xl text-text-primary mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email (Grid Layout) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name field (Floating Label) */}
                  <div className="relative group pt-4">
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="w-full bg-transparent border-b border-border/80 py-2.5 text-text-primary outline-none focus:border-primary transition-colors duration-300 placeholder-transparent"
                      id="name-input"
                    />
                    <label 
                      htmlFor="name-input"
                      className={`absolute left-0 pointer-events-none transition-all duration-300 font-sans ${
                        focusedField === 'name' || formState.name
                          ? 'top-0 text-[10px] tracking-widest text-primary uppercase font-mono'
                          : 'top-5 text-sm text-text-muted'
                      }`}
                    >
                      Your Name
                    </label>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>

                  {/* Email field (Floating Label) */}
                  <div className="relative group pt-4">
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="w-full bg-transparent border-b border-border/80 py-2.5 text-text-primary outline-none focus:border-primary transition-colors duration-300 placeholder-transparent"
                      id="email-input"
                    />
                    <label 
                      htmlFor="email-input"
                      className={`absolute left-0 pointer-events-none transition-all duration-300 font-sans ${
                        focusedField === 'email' || formState.email
                          ? 'top-0 text-[10px] tracking-widest text-primary uppercase font-mono'
                          : 'top-5 text-sm text-text-muted'
                      }`}
                    >
                      Email Address
                    </label>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>

                </div>

                {/* Subject field (Floating Label) */}
                <div className="relative group pt-4">
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full bg-transparent border-b border-border/80 py-2.5 text-text-primary outline-none focus:border-primary transition-colors duration-300 placeholder-transparent"
                    id="subject-input"
                  />
                  <label 
                    htmlFor="subject-input"
                    className={`absolute left-0 pointer-events-none transition-all duration-300 font-sans ${
                      focusedField === 'subject' || formState.subject
                        ? 'top-0 text-[10px] tracking-widest text-primary uppercase font-mono'
                        : 'top-5 text-sm text-text-muted'
                    }`}
                  >
                    Subject
                  </label>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                {/* Message field (Floating Label) */}
                <div className="relative group pt-4">
                  <textarea
                    name="message"
                    value={formState.message}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder=" "
                    className="w-full bg-transparent border-b border-border/80 py-2.5 text-text-primary outline-none focus:border-primary transition-colors duration-300 placeholder-transparent resize-none"
                    id="message-input"
                  />
                  <label 
                    htmlFor="message-input"
                    className={`absolute left-0 pointer-events-none transition-all duration-300 font-sans ${
                      focusedField === 'message' || formState.message
                        ? 'top-0 text-[10px] tracking-widest text-primary uppercase font-mono'
                        : 'top-5 text-sm text-text-muted'
                    }`}
                  >
                    Message
                  </label>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                {/* Form Status Messages */}
                <AnimatePresence>
                  {status === 'success' && !showSuccessCheck && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 p-3 rounded text-sm bg-primary/10 border border-primary/25 text-primary"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Message sent successfully! I will reach out shortly.
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === 'sending' || showSuccessCheck}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed mt-2 overflow-hidden relative min-h-[44px]"
                >
                  {showSuccessCheck ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="success-checkmark-svg text-background">
                      <path strokeDasharray="32" strokeDashoffset="32" d="M20 6L9 17L4 12" />
                    </svg>
                  ) : status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Submit Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
