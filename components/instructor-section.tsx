'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import React from 'react'

const stats = [
 { value: '4+', label: 'Ane Eksperyans AI' },
 { value: '50+', label: 'Pwojè Kreye' },
 { value: '1', label: 'Fondatè HAUTEVEA' },
]

const stats2 = [
 { value: '3+', label: 'Ane Eksperyans' },
 { value: '55', label: 'Pwojè Kreye' },
 { value: '1', label: 'Ko-Fondatè' },
]

// ✏️ CHANJE BIO MARKENLEY ICI
const markenleyBio = `CEO | Business Funding • Finance • Tax Services.

Entrepreneur ki espesyalize nan ede businesses grandi atravè funding, finance, business credit, ak tax solutions Ozetazini. Objektif mwen se ede entrepreneurs konstwi yon biznis solid ak estabilite finansye.`

export default function InstructorSection() {
 const ref1L = useScrollAnimation(0) as React.RefObject<HTMLDivElement>
 const ref1R = useScrollAnimation(150) as React.RefObject<HTMLDivElement>
 const ref2L = useScrollAnimation(0) as React.RefObject<HTMLDivElement>
 const ref2R = useScrollAnimation(150) as React.RefObject<HTMLDivElement>

 return (
   <section className="py-24 px-4 sm:px-6 bg-[#0d0d0d]" id="instructor">
     <div className="max-w-5xl mx-auto">

       <div className="text-center mb-16">
         <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">
           Enstriktè yo
         </span>
         <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8]">
           Ekip HAUTEVEA ACADEMY
         </h2>
       </div>

       {/* SAMSON */}
       <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-20">

         <div ref={ref1L} className="fade-up flex justify-center lg:justify-start w-full">
           <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
             <div className="w-full h-full rounded-full border-2 border-[#e8b94f]/40 p-1.5">
               <div className="w-full h-full rounded-full bg-[#1a1a1a] border border-[#222] overflow-hidden">
                 <div className="relative w-full h-full">
                   <Image src="/images/samson.jpg" alt="Samson Janvier" fill className="object-cover" priority />
                   <div className="absolute inset-0 bg-black/25" />
                 </div>
               </div>
             </div>
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#e8b94f] rounded-xl px-4 py-2 shadow-lg flex flex-col items-center whitespace-nowrap z-10">
               <span className="font-[family-name:var(--font-syne)] font-bold text-[#0a0a0a] text-xs uppercase tracking-wide">Samson Janvier</span>
               <span className="font-[family-name:var(--font-syne)] text-[#0a0a0a] text-[10px] tracking-wide mt-0.5">Devlopè & Fondatè</span>
             </div>
           </div>
         </div>

         <div ref={ref1R} className="fade-up mt-8 lg:mt-0 w-full">
           <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">Fondatè</span>
           <h3 className="font-[family-name:var(--font-syne)] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] mb-2">Samson Janvier</h3>
           <p className="text-[#e8b94f] font-medium text-base mb-6">Devlopè & Fondatè HAUTEVEA ACADEMY</p>
           <p className="text-[#f5f0e8]/65 text-base leading-relaxed mb-8">
             Nou kreye sit entènèt ak aplikasyon chak jou ak AI.
             Nou konnen egzakteman ki zouti ki travay,
             ki estrateji ki bay lajan, ak ki erè pou evite.
             HAUTEVEA ACADEMY se tout sa Nou aprann yo distile nan 5 leson pratik.
           </p>
           <div className="flex flex-wrap gap-3 sm:gap-4">
             {stats.map((s, i) => (
               <div key={i} className="bg-[#111] border border-[#e8b94f]/15 rounded-xl px-4 sm:px-5 py-3 text-center">
                 <div className="font-[family-name:var(--font-syne)] font-extrabold text-xl sm:text-2xl text-[#e8b94f] leading-none mb-1">{s.value}</div>
                 <div className="text-[#f5f0e8]/45 text-xs font-medium">{s.label}</div>
               </div>
             ))}
           </div>
         </div>
       </div>

       <div className="border-t border-[#1a1a1a] mb-20" />

       {/* MARKENLEY */}
       <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

         <div ref={ref2R} className="fade-up flex justify-center lg:justify-end order-1 lg:order-2 w-full">
           <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
             <div className="w-full h-full rounded-full border-2 border-[#e8b94f]/40 p-1.5">
               <div className="w-full h-full rounded-full bg-[#1a1a1a] border border-[#222] overflow-hidden">
                 <div className="relative w-full h-full">
                   <Image src="/images/markenley.jpg" alt="Markenley Tozince" fill className="object-cover" />
                   <div className="absolute inset-0 bg-black/25" />
                 </div>
               </div>
             </div>
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#e8b94f] rounded-xl px-4 py-2 shadow-lg flex flex-col items-center whitespace-nowrap z-10">
               <span className="font-[family-name:var(--font-syne)] font-bold text-[#0a0a0a] text-xs uppercase tracking-wide">Markenley Lovince</span>
               <span className="font-[family-name:var(--font-syne)] text-[#0a0a0a] text-[10px] tracking-wide mt-0.5">Ko-Fondatè</span>
             </div>
           </div>
         </div>

         <div ref={ref2L} className="fade-up order-2 lg:order-1 mt-8 lg:mt-0 w-full">
           <span className="inline-block text-[#e8b94f] text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-[#e8b94f]/30 px-4 py-1.5 rounded-full">Ko-Fondatè</span>
           <h3 className="font-[family-name:var(--font-syne)] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#f5f0e8] mb-2">Markenley Lovince</h3>
           <p className="text-[#e8b94f] font-medium text-base mb-6">Ko-Fondatè HAUTEVEA ACADEMY</p>
           <p className="text-[#f5f0e8]/65 text-base leading-relaxed mb-8">{markenleyBio}</p>
           <div className="flex flex-wrap gap-3 sm:gap-4">
             {stats2.map((s, i) => (
               <div key={i} className="bg-[#111] border border-[#e8b94f]/15 rounded-xl px-4 sm:px-5 py-3 text-center">
                 <div className="font-[family-name:var(--font-syne)] font-extrabold text-xl sm:text-2xl text-[#e8b94f] leading-none mb-1">{s.value}</div>
                 <div className="text-[#f5f0e8]/45 text-xs font-medium">{s.label}</div>
               </div>
             ))}
           </div>
         </div>

       </div>
     </div>
   </section>
 )
}
