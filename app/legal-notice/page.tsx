import Hero from "../components/Hero/Hero";

export default function LegalNotice() {
  return (
    <div className="legal__wrapper">
      <Hero title="Legal Notice"></Hero>
      <div className="legal__container">
        <h2>Angaben gemäß § 5 TMG</h2>
        <div className="legal__block">
          <div className="block__item">
            <span>sweeppeople GmbH</span>
            <span>Aurikelstraße 1</span>
            <span>82515 Wolfratshausen</span>
          </div>
          <div className="block__item">
            <span>Handelsregister: HRB 288488</span>
            <span>Registergericht: Amtsgericht München</span>
          </div>
          <div className="block__item">
            <h3>Vertreten durch:</h3>
            <span>Loic Kölbl</span>
            <span>Philipp Goodluck</span>
            <span>Maximilian Schmidt</span>
          </div>
        </div>
        <h2>Kontakt</h2>
        <div className="block__item">
          <span>Telefon: +49174/2374814</span>
          <span>
            E-Mail:{" "}
            <a href="mailto:hello@sweeppeople.com">hello@sweeppeople.com</a>
          </span>
        </div>
        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <div className="block__item">
          <span>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </span>
        </div>
      </div>
    </div>
  );
}
