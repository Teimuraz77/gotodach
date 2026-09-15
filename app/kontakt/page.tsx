export default function Kontakt() {
  return (
    <main className="min-h-screen bg-[#0b100f] text-stone-100 py-24 px-6 sm:px-10 lg:px-16 selection:bg-emerald-400 selection:text-[#0b100f]">
      <div className="mx-auto max-w-4xl border-t border-white/10 pt-12">
        <h1 className="mb-8 text-4xl font-medium tracking-[-0.03em] text-emerald-300">Start a conversation.</h1>
        <p className="mb-12 text-sm text-stone-400">
          Nutzen Sie das untenstehende Formular für Projektanfragen, Consulting-Bedarf oder um mehr über HuGu zu erfahren.
        </p>
        
        {/* Fillout iFrame Integration */}
        <div className="h-[700px] w-full overflow-hidden rounded-sm border border-white/10 bg-white/5">
          <iframe
            src="https://forms.fillout.com/t/7Uy4RjR37vus"
            width="100%"
            height="100%"
            frameBorder="0"
            title="GoToDACH Kontakt"
            allow="camera; microphone; geolocation"
          ></iframe>
        </div>
      </div>
    </main>
  )
}
