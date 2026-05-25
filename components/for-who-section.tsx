'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const forYes = [
  'Ou vle kreye sit oswa app men ou pa konn kode',
  'Ou vle fè lajan anliy ak konpetans teknik',
  'Ou se antreprenè ki vle gen sit ou menm',
  'Ou vle vann sèvis web pou kliyan',
  'Ou gen tan pou pratike epi aplike',
  'Ou nan dyaspora oswa Ayiti, Afrik, Karayib',
]

const forNo = [
  'Ou vle aprann kode pwofesyonèlman (Python, JS)',
  'Ou chèche yon dijital makèting kou',
  'Ou vle yon kou sou rezo sosyal sèlman',
  'Ou pa prè pou pratike epi fè pwojè',
  'Ou vle rezilta san travay',
]

export default function ForWhoSection() {
  const headRef = useScrollAnimation(0)
  const leftRef = useScrollAnimation(100)
  const rightRef = useScrollAnimation(200)

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        <div ref={headRef} className="fade-up text-center mb-14">
          <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-4xl md:text-5xl text-[#f5f0e8] text-balance">
            Èske Kou sa{' '}
            <span className="text-[#e8b94f]">Fèt pou Ou?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Yes */}
          <div ref={leftRef} className="fade-up bg-[#111] border border-green-500/20 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-green-500/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-green-400">
                Wi, fèt pou ou
              </h3>
            </div>
            <ul className="space-y-3.5">
              {forYes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-400/60 mt-2" />
                  <span className="text-[#f5f0e8]/65 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* No */}
          <div ref={rightRef} className="fade-up bg-[#111] border border-red-500/20 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-lg text-red-400">
                Pa fèt pou ou si
              </h3>
            </div>
            <ul className="space-y-3.5">
              {forNo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400/60 mt-2" />
                  <span className="text-[#f5f0e8]/65 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
