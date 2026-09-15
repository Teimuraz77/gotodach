export default function HuguAi() {
  return (
    <main className="min-h-screen bg-[#0b100f] text-stone-100 py-24 px-6 sm:px-10 lg:px-16 selection:bg-emerald-400 selection:text-[#0b100f]">
      <div className="mx-auto max-w-4xl border-t border-white/10 pt-12">
        <a href="/" className="text-sm font-mono tracking-widest text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← BACK</a>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-stone-500">Pillar 03</p>
        <h1 className="mb-8 text-4xl sm:text-5xl font-medium tracking-[-0.03em] text-emerald-300">B2B Recruiting Automation.</h1>
        
        <div className="space-y-8 text-base leading-relaxed text-stone-400">
          <p className="text-lg text-stone-300">
            Candidates are no longer searching on cluttered job portals. They are mobile. HuGu engages them exactly where the conversation is already happening.
          </p>
          <p>
            HuGu (HustleGuru) is a fully automated AI assistant that qualifies candidates for B2B tech sales roles. Instead of filling out forms, talents go through a natural, AI-driven onboarding process via WhatsApp or Telegram. This ruthlessly filters out unsuitable applications and delivers only pre-qualified profiles directly to your database.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 p-6 bg-white/5 border border-white/10 rounded-sm">
            <div className="flex-1">
              <h2 className="text-lg text-stone-200 font-medium mb-2">Start the test run.</h2>
              <p className="text-sm text-stone-400 mb-4">Let HuGu qualify you and experience the process live on your smartphone.</p>
            </div>
            <div className="flex flex-col gap-3 justify-center">
              <a href="https://wa.me/491723196188" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-sm bg-emerald-500 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-[#0b100f] transition-colors hover:bg-emerald-400">
                WhatsApp
              </a>
              <a href="https://t.me/HuGu26" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-sm border border-emerald-500/50 bg-transparent px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-emerald-400 transition-colors hover:bg-emerald-950">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
