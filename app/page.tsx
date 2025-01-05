'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'

// Dynamically import components
const Hero = dynamic(() => import('./components/hero'))
const Welcome = dynamic(() => import('./components/welcome'))
const Menu = dynamic(() => import('./components/menu'))
const CricketArena = dynamic(() => import('./components/cricket-arena'))
const OrderApps = dynamic(() => import('./components/order-apps'))
const Gallery = dynamic(() => import('./components/gallery'))
const VisitUs = dynamic(() => import('./components/visit-us'))
const Contact = dynamic(() => import('./components/contact'))
const Footer = dynamic(() => import('./components/footer'))

function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Update ScrollTrigger on resize
    const onResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <main
      ref={containerRef}
      className="bg-black text-white"
    >
      <Hero />
      <Welcome />
      <Menu />
      <CricketArena />
      <OrderApps />
      <Gallery />
      <VisitUs />
      <Contact />
      <Footer />
    </main>
  )
}

export default dynamic(() => Promise.resolve(HomePage), {
  ssr: false
})