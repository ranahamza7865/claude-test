import React from 'react'
import { gsap } from 'gsap'
import { MagneticButton } from './MagneticButton'

const galleryImages = [
  {
    id: 1,
    src: '/gallery/cat1.jpg',
    width: 2,
    height: 1,
    title: 'Persian Elegance',
    category: 'Portrait'
  },
  {
    id: 2,
    src: '/gallery/cat2.jpg',
    width: 1,
    height: 1,
    title: 'Midnight Stroll',
    category: 'Action'
  },
  {
    id: 3,
    src: '/gallery/cat3.jpg',
    width: 1,
    height: 2,
    title: 'Golden Hour',
    category: 'Landscape'
  },
  {
    id: 4,
    src: '/gallery/cat4.jpg',
    width: 2,
    height: 1,
    title: 'Playful Paws',
    category: 'Portrait'
  },
  {
    id: 5,
    src: '/gallery/cat5.jpg',
    width: 1,
    height: 1,
    title: 'Silent Observer',
    category: 'Detail'
  },
  {
    id: 6,
    src: '/gallery/cat6.jpg',
    width: 1,
    height: 2,
    title: 'Feline Grace',
    category: 'Action'
  }
]

export const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(null)

  const handleImageClick = (image) => {
    setActiveImage(image)
    // Trigger GSAP animation
    gsap.to('.gallery-item', {
      scale: 0.8,
      opacity: 0.5,
      duration: 0.3,
      ease: 'power2.in'
    })
    gsap.to(`.gallery-item[data-id="${image.id}"]`, {
      scale: 1.1,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.7)'
    })
  }

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif font-extrabold text-4xl md:text-5xl text-cream mb-12 text-center">
          Premium Cat Photography
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`relative gallery-item rounded-2xl overflow-hidden cursor-pointer ${activeImage?.id === image.id ? 'scale-105' : ''}`}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${activeImage?.id === image.id ? 'scale-105' : ''}`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="absolute top-4 left-4 text-white font-serif font-bold text-lg">{image.title}</h3>
                <p className="absolute bottom-4 right-4 text-white text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
        <MagneticButton
          className="mt-12 justify-center"
          onClick={() => setActiveImage(null)}
        >
          Close Gallery
        </MagneticButton>
      </div>
    </section>
  )
}