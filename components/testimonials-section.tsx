'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const testimonials = [
  {
    stars: 5,
    text: 'Mwen te panse mwen te bezwen aprann kode pandan ane anvan mwen ka kreye yon sit. Nan Leson 2, mwen te kreye premye sit mwen an pou yon biznis zanmi m. Li te peye m $500 pou li.',
    initials: 'JM',
    name: 'Jean-Marc D.',
    role: 'Frelans Web, Montréal',
  },
  {
    stars: 5,
    text: "Sa ki te pi bon se Leson 5  kijan pou vann. Mwen kreye 3 templates apre kou a, epi mwen mete yo sou Gumroad. Premye mwa a, mwen fè $340 san fè anyen.",
    initials: 'SC',
    name: 'Sandra C.',
    role: 'Kreyatif Digital, Pòtoprens',
  },
  {
    stars: 5,
    text: "Mwen te gen lide pou yon app depi 2 lane men mwen pa t konn kijan pou kòmanse. Apre Leson 3, mwen te gen yon premye vèsyon travay. Kounye a mwen gen 12 itilizatè ki peye.",
    initials: 'RP',
    name: 'Roodly P.',
    role: 'Fondatè Mini-SaS, Miami',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#e8b94f]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const headRef = useScrollAnimation(0)

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef} className="fade-up text-center mb-14">
          <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">
            Testimonyal
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl text-[#f5f0e8] text-balance">
            Sa Elèv yo Di
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  t,
  delay,
}: {
  t: (typeof testimonials)[0]
  delay: number
}) {
  const ref = useScrollAnimation(delay)
  return (
    <div
      ref={ref}
      className="fade-up bg-[#111] border border-[#222] rounded-2xl p-7 flex flex-col gap-5 hover:border-[#e8b94f]/20 transition-all duration-300"
    >
      <Stars count={t.stars} />
      <p className="text-[#f5f0e8]/70 text-sm leading-relaxed flex-1 italic">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-[#1a1a1a]">
        <div className="w-10 h-10 rounded-full bg-[#e8b94f]/15 border border-[#e8b94f]/30 flex items-center justify-center flex-shrink-0">
          <span className="font-[family-name:var(--font-syne)] font-bold text-[#e8b94f] text-sm">
            {t.initials}
          </span>
        </div>
        <div>
          <div className="font-[family-name:var(--font-syne)] font-bold text-[#f5f0e8] text-sm">
            {t.name}
          </div>
          <div className="text-[#f5f0e8]/40 text-xs">{t.role}</div>
        </div>
      </div>
    </div>
  )
}
