'use client'
 
import { useRef } from 'react'
 
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
 
  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-overlay grid-bg pt-16"
      aria-label="Hero"
    >
      {/* Gold radial glow top-right */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle at 70% 20%, #e8b94f 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Floating code snippets */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        <div className="float-code absolute top-[18%] left-[5%] text-[#e8b94f]/15 font-mono text-xs hidden lg:block">
          {'<App created={true} />'}
        </div>
        <div className="float-code-2 absolute top-[35%] left-[2%] text-[#e8b94f]/10 font-mono text-xs hidden lg:block">
          {'bolt.new("restaurant-site")'}
        </div>
        <div className="float-code-3 absolute top-[55%] left-[4%] text-[#e8b94f]/12 font-mono text-xs hidden lg:block">
          {'// sans yon sèl liy kode'}
        </div>
        <div className="float-code absolute top-[20%] right-[4%] text-[#e8b94f]/12 font-mono text-xs hidden lg:block">
          {'v0.dev("dashboard UI")'}
        </div>
        <div className="float-code-2 absolute top-[42%] right-[3%] text-[#e8b94f]/10 font-mono text-xs hidden lg:block">
          {'→ deployed in 2h ✓'}
        </div>
        <div className="float-code-3 absolute top-[65%] right-[5%] text-[#e8b94f]/12 font-mono text-xs hidden lg:block">
          {'framer.publish()'}
        </div>
      </div>
 
      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated badge */}
        <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#e8b94f]/20 rounded-full px-4 py-2 mb-8">
          <span className="pulse-dot w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
          <span className="text-[#f5f0e8]/80 text-xs md:text-sm font-medium tracking-wide">
            Lanse Kounye a · Fondatè Spesyal
          </span>
        </div>
 
        {/* Headline */}
        <h1 className="font-[family-name:var(--font-syne)] font-extrabold leading-none tracking-tight mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl text-[#f5f0e8] text-balance">
            San Kode, San Devlopè
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-[#e8b94f] text-balance mt-2">
            Kreye App ak AI
          </span>
        </h1>
 
        {/* Subtitle */}
        <p className="text-[#f5f0e8]/65 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
          Aprann kreye sit entènèt ak aplikasyon pwofesyonèl ak zouti AI Bolt.new, V0, Lovable,
          Framer  menm si ou pa janm kòde yon sèl liy.
        </p>
 
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://whop.com/checkout/plan_9dP3Ao1LHq9OW"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-4 rounded-xl text-base font-bold tracking-wide uppercase w-full sm:w-auto"
          >
            Kòmanse pou $97 →
          </a>
          <a
            href="https://whop.com/formations-sur-photography/san-kode-san-devlope-kreye-app-ak-ai/"
            className="px-8 py-4 rounded-xl text-base font-bold tracking-wide uppercase w-full sm:w-auto border border-[#f5f0e8]/20 text-[#f5f0e8]/70 hover:border-[#e8b94f]/40 hover:text-[#f5f0e8] transition-all duration-200"
          >
            Wè Kou a
          </a>
        </div>
 
        {/* Stats */}
        <div className="border-t border-[#222] pt-10">
          <div className="flex flex-wrap justify-center gap-6 md:gap-0 md:divide-x md:divide-[#222]">
            <div className="text-center px-4">
              <div className="font-[family-name:var(--font-syne)] font-extrabold text-2xl md:text-3xl text-[#e8b94f]">5</div>
              <div className="text-[#f5f0e8]/50 text-xs md:text-sm mt-1 font-medium">Leson</div>
            </div>
            <div className="text-center px-4">
              <div className="font-[family-name:var(--font-syne)] font-extrabold text-2xl md:text-3xl text-[#e8b94f]">8h+</div>
              <div className="text-[#f5f0e8]/50 text-xs md:text-sm mt-1 font-medium">Kontni</div>
            </div>
            <div className="text-center px-4">
              <div className="font-[family-name:var(--font-syne)] font-extrabold text-2xl md:text-3xl text-[#e8b94f]">$0</div>
              <div className="text-[#f5f0e8]/50 text-xs md:text-sm mt-1 font-medium">Kode Nesesè</div>
            </div>
            <div className="text-center px-4">
              <div className="font-[family-name:var(--font-syne)] font-extrabold text-2xl md:text-3xl text-[#e8b94f]">∞</div>
              <div className="text-[#f5f0e8]/50 text-xs md:text-sm mt-1 font-medium">Aksè pou Vi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
 