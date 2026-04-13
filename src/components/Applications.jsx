import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, Pipette, Factory, Route, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const applications = [
  {
    id: 'roof',
    icon: Building2,
    title: 'Roof Waterproofing',
    desc: 'Multilayered bitumen-polymer protection for expansive commercial rooftops, engineered for extreme thermal shifts.',
    stat: '15yr+',
    statLabel: 'Warranty',
    color: '#FF6A00',
    tags: ['Commercial', 'Industrial', 'Residential'],
  },
  {
    id: 'pipeline',
    icon: Pipette,
    title: 'Underground Pipelines',
    desc: 'Anti-corrosive heavy-duty wrapping for subterranean infrastructure, ensuring 50-year structural integrity.',
    stat: '50yr',
    statLabel: 'Lifespan',
    color: '#CD5400',
    tags: ['Oil & Gas', 'Water', 'Sewage'],
  },
  {
    id: 'tanks',
    icon: Factory,
    title: 'Industrial Tanks',
    desc: 'Chemical-resistant internal lining and external lamination for hazardous material storage facilities.',
    stat: '100%',
    statLabel: 'Chemical Inert',
    color: '#7B2F00',
    tags: ['Chemical', 'Petroleum', 'Municipal'],
  },
  {
    id: 'roads',
    icon: Route,
    title: 'Roads & Highways',
    desc: 'Geomembrane separation layers for high-load highway construction, preventing moisture migration and structural cracks.',
    stat: '200T',
    statLabel: 'Load Rated',
    color: '#FF8C00',
    tags: ['National Highway', 'Urban Roads', 'Bridges'],
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Surface Preparation',
    desc: 'Mechanical cleaning and grit-blasting to achieve the required anchor profile for maximum adhesion.',
    detail: 'Target surface profile: Sa 2.5 or equivalent. Roughness: 50–70μm (Rz).',
  },
  {
    num: '02',
    title: 'Primer Application',
    desc: 'Epoxy-based penetrating primer application to seal pores and create a chemical bond with the substrate.',
    detail: 'Apply at 4–6 sq.m/L. Allow 4–6 hours drying time before membrane installation.',
  },
  {
    num: '03',
    title: 'Membrane Installation',
    desc: 'High-heat fusion or cold-applied lamination of the primary structural membrane layer.',
    detail: 'Torch temperature: 400–500°C. Ensure 150mm end-lap and 100mm side-lap minimum.',
  },
  {
    num: '04',
    title: 'Final Protection',
    desc: 'UV-resistant top-coat application and rigorous vacuum-testing for integrity verification.',
    detail: 'Vacuum test at -0.2 bar. Confirm zero leakage across all laps and penetrations.',
  },
]

