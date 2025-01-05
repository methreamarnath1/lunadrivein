'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-content', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 py-12"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-content">
            <h3 className="text-xl font-bold mb-4">Luna Drive</h3>
            <p className="text-gray-400 text-sm">
              Experience luxury & taste under starlit skies
            </p>
          </div>
          <div className="footer-content">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Cricket Arena
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <p className="text-gray-400">Open 24/7</p>
            <p className="text-gray-400">Always at your service</p>
          </div>
          <div className="footer-content">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <p className="text-gray-400">
              Luna Drive-in, Image Hospital Rd,
              <br />
              Madhapur, Hyderabad
              <br />
              Tel: +91 98765 43210
            </p>
          </div>
        </div>
        <div className="footer-content mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Luna Drive In. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

