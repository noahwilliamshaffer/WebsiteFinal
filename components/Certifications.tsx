'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Clock } from 'lucide-react'

const certs = [
  {
    name: 'CISSP',
    full: 'Certified Information Systems Security Professional',
    issuer: '(ISC)²',
    status: 'Active',
    active: true,
    accent: '#f59e0b',
    bg: 'bg-amber-500/6',
    border: 'border-amber-500/22',
    hover: 'hover:border-amber-500/50 hover:shadow-[0_0_24px_rgba(245,158,11,0.1)]',
    desc: 'The gold standard in cybersecurity certification, validating expertise across all 8 CISSP security domains.',
    domains: ['Security & Risk Mgmt', 'Asset Security', 'Security Architecture', 'Network Security', 'IAM', 'Assessment & Testing', 'Security Ops', 'Software Dev Security'],
  },
  {
    name: 'CC',
    full: 'Certified in Cybersecurity',
    issuer: '(ISC)²',
    status: 'Active',
    active: true,
    accent: '#6366f1',
    bg: 'bg-indigo-500/6',
    border: 'border-indigo-500/22',
    hover: 'hover:border-indigo-500/50 hover:shadow-[0_0_24px_rgba(99,102,241,0.1)]',
    desc: 'Entry-level certification demonstrating foundational knowledge of cybersecurity principles and best practices.',
    domains: ['Security Concepts', 'Business Continuity', 'Access Controls', 'Network Security', 'Security Operations'],
  },
  {
    name: 'AWS Security',
    full: 'AWS Certified Security – Specialty',
    issuer: 'Amazon Web Services',
    status: 'In Progress',
    active: false,
    accent: '#f97316',
    bg: 'bg-orange-500/6',
    border: 'border-orange-500/22',
    hover: 'hover:border-orange-500/50 hover:shadow-[0_0_24px_rgba(249,115,22,0.1)]',
    desc: 'AWS specialty certification validating advanced cloud security skills across identity, network, and data protection.',
    domains: ['Incident Response', 'Logging & Monitoring', 'Infrastructure Security', 'IAM', 'Data Protection'],
  },
  {
    name: 'AI Security',
    full: 'AI Security Certificate',
    issuer: 'In Progress',
    status: 'In Progress',
    active: false,
    accent: '#8b5cf6',
    bg: 'bg-violet-500/6',
    border: 'border-violet-500/22',
    hover: 'hover:border-violet-500/50 hover:shadow-[0_0_24px_rgba(139,92,246,0.1)]',
    desc: 'Certification covering AI/ML security risks, adversarial attacks, model hardening, and secure MLOps practices.',
    domains: ['Adversarial ML', 'Model Security', 'AI Risk Management', 'Secure MLOps', 'AI Governance'],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/12 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-3">04. Certifications</p>
          <h2 className="section-heading">Credentials</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className={`glass-card rounded-2xl p-6 border ${cert.border} ${cert.bg} ${cert.hover} transition-all duration-250`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-2xl font-bold font-mono"
                      style={{ color: cert.accent }}
                    >
                      {cert.name}
                    </span>
                    {cert.active ? (
                      <span className="flex items-center gap-1 text-[0.62rem] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        <BadgeCheck size={10} />
                        Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[0.62rem] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                        <Clock size={10} />
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-slate-200 text-sm font-medium leading-snug">{cert.full}</p>
                  <p className="text-slate-500 text-xs font-mono mt-0.5">{cert.issuer}</p>
                </div>
              </div>

              <p className="text-slate-400 text-[0.85rem] leading-relaxed mb-4">{cert.desc}</p>

              {/* Domain tags */}
              <div className="flex flex-wrap gap-1.5">
                {cert.domains.map((d) => (
                  <span
                    key={d}
                    className="text-[0.65rem] font-mono px-2 py-0.5 rounded-full border"
                    style={{
                      color: cert.accent + 'cc',
                      borderColor: cert.accent + '30',
                      background: cert.accent + '0a',
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
