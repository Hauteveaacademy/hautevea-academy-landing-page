'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const stats = [
  { value: '3+', label: 'Ane Eksperyans AI' },
  { value: '50+', label: 'Pwojè Kreye' },
  { value: '1', label: 'Fondatè HAUTEVEA' },
]

export default function InstructorSection() {
  const leftRef = useScrollAnimation(0)
  const rightRef = useScrollAnimation(150)

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]" id="instructor">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — Avatar */}
          <div
            ref={leftRef}
            className="fade-up flex justify-center lg:justify-start"
          >
            {/* Wrapper relatif pou badge ka pozisyone sou bòdè wonn nan */}
            <div className="relative w-64 h-64 md:w-72 md:h-72">

              {/* Outer gold ring */}
              <div className="w-full h-full rounded-full border-2 border-[#e8b94f]/40 p-1.5">
                <div className="w-full h-full rounded-full bg-[#1a1a1a] border border-[#222] overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/samson.jpg"
                      alt="Samson Janvier"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/25"></div>
                  </div>
                </div>
              </div>

              {/* Badge lò — chita sou pwent anba wonn nan, sant */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#e8b94f] rounded-xl px-4 py-2 shadow-lg flex flex-col items-center whitespace-nowrap z-10">
                <span className="font-[family-name:var(--font-syne)] font-bold text-[#0a0a0a] text-xs uppercase tracking-wide">
                  Samson Janvier
                </span>
                <span className="font-[family-name:var(--font-syne)] text-[#0a0a0a] text-[10px] tracking-wide mt-0.5">
                  Devlopè & Fondatè
                </span>
              </div>

            </div>
          </div>

          {/* Right — Bio */}
          <div ref={rightRef} className="fade-up mt-8 lg:mt-0">

            <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">
              Enstriktè ou
            </span>

            <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl text-[#f5f0e8] mb-2">
              Samson Janvier
            </h2>

            <p className="text-[#e8b94f] font-medium text-base mb-6">
              Devlopè & Fondatè HAUTEVEA ACADEMY
            </p>

            <p className="text-[#f5f0e8]/65 text-base leading-relaxed mb-8">
              Mwen kreye sit entènèt ak aplikasyon chak jou ak AI.
              Mwen konnen egzakteman ki zouti ki travay,
              ki estrateji ki bay lajan, ak ki erè pou evite.
              HAUTEVEA ACADEMY se tout sa mwen aprann yo
              distile nan 5 leson pratik.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-[#111] border border-[#e8b94f]/15 rounded-xl px-5 py-3 text-center"
                >
                  <div className="font-[family-name:var(--font-syne)] font-extrabold text-2xl text-[#e8b94f] leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-[#f5f0e8]/45 text-xs font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}