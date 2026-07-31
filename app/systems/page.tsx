import { DataStrip, InnerPage } from "../components/InnerPage";

export default function Systems() {
  return <InnerPage code="02" label="SYSTEMS / OB-1" title="From wearable node to adaptive habitat." intro="A systems architecture inspired by EVA monitoring: body-worn sensors become a mobile interface between the user and the built environment.">
    <DataStrip items={[["BODY","EEG · HRV · EDA"],["WEARABLE","EDGE NODE"],["HABITAT","ENVIRONMENTAL ARRAY"],["CORE","PYTHON / FILE-BASED"]]} />
    <div className="system-chain">
      {["HUMAN","BIO-NODE","HABITAT","MODEL"].map((x,i)=><div className="chain-node" key={x}><span>0{i+1}</span><strong>{x}</strong><small>{["neurophysiology","wearable sensing","light · air · sound","analysis · inference"][i]}</small></div>)}
    </div>
    <div className="principle-row"><p><b>Current scope</b><br/>Recorded streams are synchronized and analyzed after capture. No live adaptation is claimed at this stage.</p><p><b>Design principle</b><br/>Preserve signal provenance from sensor to model so every transformation remains inspectable.</p></div>
  </InnerPage>;
}
