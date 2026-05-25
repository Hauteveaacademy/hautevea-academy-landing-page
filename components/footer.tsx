export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#e8b94f]/20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <div className="font-[family-name:var(--font-syne)] font-extrabold text-base tracking-[0.12em] text-[#f5f0e8] uppercase mb-1">
              <span className="text-[#e8b94f]">HAUTEVEA</span>{' '}
              <span className="opacity-80">ACADEMY</span>
            </div>
            <p className="text-[#f5f0e8]/35 text-xs tracking-widest uppercase">
              Kreye · Aprann · Lanse
            </p>
          </div>

          {/* Links */}
<nav className="flex flex-wrap items-center justify-center gap-6">
  {[
    { label: 'Aksè Kou', href: '#pricing' },
    { label: 'Kominote Discord', href: 'https://discord.com/channels/1507166617182666863/1507167054015365261' },
    { label: 'Kontakte Nou', href: 'mailto:hauteveaacademy@gmail.com' },
  ].map((l) => (
    <a
      key={l.label}
      href={l.href}
      className="text-[#f5f0e8]/45 hover:text-[#f5f0e8] text-sm transition-colors duration-200"
      target={l.href.startsWith('http') ? '_blank' : undefined}
      rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {l.label}
    </a>
  ))}
</nav>

          {/* Copyright */}
          <p className="text-[#f5f0e8]/25 text-xs text-center md:text-right">
            © 2026 HAUTEVEA ACADEMY  Tout dwa rezève
          </p>
        </div>
      </div>
    </footer>
  )
}
