export const metadata = {
  title: "Datenschutzerklärung – Maik Bock",
  alternates: { canonical: "/datenschutz" },
};

const Placeholder = ({ children }) => (
  <span className="bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded text-[0.95em]">
    {children}
  </span>
);

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
    <div className="flex flex-col gap-3">{children}</div>
  </div>
);

export default function DatenschutzPage() {
  return (
    <section className="py-16 xl:py-24">
      <div className="container mx-auto max-w-[820px]">
        <h1 className="h2 mb-10">Datenschutzerklärung</h1>

        <div className="flex flex-col gap-10 text-white/80 leading-relaxed">
          <div className="bg-[#232329] border border-accent/20 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-accent mb-3">Status dieser Website</h2>
            <p>
              Diese Website ist ein privates, nicht-kommerzielles Portfolio-Projekt und bietet aktuell
              keine gewerblichen Dienstleistungen an. Eine Anmeldung als Selbstständiger ist zum
              1. Dezember 2026 geplant. Die nachfolgenden Angaben gelten unabhängig davon bereits jetzt
              für alle personenbezogenen Daten, die über diese Website verarbeitet werden.
            </p>
          </div>

          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              <br />
              Maik M. Bock
              <br />
              E-Mail: coding.maikel@gmail.com
              <br />
              Telefon: +49 162 6310090
            </p>
          </Section>

          <Section title="2. Allgemeines zur Datenverarbeitung">
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur nach Einwilligung des Nutzers
              (Art. 6 Abs. 1 lit. a DSGVO), zur Erfüllung eines Vertrags bzw. vorvertraglicher Maßnahmen
              (Art. 6 Abs. 1 lit. b DSGVO) oder auf Grundlage berechtigter Interessen (Art. 6 Abs. 1
              lit. f DSGVO), soweit gesetzlich erlaubt.
            </p>
          </Section>

          <Section title="3. Bereitstellung der Website und Server-Logfiles (Hosting)">
            <p>
              Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
              („Vercel“) gehostet. Beim Aufruf der Website erhebt Vercel automatisch technische
              Zugriffsdaten (Server-Logfiles), darunter IP-Adresse, Datum und Uhrzeit des Zugriffs,
              aufgerufene Seite, verwendeter Browser und Betriebssystem sowie die zuvor besuchte Seite
              (Referrer-URL). Diese Verarbeitung erfolgt zur Sicherstellung eines störungsfreien
              Betriebs sowie zur Gewährleistung der Sicherheit unserer IT-Systeme (Art. 6 Abs. 1 lit. f
              DSGVO). Da Vercel in den USA ansässig ist, kann eine Datenübermittlung in ein Drittland
              stattfinden; diese erfolgt auf Grundlage von EU-Standardvertragsklauseln bzw. im Rahmen
              des EU-US Data Privacy Framework. Vercel bietet im Rahmen seiner Nutzungsbedingungen
              einen Auftragsverarbeitungsvertrag (Data Processing Addendum) an, der die aktuellen
              EU-Standardvertragsklauseln für internationale Datenübermittlungen einbezieht (Stand:
              vercel.com/legal/dpa).
            </p>
          </Section>

          <Section title="4. Kontaktformular und E-Mail-Versand">
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
              dem Formular (Vor- und Nachname, E-Mail-Adresse, optional Telefonnummer, gewählte
              Leistung sowie Ihre Nachricht) zum Zwecke der Bearbeitung Ihrer Anfrage verarbeitet
              (Art. 6 Abs. 1 lit. b DSGVO). Der Versand erfolgt über den E-Mail-Dienstleister Resend
              (Resend, Inc., USA), der hierbei als Auftragsverarbeiter für uns tätig wird. Auch hier
              kann eine Datenübermittlung in die USA stattfinden. Resend bietet einen
              Auftragsverarbeitungsvertrag an, unterliegt den EU-Standardvertragsklauseln für
              internationale Datenübermittlungen und hat sich zur Einhaltung des EU-US Data Privacy
              Framework (sowie dessen UK-Erweiterung) verpflichtet (Stand: resend.com/legal/dpa).
              Ihre Angaben aus dem Kontaktformular verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
              Zwingende gesetzliche Aufbewahrungsfristen — insbesondere steuer- und handelsrechtliche —
              bleiben unberührt.
            </p>
          </Section>

          <Section title="5. Schutz vor Missbrauch (Rate-Limiting)">
            <p>
              Um das Kontaktformular sowie die Cookie-Einwilligungsverwaltung vor automatisiertem
              Missbrauch (z. B. Spam oder überhöhten Anfragemengen) zu schützen, wird die IP-Adresse
              anfragender Nutzer serverseitig kurzzeitig bei unserem Infrastruktur-Anbieter Upstash,
              Inc., USA, gezählt. Die Zählung dient ausschließlich der Erkennung ungewöhnlich vieler
              Anfragen von derselben IP-Adresse innerhalb kurzer Zeit; der jeweilige Zählerstand läuft
              automatisch nach 10 bzw. 20 Minuten ab und wird danach nicht weiter gespeichert (Art. 6
              Abs. 1 lit. f DSGVO — berechtigtes Interesse an einem funktionsfähigen, missbrauchsfreien
              Angebot). Auch hier kann eine Datenübermittlung in die USA stattfinden. Upstash bietet
              einen Auftragsverarbeitungsvertrag an und hat sich zur Einhaltung des EU-US Data Privacy
              Framework verpflichtet (Stand: upstash.com/trust).
            </p>
          </Section>

          <Section title="6. Cookies und Einwilligungsverwaltung (Cookie-Consent)">
            <p>
              Unsere Website verwendet ein Cookie-Consent-Tool, mit dem Sie festlegen können, welche
              nicht technisch notwendigen Cookies bzw. Dienste geladen werden dürfen. Technisch
              notwendige Cookies — etwa zur Speicherung Ihrer Cookie-Auswahl selbst — werden auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2 TTDSG gesetzt, da sie für den
              Betrieb der Website zwingend erforderlich sind. Alle darüber hinausgehenden Kategorien
              (z. B. Analyse- oder Marketing-Cookies) werden nur nach Ihrer ausdrücklichen Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG) aktiviert. Sie können Ihre Einwilligung
              jederzeit mit Wirkung für die Zukunft über den Link „Cookie-Einstellungen“ im Footer
              widerrufen oder anpassen. Ihre Entscheidung wird zusammen mit einem Zeitstempel und einer
              zufällig erzeugten, nicht auf Ihre Person rückführbaren Kennung serverseitig bei unserem
              Infrastruktur-Anbieter Upstash, Inc., USA, protokolliert, um die Einwilligung im
              Streitfall nachweisen zu können (zu Upstash und internationalen Datenübermittlungen siehe
              Abschnitt 5).
            </p>
            <p>
              <Placeholder>
                [Stand heute bindet die Website selbst keine Analyse-, Marketing- oder
                Social-Media-Dienste ein. Sobald solche Dienste hinzukommen, ist diese
                Datenschutzerklärung um die jeweiligen Anbieter, Zwecke und Rechtsgrundlagen zu
                ergänzen.]
              </Placeholder>
            </p>
          </Section>

          <Section title="7. Eingebundene Schriftarten">
            <p>
              Diese Website nutzt die Schriftart „Poppins” von Google Fonts. Die Schriftdatei wird
              beim Build der Website lokal eingebunden und beim Aufruf der Seite ausschließlich von
              unserem eigenen Server ausgeliefert. Es findet dabei keine Verbindung zu Servern von
              Google statt und es werden keine personenbezogenen Daten an Google übermittelt.
            </p>
            <p>
              Die separat abrufbare Lebenslauf-Seite (aufrufbar über den „Download CV“-Button) bindet
              Schriftarten von Google Fonts hingegen direkt über die Server von Google ein. Beim Aufruf
              dieser Seite wird daher eine Verbindung zu Google hergestellt, wobei Ihre IP-Adresse an
              Google übermittelt werden kann. Diese Verarbeitung erfolgt auf Grundlage berechtigter
              Interessen an einer technisch einfachen, einheitlichen Darstellung (Art. 6 Abs. 1 lit. f
              DSGVO). Weitere Informationen zum Umgang von Google mit Ihren Daten finden Sie in der
              Datenschutzerklärung von Google unter policies.google.com/privacy.
            </p>
          </Section>

          <Section title="8. Ihre Rechte als betroffene Person">
            <p>Ihnen stehen gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten zu:</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Zur Ausübung dieser Rechte genügt eine formlose Nachricht an die oben genannte
              E-Mail-Adresse.
            </p>
          </Section>

          <Section title="9. Beschwerderecht bei einer Aufsichtsbehörde">
            <p>
              Ihnen steht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, insbesondere in
              dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des
              mutmaßlichen Verstoßes. Für den Sitz des Verantwortlichen ist zuständig:
              <br />
              Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)
              <br />
              Kavalleriestr. 2–4, 40213 Düsseldorf
              <br />
              Telefon: 0211 38424-0, E-Mail: poststelle@ldi.nrw.de, Web: www.ldi.nrw.de
            </p>
          </Section>

          <Section title="10. Aktualität und Änderung dieser Datenschutzerklärung">
            <p>
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website
              und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es
              notwendig werden, diese Datenschutzerklärung zu ändern.
              <br />
              Stand: 24. August 2026
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}
