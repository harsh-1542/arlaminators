import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const fillRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / total) * 100
      if (fillRef.current) {
        fillRef.current.style.width = `${progress}%`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-progress-track">
      <div className="scroll-progress-fill" ref={fillRef} style={{ width: '0%' }} />
    </div>
  )
}
