import { DataStrip, InnerPage } from "../components/InnerPage";

export default function About() {
  return <InnerPage code="04" label="ABOUT / SPACELAB RESEARCH" title="Research across body, signal and habitat." intro="SpaceLab Research is an independent research platform working at the intersection of architecture, systems engineering and neurotechnology.">
    <DataStrip items={[["FOCUS","ADAPTIVE ENVIRONMENTS"],["METHOD","MBSE · SIGNAL PROCESSING"],["RESEARCH","NEUROQOE · BIOSIGNALS"],["NETWORK","TARRAGONA · BOSTON"]]} />
    <div className="about-grid"><h2>Alain Balseiro, Ph.D.</h2><div><p>Researcher in Architecture and Systems Engineering investigating how neurophysiological and environmental signals can inform high-performance environments.</p><p>The work connects Complex Information Systems, EEG-based NeuroQoE, wearable sensing and human-centered systems methodology.</p></div><div className="about-mark"><span>SL</span><i/></div></div>
  </InnerPage>;
}
