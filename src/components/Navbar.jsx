import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Globe } from 'lucide-react'

const navLinks = [
  { label: 'Systems', href: '#systems' },
  { label: 'Products', href: '#products' },
  { label: 'Applications', href: '#applications' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#FFB694] to-[#7B2F00] flex items-center justify-center animate-pulse-orange">
                <span className="text-[#571F00] font-manrope font-black text-xs">AR</span>
              </div>
              <span className="font-manrope font-bold text-sm tracking-widest text-[#E5E2E1] uppercase">
                A.R <span className="text-[#FFB694]">Laminators</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={`nav-item relative px-4 py-2 text-xs font-inter font-medium uppercase tracking-widest transition-all duration-300 ${
                    active === link.label
                      ? 'text-[#FFB694]'
                      : 'text-[#C4C7C7] hover:text-[#E5E2E1]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF6A00] transition-all duration-300 ${
                      active === link.label ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button className="btn-primary flex items-center gap-2 text-xs">
                Talk to Expert
                <ChevronRight size={14} />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-[#C4C7C7] hover:text-[#E5E2E1] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              id="mobile-menu-btn"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-nav border-t border-[rgba(68,71,72,0.2)] px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { setActive(link.label); setMenuOpen(false) }}
                className="block py-3 text-xs font-inter font-medium uppercase tracking-widest text-[#C4C7C7] hover:text-[#FFB694] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="btn-primary w-full mt-4 text-xs flex items-center justify-center gap-2">
              Talk to Expert <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Ticker tape */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 h-7 flex items-center overflow-hidden"
        style={{ background: 'rgba(14,14,14,0.85)', backdropFilter: 'blur(8px)' }}
      >
        <div className="animate-ticker flex whitespace-nowrap">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="text-label-industrial mx-12 tracking-[0.2em]">
              A.R LAMINATORS &nbsp;·&nbsp; PRECISION ENGINEERED SINCE 1991 &nbsp;·&nbsp;
              ISO 9001:2015 CERTIFIED &nbsp;·&nbsp; 300+ PROJECTS COMPLETED &nbsp;·&nbsp;
              INFRASTRUCTURE PROTECTION SYSTEMS &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
