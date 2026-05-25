'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const tools = [
  {
    name: 'Bolt.new',
    icon: '⚡',
    color: '#7C3AED',
    desc: 'Kreye sit & app konplè rapid',
    tag: 'Debutan ak pwojè rapid',
  },
  {
    name: 'V0.dev',
    icon: '◈',
    color: '#000000',
    iconBg: '#f5f0e8',
    desc: 'UI/Komponan React bèl pwofesyonèl',
    tag: 'Dizay premium ak dashboard',
  },
  {
    name: 'Lovable',
    icon: '♥',
    color: '#e8b94f',
    iconBg: '#1a1a1a',
    desc: 'App ak baze done entegre',
    tag: 'SaaS ak app ak login',
  },
  {
    name: 'Framer',
    icon: '▣',
    color: '#0066FF',
    desc: 'Sit animasyon ak makèting',
    tag: 'Landing page ak pòtfòlyo',
  },
  {
    name: 'Cursor',
    icon: '↗',
    color: '#24292f',
    iconBg: '#f5f0e8',
    desc: 'Editè kòd ak AI entegre',
    tag: 'Pwojè avanse ak pèsonalizasyon',
  },
]

export default function ToolsSection() {
  const headRef = useScrollAnimation(0)

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]" id="tools">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef} className="fade-up text-center mb-14">
          <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">
            Zouti ou pral metrize
          </span>
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl text-[#f5f0e8] text-balance">
            5 Zouti AI ki Pral Chanje{' '}
            <span className="text-[#e8b94f]">Fason ou Travay</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {tools.map((tool, i) => (
            <ToolCard key={i} tool={tool} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolCard({
  tool,
  delay,
}: {
  tool: (typeof tools)[0]
  delay: number
}) {
  const ref = useScrollAnimation(delay)
  return (
    <div
      ref={ref}
      className="fade-up group bg-[#111] border border-[#222] hover:border-[#e8b94f]/30 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-[#131313] flex flex-col items-center"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 font-bold"
        style={{ backgroundColor: tool.iconBg || tool.color, color: tool.iconBg ? tool.color : '#fff' }}
      >
        {tool.icon}
      </div>
      <h3 className="font-[family-name:var(--font-syne)] font-bold text-base text-[#f5f0e8] mb-2">
        {tool.name}
      </h3>
      <p className="text-[#f5f0e8]/50 text-xs leading-relaxed mb-4 flex-1">{tool.desc}</p>
      <div className="bg-[#e8b94f]/10 border border-[#e8b94f]/20 rounded-full px-3 py-1">
        <span className="text-[#e8b94f] text-xs font-medium">{tool.tag}</span>
      </div>
    </div>
  )
}
