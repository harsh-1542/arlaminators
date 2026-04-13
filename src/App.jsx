import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSolution from './components/ProblemSolution'
import ProductEcosystem from './components/ProductEcosystem'
import PolysealSpecs from './components/PolysealSpecs'
import Applications from './components/Applications'
import TrustConversion from './components/TrustConversion'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })
    lenisRef.current = lenis

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    gsap.ticker.lagSmoothing(0)

    // Global reveal animations
    const setupReveal = () => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        })
      })

      gsap.utils.toArray('.reveal-left').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        })
      })

      gsap.utils.toArray('.reveal-right').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        })
      })
    }

    // Give components time to mount
    setTimeout(setupReveal, 200)

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolution />
        <ProductEcosystem />
        <PolysealSpecs />
        <Applications />
        <TrustConversion />
      </main>
      <Footer />
    </div>
  )
}