export default function Applications() {
  const [activeApp, setActiveApp] = useState(applications[0])
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)
  const appCardRef = useRef(null)
  const progressRef = useRef(null)

  const handleAppChange = (app) => {
    if (app.id === activeApp.id) return
    gsap.to(appCardRef.current, {
      opacity: 0, scale: 0.97, duration: 0.2,
      onComplete: () => {
        setActiveApp(app)
        gsap.to(appCardRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' })
      }
    })
  }

  // Auto-advance process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % processSteps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Progress bar animation
  useEffect(() => {
    if (progressRef.current) {
      gsap.fromTo(progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 3, ease: 'linear' }
      )
    }
  }, [activeStep])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.app-tab-btn', {
        opacity: 0, x: -30, stagger: 0.1, duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }
      })
      gsap.from('.process-step', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7,
        scrollTrigger: { trigger: '#process', start: 'top 80%', once: true }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="applications" ref={sectionRef} className="section-darker py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center gap-4 mb-4 reveal">
          <div className="w-8 h-px bg-[#FF6A00]" />
          <span className="text-label-industrial text-[#FF6A00]">Application Showcase</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <h2 className="text-headline text-[#E5E2E1] reveal">
            Uncompromising Protection
            <br />
            <span className="gradient-orange-text">Across Every Environment</span>
          </h2>
          <p className="text-sm text-[#C4C7C7] leading-relaxed mt-2 reveal">
            Our high-performance lamination systems provide industrial-grade protection
            across the world's most demanding environments.
          </p>
        </div>

        {/* Applications grid */}
        <div className="grid lg:grid-cols-3 gap-5 mb-20">
          {/* Sidebar tabs */}
          <div className="space-y-2">
            {applications.map((app) => {
              const Icon = app.icon
              return (
                <button
                  key={app.id}
                  onClick={() => handleAppChange(app)}
                  className={`app-tab-btn w-full flex items-center gap-4 p-4 rounded text-left transition-all duration-300 ${
                    activeApp.id === app.id
                      ? 'bg-[#2A2A2A] text-[#E5E2E1]'
                      : 'text-[#8E9192] hover:bg-[#1C1B1B] hover:text-[#C4C7C7]'
                  }`}
                >
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: activeApp.id === app.id ? `${app.color}22` : 'rgba(53,53,52,0.5)' }}
                  >
                    <Icon size={16} style={{ color: activeApp.id === app.id ? app.color : '#8E9192' }} />
                  </div>
                  <div>
                    <p className="font-manrope font-bold text-xs">{app.title}</p>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {app.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-label-industrial px-1.5 py-0.5 rounded-sm"
                          style={{ background: 'rgba(68,71,72,0.3)' }}
                        >{tag}</span>
                      ))}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Feature panel */}
          <div ref={appCardRef} className="lg:col-span-2">
            <div
              className="card-industrial h-full p-8 relative overflow-hidden"
              style={{ borderTop: `2px solid ${activeApp.color}` }}
            >
              {/* Decorative bg */}
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top right, ${activeApp.color}15, transparent 70%)`,
                }}
              />

              <div className="flex items-start justify-between mb-6">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-sm mb-3 text-label-industrial"
                    style={{ background: `${activeApp.color}18`, color: activeApp.color }}
                  >
                    {activeApp.tags.map((t, i) => (
                      <span key={t}>{t}{i < activeApp.tags.length - 1 ? ' · ' : ''}</span>
                    ))}
                  </div>
                  <h3 className="font-manrope font-black text-2xl text-[#E5E2E1]">{activeApp.title}</h3>
                </div>
                <div className="text-right">
                  <p className="font-manrope font-black text-3xl" style={{ color: activeApp.color }}>
                    {activeApp.stat}
                  </p>
                  <p className="text-label-industrial">{activeApp.statLabel}</p>
                </div>
              </div>

              <p className="text-sm text-[#C4C7C7] leading-relaxed mb-8">{activeApp.desc}</p>

              {/* Visual progress bars (mock stats) */}
              <div className="space-y-4 mb-8">
                {['Corrosion Resistance', 'Tensile Strength', 'Thermal Stability', 'UV Durability'].map((metric, i) => {
                  const pct = [95, 88, 92, 97][i]
                  return (
                    <div key={metric}>
                      <div className="flex justify-between mb-1">
                        <span className="text-label-industrial">{metric}</span>
                        <span className="text-label-industrial" style={{ color: activeApp.color }}>{pct}%</span>
                      </div>
                      <div className="h-1 rounded-full" style={{ background: 'var(--surface-container-highest)' }}>
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${activeApp.color}, #FFB694)` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              <button className="btn-primary text-xs flex items-center gap-2">
                View Case Studies <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div id="process" className="pt-8">
          <div className="flex items-center gap-4 mb-4 reveal">
            <div className="w-8 h-px bg-[#FF6A00]" />
            <span className="text-label-industrial text-[#FF6A00]">How It Works</span>
          </div>
          <h2 className="text-headline text-[#E5E2E1] mb-12 reveal">
            Precision-Engineered Deployment
          </h2>

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                className={`process-step card-industrial p-6 cursor-pointer transition-all duration-300 ${
                  activeStep === i ? 'bg-[#2A2A2A]' : 'hover:bg-[#201F1F]'
                }`}
                style={{
                  borderTop: activeStep === i ? '2px solid #FF6A00' : '2px solid transparent',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-manrope font-black text-4xl leading-none"
                    style={{ color: activeStep === i ? '#FF6A00' : '#353534' }}
                  >
                    {step.num}
                  </span>
                  {activeStep === i && (
                    <div className="w-16 h-0.5 rounded-full overflow-hidden" style={{ background: '#353534' }}>
                      <div ref={progressRef} className="h-full bg-[#FF6A00] origin-left" />
                    </div>
                  )}
                </div>
                <h3 className="font-manrope font-bold text-sm text-[#E5E2E1] mb-2">{step.title}</h3>
                <p className="text-xs text-[#8E9192] leading-relaxed mb-3">{step.desc}</p>
                {activeStep === i && (
                  <p
                    className="text-xs text-[#C4C7C7] leading-relaxed p-3 rounded"
                    style={{ background: 'rgba(255,106,0,0.06)', borderLeft: '2px solid #FF6A00' }}
                  >
                    {step.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
