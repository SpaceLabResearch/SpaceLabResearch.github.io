import Link from "next/link";
import type { ReactNode } from "react";

export function InnerPage({ code, label, title, intro, children }: {
  code: string;
  label: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="SpaceLab Research home">
          <span className="wordmark-dot" /><span>SPACELAB RESEARCH</span>
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          <Link href="/research">RESEARCH</Link><Link href="/systems">SYSTEMS</Link>
          <Link href="/notebooks">NOTEBOOKS</Link><Link href="/about">ABOUT</Link>
        </nav>
        <span className="unit-code">OB-1 / {code}</span>
      </header>
      <section className="inner-hero">
        <p className="eyebrow">{label}</p>
        <div className="inner-title-row"><span>{code}</span><h1>{title}</h1></div>
        <p className="inner-intro">{intro}</p>
      </section>
      <section className="inner-content">{children}</section>
      <footer className="site-footer"><span>SPACELAB RESEARCH / OB-1</span><Link href="/">RETURN TO INDEX ↗</Link></footer>
    </main>
  );
}

export function DataStrip({ items }: { items: Array<[string, string]> }) {
  return <div className="data-strip">{items.map(([k,v]) => <div key={k}><span>{k}</span><strong>{v}</strong></div>)}</div>;
}
