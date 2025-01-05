'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'
import Hero from './components/hero'
import Welcome from './components/welcome'
import Menu from './components/menu'
import CricketArena from './components/cricket-arena'
import OrderApps from './components/order-apps'
import Gallery from './components/gallery'
import VisitUs from './components/visit-us'
import Contact from './components/contact'
import Footer from './components/footer'

declare module 'locomotive-scroll' {
  interface LocomotiveScroll {
    scroll: {
      instance: {
        scroll: { y: number }
      }
    }
    update: () => void
    scrollTo: (target: number, options: { duration: number, disableLerp: boolean }) => void
  }
}

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let locoScroll: LocomotiveScroll | null = null

    const initLocomotiveScroll = async () => {
      locoScroll = new LocomotiveScroll({
        el: containerRef.current!,
        smooth: true,
      })

      locoScroll.on('scroll', ScrollTrigger.update)

      ScrollTrigger.scrollerProxy(containerRef.current!, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll!.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll!.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: containerRef.current!.style.transform ? 'transform' : 'fixed',
      })

      ScrollTrigger.addEventListener('refresh', () => locoScroll!.update())

      ScrollTrigger.refresh()
    }

    initLocomotiveScroll()

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener('refresh', () => locoScroll!.update())
        locoScroll.destroy()
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }
  }, [])

  return (
    <main
      ref={containerRef}
      className="bg-black text-white"
      data-scroll-container
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

