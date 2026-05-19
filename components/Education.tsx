'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

const education = [
  {
    school: 'University of San Diego',
    degree: 'M.S., Cybersecurity Engineering',
    period: 'Expected August 2026',
    badge: 'NSA/CAE-Accredited',
    badgeColor: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/8 border-cyan-500/22',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/18',
    glow: 'hover:border-cyan-500/40 hover:shadow-[0_0_24px_rgba(0,212,255,0.07)]',
    coursework: [
      'Secure Systems Architecture',
      'Applied Cryptography',
      'Cyber Threat Intelligence',
      'Incident Response & Forensics',
      'Governance, Risk & Compliance',
    ],
    highlights: [
      'NSA/CAE (Center of Academic Excellence) designated program',
      'Applying threat modeling, IR, and AI/ML automation to cloud security research',
    ],
  },
  {
    school: 'Florida State University',
    degree: 'B.S., Computer Science',
    period: '2024',
    badge: 'Graduated',
    badgeColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/8 border-emerald-500/22',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/18',
    glow: 'hover:border-emerald-500/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.07)]',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'Discrete Mathematics',
    ],
    highlights: [
      'Minors: Business, Mathematics',
      'Leadership: Vice President, FSU student organization',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/12 to-transparent" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-3">05. Education</p>
          <h2 className="section-heading">Academic Background</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.48, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className={`glass-card rounded-2xl p-6 border ${edu.border} ${edu.glow} transition-all duration-250`}
            >
              {/* School + badge */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2 rounded-lg ${edu.badgeBg} border`}>
                    <GraduationCap size={16} className={edu.accent} />
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${edu.accent}`}>{edu.school}</p>
                    <p className="text-slate-200 text-[0.92rem] font-medium leading-snug mt-0.5">
                      {edu.degree}
                    </p>
                    <p className="text-slate-500 text-xs font-mono mt-0.5">{edu.period}</p>
                  </div>
                </div>
                <span className={`flex-shrink-0 text-[0.62rem] font-mono px-2 py-0.5 rounded-full border ${edu.badgeColor} ${edu.badgeBg}`}>
                  {edu.badge}
                </span>
              </div>

              {/* Highlights */}
              <div className="mb-4 space-y-1.5">
                {edu.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <Award size={12} className={`${edu.accent} mt-0.5 flex-shrink-0 opacity-70`} />
                    <span className="text-slate-400 text-[0.83rem] leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              {/* Coursework */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <BookOpen size={12} className="text-slate-500" />
                  <span className="text-slate-500 text-[0.72rem] font-mono uppercase tracking-wider">
                    Relevant Coursework
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((c) => (
                    <span key={c} className="skill-badge">{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
