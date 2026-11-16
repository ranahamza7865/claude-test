import React from 'react'
import { MagneticButton } from './MagneticButton'

export const FinalSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-ivory to-cream">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="absolute inset-0">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[url('/patterns/fog.png')] bg-cover opacity-5"></div>
        </div>

        <div className="relative flex flex-col items-center text-center">
          <h2 className="font-serif font-extrabold text-5xl md:text-6xl lg:text-7xl text-charcoal mb-8 gradient-text">
            THE WORLD IS MORE BEAUTIFUL
          </h2>
          <h2 className="font-serif font-extrabold text-5xl md:text-6xl lg:text-7xl text-charcoal mb-8 gradient-text">
            WITH CATS
          </h2>
          <MagneticButton
            className="mt-12"
            onClick={() => window.location.href = '/collection'}
          >
            EXPLORE THE COLLECTION
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}