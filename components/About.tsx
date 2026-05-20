'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase, ExternalLink } from 'lucide-react'

const highlights = [
  { icon: MapPin, label: 'Location', value: 'Tallahassee, FL' },
  { icon: GraduationCap, label: 'Degree', value: 'M.S. Cybersecurity — USD (Expected Aug 2026)' },
  { icon: Briefcase, label: 'Current', value: 'Founding Engineer @ Aurepath · Security Eng @ Glacier Peak Capital' },
]

const terminalLines = [
  { prefix: '$ whoami', text: '' },
  { prefix: '', text: 'noah_shaffer@cybersec' },
  { prefix: '$ cat profile.json', text: '' },
  { prefix: '', text: '{' },
  { prefix: '', text: '  "cert": "CISSP (ISC)²",' },
  { prefix: '', text: '  "ms_program": "USD Cybersecurity",' },
  { prefix: '', text: '  "specialties": [' },
  { prefix: '', text: '    "AWS Security", "Zero Trust",' },
  { prefix: '', text: '    "DevSecOps", "ML Security"' },
  { prefix: '', text: '  ],' },
  { prefix: '', text: '  "status": "available"' },
  { prefix: '', text: '}' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="mb-14"
        >
          <p className="section-label mb-3">01. About</p>
          <h2 className="section-heading">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — text */}
          <div className="space-y-5">
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-slate-300 text-[1.02rem] leading-relaxed"
            >
              I&apos;m a <span className="text-cyan-400 font-medium">Cybersecurity Engineer and Associate of (ISC)²</span> — I passed the CISSP exam and am accruing the 5 years of experience required for full certification. I have
              hands-on experience securing AWS-native SaaS platforms, regulated financial systems,
              and ML pipelines processing <span className="text-cyan-400 font-medium">2M+ events per day</span>.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="text-slate-400 leading-relaxed"
            >
              As <span className="text-slate-200 font-medium">Co-Founder &amp; Founding Cybersecurity Engineer at Aurepath</span>,
              I architect Zero Trust controls into an AI SaaS platform from day one. At Lockridge Cybersecurity LLC,
              I built ML-driven threat detection achieving 95%+ accuracy against BEC and credential phishing.
              At Glacier Peak Capital, I protect regulated financial market data under SEC Reg SCI and FINRA Rule 4370.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="text-slate-400 leading-relaxed"
            >
              Currently pursuing my <span className="text-slate-200 font-medium">M.S. in Cybersecurity Engineering
              at the University of San Diego</span> (NSA/CAE-accredited), applying threat modeling, incident
              response, and AI/ML automation to harden cloud workloads against modern adversaries.
            </motion.p>

            {/* Quick facts */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={4}
              className="space-y-2.5 pt-2"
            >
              {highlights.map((h) => (
                <div key={h.label} className="flex items-start gap-3">
                  <h.icon size={15} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-500 text-xs font-mono">{h.label}: </span>
                    <span className="text-slate-300 text-sm">{h.value}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Links */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={5}
              className="flex flex-wrap gap-3 pt-2"
            >
              {[
                { href: 'https://linkedin.com/in/noahwilliamshaffer', label: 'LinkedIn' },
                { href: 'https://github.com/noahwilliamshaffer', label: 'GitHub' },
                { href: 'mailto:NoahWilliamShaffer@gmail.com', label: 'Email' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 border border-cyan-500/22 px-3.5 py-1.5 rounded-md hover:bg-cyan-500/8 hover:border-cyan-500/45 transition-all duration-150"
                >
                  {link.label}
                  <ExternalLink size={11} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            {/* Terminal chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-white/3 border-b border-cyan-500/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs font-mono text-slate-500">profile.sh</span>
            </div>

            {/* Terminal body */}
            <div className="p-5 font-mono text-sm space-y-0.5">
              {terminalLines.map((line, i) => (
                <div key={i} className={`${line.prefix.startsWith('$') ? 'text-cyan-400' : line.text === '' ? '' : 'text-slate-400'}`}>
                  {line.prefix && (
                    <span className={line.prefix.startsWith('$') ? 'text-cyan-400' : 'text-slate-300'}>
                      {line.prefix}
                    </span>
                  )}
                  {line.text && !line.prefix && (
                    <span className="text-slate-300 pl-0">{line.text}</span>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-0.5 pt-1">
                <span className="text-cyan-400">$ </span>
                <span className="w-2 h-4 bg-cyan-400/70 animate-pulse inline-block" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
