'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function CricketArena() {
  const arenaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.arena-content', {
        scrollTrigger: {
          trigger: arenaRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
    }, arenaRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={arenaRef}
      className="py-20 bg-black"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 arena-content text-amber-400">
          Cricket Arena at Luna Drive
        </h2>
        <p className="text-gray-300 text-center mb-12 arena-content">
          Experience the thrill of cricket while enjoying great food
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="arena-content">
            <Card className="bg-gray-900 border border-amber-400">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-amber-400">Premium Cricket Nets</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Professional Cricket Pitch</li>
                  <li>• High-Quality Equipment</li>
                  <li>• Expert Coaching Available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="arena-content">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden border border-amber-400">
              <img
                src="/homeimg3.jpg"
                alt="Cricket Arena"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="arena-content">
          <Card className="bg-gray-900 border border-amber-400 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Book Your Slot</h3>
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                Book Now
              </Button>
              <p className="text-sm text-gray-300 mt-2 text-center">
                State of the art cricket nets facility at Luna Drive
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Basic Package', 'Premium Package', 'Team Package'].map((pkg, index) => (
            <div key={pkg} className="arena-content">
              <Card className="bg-gray-900 border border-amber-400">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-2 text-amber-400">{pkg}</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    {index === 0 ? '1 Hour (2-3 players) + Basic meal' :
                     index === 1 ? '2 Hours (3-4 players) + Full meal' :
                     '3 Hours (5-8 players) + Team dining'}
                  </p>
                  <p className="text-2xl font-bold text-amber-500 mb-4">
                    ₹{index === 0 ? '999' : index === 1 ? '1999' : '3999'}
                  </p>
                  <Button variant="outline" className="w-full text-amber-400 border-amber-400 hover:bg-amber-400 hover:text-black">
                    Select
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

