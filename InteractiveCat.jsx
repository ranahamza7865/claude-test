import React, { useRef, useEffect, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { useMouse } from '@react-three/drei'
import { gsap } from 'gsap'

export const InteractiveCat = () => {
  const { camera } = useThree()
  const [mouse] = useMouse()
  const ref = useRef(null)

  useEffect(() => {
    // Head tracking based on mouse position
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 20
      const y = -(event.clientY / window.innerHeight - 0.5) * 20

      if (ref.current) {
        gsap.to(ref.current.rotation, {
          y: x * 0.5,
          x: y * 0.5,
          duration: 0.5,
          ease: 'power2.out'
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [camera])

  useEffect(() => {
    // Blinking animation
    const blinkInterval = setInterval(() => {
      if (ref.current) {
        const eye = ref.current.children[3] // eyes
        if (eye) {
          gsap.to(eye.material, {
            opacity: 0,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
              gsap.to(eye.material, {
                opacity: 1,
                duration: 0.5
              })
            }
          })
        }
      }
    }, 4000)

    return () => clearInterval(blinkInterval)
  }, [])

  useEffect(() => {
    // Tail movement - subtle sway
    const tail = ref.current?.children[ref.current.children.length - 1]
    if (tail) {
      const swayInterval = setInterval(() => {
        gsap.to(tail.rotation, {
          z: Math.random() * 20 - 10,
          duration: 1,
          yoyo: true,
          repeat: -1
        })
      }, 2000)

      return () => clearInterval(swayInterval)
    }
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-cream to-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex justify-center">
          <group ref={ref} position={[0, 0, 0]}>
            {/* Cat body */}
            <mesh receiveShadow castShadow>
              <sphereGeometry args={[3, 3, 32, 32]} />
              <meshStandardMaterial
                color="#f5f5f5"
                roughness={0.1}
                metalness={0.05}
              />
            </mesh>

            {/* Cat head */}
            <mesh position={[0, 0, 1.5]} receiveShadow castShadow>
              <sphereGeometry args={[2.5, 2.5, 32, 32]} />
              <meshStandardMaterial
                color="#ffffff"
                roughness={0.08}
                metalness={0.03}
              />
            </mesh>

            {/* Ears */}
            <mesh position={[0.8, 1.5, 0]} rotation={[0, 0, 0.3]} receiveShadow castShadow>
              <sphereGeometry args=[[0.8, 0.8, 0.8]] />
              <meshStandardMaterial color="#ffffff" roughness={0.1} />
            </mesh>

            <mesh position=[[-0.8, 1.5, 0]] rotation={[0, 0, -0.3]} receiveShadow castShadow>
              <sphereGeometry args=[[0.8, 0.8, 0.8]] />
              <meshStandardMaterial color="#ffffff" roughness={0.1} />
            </mesh>

            {/* Eyes */}
            <mesh position={[0.5, 0.2, 2.2]} receiveShadow castShadow>
              <sphereGeometry args={[0.3, 0.3]} />
              <meshStandardMaterial
                color="#1a1a2e"
                emissive="#0f0f23"
                emissiveIntensity={0.8}
              />
            </mesh>

            <mesh position=[[-0.5, 0.2, 2.2]] receiveShadow castShadow>
              <sphereGeometry args={[0.3, 0.3]} />
              <meshStandardMaterial
                color="#1a1a2e"
                emissive="#0f0f23"
                emissiveIntensity={0.8}
              />
            </mesh>

            {/* Nose */}
            <mesh position={[0, -0.3, 2.8]} receiveShadow castShadow>
              <sphereGeometry args={[0.2, 0.2]} />
              <meshStandardMaterial color="#e8c4bc" />
            </mesh>

            {/* Whiskers */}
            {[1, -1].map((side, i) => (
              <mesh
                key={i}
                position={[
                  side * 1.8,
                  -0.2 + (i * 0.3),
                  3.2
                ]}
                rotation={[0, 0, side * 0.3]}
              >
                <cylinderGeometry args={[0.05, 0.05, 2]} />
                <meshStandardMaterial color="#1a1a2e" />
              </mesh>
            ))}

            {/* Tail */}
            <mesh position={[0, -2, -2]} rotation={[0, 0, 0.5]} receiveShadow castShadow>
              <torusGeometry args={[0.5, 0.2]} />
              <meshStandardMaterial color="#ffe6cc" roughness={0.3} />
            </mesh>
          </group>
        </div>
      </div>
    </section>
  )
}