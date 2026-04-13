import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Layers, Droplets, Shield, Link2, Route, FlaskConical, Sun, Atom, Wrench, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { id: 'primers', icon: FlaskConical, label: 'Primers', desc: 'Base Layer Adhesion' },
  { id: 'membranes', icon: Layers, label: 'Membranes', desc: 'Watertight Barriers' },
  { id: 'coatings', icon: Shield, label: 'Coatings', desc: 'External Defenses' },
  { id: 'sealants', icon: Link2, label: 'Sealants & Tapes', desc: 'Joint Integrity' },
  { id: 'infrastructure', icon: Route, label: 'Infrastructure', desc: 'Road & Pipeline Systems' },
]

const products = {
  primers: {
    name: 'A.R Bituminous Primer (O.B)',
    tagline: 'Deep Pore Penetration',
    description: 'Engineered to saturate porous surfaces, creating a molecular bond with concrete substrates.',
    features: [
      { icon: Atom, title: 'High Bonding Strength', desc: 'Acts as the ultimate anchor for subsequent waterproofing and protective layers.' },
      { icon: FlaskConical, title: 'Deep Penetration', desc: 'Molecular-level saturation for maximum substrate adhesion.' },
    ],
    specs: [
      { label: 'Quick Drying', value: '4–6 Hours' },
      { label: 'Coverage', value: '4–6 sq.m / L' },
      { label: 'Flash Point', value: '40°C Min' },
    ],
    visual: { hue: '#7B2F00', accent: '#FF6A00' },
  },
  membranes: {
    name: 'Polyseal Waterproofing Membrane',
    tagline: 'Impenetrable Barrier Technology',
    description: 'Inert to soil acids, chlorides, and sulphates, making it ideal for underground structures.',
    features: [
      { icon: Sun, title: 'UV Resistance', desc: 'Enhanced stabilizers to withstand extreme solar radiation without degradation.' },
      { icon: Shield, title: 'Chemical Resilience', desc: 'Inert to all known industrial soil contaminants.' },
    ],
    specs: [
      { label: 'Water Vapor', value: '< 0.1 g/m²·24h' },
      { label: 'UV Test', value: '5000+ Hours' },
      { label: 'Flexibility', value: '-10°C Min' },
    ],
    visual: { hue: '#FF6A00', accent: '#FFB694' },
  },
  coatings: {
    name: 'Industrial External Coating',
    tagline: 'Last Line of Defense',
    description: 'Self-adhesive, high-build coating for above-ground and structural surfaces.',
    features: [
      { icon: Shield, title: 'Impact Resistant', desc: 'Withstands physical impact and abrasive industrial environments.' },
      { icon: Wrench, title: 'Easy Application', desc: 'Cold-applied brush or roller system, no specialized equipment needed.' },
    ],
    specs: [
      { label: 'Thickness', value: '2–4 mm' },
      { label: 'Coverage', value: '2 sq.m / L' },
      { label: 'Cure Time', value: '24 Hours' },
    ],
    visual: { hue: '#CD5400', accent: '#FFB694' },
  },
  sealants: {
    name: 'Polyseal Joint Sealant Tape',
    tagline: 'Zero-Gap Joint Integrity',
    description: 'Self-healing bitumen-polymer tape for pipe joints, wall-floor junctions, and expansion gaps.',
    features: [
      { icon: Link2, title: 'Self-Fusing', desc: 'Molecular bonding on contact — no primer required for metal surfaces.' },
      { icon: Droplets, title: 'Hydrophobic Core', desc: 'Repels water pressure up to 10 bar in buried applications.' },
    ],
    specs: [
      { label: 'Width Range', value: '50–300mm' },
      { label: 'Thickness', value: '1.5mm' },
      { label: 'Temp Range', value: '-20 to 80°C' },
    ],
    visual: { hue: '#571F00', accent: '#FF8C00' },
  },
  infrastructure: {
    name: 'Road & Pipeline Systems',
    tagline: 'Transcontinental Protection',
    description: 'Comprehensive heavy-duty protection for municipal roads, highways, and transcontinental pipeline networks.',
    features: [
      { icon: Route, title: 'Geomembrane Separation', desc: 'Prevents moisture migration and load-bearing failure in high-traffic roads.' },
      { icon: Shield, title: '50-Year Integrity', desc: 'Anti-corrosive wrapping systems designed for subterranean environments.' },
    ],
    specs: [
      { label: 'Pipeline Dia', value: 'Up to 1800mm' },
      { label: 'Road Width', value: 'Unlimited' },
      { label: 'Lifespan', value: '50+ Years' },
    ],
    visual: { hue: '#2A2A2A', accent: '#FF6A00' },
  },
}

