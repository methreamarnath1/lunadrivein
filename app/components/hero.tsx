'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const heroImages = [
  '/homeimg1.jpg',  // correct path
  '/homeimg2.jpg',  // correct path
  '/homeimg3.jpg',  // correct path
]


const heroContent = [
  {
    title: "Luna Drive In",
    subtitle: "Experience luxury & taste under starlit skies",
  },
  {
    title: "Authentic Flavors",
    subtitle: "Savor the best of Indian cuisine",
  },
  {
    title: "Cricket Nights",
    subtitle: "Watch live matches while you dine",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(slideRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
      )
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [currentSlide])

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-scroll-section
    >
      <div ref={slideRef} className="absolute inset-0">
        <img
          src={heroImages[currentSlide]}
          alt={`Luna Drive In ${currentSlide + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="hero-content text-5xl md:text-7xl font-bold mb-4 text-amber-400">
          {heroContent[currentSlide].title}
        </h1>
        <p className="hero-content text-xl md:text-2xl mb-8 text-white">
          {heroContent[currentSlide].subtitle}
        </p>
        <div className="hero-content flex gap-4 justify-center">
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black">
            Order Now
          </Button>
          <Button size="lg" className="bg-transparent hover:bg-white hover:text-black border-2 border-white text-white transition-colors">
            View Menu
          </Button>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={48} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-amber-400' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

