import React, { useRef, useState, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { useMouse } from '@react-three/drei'
import { gsap } from 'gsap'
import { MagneticButton } from './MagneticButton'

export const HeroSection = () => {
  const { camera } = useThree()
  const [mouse] = useMouse({ enablePan: false })
  const ref = useRef(null)

  useEffect(() => {
    // Animate camera based on mouse movement
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      const x = (clientX / window.innerWidth - 0.5) * 0.5
      const y = -(clientY / window.innerHeight - 0.5) * 0.5

      gsap.to(camera.position, {
        x: x * 2,
        y: y * 2,
        duration: 1,
        ease: 'power2.out'
      })

      // Rotate the cat based on mouse position
      if (ref.current) {
        const cat = ref.current
        gsap.to(cat.rotation, {
          y: x * 15,
          duration: 0.8,
          ease: 'power2.out'
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [camera])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-ivory to-cream">
      {/* 3D Elements rendered by parent Canvas */}

      {/* Particle system - using CSS for performance */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className={`w-px h-${Math.random() * 20 + 10} bg-gold opacity-${Math.random() * 0.5 + 0.1} rounded absolute animate-float`}
              style={{ left: (Math.random() - 0.5) * 100 + '%', top: (Math.random() - 0.5) * 100 + '%', animationDelay: (Math.random() * 10) + 's', width: Math.random() + 'px' }}
            />
          ))}
        </div>
      </div>

      {/* Main Persian Cat using CSS3DRenderer approach - simplified with HTML overlay */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          {/* Cat body - decorative sphere */}
          <div className="w-64 h-64 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl blur-lg transform-gpu" aria-label="Persian cat body"></div>
          <div className="w-48 h-48 bg-white rounded-full absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80" aria-label="Cat head"></div>
          <div className="w-16 h-16 bg-white rounded-full absolute top-1/3 left-3/4 -translate-x-1/2 -translate-y-1/2 opacity-70" aria-label="Cat ear"></div>
          <div className="w-16 h-16 bg-white rounded-full absolute bottom-3/4 right-3/4 -translate-x-1/2 -translate-y-1/2 opacity-70 rotate-6" aria-label="Cat ear"></div>
          <div className="w-8 h-8 bg-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-label="Cat eye"></div>
          <div className="w-8 h-8 bg-gray-300 absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80" aria-label="Cat eye"></div>
          <div className="w-2 h-6 bg-gray-800 absolute top-1/2 left-1/2 -translate-x-1/2" aria-label="Cat whiskers"></div>
          <div className="w-2 h-6 bg-gray-800 absolute top-1/2 right-1/2 -translate-x-1/2" aria-label="Cat whiskers"></div>
        </div>
      </div>

      {/* Hero text overlay */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-serif font-extrabold text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6 gradient-text">
          BEAUTY
          <br />
          HAS A SOUL
        </h1>
        <p className="font-serif font-medium text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 gradient-text">
          Discover the extraordinary world of feline elegance.
        </p>
        <MagneticButton className="mt-8">
          Explore Collection
        </MagneticButton>
      </div>
    </section>
  )
}