import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sun, Droplets, Thermometer, Info, Settings, FlaskConical, Wrench, CheckCircle, Download, MessageSquare } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const tabs = [
  { id: 'general', icon: Info, label: 'GENERAL' },
  { id: 'physical', icon: Settings, label: 'PHYSICAL PROPERTIES' },
  { id: 'chemical', icon: FlaskConical, label: 'CHEMICAL RESISTANCE' },
  { id: 'installation', icon: Wrench, label: 'INSTALLATION' },
  { id: 'certifications', icon: CheckCircle, label: 'CERTIFICATIONS' },
]

const tabContent = {
  general: {
    title: 'Product Overview',
    rows: [
      { label: 'Product Name', value: 'POLYSEAL V-400 Series' },
      { label: 'Type', value: 'APP Modified Bituminous Membrane' },
      { label: 'Carrier', value: 'Non-woven Polyester (160 g/m²)' },
      { label: 'Top Surface', value: 'Mineral (Slate / Sand)' },
      { label: 'Bottom Surface', value: 'Polyethylene Film' },
      { label: 'Standard', value: 'IS:1322, EN 13969' },
      { label: 'Roll Size', value: '10m × 1m' },
      { label: 'Thickness', value: '3mm / 4mm / 5mm' },
    ]
  },
  physical: {
    title: 'Physical Properties',
    rows: [
      { label: 'Tensile Strength (L)', value: '> 700 N / 50mm' },
      { label: 'Tensile Strength (T)', value: '> 600 N / 50mm' },
      { label: 'Elongation at Break', value: '> 40%' },
      { label: 'Peel Strength', value: '> 150 N / 50mm' },
      { label: 'Weight', value: '3.5 – 6 kg/m²' },
      { label: 'Softening Point', value: '> 130°C' },
      { label: 'Cold Flex', value: '-10°C (No break)' },
      { label: 'Water Vapor', value: '< 0.1 g/m²·24h' },
    ]
  },
  chemical: {
    title: 'Chemical Resistance',
    rows: [
      { label: 'Sulphates', value: '✓ Inert' },
      { label: 'Chlorides', value: '✓ Inert' },
      { label: 'Soil Acids (pH 4–9)', value: '✓ Inert' },
      { label: 'Seawater', value: '✓ Resistant' },
      { label: 'Crude Oil', value: '◑ Consult' },
      { label: 'Alkalis', value: '✓ Resistant' },
      { label: 'Oxidizers', value: '◑ Consult' },
      { label: 'Fuels', value: '✗ Not Recommended' },
    ]
  },
  installation: {
    title: 'Installation Guide',
    rows: [
      { label: 'Method', value: 'Torch-fused / Cold-bonded' },
      { label: 'Primer Required', value: 'A.R Bituminous Primer OB' },
      { label: 'Application Temp', value: '+5°C to +50°C' },
      { label: 'Lap Width (End)', value: '150mm minimum' },
      { label: 'Lap Width (Side)', value: '100mm minimum' },
      { label: 'Torch Distance', value: '30–40cm' },
      { label: 'Torch Temp', value: '400–500°C' },
      { label: 'Post-cure', value: '24h before backfilling' },
    ]
  },
  certifications: {
    title: 'Certifications & Compliance',
    rows: [
      { label: 'ISO 9001:2015', value: '✓ Certified' },
      { label: 'BIS IS:1322', value: '✓ Compliant' },
      { label: 'EN 13969', value: '✓ Compliant' },
      { label: 'AWWA C214', value: '✓ Compliant' },
      { label: 'ASTM D1970', value: '✓ Tested' },
      { label: 'UV Aging (EN 1297)', value: '5000+ hrs' },
      { label: 'Peel @ -10°C', value: '✓ Passed' },
      { label: 'Static Puncture', value: '> 2000 N' },
    ]
  },
}

const highlights = [
  { icon: Sun, label: 'UV Resistance', value: '5000+ hrs', desc: 'Zero surface cracking or delamination under simulated solar radiation.' },
  { icon: Droplets, label: 'Water Vapor', value: '< 0.1 g/m²', desc: 'Virtually impermeable barrier for critical foundations and roofing.' },
  { icon: Thermometer, label: 'Flexibility', value: '-10°C', desc: 'Maintains dynamic properties during extreme winter thermal cycles.' },
]

