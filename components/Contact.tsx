'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { personalInfo } from '@/lib/data'

const socialLinks = [
  { icon: Github, label: 'GitHub', href: personalInfo.github, handle: 'aum-patel14' },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin, handle: 'in/aum-patel-573269393' },
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, handle: personalInfo.email },
]

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send (replace with actual email service like EmailJS / Resend)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus('success')
    setFormState({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div
        className="absolute left-0 bottom-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute right-0 top-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          tag="// Get in Touch"
          title="Contact Me"
          subtitle="Open to internship opportunities, freelance work, and data collaborations"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info block */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/5"
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-text-muted text-xs uppercase tracking-wider font-medium">Location</div>
                  <div className="text-text-primary text-sm font-semibold">Gujarat, India</div>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                I&apos;m actively looking for{' '}
                <span className="text-text-primary font-medium">Data Analyst internships</span> and
                entry-level roles. Let&apos;s connect and explore opportunities.
              </p>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h4
                className="font-outfit font-semibold text-text-primary mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Find Me On
              </h4>
              <div className="space-y-3">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group border border-white/5 hover:border-white/10 hover:bg-white/5"
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 bg-white/5 border border-white/5"
                      >
                        <Icon className="w-4 h-4 text-text-secondary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="text-text-primary text-sm font-medium group-hover:text-white transition-colors">
                          {link.label}
                        </div>
                        <div className="text-text-muted text-xs" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                          {link.handle}
                        </div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              <h3
                className="font-outfit font-bold text-xl text-text-primary mb-6"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-text-muted text-xs font-medium mb-2 block uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="text-text-muted text-xs font-medium mb-2 block uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-text-muted text-xs font-medium mb-2 block uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Internship Opportunity / Collaboration"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="text-text-muted text-xs font-medium mb-2 block uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Hi Aum, I came across your portfolio and would like to discuss..."
                    required
                    rows={5}
                    className="form-input resize-none"
                  />
                </div>

                {/* Status */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl text-sm"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', color: '#86efac' }}
                  >
                    <CheckCircle className="w-4 h-4" />
                    Message sent! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <div
                    className="flex items-center gap-2 p-3 rounded-xl text-sm"
                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#fca5a5' }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
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
