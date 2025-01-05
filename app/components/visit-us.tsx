'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function VisitUs() {
  const visitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.visit-content', {
        scrollTrigger: {
          trigger: visitRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
    }, visitRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={visitRef}
      className="py-20 bg-black"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 visit-content text-amber-400">
          Visit Us
        </h2>
        <p className="text-gray-300 text-center mb-12 visit-content">
          Plan your visit to Madhapur, Hyderabad
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="visit-content">
            <Card className="bg-gray-900 border border-amber-400">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-amber-400">Our Location</h3>
                <p className="text-gray-300 mb-4">
                  Luna Drive-in, Image Hospital Rd,
                  <br />
                  Vittal Rao Nagar, Madhapur,
                  <br />
                  Hyderabad, Telangana 500081, India
                </p>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="visit-content">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden border border-amber-400">
              <img
                src="https://lh5.googleusercontent.com/p/AF1QipPz8CV2EZryRrenOUvPbNGceNwwA9t0fyCHN3S2=w408-h306-k-no"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 visit-content">
          <Card className="bg-gray-900 border border-amber-400">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Nearby Landmarks</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="font-semibold">Image Hospital</p>
                  <p>0.1 km</p>
                </div>
                <div>
                  <p className="font-semibold">Tech Park</p>
                  <p>0.5 km</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

