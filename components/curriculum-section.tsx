'use client'
 
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
 
const modules = [
  {
    num: '01',
    title: 'Zouti AI yo — Chwazi Bon Zam ou',
    desc: 'Bolt.new, V0, Lovable, Framer, Cursor. Ki zouti pou ki pwojè.',
    result: 'Apre leson sa: ou konnen egzakteman ki zouti pou itilize selon pwojè ou a.',
    duration: '1h 30min',
    isBonus: false,
  },
  {
    num: '02',
    title: 'Kreye Premye Sit ou an 2 Èdtan',
    desc: 'Pratik dirèk. Ou kreye paj akèy, sèvis, kontak ansanm.',
    result: 'Apre leson sa: ou gen yon sit konplè anliy ak domèn pwofesyonèl.',
    duration: '2h 00min',
    isBonus: false,
  },
  {
    num: '03',
    title: 'Bati Yon Mini App Fonksyonèl',
    desc: 'App ak baze done, login, fonksyon konplèks.',
    result: 'Apre leson sa: ou gen yon app travay ak login ke ou ka montre kliyan.',
    duration: '2h 30min',
    isBonus: false,
  },
  {
    num: '04',
    title: 'Mete Anliy + Domèn + Hosting',
    desc: 'Deplwaye, domèn pwofesyonèl, HTTPS, gratis.',
    result: 'Apre leson sa: sit oswa app ou a vivan sou entènèt ak yon domèn pwofesyonèl.',
    duration: '1h 00min',
    isBonus: false,
  },
  {
    num: '05',
    title: 'Kijan Pou Vann Sa Ou Kreye a',
    desc: 'Jwenn kliyan, fikse pri, vann templates anliy.',
    result: 'Apre leson sa: ou gen yon plan konkrè pou jwenn premye kliyan ou oswa premye vant ou.',
    duration: '1h 30min',
    isBonus: false,
  },
  {
    num: 'BONUS',
    title: 'Pakèt Zouti & Resous Eksklizyèf',
    desc: 'Templates HTML, scripts kliyan, zouti gratis ak peyan.',
    result: '',
    duration: 'Gratis',
    isBonus: true,
  },
]
 
export default function CurriculumSection() {
  const headRef = useScrollAnimation(0)
 
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]" id="curriculum">
      <div className="max-w-5xl mx-auto">
        <div ref={headRef} className="fade-up text-center mb-14">
          <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">
            Pwogram Kou la
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl text-[#f5f0e8] text-balance">
            5 Leson + 1 Bonus.{' '}
            <span className="text-[#e8b94f]">Rezilta Reyèl.</span>
          </h2>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod, i) => (
            <ModuleCard key={i} mod={mod} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
 
function ModuleCard({
  mod,
  delay,
}: {
  mod: (typeof modules)[0]
  delay: number
}) {
  const ref = useScrollAnimation(delay)
  return (
    <div
      ref={ref}
      className={`fade-up group flex gap-5 p-6 rounded-2xl border transition-all duration-300 hover:border-[#e8b94f]/30 ${
        mod.isBonus
          ? 'bg-[#e8b94f]/05 border-[#e8b94f]/20 md:col-span-2'
          : 'bg-[#111] border-[#222] hover:bg-[#131313]'
      }`}
    >
      {/* Number */}
      <div className="flex-shrink-0">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center font-[family-name:var(--font-syne)] font-extrabold text-sm ${
            mod.isBonus
              ? 'bg-[#e8b94f] text-[#0a0a0a]'
              : 'bg-[#1a1a1a] text-[#e8b94f] border border-[#e8b94f]/20'
          }`}
        >
          {mod.isBonus ? '🎁' : mod.num}
        </div>
      </div>
 
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-[family-name:var(--font-syne)] font-bold text-[#f5f0e8] text-base leading-snug">
            {mod.isBonus ? '' : `LESON ${mod.num} — `}{mod.title}
          </h3>
          <span
            className={`flex-shrink-0 text-xs font-mono px-2.5 py-1 rounded-full ${
              mod.isBonus
                ? 'bg-[#e8b94f]/20 text-[#e8b94f]'
                : 'bg-[#1a1a1a] text-[#f5f0e8]/40'
            }`}
          >
            {mod.isBonus ? mod.duration : `⏱ ${mod.duration}`}
          </span>
        </div>
        <p className="text-[#f5f0e8]/50 text-sm leading-relaxed">{mod.desc}</p>
        {mod.result && (
          <p className="text-[#e8b94f]/70 text-xs mt-2 leading-relaxed">
            ✓ {mod.result}
          </p>
        )}
      </div>
    </div>
  )
}
 