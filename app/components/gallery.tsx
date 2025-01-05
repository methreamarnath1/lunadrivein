'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'

const galleryImages = [
  {
    src: '/g1.jpg',
    alt: 'Luna Drive-In Experience'
  },
  {
    src: '/g2.jpg',
    alt: 'Movie Night Setup'
  },
  {
    src: '/g3.jpg',
    alt: 'Outdoor Cinema View'
  },
  {
    src: '/g4.jpg',
    alt: 'Drive-In Theater Screen'
  },
  {
    src: '/g5.jpg',
    alt: 'Evening Movie Screening'
  },
  {
    src: '/g6.jpg',
    alt: 'Luna Food Service'
  },
  {
    src: '/g7.jpg',
    alt: 'Outdoor Movie Setup'
  },
  {
    src: '/g8.jpg',
    alt: 'Cinema Under Stars'
  },
  {
    src: '/g9.jpg',
    alt: 'Drive-In Movie Experience'
  },
  {
    src: '/g10.jpg',
    alt: 'Luna Night View'
  },
  {
    src: '/g11.jpg',
    alt: 'Movie Night Ambiance'
  },
  {
    src: '/g12.jpg',
    alt: 'Outdoor Theater Setup'
  },
  {
    src: '/g13.jpg',
    alt: 'Luna Entertainment'
  },
  {
    src: '/g14.jpg',
    alt: 'Drive-In Movie Night'
  },
  {
    src: '/g15.jpg',
    alt: 'Theater Experience'
  },
  {
    src: '/g16.jpg',
    alt: 'Luna Drive-In Theater'
  },
  {
    src: '/g17.jpg',
    alt: 'Luna Drive-In Theater'
  },

  {
    src: '/g18.jpg',
    alt: 'Luna Drive-In Theater'
  }


]

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
    }, galleryRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={galleryRef}
      className="py-20 bg-black"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Gallery</h2>
        <p className="text-gray-400 text-center mb-12">
          Glimpses of your favorite food at Luna
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="gallery-item">
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}

