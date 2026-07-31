import Link from "next/link";

type Article = { no:string; tag:string; title:string; intro:string; date:string; featureImage?:string; featureAlt?:string; sections:{label:string;title:string;text:string}[] };

export default function ArticlePage({ article }: { article: Article }) {
  return <main className="article-shell">
    <header className="manual-header article-header">
      <Link className="brand" href="/test-home/"><i aria-hidden="true" /><span className="brand-name"><span>SPACE</span><strong>LAB</strong></span><span className="rec-mark">REC</span></Link>
      <nav aria-label="Article navigation">
        <Link href="/test-home/">HOME</Link>
        <Link className="active" href="/#journal">JOURNAL</Link>
        <Link href="/#index">INDEX</Link>
        <Link href="/#about">ABOUT</Link>
      </nav>
      <div className="header-code"><span>FIELD NOTE</span><b>{article.no}</b></div>
    </header>
    <section className="article-hero">
      <div className="article-kicker"><span>{article.tag}</span><span>{article.date}</span></div>
      <div className="article-title"><b>{article.no}</b><h1>{article.title}</h1></div>
      <div className="article-object"><img src="/images/tp7-transparent.png" alt="TP-7 field recorder line drawing" /></div>
    </section>
    {article.sections.length > 0 && <section className="article-index">
      <div><b>{article.no}</b><span>field note</span></div>
      {article.sections.map((s,i)=><a href={`#section-${i+1}`} key={s.label}><small>0{i+1}</small><span>{s.label}</span></a>)}
      <Link className="back-link" href="/#journal">back to journal</Link>
    </section>}
    <section className="article-intro"><p>{article.intro}</p><div className="article-facts"><span>FORMAT / RESEARCH NOTE</span><span>STATUS / OPEN</span><span>ISSUE / 01—2026</span></div></section>
    {article.featureImage && <figure className="article-feature"><img src={article.featureImage} alt={article.featureAlt || article.title} /></figure>}
    {article.sections.map((s,i)=><section className="article-section" id={`section-${i+1}`} key={s.label}>
      <div className="section-number">0{i+1}</div>
      <div className="section-copy"><span>{s.label}</span><h2>{s.title}</h2><p>{s.text}</p></div>
      <div className={`section-visual visual-${i+1}`} aria-hidden="true"><div className="visual-screen"><span>{article.no}</span><b>{i===0?"EEG":i===1?"SYNC":"QoE"}</b></div><div className="visual-lines"><i/><i/><i/><i/><i/></div><div className="visual-data"><span>CH / 01</span><span>MK / 342</span><span>∆ / +9.8</span></div></div>
    </section>)}
    {article.sections.length > 0 && <section className="article-table"><h2>method reference</h2><div className="table-head"><span>stage</span><span>signal</span><span>reference</span><span>output</span></div>{[['capture','EEG + event marker','participant clock','raw stream'],['align','stimulus onset','shared timeline','epochs'],['evaluate','ERP / features','quality transition','NeuroQoE']].map(row=><div className="table-row" key={row[0]}>{row.map(cell=><span key={cell}>{cell}</span>)}</div>)}</section>}
    <footer className="article-footer"><Link href="/#journal">← ALL FIELD NOTES</Link><span>SPACELAB RESEARCH / {article.no}</span></footer>
  </main>;
}
