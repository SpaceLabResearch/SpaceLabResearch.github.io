import { DataStrip, InnerPage } from "../components/InnerPage";

export default function Research() {
  return <InnerPage code="01" label="RESEARCH / NEUROQOE" title="Detecting change at the human–environment interface." intro="Research notes on nonlinear connection points between environmental metrics, perceptual quality and neurophysiological response.">
    <DataStrip items={[["SIGNALS","EEG · ERP · HRV · EDA"],["METHOD","EVENT-LOCKED ANALYSIS"],["VALIDATION","PARTICIPANT-WISE"],["STATUS","FRAMEWORK / ACTIVE"]]} />
    <div className="feature-layout">
      <article className="feature-card">
        <span className="card-tag">NOTE 001 / P300</span>
        <h2>Quality transitions as measurable events</h2>
        <p>Controlled audiovisual degradation creates explicit event markers. P300 amplitude and latency are examined alongside spectral, autonomic and subjective measures—without treating association as proof of mechanism.</p>
        <div className="micro-chart" aria-label="Stylized event-related potential"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
      </article>
      <aside className="method-panel">
        <span className="card-tag">CRITICAL TEST</span>
        <h3>Does the response generalize?</h3>
        <ol><li>Synchronize stimulus transitions.</li><li>Extract preregistered windows.</li><li>Separate participants across folds.</li><li>Compare against null and linear models.</li></ol>
      </aside>
    </div>
  </InnerPage>;
}
