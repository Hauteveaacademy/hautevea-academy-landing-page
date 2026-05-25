export default function SocialProof() {
  return (
    <section className="bg-[#111] border-y border-[#222]" aria-label="Prèv sosyal">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        {/* Countries */}
        <div className="flex items-center gap-3">
          <span className="text-[#f5f0e8]/40 text-xs font-medium uppercase tracking-widest">Elèv nan</span>
          <div className="flex items-center gap-1.5 text-xl">
            <span title="Haïti">🇭🇹</span>
            <span title="France">🇫🇷</span>
            <span title="Canada">🇨🇦</span>
            <span title="USA">🇺🇸</span>
            <span title="Mexico">🇲🇽</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-6 bg-[#333]" />

        {/* Stars */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-4 h-4 text-[#e8b94f]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[#f5f0e8] text-sm font-bold">4.9/5</span>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-6 bg-[#333]" />

        {/* Launch year */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#e8b94f]" />
          <span className="text-[#f5f0e8]/50 text-xs font-medium uppercase tracking-widest">
            Lanse — 2026
          </span>
        </div>
      </div>
    </section>
  )
}
