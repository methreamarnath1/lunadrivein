'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'

const features = [
  { icon: '🍽️', title: 'Authentic Cuisine', description: 'Savor the flavors of our expertly crafted dishes' },
  { icon: '🎭', title: 'Premium Entertainment', description: 'Enjoy movies and events under the stars' },
  { icon: '🏏', title: 'Live Cricket Screening', description: 'Watch exciting matches on our giant screens' },
]

export default function Welcome() {
  const welcomeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.welcome-item', {
        scrollTrigger: {
          trigger: welcomeRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      })
    }, welcomeRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={welcomeRef}
      className="py-20 bg-black"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <h2 className="welcome-item text-4xl font-bold text-amber-400 mb-6 text-center">
          Welcome to Luna Drive In
        </h2>
        <p className="welcome-item text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Experience the perfect blend of premium dining and entertainment at Luna Drive In.
          We offer a unique experience that combines great food with unforgettable moments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="welcome-item text-center bg-gray-900 p-6 rounded-lg shadow-lg border border-amber-400">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-amber-400 mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="welcome-item text-center">
          <Button className="bg-amber-500 hover:bg-amber-600 text-black">
            Explore Our Experience
          </Button>
        </div>
      </div>
    </section>
  )
}

