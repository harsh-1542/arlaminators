import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ChevronDown, ArrowRight, Shield, Zap, Globe } from 'lucide-react'

const stats = [
  { value: '1991', label: 'Est.' },
  { value: '300+', label: 'Projects' },
  { value: '50+', label: 'Yr Lifespan' },
  { value: 'ISO', label: '9001:2015' },
]

export default function HeroSection() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const badgeRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const orb1Ref = useRef(null)
  const orb2Ref = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Entrance animation sequence
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo(titleRef.current.children,
        { opacity: 0, y: 60, rotateX: -15 },
        { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.15 },
        '-=0.4'
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(ctaRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 },
        '-=0.4'
      )
      .fromTo(statsRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '-=0.3'
      )

      // Floating orb animation
      gsap.to(orb1Ref.current, {
        x: 30, y: -20, duration: 6, ease: 'sine.inOut', repeat: -1, yoyo: true
      })
      gsap.to(orb2Ref.current, {
        x: -20, y: 30, duration: 8, ease: 'sine.inOut', repeat: -1, yoyo: true
      })

      // Parallax on scroll
      gsap.to(gridRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden section-darker pb-7"
      style={{ paddingTop: '64px' }}
    >
      {/* Background grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(68,71,72,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(68,71,72,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Gradient orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,0,0.12) 0%, transparent 70%)',
          filter: 'blur(1px)',
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 left-[10%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,198,197,0.05) 0%, transparent 70%)',
          filter: 'blur(1px)',
        }}
      />

      {/* Corner labels */}
      <div className="absolute top-20 right-6 text-right hidden lg:block">
        <p className="text-label-industrial">Unit 04-B // Thermal Shield</p>
        <p className="text-label-industrial mt-1 text-[#FF6A00]">PRECISION</p>
        <p className="text-label-industrial">Tolerance: 0.001mm</p>
      </div>
      <div className="absolute bottom-12 left-6 hidden lg:block">
        <p className="text-label-industrial">EST.</p>
        <p className="font-manrope font-black text-[#FFB694] text-2xl leading-none">1991</p>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-12">
        {/* Badge */}
        <div ref={badgeRef} className="mb-8 flex items-center gap-3 opacity-0">
          <div className="w-6 h-px bg-[#FF6A00]" />
          <span className="text-label-industrial text-[#FF6A00] tracking-[0.3em]">
            Infrastructure Protection Systems
          </span>
          <div className="w-6 h-px bg-[#FF6A00]" />
        </div>

        {/* Title */}
        <div
          ref={titleRef}
          className="overflow-hidden mb-8"
          style={{ perspective: '1000px' }}
        >
          <h1 className="text-display text-[#E5E2E1] leading-[1.02]">
            <span className="block overflow-hidden">
              <span className="block">Protecting Infrastructure</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block gradient-orange-text">That Powers</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block">the Nation</span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-[#C4C7C7] text-lg max-w-xl mb-10 leading-relaxed opacity-0"
        >
          Advanced Waterproofing, Anti-Corrosion &amp; Pipeline Protection Systems Since 1991.
          Precision engineered for the world's most demanding environments.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-16">
          <button className="btn-primary flex items-center gap-2" id="hero-cta-primary">
            Request Technical Consultation
            <ArrowRight size={16} />
          </button>
          <button className="btn-secondary flex items-center gap-2" id="hero-cta-secondary">
            View Product Systems
          </button>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="flex flex-wrap gap-8 pt-8"
          style={{ borderTop: '1px solid rgba(68,71,72,0.15)' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="opacity-0">
              <p className="font-manrope font-black text-3xl text-[#FFB694] leading-none">
                {stat.value}
              </p>
              <p className="text-label-industrial mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature pills */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Shield, title: 'Anti-Corrosion', desc: 'Multi-layer tape systems for acidic soil conditions' },
            { icon: Zap, title: 'Waterproofing', desc: 'Advanced membranes for critical foundations' },
            { icon: Globe, title: 'Pipeline Systems', desc: 'Protection for oil, gas & water networks' },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-industrial p-5 group hover:bg-[#2A2A2A] transition-all duration-300 cursor-pointer"
              style={{ borderLeft: '2px solid rgba(255,106,0,0.2)' }}
            >
              <Icon size={18} className="text-[#FF6A00] mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-manrope font-bold text-sm text-[#E5E2E1] mb-1">{title}</p>
              <p className="text-xs text-[#C4C7C7] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-label-industrial">SCROLL</span>
        <ChevronDown size={14} className="text-[#FF6A00]" />
      </div>
    </section>
  )
}
