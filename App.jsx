import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useGSAP } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { gsap } from 'gsap'
import { Motion } from 'framer-motion'
import { Button } from './components/Button'
import { HeroSection } from './components/HeroSection'
import { CatCollection } from './components/CatCollection'
import { ScrollExperience } from './components/ScrollExperience'
import { InteractiveCat } from './components/InteractiveCat'
import { GallerySection } from './components/GallerySection'
import { FinalSection } from './components/FinalSection'
import { ScrollTrigger } from '@react-three/drei'

const App = () => {
  return (
    <div style={{ overflow: 'hidden', height: '100vh' }}>
      <Canvas
        style={{ width: '100vw', height: '100vh' }}
        camera={{ fov: 75, near: 0.1, far: 100 }}
      >
        <ambientLight intensity={0.5} />
        <directionLight
          position={[10, 10, 10]}
          intensity={1.5}
          castShadow
        />
        <spotLight
          position={[-5, 10, -5]}
          intensity={2}
          angle={0.3}
          penumbbe={1}
          castShadow
        />

        <HeroSection />
        <CatCollection />
        <ScrollExperience />
        <InteractiveCat />
        <GallerySection />
        <FinalSection />
      </Canvas>
    </div>
  )
}

export default App