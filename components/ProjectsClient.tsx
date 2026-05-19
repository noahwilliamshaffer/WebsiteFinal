'use client'

import { motion } from 'framer-motion'
import { GitBranch, Star, ExternalLink, Github, Code2 } from 'lucide-react'
import type { GitHubRepo } from '@/lib/github'
import { langColors } from '@/lib/github'

const fallbackProjects: Partial<GitHubRepo>[] = [
  {
    id: 1,
    name: 'ShieldAudit',
    description: 'SaaS platform automating annual CCPA cybersecurity audits (Cal. Code Regs. tit. 11, §§ 7120–7124). Multi-tenant Next.js + PostgreSQL with Clerk auth, Drizzle ORM, 18-component assessment engine, and Stripe billing.',
    html_url: 'https://github.com/noahwilliamshaffer',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['next.js', 'ccpa', 'compliance', 'saas', 'security'],
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: 'ML-Threat-Intelligence',
    description: 'PyTorch and TensorFlow models for phishing detection and malware classification. Processes 2M+ emails/day with 95%+ accuracy. Scaled on AWS EKS with Argo Workflows, drift monitoring, and OpenTelemetry observability.',
    html_url: 'https://github.com/noahwilliamshaffer',
    language: 'Python',
    stargazers_count: 0,
    forks_count: 0,
    topics: ['machine-learning', 'security', 'threat-intelligence', 'pytorch', 'aws'],
    updated_at: new Date().toISOString(),
  },
]

function RepoCard({ repo }: { repo: Partial<GitHubRepo> }) {
  const langColor = repo.language ? langColors[repo.language] ?? '#94a3b8' : '#94a3b8'

  return (
    <motion.a
      href={repo.html_url ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="glass-card rounded-2xl p-5 flex flex-col gap-3 hover:border-cyan-500/35 group"
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <Code2 size={15} className="text-cyan-400 flex-shrink-0" />
          <span className="font-semibold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors">
            {repo.name}
          </span>
        </div>
        <ExternalLink size={13} className="text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-0.5" />
      </div>

      {/* Description */}
      <p className="text-slate-400 text-[0.82rem] leading-relaxed flex-1 line-clamp-3">
        {repo.description ?? 'No description available.'}
      </p>

      {/* Topics */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[0.62rem] font-mono px-2 py-0.5 rounded-full bg-cyan-500/6 border border-cyan-500/14 text-cyan-500/80"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-4 pt-1 border-t border-white/5 mt-auto">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: langColor }}
            />
            <span className="text-xs text-slate-500 font-mono">{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1 text-slate-600 text-xs font-mono">
          <Star size={11} />
          {repo.stargazers_count ?? 0}
        </div>
        <div className="flex items-center gap-1 text-slate-600 text-xs font-mono">
          <GitBranch size={11} />
          {repo.forks_count ?? 0}
        </div>
      </div>
    </motion.a>
  )
}

export default function ProjectsClient({ repos }: { repos: GitHubRepo[] }) {
  const displayRepos = repos.length > 0 ? repos : fallbackProjects

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/12 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <p className="section-label mb-3">06. Projects</p>
            <h2 className="section-heading">GitHub Work</h2>
            {repos.length === 0 && (
              <p className="text-slate-500 text-sm mt-2">
                Featured projects (add <code className="font-mono text-cyan-500/70 bg-cyan-500/5 px-1 rounded">GITHUB_TOKEN</code> env var for live data).
              </p>
            )}
          </div>
          <a
            href="https://github.com/noahwilliamshaffer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-slate-400 border border-white/8 rounded-lg hover:border-cyan-500/35 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-150 self-start sm:self-auto"
          >
            <Github size={15} />
            View All on GitHub
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayRepos.map((repo, i) => (
            <motion.div
              key={repo.id ?? i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.42, delay: i * 0.055 }}
            >
              <RepoCard repo={repo} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
