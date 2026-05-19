'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Download, ArrowRight, ChevronDown } from 'lucide-react'

const roles = [
  'Founding Cybersecurity Engineer @ Aurepath',
  'CISSP-Certified Security Architect',
  'ML Security & Threat Intelligence',
  'DevSecOps & Zero Trust Practitioner',
  'AWS Cloud Security Specialist',
]

const stats = [
  { value: '2M+', label: 'Events / Day Secured' },
  { value: '95%+', label: 'ML Detection Accuracy' },
  { value: '40%', label: 'MTTR Reduction' },
  { value: 'CISSP', label: 'Certified (ISC)²' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [display, setDisplay] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = roles[roleIdx]
    let t: ReturnType<typeof setTimeout>

    if (typing) {
      if (display.length < target.length) {
        t = setTimeout(() => setDisplay(target.slice(0, display.length + 1)), 45)
      } else {
        t = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (display.length > 0) {
        t = setTimeout(() => setDisplay(display.slice(0, -1)), 22)
      } else {
        setRoleIdx((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [display, typing, roleIdx])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#05050f]">
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,212,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.035) 1px,transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        {/* Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/3 rounded-full blur-[160px] pointer-events-none" />
        {/* Scan line */}
        <div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent pointer-events-none scan-line-anim"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full bg-cyan-500/8 border border-cyan-500/18 text-cyan-400 text-xs font-mono tracking-wide"
        >
          <Shield size={13} />
          CISSP · (ISC)² Certified Cybersecurity Engineer
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="font-bold tracking-tight leading-none mb-5"
          style={{ fontSize: 'clamp(3.2rem, 10vw, 6.5rem)' }}
        >
          <span
            style={{
              display: 'block',
              background: 'linear-gradient(135deg,#ffffff 0%,#a5f3fc 35%,#8b5cf6 70%,#00d4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Noah
          </span>
          <span
            style={{
              display: 'block',
              background: 'linear-gradient(135deg,#00d4ff 0%,#8b5cf6 45%,#e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Shaffer
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="h-7 flex items-center justify-center mb-6"
        >
          <span className="font-mono text-base sm:text-lg text-cyan-400">
            {display}
            <span className="cursor-blink text-cyan-300">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="max-w-xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10"
        >
          Securing AWS-native SaaS platforms and ML pipelines against modern adversaries.
          Expertise across SIEM · Zero Trust · DevSecOps · AI/ML security automation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <a
            href="/Noah_Shaffer_Resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,212,255,0.45)] hover:-translate-y-0.5"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-cyan-500/28 hover:border-cyan-500/55 text-slate-200 hover:text-cyan-300 text-sm rounded-lg transition-all duration-200 hover:bg-cyan-500/5 hover:-translate-y-0.5"
          >
            Get In Touch
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.38, delay: 0.75 + i * 0.08 }}
              className="glass-card rounded-xl p-3.5 text-center"
            >
              <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono leading-none">
                {s.value}
              </div>
              <div className="text-[0.68rem] text-slate-500 mt-1.5 leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[0.65rem] text-slate-600 font-mono uppercase tracking-widest">
          scroll
        </span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={15} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
