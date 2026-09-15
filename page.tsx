const solutions = [
  {
    index: '01',
    eyebrow: 'Central Asia',
    title: 'Renewable Energy & Matchmaking',
    description:
      'We connect capital, technology, and opportunity across one of the world’s most dynamic growth regions.',
    action: 'Explore Central Asia',
    accent: 'from-emerald-950/80 via-emerald-950/20 to-[#101716]',
    mark: 'CA',
  },
  {
    index: '02',
    eyebrow: 'DACH Inbound',
    title: 'Market Entry',
    description:
      'A precise, trusted route into Germany, Austria, and Switzerland for ambitious international businesses.',
    action: 'Enter the DACH market',
    accent: 'from-stone-800/70 via-stone-900/20 to-[#101716]',
    mark: 'DACH',
  },
  {
    index: '03',
    eyebrow: 'HuGu AI',
    title: 'B2B Recruiting Automation',
    description:
      'Intelligent infrastructure for finding, qualifying, and engaging the people who move business forward.',
    action: 'Discover HuGu AI',
    accent: 'from-[#193d39]/80 via-[#193d39]/20 to-[#101716]',
    mark: 'AI',
  },
]

function ArrowIcon() {
  return <span aria-hidden="true" className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
}

function SolutionCard({ solution }: { solution: (typeof solutions)[number] }) {
  return (
    <article className={`group relative flex min-h-[360px] flex-col overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br ${solution.accent} p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_24px_70px_-30px_rgba(16,185,129,0.45)] md:p-8`}>
      <div className="absolute -right-8 -top-10 select-none text-[150px] font-semibold leading-none tracking-[-0.12em] text-white/[0.035]">
        {solution.mark}
      </div>
      <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
        <span className="font-mono text-xs tracking-[0.2em] text-emerald-300/75">{solution.index}</span>
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
      </div>
      <div className="relative mt-auto">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-300">{solution.eyebrow}</p>
        <h2 className="max-w-xs text-2xl font-medium leading-tight tracking-[-0.03em] text-stone-100 md:text-[27px]">{solution.title}</h2>
        <p className="mt-5 max-w-sm text-sm leading-6 text-stone-400">{solution.description}</p>
        <a href="#contact" className="group mt-8 inline-flex items-center gap-3 border-b border-emerald-400/50 pb-2 text-sm font-medium text-stone-100 transition-colors hover:border-emerald-300 hover:text-emerald-300">
          {solution.action}
          <ArrowIcon />
        </a>
      </div>
    </article>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b100f] text-stone-100 selection:bg-emerald-400 selection:text-[#0b100f]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <header className="flex h-24 items-center justify-between border-b border-white/10">
          <a href="#top" className="flex items-center gap-3" aria-label="Aurelia home">
            <span className="flex h-8 w-8 items-center justify-center border border-emerald-400/70 text-sm font-semibold text-emerald-300">A</span>
            <span className="text-sm font-semibold tracking-[0.28em] text-stone-200">AURELIA</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
            <a href="#solutions" className="text-sm text-stone-400 transition-colors hover:text-stone-100">Solutions</a>
            <a href="#approach" className="text-sm text-stone-400 transition-colors hover:text-stone-100">Approach</a>
            <a href="#contact" className="text-sm text-stone-400 transition-colors hover:text-stone-100">Contact</a>
          </nav>
          <a href="#contact" className="border border-white/20 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-stone-200 transition-colors hover:border-emerald-400 hover:text-emerald-300">Start a conversation</a>
        </header>

        <section id="top" className="relative py-24 sm:py-32 lg:py-40" aria-labelledby="hero-title">
          <div className="pointer-events-none absolute -right-20 top-8 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
          <p className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-300/80"><span className="h-px w-10 bg-emerald-400/70" /> Strategic growth, precisely executed</p>
          <h1 id="hero-title" className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.06em] text-stone-100 sm:text-7xl lg:text-[108px]">Bridging Markets.<br /><span className="text-emerald-300">Automating Growth.</span></h1>
          <div className="mt-12 flex max-w-2xl flex-col justify-between gap-7 border-t border-white/10 pt-6 sm:flex-row sm:items-start">
            <p className="max-w-md text-base leading-7 text-stone-400">We build the strategic and technological bridges that turn complex markets into clear, compounding opportunity.</p>
            <a href="#solutions" className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-emerald-300">View our focus areas <ArrowIcon /></a>
          </div>
        </section>

        <section id="solutions" className="pb-24 sm:pb-32" aria-labelledby="solutions-title">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div><p className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-stone-500">Our focus areas</p><h2 id="solutions-title" className="text-2xl tracking-[-0.03em] text-stone-200">Three ways forward.</h2></div>
            <span className="hidden font-mono text-xs text-stone-600 sm:block">AURELIA / 2024—</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">{solutions.map((solution) => <SolutionCard key={solution.index} solution={solution} />)}</div>
        </section>

        <footer id="contact" className="flex flex-col gap-5 border-t border-white/10 py-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2024 Aurelia Group. Built for the next horizon.</span>
          <a href="mailto:hello@aurelia.group" className="text-stone-300 transition-colors hover:text-emerald-300">hello@aurelia.group</a>
        </footer>
      </div>
    </main>
  )
}
