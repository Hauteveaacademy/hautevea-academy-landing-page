'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const problems = [
  {
    emoji: '😩',
    title: 'Mwen pa konn kòde',
    desc: 'Ou panse ou bezwen aprann Python oswa JavaScript pou kòmanse. Sa pa vrè ankò an 2026.',
  },
  {
    emoji: '💸',
    title: 'Li koute twò chè',
    desc: 'Anboche yon devlopè a $3,000–$10,000? Kounye a ou ka fè li ou menm pou prèske gratis.',
  },
  {
    emoji: '😰',
    title: 'Mwen pa konn kote pou m kòmanse',
    desc: 'YouTube, tutoryèl, kou  twòp enfòmasyon, okenn direksyon klè.',
  },
  {
    emoji: '⏳',
    title: 'Mwen pa gen ase tan',
    desc: 'Avèk AI, ou ka kreye yon sit fonksyonèl nan mwens pase yon jou.',
  },
]

export default function ProblemSection() {
  const ref = useScrollAnimation()

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]" id="problem">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div ref={ref} className="fade-up text-center mb-14">
          <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">
            Pwoblèm nan
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl text-[#f5f0e8] text-balance">
            Ou gen lide. Men ou bloke.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <ProblemCard key={i} {...p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemCard({
  emoji,
  title,
  desc,
  delay,
}: {
  emoji: string
  title: string
  desc: string
  delay: number
}) {
  const ref = useScrollAnimation(delay)
  return (
    <div
      ref={ref}
      className="fade-up group bg-[#111] border border-[#222] hover:border-[#e8b94f]/30 rounded-2xl p-7 transition-all duration-300 hover:bg-[#131313]"
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-[#f5f0e8] mb-3">
        {title}
      </h3>
      <p className="text-[#f5f0e8]/55 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