export default function PolysealSpecs() {
  const [activeTab, setActiveTab] = useState('general')
  const sectionRef = useRef(null)
  const tableRef = useRef(null)
  const content = tabContent[activeTab]

  const switchTab = (id) => {
    if (id === activeTab) return
    gsap.to(tableRef.current, {
      opacity: 0, y: 10, duration: 0.2, ease: 'power2.in',
      onComplete: () => {
        setActiveTab(id)
        gsap.to(tableRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
      }
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.highlight-card', {
        opacity: 0, y: 40, stagger: 0.1, duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="polyseal"
      ref={sectionRef}
      className="section-mid py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Decorative circuit lines */}
      <div
        className="absolute right-0 top-0 w-64 h-full pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#FF6A00 1px, transparent 1px),
            linear-gradient(90deg, #FF6A00 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Series header */}
        <div className="flex items-center gap-4 mb-3 reveal">
          <div className="w-8 h-px bg-[#FF6A00]" />
          <span className="text-label-industrial text-[#FF6A00]">HYPER-CORE SERIES</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <h2
              className="font-manrope font-black text-[#E5E2E1] reveal"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
            >
              POLYSEAL<br />
              <span className="gradient-orange-text">V-400 SERIES</span>
            </h2>
            <p className="text-label-industrial mt-4">
              APP Modified Bituminous Membrane — Precision-engineered for extreme durability
              in high-thermal fluctuation environments.
            </p>
          </div>
          <div className="flex gap-4 justify-end">
            <button className="btn-secondary flex items-center gap-2 text-xs">
              <Download size={14} /> Download TDS
            </button>
            <button className="btn-primary flex items-center gap-2 text-xs">
              <MessageSquare size={14} /> Consult Engineer
            </button>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {highlights.map(({ icon: Icon, label, value, desc }) => (
            <div
              key={label}
              className="highlight-card card-industrial p-6 group hover:bg-[#2A2A2A] transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Icon size={18} className="text-[#FF6A00] group-hover:scale-110 transition-transform" />
                <span className="font-manrope font-black text-2xl gradient-orange-text">{value}</span>
              </div>
              <p className="font-manrope font-bold text-sm text-[#E5E2E1] mb-2">{label}</p>
              <p className="text-xs text-[#8E9192] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Spec grid / data table */}
        <div className="card-industrial overflow-hidden">
          {/* Tab bar */}
          <div
            className="flex overflow-x-auto"
            style={{ borderBottom: '1px solid rgba(68,71,72,0.2)', background: 'var(--surface-container-lowest)' }}
          >
            {tabs.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => switchTab(id)}
                className={`flex items-center gap-2 px-5 py-4 text-label-industrial whitespace-nowrap transition-all duration-300 ${
                  activeTab === id
                    ? 'text-[#FF6A00] border-b-2 border-[#FF6A00]'
                    : 'text-[#8E9192] hover:text-[#C4C7C7]'
                }`}
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div ref={tableRef} className="p-6 lg:p-8">
            <h3 className="font-manrope font-bold text-base text-[#E5E2E1] mb-6">
              {content.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {content.rows.map(({ label, value }, i) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-3 px-4 transition-colors hover:bg-[rgba(255,106,0,0.04)]"
                  style={{
                    borderBottom: '1px solid rgba(68,71,72,0.12)',
                    borderRight: i % 2 === 0 ? '1px solid rgba(68,71,72,0.08)' : 'none',
                  }}
                >
                  <span className="text-label-industrial">{label}</span>
                  <span
                    className={`font-inter font-medium text-xs ${
                      value.startsWith('✓') ? 'text-[#FFB694]' :
                      value.startsWith('✗') ? 'text-[#FF4040]' :
                      value.startsWith('◑') ? 'text-[#FFA500]' :
                      'text-[#E5E2E1]'
                    }`}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Consultation CTA */}
        <div
          className="mt-12 p-8 rounded-md reveal"
          style={{
            background: 'linear-gradient(135deg, rgba(255,106,0,0.08) 0%, rgba(14,14,14,0) 100%)',
            border: '1px solid rgba(255,106,0,0.15)',
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-manrope font-bold text-lg text-[#E5E2E1] mb-1">
                Architectural Consultation
              </h3>
              <p className="text-xs text-[#8E9192] max-w-lg">
                Need custom specifications for a large-scale infrastructure project?
                Our engineering team provides precise calculations and site-specific detailing.
              </p>
            </div>
            <button className="btn-primary flex items-center gap-2 text-xs whitespace-nowrap">
              <MessageSquare size={14} /> Request Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
