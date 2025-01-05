'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const menuCategories = [
  {
    name: "Main Course",
    items: [
      { name: "Butter Chicken", description: "Tender chicken in a rich tomato and butter sauce", price: "₹299" },
      { name: "Paneer Tikka Masala", description: "Grilled cottage cheese in a spicy gravy", price: "₹249" },
      { name: "Lamb Biryani", description: "Fragrant rice dish with tender lamb pieces", price: "₹349" },
      { name: "Vegetable Korma", description: "Mixed vegetables in a creamy coconut sauce", price: "₹199" },
    ]
  },
  {
    name: "Appetizers",
    items: [
      { name: "Samosa", description: "Crispy pastry filled with spiced potatoes and peas", price: "₹79" },
      { name: "Chicken 65", description: "Spicy deep-fried chicken bites", price: "₹199" },
      { name: "Onion Bhaji", description: "Crispy onion fritters", price: "₹99" },
      { name: "Paneer Tikka", description: "Grilled cottage cheese with spices", price: "₹179" },
    ]
  },
  {
    name: "Desserts",
    items: [
      { name: "Gulab Jamun", description: "Sweet milk dough balls in sugar syrup", price: "₹99" },
      { name: "Rasmalai", description: "Soft cottage cheese dumplings in sweet milk", price: "₹129" },
      { name: "Kulfi", description: "Traditional Indian ice cream", price: "₹89" },
      { name: "Gajar Ka Halwa", description: "Warm carrot pudding with nuts", price: "₹109" },
    ]
  },
]

const specialOffers = [
  { name: "Family Feast", description: "4 main courses, 2 appetizers, 2 desserts", price: "₹1299" },
  { name: "Cricket Night Combo", description: "2 main courses, 4 appetizers, 4 drinks", price: "₹999" },
  { name: "Romantic Dinner for Two", description: "2 main courses, 1 appetizer, 2 desserts, 2 drinks", price: "₹899" },
]

export default function Menu() {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.menu-item', {
        scrollTrigger: {
          trigger: menuRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
    }, menuRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={menuRef}
      className="py-20 bg-black"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-amber-400">
          Our Menu
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Explore our delicious offerings
        </p>
        
        <Tabs defaultValue="Main Course" className="mb-12">
          <TabsList className="justify-center mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name} className="text-amber-400 data-[state=active]:bg-amber-400 data-[state=active]:text-black">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {menuCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, index) => (
                  <Card key={index} className="menu-item bg-gray-900 shadow-lg overflow-hidden border border-amber-400">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-amber-400">{item.name}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-amber-500">{item.price}</span>
                        <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                          Add to Order
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <h3 className="text-3xl font-bold text-center mb-8 text-amber-400">
          Special Offers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialOffers.map((offer, index) => (
            <Card key={index} className="menu-item bg-gray-900 shadow-lg overflow-hidden border border-amber-400">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-amber-400">{offer.name}</h4>
                <p className="text-gray-300 mb-4">{offer.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-500">{offer.price}</span>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

