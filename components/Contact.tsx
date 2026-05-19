'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Linkedin, Github, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const social = [
  {
    icon: Mail,
    label: 'Email',
    value: 'NoahWilliamShaffer@gmail.com',
    href: 'mailto:NoahWilliamShaffer@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/noahwilliamshaffer',
    href: 'https://linkedin.com/in/noahwilliamshaffer',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/noahwilliamshaffer',
    href: 'https://github.com/noahwilliamshaffer',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tallahassee, FL',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.')
        setStatus('error')
      } else {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      }
    } catch {
      setError('Network error. Please try again.')
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-white/3 border border-white/8 rounded-lg px-4 py-2.5 text-slate-200 text-sm placeholder:text-slate-600 focus:border-cyan-500/45 focus:bg-white/5 transition-all duration-150 font-mono'

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-3">07. Contact</p>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-slate-500 text-sm mt-2 max-w-md">
            Open to security engineering roles, consulting engagements, and collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left — social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            {social.map((s) => {
              const Icon = s.icon
              const inner = (
                <div className="glass-card rounded-xl p-4 flex items-center gap-3 hover:border-cyan-500/35 hover:bg-cyan-500/3 transition-all duration-150">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/8 border border-cyan-500/18 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-[0.68rem] font-mono uppercase tracking-wide">{s.label}</p>
                    <p className="text-slate-300 text-[0.83rem] truncate">{s.value}</p>
                  </div>
                </div>
              )

              return s.href ? (
                <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={s.label}>{inner}</div>
              )
            })}

            <div className="glass-card rounded-xl p-4 mt-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-mono">Available for opportunities</span>
              </div>
              <p className="text-slate-500 text-[0.78rem] leading-relaxed">
                Security Engineering · Cloud Security · DevSecOps · Consulting
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-3"
          >
            {status === 'success' ? (
              <div className="glass-card rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4 h-full min-h-[320px]">
                <CheckCircle size={40} className="text-emerald-400" />
                <h3 className="text-slate-100 font-semibold text-lg">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs font-mono text-cyan-400 border border-cyan-500/22 px-4 py-1.5 rounded-md hover:bg-cyan-500/8 transition-all mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-wide">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Noah Shaffer"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-wide">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-wide">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Security Engineering Role / Consulting"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-wide">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/8 border border-red-500/18 rounded-lg px-3 py-2">
                    <AlertCircle size={14} />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/40 text-black font-semibold text-sm rounded-lg transition-all duration-150 hover:shadow-[0_0_24px_rgba(0,212,255,0.35)]"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
