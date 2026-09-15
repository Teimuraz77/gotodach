export default function DachInbound() {
  return (
    <main className="min-h-screen bg-[#0b100f] text-stone-100 py-24 px-6 sm:px-10 lg:px-16 selection:bg-emerald-400 selection:text-[#0b100f]">
      <div className="mx-auto max-w-4xl border-t border-white/10 pt-12">
        <a href="/" className="text-sm font-mono tracking-widest text-emerald-400 hover:text-emerald-300 mb-8 inline-block">← ZURÜCK</a>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-stone-500">Säule 02</p>
        <h1 className="mb-8 text-4xl sm:text-5xl font-medium tracking-[-0.03em] text-emerald-300">Market Entry & Sales Consulting.</h1>
        
        <div className="space-y-8 text-base leading-relaxed text-stone-400">
          <p className="text-lg text-stone-300">
            Der DACH-Raum verzeiht keine unstrukturierten Vertriebsexperimente. Wer hier Software oder komplexe Tech-Lösungen platzieren will, braucht Enterprise-Standards.
          </p>
          <p>
            Wir begleiten internationale Unternehmen nicht mit Theorie, sondern mit harter Sales-Execution. Von der Architektur der ersten Go-to-Market-Strategie bis hin zum Aufbau einer funktionierenden, messbaren Vertriebspipeline. Wir übersetzen Ihr Produkt in die Sprache und Erwartungshaltung des deutschsprachigen B2B-Entscheiders.
          </p>
          <h2 className="text-xl text-stone-200 font-medium pt-4">Unsere Methodik:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lokalisierung von Value Propositions für komplexe Software-Sales-Zyklen.</li>
            <li>Aufbau und Skalierung von Outbound- und Inbound-Pipelines.</li>
            <li>Hands-on Sales-Consulting, Team-Training und Co-Selling.</li>
          </ul>
          <div className="pt-8 border-t border-white/10 mt-8">
            <a href="/kontakt" className="inline-flex items-center gap-3 border-b border-emerald-400/50 pb-2 text-sm font-medium text-stone-100 transition-colors hover:border-emerald-300 hover:text-emerald-300">Go-to-Market planen →</a>
          </div>
        </div>
      </div>
    </main>
  )
}
