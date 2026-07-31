const posts = [
  {
    no: "001",
    date: "31.07.26",
    tag: "FIELD NOTE / RESEARCH",
    title: "Redefine Success",
    excerpt:
      "Confidence can build quietly, step by step, through action, learning and the willingness to keep moving forward.",
    read: "04 MIN",
    mode: "signal",
    slug: "p300-quality-change",
  },
  {
    no: "002",
    date: "24.07.26",
    tag: "OB-1 / BIOSIGNALS",
    title: "From aerospace node to wearable habitat interface",
    excerpt:
      "Translating modular aerospace logic into an open biosignal system for garments, rooms and adaptive environments.",
    read: "08 MIN",
    mode: "node",
    slug: "wearable-habitat-interface",
  },
  {
    no: "003",
    date: "18.07.26",
    tag: "METHOD / NOTEBOOK",
    title: "Synchronising events before interpreting the brain",
    excerpt:
      "Why markers, clocks and experimental context must agree before an EEG model can say anything useful about experience.",
    read: "05 MIN",
    mode: "timeline",
    slug: "event-synchronisation",
  },
];

function Plate({ mode }: { mode: string }) {
  if (mode === "signal") {
    return (
      <div className="plate signal-plate" aria-label="Stylised P300 signal diagram">
        <span className="axis-y">µV</span><span className="axis-x">ms</span>
        <svg viewBox="0 0 520 180" role="img">
          <path className="grid-line" d="M20 90H500M75 20V160M190 20V160M305 20V160M420 20V160" />
          <path className="trace" d="M20 102 C45 98 55 110 76 103 S112 99 128 108 S157 96 170 104 S192 120 208 94 C224 65 231 25 247 22 C266 20 273 91 295 105 S337 97 356 105 S392 100 412 105 S458 99 500 104" />
        </svg>
        <div className="lcd-row"><b>P300</b><span>+9.8</span><span>342</span></div>
      </div>
    );
  }
  if (mode === "node") {
    return (
      <div className="plate node-plate" aria-label="Stylised OB-1 biosignal node diagram">
        <div className="orbit orbit-a" /><div className="orbit orbit-b" />
        <div className="node-core"><span>OB-1</span><b>NEURO</b></div>
        <i className="port p1" /><i className="port p2" /><i className="port p3" /><i className="port p4" />
        <small>EEG</small><small>HRV</small><small>EDA</small><small>ENV</small>
      </div>
    );
  }
  return (
    <div className="plate timeline-plate" aria-label="Stylised event synchronisation timeline">
      <div className="clock">00:03:42.18</div>
      <div className="timeline"><i /><i /><i /><i /><i /></div>
      <div className="channel-row"><span>STIM</span><b>01</b><b>02</b><b>03</b></div>
      <div className="channel-row"><span>EEG</span><b>MK</b><b>MK</b><b>MK</b></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="manual-header">
        <a className="brand" href="#top"><i aria-hidden="true" /><span className="brand-name"><span>SPACE</span><strong>LAB</strong></span><span className="rec-mark">REC</span></a>
        <nav aria-label="Primary navigation">
          <a href="/test-home/">HOME</a>
          <a className="active" href="#journal">BLOG</a>
          <a href="#index">INDEX</a>
          <a href="#about">ABOUT</a>
        </nav>
        <div className="header-code"><span>FIELD NOTES</span><b>OB-1</b></div>
      </header>

      <section className="cover" id="top">
        <div className="cover-meta"><span>ISSUE 01</span><span>JUL—DEC 2026</span></div>
        <div className="cover-title">
          <p>ARCHITECTURE / BIOSIGNALS / ADAPTIVE SYSTEMS</p>
          <h1>Field notes for<br />human environments.</h1>
        </div>
        <div className="cover-device" aria-hidden="true">
          <div className="device-tag"><span>FIELD OBJECT</span><b>TP—7</b></div>
          <img
            src="/images/tp7-transparent.png"
            alt="TP-7 field recorder, front view"
          />
          <span className="device-caption">portable field recorder / research interface</span>
        </div>
        <div className="notice"><b>notice.</b><span>read this first</span></div>
        <p className="cover-intro">SpaceLab Research documents experiments at the intersection of neurotechnology, wearable systems and habitat. This journal is the active public layer of the laboratory.</p>
      </section>

      <section className="journal" id="journal">
        <div className="section-label"><span>BLOG / LATEST NOTES</span><span>03 ENTRIES</span></div>
        {posts.map((post) => (
          <article className="post" id={`note-${post.no}`} key={post.no}>
            <div className="post-index"><b>{post.no}</b><span>{post.date}</span></div>
            <div className="post-copy">
              <p className="post-tag">{post.tag}</p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={`/notes/${post.slug}`} aria-label={`Read ${post.title}`}>READ FIELD NOTE <span>→</span></a>
            </div>
            <Plate mode={post.mode} />
            <div className="post-read">{post.read}</div>
          </article>
        ))}
      </section>

      <section className="index-section" id="index">
        <div className="section-label"><span>INDEX</span><span>RESEARCH CHANNELS</span></div>
        <div className="index-list">
          <a href="#note-001"><b>01</b><i>RESEARCH CHANNEL</i><span>NeuroQoE</span><small>EEG / ERP / P300</small><em>EXPLORE →</em></a>
          <a href="#note-002"><b>02</b><i>SYSTEM CHANNEL</i><span>Biosignal nodes</span><small>OB-1 / WEARABLES</small><em>EXPLORE →</em></a>
          <a href="#journal"><b>03</b><i>HABITAT CHANNEL</i><span>Adaptive habitats</span><small>SPACE / BODY / SYSTEM</small><em>EXPLORE →</em></a>
          <a href="#note-003"><b>04</b><i>OPEN CHANNEL</i><span>Open notebooks</span><small>PYTHON / METHODS</small><em>EXPLORE →</em></a>
        </div>
      </section>

      <footer id="about">
        <div><strong>SPACELAB RESEARCH</strong><span>Architecture × Systems × Neurotechnology</span></div>
        <p>Independent research notes connecting human signals, design and environments.</p>
        <div className="footer-code"><span>FIELD NOTES / ISSUE 01</span><b>SL—R / 2026</b></div>
      </footer>
    </main>
  );
}
