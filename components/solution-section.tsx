'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const checks = [
  'Kreye sit entènèt pwofesyonèl an 1 èdtan',
  'Bati yon mini app fonksyonèl san kode',
  'Mete anliy ak domèn pwofesyonèl',
  'Vann travay ou bay kliyan',
  'Bati yon sous revni anliy',
]

export default function SolutionSection() {
  const leftRef = useScrollAnimation(0)
  const rightRef = useScrollAnimation(150)

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]" id="solution">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div ref={leftRef} className="fade-up">
            <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">
              Solisyon an
            </span>
            <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl text-[#f5f0e8] leading-tight text-balance mb-8">
              AI fè pati difisil la.{' '}
              <span className="text-[#e8b94f]">Ou fè pati kreyatif la.</span>
            </h2>
            <ul className="space-y-4">
              {checks.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#e8b94f]/15 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-[#e8b94f]" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  <span className="text-[#f5f0e8]/75 text-base">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — terminal card */}
          <div ref={rightRef} className="fade-up">
            <div className="bg-[#0f0f0f] border border-[#e8b94f]/15 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="bg-[#161616] px-5 py-3.5 flex items-center gap-2.5 border-b border-[#222]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-[#f5f0e8]/30 text-xs font-mono">bolt.new  terminal</span>
              </div>
              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <span className="text-[#e8b94f]/50 text-xs">// Ou tape nan Bolt.new:</span>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg px-4 py-3 border border-[#2a2a2a]">
                  <span className="text-[#f5f0e8]/70 text-sm">
                    &ldquo;Kreye yon sit restoran modèn ak meni, rezèvasyon, ak paj kontak...&rdquo;
                  </span>
                  <span className="cursor-blink text-[#e8b94f]">|</span>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">→</span>
                    <span className="text-green-400/80 text-sm">✓ Sit konplè prèt anliy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-bold">→</span>
                    <span className="text-green-400/80 text-sm">✓ Mobil-redi otomatik</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#e8b94f] font-bold">⚡</span>
                    <span className="text-[#e8b94f]/90 text-sm font-bold">Rezilta: nan mwens pase 1 èdtan</span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="pt-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#f5f0e8]/30 text-xs">Pwogrè</span>
                    <span className="text-[#e8b94f] text-xs font-bold">100%</span>
                  </div>
                  <div className="h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                    <div className="h-full bg-[#e8b94f] rounded-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
