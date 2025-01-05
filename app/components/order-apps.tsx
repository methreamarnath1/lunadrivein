'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const apps = [
  {
    name: 'Swiggy',
    logo: '/swiggy-1.svg',
    buttonClass: 'bg-orange-500 hover:bg-orange-600',
  },
  {
    name: 'Zomato',
    logo: '/zomato-1.svg',
    buttonClass: 'bg-red-500 hover:bg-red-600',
  },
  {
    name: 'UberEats',
    logo: '/uber-eats.svg',
    buttonClass: 'bg-blue-500 hover:bg-blue-600',
  },
]

export default function OrderApps() {
  const orderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.order-content', {
        scrollTrigger: {
          trigger: orderRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
    }, orderRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={orderRef}
      className="py-20 bg-black"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 order-content">
          Order Through Your Favorite Apps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {apps.map((app) => (
            <div key={app.name} className="order-content">
              <div className="bg-gray-900 rounded-lg p-6 text-center">
                <img
                  src={app.logo}
                  alt={app.name}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <button className={`w-full py-2 px-4 rounded-md text-white ${app.buttonClass}`}>
                  Order on {app.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="order-content">
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Direct Ordering Benefits</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Priority Orders</li>
              <li>• Special Discounts</li>
              <li>• Free Delivery</li>
            </ul>
            <div className="mt-6 text-center">
              <p className="text-green-500 font-bold">Call us directly at</p>
              <p className="text-xl font-bold">+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

