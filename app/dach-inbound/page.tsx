export default function DachInbound() {
  return (
    <main className="min-h-screen bg-[#0b100f] text-stone-100 py-24 px-6 sm:px-10 lg:px-16 selection:bg-emerald-400 selection:text-[#0b100f]">
      <div className="mx-auto max-w-4xl border-t border-white/10 pt-12">
        <a href="/" className="text-sm font-mono tracking-widest text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← BACK</a>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-stone-500">Pillar 02</p>
        <h1 className="mb-8 text-4xl sm:text-5xl font-medium tracking-[-0.03em] text-emerald-300">Market Entry & Sales Consulting.</h1>
        
        <div className="space-y-8 text-base leading-relaxed text-stone-400">
          <p className="text-lg text-stone-300">
            The DACH region does not forgive unstructured sales experiments. Successfully placing software or complex tech solutions here requires enterprise standards.
          </p>
          <p>
            We guide international companies not with mere theory, but with hard sales execution. From architecting the initial go-to-market strategy to building a functional, measurable sales pipeline. We translate your product into the language and expectations of German-speaking B2B decision-makers.
          </p>
          <h2 className="text-xl text-stone-200 font-medium pt-4">Our Methodology:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Localizing value propositions for complex software sales cycles.</li>
            <li>Building and scaling outbound and inbound pipelines.</li>
            <li>Hands-on sales consulting, team training, and co-selling.</li>
          </ul>
          <div className="pt-8 border-t border-white/10 mt-8">
            <a href="/kontakt" className="inline-flex items-center gap-3 border-b border-emerald-400/50 pb-2 text-sm font-medium text-stone-100 transition-colors hover:border-emerald-300 hover:text-emerald-300">Plan your market entry →</a>
          </div>
        </div>
      </div>
    </main>
  )
}
