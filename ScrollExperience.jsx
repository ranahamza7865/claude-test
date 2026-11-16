import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export const ScrollExperience = () => {
  useEffect(() => {
    // GSAP timeline for scroll-based animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scroll-section',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        // toggleActions: 'restart reverse restart reverse',
      },
    })

    // Animate hero section on scroll
    tl.to('.hero-section', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })

    // Animate cat collection on scroll
    tl.from('.cat-section', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '+=1')

    // Animate gallery on scroll
    tl.from('.gallery-section', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '+=1')

    // Animate final section on scroll
    tl.from('.final-section', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '+=1')

    return () => {
      tl.kill()
      gsap.killTweensOf('.scroll-section')
    }
  }, [])

  return (
    <div>
      <section className="scroll-section hero-section py-24 bg-gradient-to-b from-ivory to-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif font-extrabold text-4xl md:text-5xl text-charcoal mb-12 text-center">
            Meet Our Feline Royalty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cat cards will be rendered by CatCollection */}
          </div>
        </div>
      </section>

      <section className="cat-section py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif font-extrabold text-4xl md:text-5xl text-charcoal mb-12 text-center">
            Meet Our Feline Royalty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cat cards */}
          </div>
        </div>
      </section>

      <section className="gallery-section py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif font-extrabold text-4xl md:text-5xl text-cream mb-12 text-center">
            Premium Cat Photography
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Gallery images */}
          </div>
        </div>
      </section>

      <section className="final-section py-24 relative overflow-hidden bg-gradient-to-b from-ivory to-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif font-extrabold text-5xl md:text-6xl lg:text-7xl text-charcoal mb-8 text-center gradient-text">
            THE WORLD IS MORE BEAUTIFUL
          </h2>
          <h2 className="font-serif font-extrabold text-5xl md:text-6xl lg:text-7xl text-charcoal mb-8 text-center gradient-text">
            WITH CATS
          </h2>
          <div className="text-center">
            <MagneticButton className="mt-12">
              EXPLORE THE COLLECTION
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}