import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, Users, MapPin, Phone, Mail, Building, ArrowRight, Star, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const metrics = [
  { stat: '30+', label: 'Years of Excellence', desc: 'Decades of engineering mastery in industrial protection systems.' },
  { stat: '11,000', label: 'Sq.Ft Manufacturing', desc: 'State-of-the-art Vadodara facility with high-capacity lamination lines.' },
  { stat: 'ISO', label: '9001:2015 Certified', desc: 'Every micron meets international quality standards.' },
  { stat: '15', label: 'Global Patents', desc: 'Proprietary formulations for unmatched protection technology.' },
]

const testimonials = [
  {
    quote: "A.R Laminators supplied complete pipeline wrapping for our 180km gas distribution network. Zero corrosion issues after 8 years.",
    author: "Chief Engineer",
    company: "GAIL India Ltd.",
    rating: 5,
  },
  {
    quote: "The Polyseal membrane system on our foundation project passed all vacuum tests first time. Exceptional product quality.",
    author: "Project Manager",
    company: "L&T Infrastructure",
    rating: 5,
  },
  {
    quote: "Consistent supply, on-site technical support, and reliable performance. The go-to partner for our waterproofing projects.",
    author: "Procurement Head",
    company: "NMDC Steel Ltd.",
    rating: 5,
  },
]

