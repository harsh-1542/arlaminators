import { Globe, Share2, ChevronRight } from 'lucide-react'

const footerLinks = {
  Solutions: ['Waterproofing', 'Corrosion Control', 'Tape Systems', 'Pipeline Wrapping'],
  Products: ['Polyseal V-400', 'Bituminous Primer', 'Joint Sealant', 'Geomembranes'],
  Company: ['About Us', 'Process', 'Certifications', 'Careers'],
  Connect: ['Contact', 'Technical Support', 'LinkedIn', 'Twitter'],
}

export default function Footer() {
  return (
    <footer
      className="pb-7"
      style={{ background: 'var(--surface-container-lowest)' }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#FFB694] to-[#7B2F00] flex items-center justify-center">
                <span className="text-[#571F00] font-manrope font-black text-xs">AR</span>
              </div>
              <span className="font-manrope font-bold text-sm tracking-widest text-[#E5E2E1] uppercase">
                A.R <span className="text-[#FFB694]">Laminators</span>
              </span>
            </div>
            <p className="text-xs text-[#8E9192] leading-relaxed mb-6 max-w-xs">
              Precision engineered lamination and industrial coating systems for
              high-performance infrastructure protection since 1991.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                style={{ background: 'var(--surface-container)' }}
                aria-label="LinkedIn"
              >
                <Globe size={14} className="text-[#8E9192] hover:text-[#FFB694]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center transition-colors"
                style={{ background: 'var(--surface-container)' }}
                aria-label="Twitter"
              >
                <Share2 size={14} className="text-[#8E9192] hover:text-[#FFB694]" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-label-industrial text-[#FF6A00] mb-4">{category}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-[#8E9192] hover:text-[#C4C7C7] transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ChevronRight
                        size={10}
                        className="text-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(68,71,72,0.12)' }}
      >
        <p className="text-label-industrial">
          © 2024 A.R LAMINATORS. PRECISION ENGINEERED.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Legal', 'Technical Hotline'].map((item) => (
            <a key={item} href="#" className="text-label-industrial hover:text-[#FFB694] transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
