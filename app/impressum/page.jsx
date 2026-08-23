export const metadata = {
  title: "Impressum – Maik Bock",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <section className="py-16 xl:py-24">
      <div className="container mx-auto max-w-[820px]">
        <h1 className="h2 mb-10">Impressum</h1>

        <div className="flex flex-col gap-10 text-white/80 leading-relaxed">
          <div className="bg-[#232329] border border-accent/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-accent mb-3">Status dieser Website</h2>
            <p>
              Diese Website ist ein privates, nicht-kommerzielles Portfolio-Projekt. Es werden hier
              aktuell keine gewerblichen Dienstleistungen angeboten und keine Aufträge entgegengenommen.
              Die Seite dient dazu, Freunden, Kontakten und potenziellen Arbeitgebern meine Fähigkeiten
              als Softwareentwickler zu zeigen. Eine Anmeldung als Selbstständiger/Gewerbetreibender ist
              zum 1. November 2027 geplant — sobald das erfolgt ist, wird dieses Impressum um die dann
              erforderlichen vollständigen Angaben (u. a. Anschrift und Umsatzsteuer-Status) ergänzt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Angaben gemäß § 5 DDG</h2>
            <p>Maik M. Bock</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Kontakt</h2>
            <p>
              Telefon: +49 162 6310090
              <br />
              E-Mail: coding.maikel@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>Maik M. Bock, Kontaktdaten wie oben.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder
              verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
              Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
              ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
              nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
