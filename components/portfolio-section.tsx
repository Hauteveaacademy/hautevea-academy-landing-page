'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const projects = [
  {
    tag: 'Sit Entènèt',
    title: 'Sit Restoran Pwofesyonèl',
    desc: 'Kreye ak Bolt.new an 2 èdtan',
    image: '/images/restaurant.jpg',
  },
  {
    tag: 'Sit Entènèt',
    title: 'Pòtfòlyo Kreyatif',
    desc: 'Kreye ak Framer ak animasyon',
    image: '/images/portfolio.jpg',
  },
  {
    tag: 'Aplikasyon',
    title: 'Dashboard Finansye',
    desc: 'Kreye ak V0 + Lovable',
    image: '/images/dashboard.jpg',
  },
  {
    tag: 'Aplikasyon',
    title: 'Tool Jeneratè Kontni',
    desc: 'Kreye ak Bolt.new ak AI',
    image: '/images/ai-tool.jpg',
  },
  {
    tag: 'E-Commerce',
    title: 'Boutik Anliy Konplè',
    desc: 'Kreye ak Bolt.new + Stripe',
    image: '/images/ecommerce.jpg',
  },
  {
    tag: 'Aplikasyon',
    title: 'Money transfer apps',
    desc: 'Kreye ak Lovable + Supabase',
    image: '/images/saas.jpg',
  },
]

export default function PortfolioSection() {
  const headRef = useScrollAnimation(0)
  const noteRef = useScrollAnimation(100)

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]" id="portfolio">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div ref={headRef} className="fade-up text-center mb-14">
          <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">
            Sa ou pral kreye
          </span>

          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl text-[#f5f0e8]">
            Egzanp{' '}
            <span className="text-[#e8b94f]">
              Pwojè Reyèl
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              delay={i * 80}
            />
          ))}
        </div>

        {/* Note */}
        <div
          ref={noteRef}
          className="fade-up mt-10 text-center"
        >
          <p className="inline-flex items-center gap-2 text-[#f5f0e8]/40 text-sm border border-[#222] rounded-full px-5 py-2.5">
            <span>Pwojè reyèl kliyan</span>
          </p>
        </div>

      </div>
    </section>
  )
}

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[0]
  delay: number
}) {
  const ref = useScrollAnimation(delay)

  return (
    <div
      ref={ref}
      className="fade-up group bg-[#111] border border-[#222] hover:border-[#e8b94f]/30 rounded-2xl overflow-hidden transition-all duration-300"
    >

      {/* Image */}
      <div className="relative w-full h-[280px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="px-5 py-4 flex flex-col gap-2">

        <span className="self-start bg-[#e8b94f]/10 border border-[#e8b94f]/25 text-[#e8b94f] text-xs font-bold px-3 py-1 rounded-full tracking-wide">
          {project.tag}
        </span>

        <h3 className="font-[family-name:var(--font-syne)] font-bold text-[#f5f0e8] text-base">
          {project.title}
        </h3>

        <p className="text-[#f5f0e8]/50 text-sm">
          {project.desc}
        </p>

      </div>
    </div>
  )
}