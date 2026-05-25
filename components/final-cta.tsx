'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function FinalCTA() {
  const ref = useScrollAnimation(0)

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#0a0a0a]">
      {/* Gold radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(232,185,79,0.12) 0%, transparent 65%)',
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center" ref={ref}>
        <div className="fade-up">
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] leading-tight text-balance mb-6">
            Prèt pou{' '}
            <span className="text-[#e8b94f]">Kòmanse Kreye?</span>
          </h2>
          <p className="text-[#f5f0e8]/55 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10 text-pretty">
            Rejwenn elèv yo ki ap kreye sit, bati app, ak fè lajan anliy ak AI kounye a.
          </p>
          <a
            href="https://whop.com/checkout/plan_9dP3Ao1LHq9OW"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center justify-center px-10 py-5 rounded-xl text-lg font-extrabold tracking-wide uppercase mb-8"
          >
            Wi, Mwen Vle Kòmanse  $97 →
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[#f5f0e8]/40 text-sm">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Garanti 7 jou
            </span>
            <span className="w-1 h-1 rounded-full bg-[#333] hidden sm:block" />
            <span>Aksè imedyat</span>
            <span className="w-1 h-1 rounded-full bg-[#333] hidden sm:block" />
            <span>Peman Sekirize</span>
          </div>
        </div>
      </div>
    </section>
  )
}
