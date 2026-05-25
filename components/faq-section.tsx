'use client'

import { useState, useRef, useEffect } from 'react'

const faqs = [
  {
    q: 'Èske mwen vrèman ka kreye sit san konn kode?',
    a: 'Wi, absoliman. Bolt.new, Lovable, Framer jere tout kòd otomatikman. Ou bay enstriksyon nan lang nòmal, AI a ekri kòd la.',
  },
  {
    q: 'Konbyen tan mwen bezwen chak jou?',
    a: 'Ou ka konplete kou a nan yon wikenn. Chak leson dire 1h–2h30. Nou rekòmande 1–2 èdtan pa jou pandan 1 semèn.',
  },
  {
    q: 'Èske mwen bezwen achte lòt zouti?',
    a: 'Majorite zouti gen vèsyon gratis ki sifi pou kòmanse. Mwen montre egzakteman ki vèsyon gratis pou itilize.',
  },
  {
    q: 'Èske mwen ka vrèman fè lajan ak sa?',
    a: 'Wi  Leson 5 kouvri kijan jwenn kliyan, ki pri chaje, ak kijan vann templates anliy.',
  },
  {
    q: 'Ki jan garanti 7 jou a travay?',
    a: 'Si nan 7 premye jou apre achte a, ou pa satisfè pou nenpòt rezon ou ekri mwen yon mesaj epi mwen remèt ou 100% lajan ou. San kesyon, san konplikasyon.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">
            Kesyon Frekè
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl text-[#f5f0e8] text-balance">
            Ou gen kesyon?
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  const answerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (answerRef.current) {
      setHeight(answerRef.current.scrollHeight)
    }
  }, [faq.a])

  return (
    <div
      className={`rounded-xl border transition-colors duration-300 ${
        isOpen ? 'border-[#e8b94f]/30 bg-[#111]' : 'border-[#222] bg-[#111] hover:border-[#333]'
      }`}
    >
      {/* Bouton kesyon — toujou vizib */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-[family-name:var(--font-syne)] font-bold text-[#f5f0e8] text-base leading-snug">
          {faq.q}
        </span>
        <span
          aria-hidden="true"
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? 'bg-[#e8b94f] border-[#e8b94f] text-[#0a0a0a]'
              : 'border-[#333] text-[#f5f0e8]/60'
          }`}
        >
          {isOpen ? (
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="1" y1="1" x2="11" y2="1" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="6" y1="1" x2="6" y2="11" />
              <line x1="1" y1="6" x2="11" y2="6" />
            </svg>
          )}
        </span>
      </button>

      {/* Repons — glise ak wotè reyèl */}
      <div
        style={{
          maxHeight: isOpen ? `${height}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <div ref={answerRef}>
          <p className="px-6 pb-5 text-[#f5f0e8]/60 text-sm leading-relaxed">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  )
}
