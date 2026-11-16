import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'

export const MagneticButton = ({ children, className }) => {
  const ref = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(ref.current, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.6,
        ease: 'power2.out'
      })

      setMouse({ x: e.clientX, y: e.clientY })
    }

    const handleMouseLeave = () => {
      gsap.to(ref.current, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`relative inline-block px-6 py-3 rounded-full border-2 border-cream bg-transparent text-lg font-medium transition-all cursor-pointer ${className}`
        } onMouseMove="this.style.transform = 'translateY(-2px)'" onMouseLeave="this.style.transform = 'translateY(0)'"
      >
      {children}
    </div>
  )
}