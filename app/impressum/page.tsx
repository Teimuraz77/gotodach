export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#0b100f] text-stone-100 py-24 px-6 sm:px-10 lg:px-16 selection:bg-emerald-400 selection:text-[#0b100f]">
      <div className="mx-auto max-w-3xl border-t border-white/10 pt-12">
        <h1 className="text-4xl font-medium tracking-[-0.03em] text-emerald-300 mb-8">Impressum</h1>
        <div className="space-y-6 text-sm leading-7 text-stone-400">
          
          <section>
            <h2 className="text-lg font-medium text-stone-200 mb-2">Angaben gemäß § 5 TMG</h2>
            <p>GoToDACH</p>
            <p>Teimuraz Gogodze</p>
            <p>Schlossstraße 28</p>
            <p>60486 Frankfurt am Main</p>
          </section>
          
          <section>
            <h2 className="text-lg font-medium text-stone-200 mb-2">Kontakt</h2>
            <p>Telefon: 0049 1577533785</p>
            <p>E-Mail: contact@gotodach.com</p>
          </section>
          
          <section>
            <h2 className="text-lg font-medium text-stone-200 mb-2">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br/>
            DE813113094</p>
          </section>

        </div>
      </div>
    </main>
  )
}
