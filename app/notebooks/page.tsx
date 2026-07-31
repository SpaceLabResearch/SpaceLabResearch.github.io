import { InnerPage } from "../components/InnerPage";

const notebooks = [
  ["NB-01","P300 USER GUIDE","Event timing, ERP extraction and visual interpretation","PYTHON · MNE","https://github.com/SpaceLabResearch/neuroqoe-notebooks"],
  ["NB-02","BIOSIGNAL SYNCHRONIZATION","Aligning EEG, HRV, EDA and environmental streams","PYTHON · PANDAS",""],
  ["NB-03","NEUROQOE VALIDATION","Participant-wise evaluation and uncertainty estimates","SCIKIT-LEARN",""],
];

export default function Notebooks() {
  return <InnerPage code="03" label="OPEN METHODS / NOTEBOOKS" title="Reproducible research instruments." intro="Readable notebooks that connect methodological explanation, executable Python and saved visual outputs.">
    <div className="notebook-list">{notebooks.map(([id,title,text,stack,href])=><article key={id}><span className="notebook-id">{id}</span><div><h2>{title}</h2><p>{text}</p></div><span className="stack">{stack}</span>{href ? <a className="notebook-button" href={href} target="_blank" rel="noreferrer">OPEN ↗</a> : <span className="coming-soon">SOON</span>}</article>)}</div>
    <p className="disclaimer">DEMONSTRATION DATA ONLY · NO IDENTIFIABLE PARTICIPANT RECORDINGS</p>
  </InnerPage>;
}
