import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AlertTriangle, CheckCircle, TrendingDown, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const problems = [
  { icon: AlertTriangle, title: 'Corrosion', stat: '40%', numStat: 40, prefix: '', suffix: '%', desc: 'Operational lifespan lost within 5 years of soil or saline exposure.' },
  { icon: TrendingDown, title: 'Leakage', stat: '₹2Cr+', numStat: 2, prefix: '₹', suffix: 'Cr+', desc: 'Average annual loss from undetected pipeline deterioration.' },
  { icon: AlertTriangle, title: 'Structural Failure', stat: '60%', numStat: 60, prefix: '', suffix: '%', desc: 'Infrastructure failures traceable to inadequate protective systems.' },
]

const solutions = [
  { title: 'Multi-Layer Lamination', desc: 'Creates an impenetrable barrier fusing polymer science with metallic substrates for zero-permeation protection.' },
  { title: '50+ Year Lifespan', desc: 'Extending asset life beyond industry standards with zero scheduled maintenance requirements.' },
  { title: 'Chemical Resistance', desc: 'Inert to soil acids, chlorides, and sulphates — proven in the harshest subterranean environments.' },
]

export default function ProblemSolution() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated divider line
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 85%',
            once: true,
          }
        }
      )

      // Problem cards stagger
      gsap.utils.toArray('.problem-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, rotateY: -5 },
          {
            opacity: 1, y: 0, rotateY: 0,
            duration: 0.8, delay: i * 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%', once: true }
          }
        )
      })

      // Solution items
      gsap.utils.toArray('.solution-item').forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: 40 },
          {
            opacity: 1, x: 0,
            duration: 0.7, delay: i * 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 90%', once: true }
          }
        )
      })

      // Counter animation for the stat
      gsap.utils.toArray('.stat-counter').forEach((el) => {
        const target = parseFloat(el.dataset.target)
        const prefix = el.dataset.prefix || ''
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo({ val: 0 }, { val: target }, {
              duration: 1.5,
              ease: 'power2.out',
              onUpdate: function () {
                el.textContent = prefix + Math.round(this.targets()[0].val) + (el.dataset.suffix || '')
              }
            })
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="systems"
      ref={sectionRef}
      className="section-mid py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-6 reveal">
          <div className="w-8 h-px bg-[#FF6A00]" />
          <span className="text-label-industrial text-[#FF6A00]">The Problem</span>
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-headline text-[#E5E2E1] mb-4 reveal">
              Unprotected Assets Fail.
              <br />
              <span className="gradient-orange-text">The Cost is Catastrophic.</span>
            </h2>
          </div>
          <div>
            <p className="text-[#C4C7C7] text-base leading-relaxed reveal">
              Unprotected infrastructure assets lose up to <strong className="text-[#FFB694]">40% of their operational
              lifespan</strong> within the first 5 years of soil contact or saline exposure.
              This translates to billions in unplanned capital expenditure across India's
              infrastructure sector.
            </p>
          </div>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {problems.map(({ icon: Icon, title, stat, numStat, prefix, suffix, desc }) => (
            <div
              key={title}
              className="problem-card card-industrial p-7 group cursor-default"
              style={{
                background: 'linear-gradient(135deg, #201F1F 0%, #1C1B1B 100%)',
                borderTop: '1px solid rgba(239,68,68,0.15)',
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <Icon size={20} className="text-[#FF6A00]" />
                <span
                  className="font-manrope font-black text-3xl text-[#E5E2E1] stat-counter"
                  data-target={numStat}
                  data-prefix={prefix}
                  data-suffix={suffix}
                >
                  {stat}
                </span>
              </div>
              <h3 className="font-manrope font-bold text-base text-[#E5E2E1] mb-2">{title}</h3>
              <p className="text-xs text-[#8E9192] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          ref={lineRef}
          className="h-px mb-20 origin-left"
          style={{ background: 'linear-gradient(90deg, #FF6A00, transparent)', scaleX: 0 }}
        />

        {/* Solution side */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual block */}
          <div className="relative">
            <div
              className="aspect-square max-w-sm mx-auto flex items-center justify-center rounded-lg overflow-hidden"
              style={{ background: 'var(--surface-container-high)' }}
            >
              {/* Schematic layers visualization */}
              <div className="w-full h-full p-8 flex flex-col gap-2 justify-center">
                <p className="text-label-industrial text-center mb-4 reveal">Cross-Section Analysis</p>
                {[
                  { label: 'UV Resistance Coating', w: '100%', color: '#FFB694' },
                  { label: 'APP Modified Membrane', w: '90%', color: '#FF8C00' },
                  { label: 'Bitumen Bonding Layer', w: '80%', color: '#FF6A00' },
                  { label: 'Primer Penetration', w: '70%', color: '#7B2F00' },
                  { label: 'Steel Substrate', w: '100%', color: '#353534' },
                ].map((layer) => (
                  <div key={layer.label} className="reveal flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-label-industrial">{layer.label}</span>
                    </div>
                    <div
                      className="h-4 rounded-sm"
                      style={{ width: layer.w, background: layer.color, opacity: 0.85 }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 card-industrial px-4 py-3 animate-float"
              style={{ borderLeft: '3px solid #FF6A00' }}
            >
              <p className="font-manrope font-bold text-[#FFB694] text-lg leading-none">50+</p>
              <p className="text-label-industrial mt-0.5">Year Guarantee</p>
            </div>
          </div>

          {/* Solution list */}
          <div>
            <div className="flex items-center gap-4 mb-6 reveal">
              <div className="w-8 h-px bg-[#FF6A00]" />
              <span className="text-label-industrial text-[#FF6A00]">Engineered Protection</span>
            </div>
            <h2 className="text-headline text-[#E5E2E1] mb-8 reveal">
              The Multi-Layer Blueprint
            </h2>

            <div className="space-y-6">
              {solutions.map((sol, i) => (
                <div key={i} className="solution-item flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={18} className="text-[#FF6A00]" />
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-sm text-[#E5E2E1] mb-1">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-[#8E9192] leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4 reveal">
              <button className="btn-primary flex items-center gap-2 text-xs">
                Explore Systems <ArrowRight size={14} />
              </button>
              <span className="text-label-industrial">Zero Maintenance Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
