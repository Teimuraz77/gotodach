const solutions = [
  {
    index: '01',
    eyebrow: 'Central Asia',
    title: 'Renewable Energy & Matchmaking',
    description:
      'Strategic bridging and infrastructure projects, connecting European capital and technology with high-growth markets in Central Asia.',
    action: 'Explore Central Asia',
    link: '/central-asia',
    accent: 'from-emerald-950/80 via-emerald-950/20 to-[#101716]',
    mark: 'CA',
  },
  {
    index: '02',
    eyebrow: 'DACH Inbound',
    title: 'Market Entry & Consulting',
    description:
      'A precise, trusted route into Germany, Austria, and Switzerland for international businesses seeking structured market expansion.',
    action: 'Explore DACH Consulting',
    link: '/dach-inbound',
    accent: 'from-stone-800/70 via-stone-900/20 to-[#101716]',
    mark: 'DACH',
  },
  {
    index: '03',
    eyebrow: 'HuGu AI',
    title: 'B2B Recruiting Automation',
    description:
      'Intelligent conversational infrastructure for automating candidate onboarding, tech sales matching, and talent pipelines via WhatsApp & Telegram.',
    action: 'Discover HuGu AI',
    link: '/hugu-ai',
    accent: 'from-[#193d39]/80 via-[#193d39]/20 to-[#101716]',
    mark: 'AI',
  },
]

function ArrowIcon() {
  return <span aria-hidden="true" className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
}

function SolutionCard({ solution }: { solution: (typeof solutions)[number] }) {
  const isHuGu = solution.mark === 'AI';
  
  // Hardschreiben der Farben, damit Vercel sie beim Build nicht löscht
  const cardColor = 
    solution.mark === 'CA' ? 'bg-gradient-to-br from-emerald-900/40 via-emerald-950/10 to-[#0b100f] border-emerald-800/30' :
    solution.mark === 'DACH' ? 'bg-gradient-to-br from-stone-800/40 via-stone-900/10 to-[#0b100f] border-stone-700/30' :
    'bg-gradient-to-br from-[#193d39]/50 via-[#193d39]/10 to-[#0b100f] border-[#193d39]/50';

  return (
    <article className={`group relative flex min-h-[400px] flex-col overflow-hidden rounded-sm border ${cardColor} p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.3)] md:p-8`}>
      <div className="absolute -right-8 -top-10 select-none text-[150px] font-semibold leading-none tracking-[-0.12em] text-white/[0.04]">
        {solution.mark}
      </div>
      <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
        <span className="font-mono text-xs tracking-[0.2em] text-emerald-300/75">{solution.index}</span>
        <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
      </div>
      <div className="relative mt-auto">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-400">{solution.eyebrow}</p>
        <h2 className="max-w-xs text-2xl font-medium leading-tight tracking-[-0.03em] text-stone-100 md:text-[27px]">{solution.title}</h2>
        <p className="mt-5 max-w-sm text-sm leading-6 text-stone-400">{solution.description}</p>
        
        {isHuGu ? (
          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex flex-col gap-3 md:hidden">
              <a href="https://wa.me/491723196188" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-sm bg-emerald-500 px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#0b100f] transition-colors hover:bg-emerald-400">
                Start on WhatsApp
              </a>
              <a href="https://t.me/HuGu26" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-sm border border-emerald-500/50 bg-[#0b100f] px-4 py-3 text-xs font-bold uppercase tracking-widest text-emerald-400 transition-colors hover:bg-emerald-950">
                Start on Telegram
              </a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-white text-center text-[9px] font-bold text-stone-900 shadow-md">QR<br/>WhatsApp</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-white text-center text-[9px] font-bold text-stone-900 shadow-md">QR<br/>Telegram</div>
              </div>
              <div className="ml-2 text-xs text-stone-400">
                Scan to launch.
              </div>
            </div>
            
            <a href={solution.link} className="group mt-6 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 transition-colors hover:text-emerald-300">
              MEHR ÜBER HUGU AI <ArrowIcon />
            </a>
          </div>
        ) : (
          <a href={solution.link} className="group mt-8 inline-flex items-center gap-3 border-b border-emerald-400/50 pb-2 text-sm font-medium text-stone-100 transition-colors hover:border-emerald-300 hover:text-emerald-300">
            {solution.action}
            <ArrowIcon />
          </a>
        )}
      </div>
    </article>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b100f] text-stone-100 selection:bg-emerald-400 selection:text-[#0b100f]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        <header className="flex h-24 items-center justify-between border-b border-white/10">
          <a href="/" className="flex items-center gap-3" aria-label="GoToDACH home">
            <span className="flex h-8 w-8 items-center justify-center border border-emerald-400/70 text-sm font-semibold text-emerald-300">G</span>
            <span className="text-sm font-semibold tracking-[0.28em] text-stone-200">GoToDACH</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
            <a href="#solutions" className="text-sm text-stone-400 transition-colors hover:text-stone-100">Pillars</a>
            <a href="/kontakt" className="text-sm text-stone-400 transition-colors hover:text-stone-100">Contact</a>
          </nav>
          <a href="/kontakt" className="border border-white/20 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-stone-200 transition-colors hover:border-emerald-400 hover:text-emerald-300">Get in touch</a>
        </header>

        <section id="top" className="relative py-24 sm:py-32 lg:py-40" aria-labelledby="hero-title">
          <div className="pointer-events-none absolute -right-20 top-8 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
          <p className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-300/80">
            <span className="h-px w-10 bg-emerald-400/70" /> Central Asia Infrastructure &middot; DACH Consulting &middot; AI Automation
          </p>
          <h1 id="hero-title" className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] text-stone-100 sm:text-7xl lg:text-[108px]">
            Bridging Markets.<br /><span className="text-emerald-300">Automating Growth.</span>
          </h1>
          <div className="mt-12 flex max-w-2xl flex-col justify-between gap-7 border-t border-white/10 pt-6 sm:flex-row sm:items-start">
            <p className="max-w-md text-base leading-7 text-stone-400">
              GoToDACH unites high-impact renewable energy projects in Central Asia, structured DACH market entry, and next-generation AI recruiting infrastructure.
            </p>
            <a href="#solutions" className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-emerald-300">
              Explore pillars <ArrowIcon />
            </a>
          </div>
        </section>

        <section id="solutions" className="pb-24 sm:pb-32" aria-labelledby="solutions-title">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-stone-500">Core Architecture</p>
              <h2 id="solutions-title" className="text-2xl tracking-[-0.03em] text-stone-200">Three pillars under one roof.</h2>
            </div>
            <span className="hidden font-mono text-xs text-stone-600 sm:block">GoToDACH / 2026—</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard key={solution.index} solution={solution} />
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-5 border-t border-white/10 py-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <span>© 2026 GoToDACH. All rights reserved.</span>
            <a href="/impressum" className="transition-colors hover:text-stone-300">Impressum</a>
          </div>
          <a href="mailto:contact@gotodach.com" className="text-stone-300 transition-colors hover:text-emerald-300">contact@gotodach.com</a>
        </footer>
      </div>
    </main>
  )
}
