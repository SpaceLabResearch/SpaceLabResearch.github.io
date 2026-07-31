export default function TestHome() {
  return (
    <main className="test-home">
      <header className="test-header">
        <a className="test-brand" href="/">
          <i aria-hidden="true" />
          <strong>SPACELAB RESEARCH</strong>
        </a>
        <nav aria-label="Test home navigation">
          <a href="#research">RESEARCH</a>
          <a href="/#journal">JOURNAL</a>
          <a href="/#about">ABOUT</a>
        </nav>
        <span className="test-code">SL—R / HOME 02</span>
      </header>

      <section className="test-hero" id="research">
        <div className="test-meta">
          <span>ARCHITECTURE × SYSTEMS ENGINEERING</span>
          <span>NEUROTECHNOLOGY / ADAPTIVE ENVIRONMENTS</span>
        </div>

        <div className="test-copy">
          <p className="test-kicker">RESEARCH FIELD / 01</p>
          <h1>Human signals<br />for adaptive<br />environments.</h1>
          <p className="test-intro">
            SpaceLab Research explores how architecture, systems engineering
            and neurotechnology can reveal — and respond to — human experience
            in complex and extreme environments.
          </p>
        </div>

        <figure className="test-visual">
          <img
            src="/images/eva-risk-map.svg"
            alt="EVA multi-factor risk map"
          />
          <figcaption>
            <span>FIELD PLATE / EVA RISK MAP</span>
            <span>NEUROQoE · BIOSIGNALS · HUMAN SYSTEMS</span>
          </figcaption>
        </figure>

        <div className="test-status">
          <b>01</b>
          <span>OBSERVE</span>
          <i />
          <b>02</b>
          <span>MODEL</span>
          <i />
          <b>03</b>
          <span>ADAPT</span>
        </div>
      </section>

      <section className="test-statement">
        <span>RESEARCH STATEMENT</span>
        <p>
          From EEG and biosignals to environmental sensing and computational
          models, the work connects human state with the conditions that shape
          perception, performance and well-being.
        </p>
        <a href="/#journal">OPEN FIELD NOTES <b>→</b></a>
      </section>

      <footer className="test-footer">
        <span>SANTA ROSA / MADRID / TARRAGONA</span>
        <span>INDEPENDENT RESEARCH UNIT</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
