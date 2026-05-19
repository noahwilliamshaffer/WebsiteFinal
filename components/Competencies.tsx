'use client'

import { motion } from 'framer-motion'
import { Shield, Cloud, Code2, Cpu, Layers, Lock } from 'lucide-react'

const categories = [
  {
    icon: Shield,
    label: 'CISSP Security Domains',
    color: 'text-purple-400',
    border: 'border-purple-500/20',
    bg: 'bg-purple-500/5',
    glow: 'hover:border-purple-500/45 hover:shadow-[0_0_24px_rgba(139,92,246,0.08)]',
    skills: [
      'Security & Risk Management',
      'Asset Security',
      'Security Architecture & Engineering',
      'Communication & Network Security',
      'Identity & Access Management',
      'Security Assessment & Testing',
      'Security Operations',
      'Software Development Security',
    ],
  },
  {
    icon: Layers,
    label: 'Frameworks & Compliance',
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
    glow: 'hover:border-cyan-500/45 hover:shadow-[0_0_24px_rgba(0,212,255,0.07)]',
    skills: [
      'NIST CSF',
      'NIST 800-53',
      'NIST 800-171',
      'ISO 27001',
      'SOC 2 Type II',
      'PCI-DSS',
      'HIPAA / GDPR / CCPA',
      'FedRAMP',
      'MITRE ATT&CK',
      'OWASP Top 10',
      'CIS Controls',
      'SEC Reg SCI',
      'FINRA Rule 4370',
      'CSA CCM',
    ],
  },
  {
    icon: Lock,
    label: 'Security Tools & Platforms',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    glow: 'hover:border-emerald-500/45 hover:shadow-[0_0_24px_rgba(16,185,129,0.07)]',
    skills: [
      'Splunk',
      'Elastic SIEM',
      'CrowdStrike',
      'SentinelOne',
      'Microsoft Defender XDR',
      'Snort / Suricata',
      'Palo Alto / Fortinet NGFW',
      'Nessus / Qualys',
      'Burp Suite',
      'Wireshark',
      'Metasploit',
      'OWASP ZAP',
      'Semgrep',
      'Snyk / Trivy',
    ],
  },
  {
    icon: Cloud,
    label: 'Cloud & Infrastructure',
    color: 'text-sky-400',
    border: 'border-sky-500/20',
    bg: 'bg-sky-500/5',
    glow: 'hover:border-sky-500/45 hover:shadow-[0_0_24px_rgba(56,189,248,0.07)]',
    skills: [
      'AWS IAM',
      'AWS GuardDuty',
      'AWS Security Hub',
      'AWS KMS / CloudTrail',
      'AWS WAF / Macie / Inspector',
      'Azure AD / Entra ID',
      'GCP IAM',
      'Docker',
      'Kubernetes (EKS)',
      'Terraform',
      'GitHub Actions / CI/CD',
      'Linux (RHEL, Ubuntu)',
      'Windows Server',
    ],
  },
  {
    icon: Cpu,
    label: 'Engineering & Practices',
    color: 'text-orange-400',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/5',
    glow: 'hover:border-orange-500/45 hover:shadow-[0_0_24px_rgba(249,115,22,0.07)]',
    skills: [
      'Threat Modeling (STRIDE, PASTA)',
      'DevSecOps',
      'Secure SDLC',
      'Cryptography & PKI',
      'Zero Trust Architecture',
      'Incident Response & Forensics',
      'Vulnerability Management',
      'Penetration Testing',
      'Red / Blue Team',
      'AI/ML Security',
      'API Security',
      'Data Loss Prevention',
    ],
  },
  {
    icon: Code2,
    label: 'Languages & ML',
    color: 'text-pink-400',
    border: 'border-pink-500/20',
    bg: 'bg-pink-500/5',
    glow: 'hover:border-pink-500/45 hover:shadow-[0_0_24px_rgba(236,72,153,0.07)]',
    skills: [
      'Python',
      'Bash',
      'C / C++',
      'SQL',
      'JavaScript / TypeScript',
      'Go (intermediate)',
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'Pandas',
      'REST / GraphQL API',
    ],
  },
]

export default function Competencies() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle divider glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-3">02. Skills</p>
          <h2 className="section-heading">Core Competencies</h2>
          <p className="text-slate-500 text-sm mt-2 max-w-lg">
            Six years of hands-on security engineering across cloud, endpoint, network, and application layers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: ci * 0.06 }}
                whileHover={{ y: -3 }}
                className={`rounded-2xl p-5 border ${cat.border} ${cat.bg} ${cat.glow} transition-all duration-250 cursor-default`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon size={18} className={cat.color} />
                  <h3 className={`font-semibold text-sm ${cat.color}`}>{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span key={s} className="skill-badge">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
