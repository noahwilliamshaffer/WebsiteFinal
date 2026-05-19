'use client'

import { motion } from 'framer-motion'
import { Briefcase, Building2 } from 'lucide-react'

const jobs = [
  {
    company: 'Aurepath',
    role: 'Co-Founder & Founding Cybersecurity Engineer',
    period: 'Feb 2026 – Present',
    location: 'Remote',
    type: 'Founding',
    color: 'text-cyan-400',
    dot: 'bg-cyan-400 border-cyan-400',
    glow: 'shadow-[0_0_14px_rgba(0,212,255,0.12)]',
    bullets: [
      'Lead security architecture for an AWS-native AI SaaS platform, embedding Zero Trust controls across IAM, secrets management, KMS-backed encryption, and VPC network segmentation from day one; secured $2.5K pre-seed funding and signed first enterprise design partner.',
      'Built a secure SDLC and DevSecOps pipeline (CI/CD with GitHub Actions, SAST via Semgrep, DAST, Snyk dependency scanning, Trivy container scanning, Terraform IaC review), reducing mean time to remediate critical vulnerabilities by 40%.',
      'Designed and deployed REST APIs handling 10K+ daily calls with TLS 1.3, OAuth 2.0 / OIDC, rate limiting, and structured logging into a centralized SIEM, achieving sub-100ms p95 latency.',
      'Authored security policies, risk register, and control mappings aligned to SOC 2 Type II, NIST CSF, and ISO 27001 to accelerate enterprise pilot conversations and audit readiness.',
      'Conducted threat modeling (STRIDE) and tabletop incident response exercises across the platform, producing prioritized remediation roadmaps tied to MITRE ATT&CK coverage gaps.',
    ],
  },
  {
    company: 'ApexShield LLC (ShieldAudit)',
    role: 'Software Engineer — Sole Engineer, ShieldAudit Platform',
    period: 'Jan 2026 – May 2026',
    location: 'Capstone Engagement',
    type: 'SaaS Build',
    color: 'text-purple-400',
    dot: 'bg-purple-400 border-purple-400',
    glow: 'shadow-[0_0_14px_rgba(139,92,246,0.1)]',
    bullets: [
      'Sole engineer designing and building ShieldAudit — a SaaS platform automating annual CCPA cybersecurity audits required under Cal. Code Regs. tit. 11, §§ 7120–7124 (effective January 1, 2026).',
      'Architected a multi-tenant Next.js / PostgreSQL application with Clerk authentication, Drizzle ORM, and Neon serverless DB; implemented an immutable audit trail enforced at the database trigger level.',
      'Built an 18-component, 40-question assessment engine with risk-weighted scoring aligned to NIST CSF, producing automated PDF/DOCX reports formatted for regulatory submission.',
      'Implemented Stripe per-assessment billing with white-label reseller tier; productized at $9,500 direct and $300–$500 reseller price points for California covered businesses.',
      'Hardened with row-level tenancy isolation, AES-256 PII encryption at rest, TLS 1.3 in transit, CSP/HSTS headers, OWASP Top 10 mitigations, and continuous dependency scanning.',
    ],
  },
  {
    company: 'Lockridge Cybersecurity LLC',
    role: 'Founder & Lead Security / ML Engineer',
    period: 'Dec 2025 – Apr 2026',
    location: 'Tallahassee, FL',
    type: 'Founder',
    color: 'text-emerald-400',
    dot: 'bg-emerald-400 border-emerald-400',
    glow: 'shadow-[0_0_14px_rgba(16,185,129,0.1)]',
    bullets: [
      'Founded a security practice focused on ML-driven threat intelligence; deployed production PyTorch and TensorFlow models for phishing detection and malware classification across a pipeline processing 2M+ emails per day.',
      'Built supervised and unsupervised anomaly detection systems achieving 95%+ validated accuracy against BEC, credential phishing, and malicious attachments.',
      'Scaled MLOps infrastructure on AWS using Docker, Kubernetes (EKS), and Argo Workflows, enabling 10x traffic with automated retraining, drift monitoring, model versioning, and OpenTelemetry observability.',
      'Mapped detection coverage to MITRE ATT&CK (Initial Access, Defense Evasion) and authored runbooks for SOC analysts integrating outputs into Splunk and downstream SOAR playbooks.',
    ],
  },
  {
    company: 'Curvature Securities',
    role: 'Security Engineer',
    period: 'Aug 2023 – Present',
    location: 'Financial Services',
    type: 'Full-Time',
    color: 'text-sky-400',
    dot: 'bg-sky-400 border-sky-400',
    glow: 'shadow-[0_0_14px_rgba(56,189,248,0.1)]',
    bullets: [
      'Monitor and secure access to sensitive fixed-income market data — including real-time CUSIP-level pricing (BVAL, discount, and dollar prices), Treasury yield curves, OAS/repo spreads, and hedge calculations — across trading and analytics systems.',
      'Apply data integrity and access control standards aligned with SEC Regulation SCI, FINRA Rule 4370, PCI-DSS, and SOC 2 to ensure CIA of proprietary trading data.',
      'Operate and tune SIEM detections, EDR alerts, and DLP policies for insider-threat and market-data exfiltration scenarios; triage and remediate incidents per documented Reg SCI escalation procedures.',
      'Lead quarterly vulnerability management and patch cadence across Windows and Linux trading infrastructure.',
      'Contribute to FINRA 4370 BC/DR testing including failover validation, tabletop exercises, and post-incident reporting.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/12 to-transparent" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-3">03. Experience</p>
          <h2 className="section-heading">Professional Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-transparent" />

          <div className="space-y-10 pl-8">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-8 top-2 w-3.5 h-3.5 rounded-full border-2 ${job.dot} timeline-dot`}
                  style={{ left: '-2rem' }}
                />

                {/* Card */}
                <div className={`glass-card rounded-2xl p-6 ${job.glow}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <Building2 size={13} className={job.color} />
                        <span className={`font-semibold text-sm ${job.color}`}>{job.company}</span>
                        <span className="px-2 py-0.5 rounded-full bg-white/4 border border-white/8 text-[0.62rem] font-mono text-slate-500">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-slate-100 font-semibold text-[0.97rem] leading-snug mt-1">
                        {job.role}
                      </h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-mono text-slate-400 whitespace-nowrap">{job.period}</div>
                      <div className="text-xs text-slate-600 mt-0.5">{job.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-slate-400 text-[0.86rem] leading-relaxed">
                        <Briefcase size={13} className={`${job.color} mt-0.5 flex-shrink-0 opacity-60`} />
                        <span dangerouslySetInnerHTML={{ __html: b }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
