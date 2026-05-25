'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const features = [
  '5 Leson Videyo (8+ èdtan kontni)',
  'Aksè pou vi + tout mizajou gratis',
  'Pakèt Templates HTML prèt-a-itilize',
  'Lis zouti AI + resous eksklizyèf',
  'Scripts pou jwenn kliyan',
  'Kominote prive Discord',
  'Sètifika konpletman kou',
]

export default function PricingSection() {
  const headRef = useScrollAnimation(0)
  const cardRef = useScrollAnimation(150)

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]" id="pricing">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="fade-up text-center mb-12">
          <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">
            Envestisman
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl text-[#f5f0e8] text-balance mb-3">
            Yon sèl pri.{' '}
            <span className="text-[#e8b94f]">Aksè pou vi.</span>
          </h2>
          <p className="text-[#f5f0e8]/50 text-base">Pa gen abònman, pa gen frè kache.</p>
        </div>

        {/* Card */}
        <div ref={cardRef} className="fade-up">
          <div className="rounded-2xl border border-[#e8b94f]/25 overflow-hidden shadow-2xl shadow-[#e8b94f]/05">
            {/* Gold gradient top bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#c99a35] via-[#e8b94f] to-[#c99a35]" />

            <div className="bg-[#111] p-8 md:p-10">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/25 rounded-full px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 pulse-dot" />
                  <span className="text-red-400 text-xs font-bold uppercase tracking-wider">
                    Pri Fondatè   Limite
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-syne)] font-extrabold text-center text-[#f5f0e8] text-xl mb-6 uppercase tracking-wider">
                HAUTEVEA ACADEMY  Kou Konplè
              </h3>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-1">
                  <span className="text-[#f5f0e8]/30 text-2xl font-medium line-through">$297</span>
                  <span className="font-[family-name:var(--font-syne)] font-extrabold text-6xl md:text-7xl text-[#e8b94f] leading-none">
                    $97
                  </span>
                </div>
                <p className="text-[#f5f0e8]/40 text-sm">Prix unique · Pèman an sèlman yon fwa</p>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e8b94f]/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#e8b94f]" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                      </svg>
                    </span>
                    <span className="text-[#f5f0e8]/75 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://whop.com/checkout/plan_9dP3Ao1LHq9OW"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full flex items-center justify-center px-8 py-4 rounded-xl text-base font-extrabold tracking-wide uppercase mb-4"
              >
                Enskri Kounye a  $97 →
              </a>

              {/* Payment */}
              <p className="text-center text-[#f5f0e8]/40 text-xs mb-6">
                Pèman Sekirize · PayPal · MonCash · NatCash · Carte Bancaire
              </p>

              {/* Urgency */}
              <div className="urgency-bar rounded-xl border border-red-500/15 px-4 py-3 flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0 pulse-dot" />
                <p className="text-[#f5f0e8]/70 text-xs leading-relaxed">
                  <span className="text-red-400 font-bold">Avètisman:</span> Pri fondatè $97 disponib pou premye 30 elèv sèlman.
                </p>
              </div>

              {/* Guarantee */}
              <div className="bg-green-500/08 border border-green-500/20 rounded-xl px-5 py-4 flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="text-green-400 font-bold text-sm mb-0.5">Garanti 7 Jou San Risk</p>
                  <p className="text-[#f5f0e8]/55 text-xs leading-relaxed">
                    Si ou pa satisfè, mwen renmèt ou 100% lajan ou san kesyon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
