'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
    }, contactRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={contactRef}
      className="py-20 bg-black"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 contact-content">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="contact-content">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Name"
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Phone"
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Message"
                      className="bg-gray-800 border-gray-700"
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="contact-content">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                  <p className="text-gray-400">
                    +91 98765 43210
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="contact-content">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-400">
                    <p>Mon - Sun: 24/7</p>
                    <p>Always open</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="contact-content">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Facebook
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Twitter
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Instagram
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

