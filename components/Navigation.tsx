'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certs' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#05050f]/88 backdrop-blur-xl border-b border-cyan-500/10'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center transition-all duration-200 group-hover:bg-cyan-500/18 group-hover:border-cyan-500/50">
                <span className="font-mono text-xs font-bold text-cyan-400">NS</span>
              </div>
              <span className="text-slate-200 font-semibold text-sm hidden sm:block tracking-wide">
                Noah Shaffer
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3.5 py-2 text-[0.82rem] font-mono text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-md transition-all duration-150"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
              <a
                href="/Noah_Shaffer_Resume.pdf"
                download
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-cyan-400 border border-cyan-500/25 rounded-md hover:bg-cyan-500/8 hover:border-cyan-500/50 transition-all duration-150"
              >
                <Download size={12} />
                Resume
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 inset-x-0 z-40 bg-[#0a0a18]/96 backdrop-blur-xl border-b border-cyan-500/10 md:hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-mono text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-md transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/5 mt-1">
                <a
                  href="/Noah_Shaffer_Resume.pdf"
                  download
                  className="flex items-center gap-2 px-3 py-2 text-sm font-mono text-cyan-400"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
