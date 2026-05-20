'use client'

import { motion } from 'framer-motion'
import { Shield, Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certs' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const social = [
  { href: 'https://github.com/noahwilliamshaffer', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/noahwilliamshaffer', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:NoahWilliamShaffer@gmail.com', icon: Mail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-8 border-t border-white/5">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/12 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/22 flex items-center justify-center">
              <span className="font-mono text-[0.68rem] font-bold text-cyan-400">NS</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">Noah Shaffer</p>
              <p className="text-[0.68rem] text-slate-600 font-mono">Associate of (ISC)² · Cybersecurity Engineer</p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1 text-[0.75rem] font-mono text-slate-600 hover:text-cyan-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {social.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/3 border border-white/8 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-150"
                >
                  <Icon size={14} />
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 pt-6 border-t border-white/4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.72rem] text-slate-700 font-mono"
        >
          <span>© {new Date().getFullYear()} Noah Shaffer. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <Shield size={11} />
            Built with Next.js · Tailwind · Framer Motion
          </span>
        </motion.div>
      </div>
    </footer>
  )
}
