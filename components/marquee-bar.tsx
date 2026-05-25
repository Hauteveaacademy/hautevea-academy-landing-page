export default function MarqueeBar() {
  const items = [
    'Bolt.new',
    'V0.dev',
    'Lovable',
    'Framer',
    'Cursor',
    'Kreye Sit',
    'Bati App',
    'Vann Anliy',
    'Travay Nenpòt Kote',
  ]

  const repeated = [...items, ...items]

  return (
    <section className="bg-[#e8b94f] py-3 overflow-hidden" aria-label="Teknoloji">
      <div className="flex">
        <div className="animate-marquee flex gap-8 whitespace-nowrap flex-shrink-0">
          {repeated.map((item, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest text-[#0a0a0a] flex items-center gap-8"
            >
              {item}
              <span className="text-[#0a0a0a]/40 text-base">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
