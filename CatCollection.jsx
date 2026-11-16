import React, { useState } from 'react'
import { gsap } from 'gsap'
import { MagneticButton } from './MagneticButton'

const catBreeds = [
  {
    id: 1,
    name: 'Persian Cat',
    description: 'The epitome of feline luxury with long, flowing fur and a gentle, dignified personality.',
    image: '/cats/persian.jpg',
    category: 'Persian'
  },
  {
    id: 2,
    name: 'Maine Coon',
    description: 'The gentle giant of cats, featuring tufted ears, bushy tails, and a friendly, playful nature.',
    image: '/cats/mainecoon.jpg',
    category: 'Maine Coon'
  },
  {
    id: 3,
    name: 'Bengal Cat',
    description: 'Wild beauty in domestic form, with striking leopard-like spots and an energetic, curious spirit.',
    image: '/cats/bingal.jpg',
    category: 'Bengal'
  },
  {
    id: 4,
    name: 'Ragdoll Cat',
    description: 'Docile and affectionate, known for going limp when held and stunning blue eyes and silky fur.',
    image: '/cats/ragdoll.jpg',
    category: 'Ragdoll'
  },
  {
    id: 5,
    name: 'British Shorthair',
    description: 'The classic British cat with a dense plush coat, round face, and calm, reserved demeanor.',
    image: '/cats/british.jpg',
    category: 'British Shorthair'
  },
  {
    id: 6,
    name: 'Siamese Cat',
    description: 'Elegant and vocal with striking blue almond-shaped eyes and a short coat and talkative personality.',
    image: '/cats/siamese.jpg',
    category: 'Siamese'
  }
]

export const CatCollection = () => {
  const [activeCat, setActiveCat] = useState(catBreeds[0])
  const [hoveredCat, setHoveredCat] = useState(null)

  const handleCatSelect = (cat) => {
    setActiveCat(cat)
    // GSAP animation for section transition
    gsap.to('.cat-card', {
      scale: 0.8,
      opacity: 0.5,
      duration: 0.3,
      ease: 'power2.in'
    })
    gsap.to(`.cat-card[data-id="${cat.id}"]`, {
      scale: 1.2,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    })
  }

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif font-extrabold text-4xl md:text-5xl text-charcoal mb-12 text-center">
          Meet Our Feline Royalty
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catBreeds.map((cat) => (
            <div
              key={cat.id}
              className={`relative group cat-card rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 ${hoveredCat?.id === cat.id ? 'border-gold' : ''} ${activeCat.id === cat.id ? 'scale-105' : ''}`}
              onMouseEnter={() => setHoveredCat(cat)}
              onMouseLeave={() => setHoveredCat(null)}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="font-serif font-bold text-lg mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
        <MagneticButton
          className="mt-12 justify-center"
          onClick={() => setActiveCat(catBreeds[0])}
        >
          View All Cats
        </MagneticButton>
      </div>
    </section>
  )
}