export default function TrustConversion() {
  const sectionRef = useRef(null)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((t) => (t + 1) % testimonials.length)
    }, 5000)

    const ctx = gsap.context(() => {
      gsap.from('.metric-card', {
        opacity: 0, y: 50, stagger: 0.12, duration: 0.8,
        scrollTrigger: { trigger: '.metrics-grid', start: 'top 80%', once: true }
      })

      gsap.from('.form-field', {
        opacity: 0, y: 20, stagger: 0.08, duration: 0.6,
        scrollTrigger: { trigger: '#contact-form', start: 'top 85%', once: true }
      })
    }, sectionRef)

    return () => { clearInterval(interval); ctx.revert() }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    gsap.from('.success-msg', { opacity: 0, scale: 0.9, duration: 0.5, ease: 'back.out(1.5)' })
  }

  return (
    <section id="about" ref={sectionRef} className="section-mid py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Trust header */}
        <div className="flex items-center gap-4 mb-4 reveal">
          <div className="w-8 h-px bg-[#FF6A00]" />
          <span className="text-label-industrial text-[#FF6A00]">30+ Years of Industrial Excellence</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <h2 className="text-headline text-[#E5E2E1] reveal">
            Engineered at Scale.
            <br />
            <span className="gradient-orange-text">Trusted by Industry.</span>
          </h2>
          <p className="text-sm text-[#C4C7C7] leading-relaxed mt-2 reveal">
            Decades of engineering mastery in manufacturing and industrial protection systems.
            Our Vadodara facility serves as the nerve center for precision engineering — equipped
            with high-capacity lamination lines and automated quality control.
          </p>
        </div>

        {/* Metrics */}
        <div className="metrics-grid grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {metrics.map(({ stat, label, desc }) => (
            <div
              key={label}
              className="metric-card card-industrial p-6 group hover:bg-[#2A2A2A] transition-colors duration-300 cursor-default"
            >
              <p className="font-manrope font-black text-3xl gradient-orange-text mb-1">{stat}</p>
              <p className="font-manrope font-bold text-xs text-[#E5E2E1] mb-2">{label}</p>
              <p className="text-label-industrial leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Facility strip */}
        <div
          className="relative rounded-md overflow-hidden mb-20 p-10 reveal"
          style={{
            background: 'linear-gradient(135deg, #1C1B1B 0%, #0E0E0E 100%)',
            border: '1px solid rgba(68,71,72,0.15)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,106,0,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,106,0,0.04) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            <div className="lg:col-span-2">
              <p className="text-label-industrial text-[#FF6A00] mb-3">Manufacturing Nerve Centre</p>
              <h3 className="font-manrope font-black text-2xl text-[#E5E2E1] mb-4">
                Vadodara, Gujarat
              </h3>
              <p className="text-sm text-[#C4C7C7] leading-relaxed mb-6">
                Our 11,000 sq.ft facility is equipped with high-capacity lamination lines,
                automated QC systems, and a dedicated R&D lab — ensuring every micron
                of product meets global standards before leaving the factory floor.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-[#FF6A00]" />
                  <span className="text-xs text-[#C4C7C7]">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building size={16} className="text-[#FF6A00]" />
                  <span className="text-xs text-[#C4C7C7]">11,000 sq.ft</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-[#FF6A00]" />
                  <span className="text-xs text-[#C4C7C7]">50+ Engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#FF6A00]" />
                  <span className="text-xs text-[#C4C7C7]">Pan-India Delivery</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center relative animate-pulse-orange"
                style={{ background: 'rgba(255,106,0,0.1)', border: '2px solid rgba(255,106,0,0.3)' }}
              >
                <div className="text-center">
                  <p className="font-manrope font-black text-3xl text-[#FFB694]">ISO</p>
                  <p className="text-label-industrial text-[#FF6A00]">CERTIFIED</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8 reveal">
            <div className="w-8 h-px bg-[#FF6A00]" />
            <span className="text-label-industrial text-[#FF6A00]">Client Testimonials</span>
          </div>
          <div className="relative overflow-hidden">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`card-industrial p-8 transition-all duration-700 ${
                  i === activeTestimonial ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
                style={{ borderLeft: '3px solid #FF6A00' }}
              >
                <div className="flex gap-1 mb-5">
                  {Array(t.rating).fill(null).map((_, j) => (
                    <Star key={j} size={14} className="fill-[#FF6A00] text-[#FF6A00]" />
                  ))}
                </div>
                <p className="text-[#E5E2E1] text-base leading-relaxed italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-manrope font-bold text-sm text-[#E5E2E1]">{t.author}</p>
                  <p className="text-label-industrial text-[#FF6A00]">{t.company}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === activeTestimonial ? '24px' : '8px',
                    height: '4px',
                    borderRadius: '2px',
                    background: i === activeTestimonial ? '#FF6A00' : '#353534',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form + Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="flex items-center gap-4 mb-6 reveal">
              <div className="w-8 h-px bg-[#FF6A00]" />
              <span className="text-label-industrial text-[#FF6A00]">Build Protection That Lasts Decades</span>
            </div>
            <h2 className="text-headline text-[#E5E2E1] mb-6 reveal">
              Industrial Expert.<br />
              Technical Support Available.
            </h2>
            <p className="text-sm text-[#C4C7C7] leading-relaxed mb-10 reveal">
              Precision engineered lamination and industrial coating systems
              for high-performance infrastructure projects across India.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Technical Hotline', value: '+91 XXXX XXXXXX' },
                { icon: Mail, label: 'Email', value: 'info@arlaminators.com' },
                { icon: MapPin, label: 'Head Office', value: 'Vadodara, Gujarat – 390XXX' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 reveal">
                  <div
                    className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,106,0,0.1)' }}
                  >
                    <Icon size={16} className="text-[#FF6A00]" />
                  </div>
                  <div>
                    <p className="text-label-industrial">{label}</p>
                    <p className="font-inter font-medium text-sm text-[#E5E2E1]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div id="contact-form">
            {submitted ? (
              <div className="success-msg card-industrial p-10 flex flex-col items-center justify-center text-center h-full">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-pulse-orange"
                  style={{ background: 'rgba(255,106,0,0.15)' }}
                >
                  <Award size={28} className="text-[#FF6A00]" />
                </div>
                <h3 className="font-manrope font-bold text-xl text-[#E5E2E1] mb-2">Enquiry Submitted!</h3>
                <p className="text-sm text-[#C4C7C7]">
                  Our technical team will contact you within 24 hours with precision-engineered recommendations.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-industrial p-8 space-y-5"
                aria-label="Contact form"
              >
                <h3 className="font-manrope font-bold text-lg text-[#E5E2E1] mb-2">
                  Request a Technical Consultation
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="form-field">
                    <label className="text-label-industrial block mb-2">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-3 text-sm text-[#E5E2E1] rounded transition-all duration-200"
                      style={{
                        background: 'var(--surface-container-lowest)',
                        border: 'none',
                        outline: 'none',
                        borderBottom: '1px solid rgba(68,71,72,0.4)',
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onFocus={(e) => e.target.style.borderBottom = '1px solid #FF6A00'}
                      onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(68,71,72,0.4)'}
                      placeholder="John Engineer"
                    />
                  </div>
                  <div className="form-field">
                    <label className="text-label-industrial block mb-2">Company</label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-3 py-3 text-sm text-[#E5E2E1] rounded transition-all duration-200"
                      style={{
                        background: 'var(--surface-container-lowest)',
                        border: 'none',
                        outline: 'none',
                        borderBottom: '1px solid rgba(68,71,72,0.4)',
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onFocus={(e) => e.target.style.borderBottom = '1px solid #FF6A00'}
                      onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(68,71,72,0.4)'}
                      placeholder="L&T Infrastructure"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="text-label-industrial block mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-3 text-sm text-[#E5E2E1] rounded"
                    style={{
                      background: 'var(--surface-container-lowest)',
                      border: 'none',
                      outline: 'none',
                      borderBottom: '1px solid rgba(68,71,72,0.4)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onFocus={(e) => e.target.style.borderBottom = '1px solid #FF6A00'}
                    onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(68,71,72,0.4)'}
                    placeholder="engineer@company.com"
                  />
                </div>

                <div className="form-field">
                  <label className="text-label-industrial block mb-2">Phone</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-3 text-sm text-[#E5E2E1] rounded"
                    style={{
                      background: 'var(--surface-container-lowest)',
                      border: 'none',
                      outline: 'none',
                      borderBottom: '1px solid rgba(68,71,72,0.4)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onFocus={(e) => e.target.style.borderBottom = '1px solid #FF6A00'}
                    onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(68,71,72,0.4)'}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="form-field">
                  <label className="text-label-industrial block mb-2">Project Requirements</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-3 text-sm text-[#E5E2E1] rounded resize-none"
                    style={{
                      background: 'var(--surface-container-lowest)',
                      border: 'none',
                      outline: 'none',
                      borderBottom: '1px solid rgba(68,71,72,0.4)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onFocus={(e) => e.target.style.borderBottom = '1px solid #FF6A00'}
                    onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(68,71,72,0.4)'}
                    placeholder="Describe your project — pipeline diameter, affected area, application type..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  id="submit-consultation"
                >
                  Submit Technical Enquiry <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