export default function ProductEcosystem() {
  const [active, setActive] = useState('primers')
  const sectionRef = useRef(null)
  const productRef = useRef(null)

  const product = products[active]

  const handleTabChange = (id) => {
    if (id === active) return
    gsap.to(productRef.current, {
      opacity: 0, y: 20, duration: 0.25, ease: 'power2.in',
      onComplete: () => {
        setActive(id)
        gsap.to(productRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
      }
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinned horizontal scroll feel via ScrollTrigger
      gsap.from('.cat-tab', {
        opacity: 0, y: 30, stagger: 0.08, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="products" ref={sectionRef} className="section-darker py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4 reveal">
          <div className="w-8 h-px bg-[#FF6A00]" />
          <span className="text-label-industrial text-[#FF6A00]">Product Ecosystem</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <h2 className="text-headline text-[#E5E2E1] reveal">
            A Multi-Layered Defense Architecture
          </h2>
          <p className="text-[#C4C7C7] text-sm leading-relaxed mt-2 reveal">
            Designed for the world's most demanding infrastructure — from subterranean
            pipelines to high-traffic road systems.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12 p-1 rounded-md"
          style={{ background: 'var(--surface-container-lowest)' }}>
          {categories.map(({ id, icon: Icon, label, desc }) => (
            <button
              key={id}
              onClick={() => handleTabChange(id)}
              className={`cat-tab flex items-center gap-3 px-5 py-3 rounded text-left transition-all duration-300 ${
                active === id
                  ? 'bg-[#2A2A2A] text-[#E5E2E1]'
                  : 'text-[#8E9192] hover:text-[#C4C7C7]'
              }`}
            >
              <Icon size={16} className={active === id ? 'text-[#FF6A00]' : 'text-[#444748]'} />
              <div>
                <p className="font-manrope font-bold text-xs">{label}</p>
                <p className="text-label-industrial">{desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Product panel */}
        <div ref={productRef} className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Visual */}
          <div
            className="aspect-video rounded-md overflow-hidden relative flex items-center justify-center"
            style={{ background: `radial-gradient(ellipse at center, ${product.visual.hue}33 0%, #0E0E0E 70%)` }}
          >
            {/* Abstract product viz */}
            <div className="relative w-48 h-48">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border"
                  style={{
                    borderColor: i === 0 ? product.visual.accent : `${product.visual.hue}${60 - i * 15}`,
                    transform: `scale(${0.4 + i * 0.2})`,
                    opacity: 0.7 - i * 0.15,
                    boxShadow: i === 0 ? `0 0 30px ${product.visual.accent}44` : 'none',
                  }}
                />
              ))}
              <div
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: product.visual.hue, boxShadow: `0 0 40px ${product.visual.accent}66` }}
                >
                  <Layers size={24} className="text-[#E5E2E1]" />
                </div>
              </div>
            </div>

            {/* Expert tip */}
            {active === 'membranes' && (
              <div
                className="absolute bottom-4 left-4 right-4 card-industrial p-4"
                style={{ borderLeft: '2px solid #FF6A00' }}
              >
                <p className="text-label-industrial text-[#FF6A00] mb-1">Expert Recommendation</p>
                <p className="text-xs text-[#C4C7C7] italic leading-relaxed">
                  "Pair with A.R Bituminous Primer for a 25-year guaranteed seal in
                  high-pressure subterranean environments."
                </p>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-label-industrial text-[#FF6A00] mb-2">{product.tagline}</p>
            <h3 className="font-manrope font-black text-2xl text-[#E5E2E1] mb-4 leading-tight">
              {product.name}
            </h3>
            <p className="text-sm text-[#C4C7C7] leading-relaxed mb-8">{product.description}</p>

            {/* Features */}
            <div className="space-y-5 mb-8">
              {product.features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded flex items-center justify-center"
                    style={{ background: 'rgba(255,106,0,0.1)' }}
                  >
                    <Icon size={16} className="text-[#FF6A00]" />
                  </div>
                  <div>
                    <p className="font-manrope font-bold text-xs text-[#E5E2E1] mb-0.5">{title}</p>
                    <p className="text-xs text-[#8E9192] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Specs */}
            <div
              className="grid grid-cols-3 gap-4 p-4 rounded-md mb-8"
              style={{ background: 'var(--surface-container-lowest)' }}
            >
              {product.specs.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-label-industrial mb-1">{label}</p>
                  <p className="font-manrope font-bold text-sm text-[#FFB694]">{value}</p>
                </div>
              ))}
            </div>

            <button className="btn-primary text-xs flex items-center gap-2">
              Technical Data Sheet <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Blueprint footer */}
        <div className="mt-20 text-center reveal">
          <p className="text-label-industrial text-[#FF6A00] mb-3">The Multi-Layer Blueprint</p>
          <h3 className="font-manrope font-black text-2xl text-[#E5E2E1] mb-2">
            Precision Engineered for the Global Industrial Landscape
          </h3>
          <p className="text-xs text-[#8E9192] max-w-lg mx-auto">
            Each layer is tested independently and as a system. Our QC protocol exceeds
            IS:15000, AWWA C214, and EN 1337 standards.
          </p>
        </div>
      </div>
    </section>
  )
}
