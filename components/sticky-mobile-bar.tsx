'use client'

import { useState, useEffect } from 'react'

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (~100vh)
      setVisible(window.scrollY > window.innerHeight * 0.6)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-[#222] px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-[#f5f0e8] text-xs font-bold truncate">HAUTEVEA ACADEMY</p>
          <p className="text-[#e8b94f] text-xs font-medium">Pri Fondatè $97 sèlman</p>
        </div>
        <a
          href="https://whop.com/checkout/plan_9dP3Ao1LHq9OW"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold flex-shrink-0 px-5 py-3 rounded-xl text-sm font-extrabold tracking-wide uppercase"
        >
          Enskri  $97
        </a>
      </div>
    </div>
  )
}
