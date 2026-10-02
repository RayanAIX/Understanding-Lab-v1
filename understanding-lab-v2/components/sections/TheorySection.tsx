'use client'
import { useState } from 'react'
import type { PageId } from '@/app/page'
import AnimateIn from '@/components/ui/AnimateIn'

const P = { maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(16px,4vw,60px)' }

const PROPERTIES = [
  { num:'P01', name:'Structural Representation', desc:'Grasping relationships between elements — a system, causal structure, or network — rather than possessing isolated facts.' },
  { num:'P02', name:'Coherence', desc:'Organizing information into an internally consistent structure. Not accumulation, but integration and mutual support.' },
  { num:'P03', name:'Explanation', desc:'Articulating relevant relationships, mechanisms, reasons, or conditions. Evidence — not proof — because explanations can be reproduced without understanding.' },
  { num:'P04', name:'Prediction', desc:'Anticipating outcomes using an underlying model. Implies internal representations rather than surface pattern-matching.' },
  { num:'P05', name:'Transfer', desc:'Applying relevant knowledge in changed contexts. Multidimensional — its evidential meaning depends on structural and surface similarity, domain, and cognitive demands.' },
  { num:'P06', name:'Adaptation', desc:'Remaining flexible when conditions change — updating beliefs and adjusting explanations in response to relevant evidence.' },
  { num:'P07', name:'Revision', desc:'Modifying an existing model when relevant evidence warrants it — distinguished from mere answer correction, which may be superficial compliance.' },
  { num:'P08', name:'Calibration', desc:'Alignment between confidence and actual capability. A candidate metacognitive indicator, but not constitutive of understanding.' },
  { num:'P09', name:'Degree', desc:'Understanding appears to be graded and partial — not binary. A person can have partial, local, procedural, or integrated understanding.' },
  { num:'P10', name:'Model Sensitivity', desc:'Using models without confusing them with reality — recognizing assumptions, limits, and scope of application.' },
  { num:'P11', name:'Cognitive Achievement', desc:'Understanding as an ability rather than information possession — not merely knowing, but being able to perform relevant cognitive operations.' },
  { num:'P12', name:'Nonpropositional Representation', desc:'Representations beyond language — diagrams, visual models, mental simulations. Understanding may not require linguistic expression.' },
]

const NON_EXAMPLES = [
  { phenomenon:'Memorization', why:'Information can be reproduced without grasping relationships or meaning', q:'Can the information be used beyond its memorized form?' },
  { phenomenon:'Pattern matching', why:'A correct answer may result from surface-form recognition, not principle grasp', q:'Does performance survive changes that preserve structure but alter surface features?' },
  { phenomenon:'Procedural execution', why:'Knowing how to perform a procedure ≠ understanding why it works or when it fails', q:'Can the procedure be adapted when the problem changes?' },
  { phenomenon:'Verbal fluency', why:'Linguistic sophistication ≠ conceptual coherence', q:'Are claims consistent? Can the explanation survive follow-up questions?' },
  { phenomenon:'Explanation reproduction', why:'A correct explanation may have been learned without the underlying model', q:'Can the learner generate or adapt the explanation independently?' },
  { phenomenon:'Familiar-context performance', why:'Success may depend on proximity to training material, not transferable understanding', q:'Does performance survive controlled changes in presentation and context?' },
  { phenomenon:'Confidence without calibration', why:'Subjective certainty ≠ objective competence', q:'Does confidence track actual capability across repeated observations?' },
  { phenomenon:'One-shot success', why:'A single performance provides limited evidence about a stable cognitive capacity', q:'Does the capability remain stable across multiple contexts and novel conditions?' },
]

const TABS = ['Confidence Calibration','Reasoning Consistency','Cognitive Stability','Explainability']
const TAB_CONTENT = [
  { desc:'Measures the gap between how confident a student says they are and how accurately they actually perform. Overconfidence with low accuracy signals unstable understanding.', vis:'Gap between self-reported confidence and measured accuracy — a well-calibrated understander shows alignment; a memorizer does not.' },
  { desc:'Tests whether a student reaches the same conclusion via different reasoning paths. If the answer changes when the question is rephrased, reasoning is fragile.', vis:'Two different paths leading to the same conclusion — one remains stable under variation, the other diverges.' },
  { desc:'Measures how robust understanding is under semantic perturbation — slight rewording, added context, changed framing. True understanding survives these; memorization does not.', vis:'Signal vs. noise: a stable line under perturbation versus a jittery one that shifts on every reframing.' },
  { desc:"Can the student articulate WHY their answer is correct? HCMS evaluates explanation quality, not just answer correctness. Understanding without explanation is evidence of black-box cognition.", vis:'Visible reasoning chains extending from the answer node versus a node with no accessible reasoning paths.' },
]

export default function TheorySection({ navigate }: { navigate: (p: PageId) => void }) {
  const [activeTab, setActiveTab] = useState(0)
  const [confOpen, setConfOpen] = useState(false)

  return (
    <div style={{ position:'relative', zIndex:1, paddingTop:'100px' }}>
      <div style={P}>

        {/* Breadcrumb */}
        <AnimateIn>
          <div style={{ display:'flex', gap:'8px', alignItems:'center', marginBottom:'48px', fontFamily:'var(--font-instrument)', fontSize:'0.78rem', color:'rgba(240,239,248,0.3)' }}>
            <button onClick={() => navigate('home')} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(240,239,248,0.3)', fontFamily:'var(--font-instrument)', fontSize:'0.78rem' }}>The Lab</button>
            <span>›</span><span style={{ color:'rgba(240,239,248,0.6)' }}>Theory</span>
          </div>
        </AnimateIn>

        {/* Header */}
        <AnimateIn delay={60}>
          <div style={{ display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'16px' }}>
            <span className="badge badge-working">Working Theory</span>
            <span className="badge badge-frozen">v0.1 Frozen · Sep 2026</span>
          </div>
          <h1 style={{ fontFamily:'var(--font-newsreader)', fontWeight:300, fontSize:'clamp(2rem,4vw,3.2rem)', lineHeight:1.15, letterSpacing:'-0.02em', color:'#F0EFF8', marginBottom:'16px' }}>Theory of Understanding</h1>
          <p className="prose-serif" style={{ maxWidth:'600px', marginBottom:'60px' }}>Every document below has version history, status, and open questions — because the theory is a research object, not a conclusion.</p>
        </AnimateIn>

        {/* Version History */}
        <AnimateIn delay={100}>
          <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'28px' }}>Version History</div>
          <div style={{ position:'relative', paddingLeft:'24px', marginBottom:'60px' }}>
            {[
              { tag:'v0.2 — Current', label:'Post-Stress-Test Revision', date:'September 2026', current:true, summary:'Revised definition following formal adversarial stress test. Three problems corrected: implied necessity of full indicator set, implied uniform reliability, and blurring of construct versus evidence.' },
              { tag:'v0.1 — Frozen', label:'Initial Working Theory', date:'August 2026', current:false, summary:'First complete theoretical package: The Question, Properties, Non-Examples, Taxonomy, Operational Indicators, Theory Stress Test, Adversarial Cases Matrix. Frozen as public research snapshot.' },
              { tag:'v0.3 — Future', label:'Post-Empirical Revision', date:'After Same Mind Project', current:false, summary:'The next major revision should be driven by evidence from the Same Mind Project, not further speculative refinement.' },
            ].map((v, i) => (
              <div key={i} style={{ display:'flex', gap:'20px', paddingBottom:'36px', position:'relative' }}>
                <div style={{ position:'absolute', left:'-24px', top:0 }}>
                  <div style={{ width:'14px', height:'14px', borderRadius:'50%', background: v.current ? '#9382FF' : '#0C0C0E', border: v.current ? '2px solid #9382FF' : '2px solid rgba(147,130,255,0.25)', boxShadow: v.current ? '0 0 16px rgba(147,130,255,0.5)' : 'none' }} />
                  {i < 2 && <div style={{ position:'absolute', left:'6px', top:'14px', width:'1px', height:'calc(100% + 8px)', background:'rgba(147,130,255,0.12)' }} />}
                </div>
                <div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color: v.current ? '#9382FF' : 'rgba(147,130,255,0.4)', marginBottom:'4px' }}>{v.tag}</div>
                  <div style={{ fontFamily:'var(--font-newsreader)', fontSize:'1rem', fontWeight:500, color:'#F0EFF8', marginBottom:'4px' }}>{v.label}</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.68rem', color:'rgba(240,239,248,0.3)', marginBottom:'8px' }}>{v.date}</div>
                  <div style={{ fontFamily:'var(--font-newsreader)', fontSize:'0.88rem', color:'rgba(240,239,248,0.45)', lineHeight:1.7, maxWidth:'560px' }}>{v.summary}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        <div className="rule-glow" style={{ margin:'60px 0' }} />

        {/* Working Definition */}
        <AnimateIn>
          <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'24px' }}>Working Definition · v0.2</div>
          <div style={{ border:'1px solid rgba(147,130,255,0.2)', borderLeft:'3px solid #9382FF', background:'rgba(147,130,255,0.05)', borderRadius:'0 8px 8px 0', padding:'32px 36px', marginBottom:'24px', maxWidth:'760px' }}>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'rgba(147,130,255,0.5)', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'16px' }}>Understanding Lab Working Definition</div>
            <p style={{ fontFamily:'var(--font-newsreader)', fontStyle:'italic', fontSize:'clamp(1rem,1.8vw,1.2rem)', lineHeight:1.7, color:'#F0EFF8' }}>"Understanding is an organized, relational capacity through which an agent can make meaningful use of what it knows, including by explaining, reasoning, predicting, transferring, adapting, or revising its knowledge when relevant conditions change."</p>
          </div>
          <div style={{ background:'rgba(240,192,96,0.05)', border:'1px solid rgba(240,192,96,0.15)', borderRadius:'5px', padding:'16px 20px', marginBottom:'40px', maxWidth:'760px' }}>
            <span style={{ fontFamily:'var(--font-instrument)', fontSize:'0.82rem', color:'rgba(240,192,96,0.8)' }}><strong style={{ color:'#F0C060' }}>Working definition, not a final scientific claim.</strong> Revised after formal adversarial stress test in September 2026. The revision corrected three problems in the previous formulation.</span>
          </div>
        </AnimateIn>

        {/* HCMS Tabs */}
        <AnimateIn delay={80}>
          <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(45,212,191,0.6)', marginBottom:'20px' }}>What HCMS Measures</div>
          <div style={{ display:'flex', gap:0, flexWrap:'wrap', borderBottom:'1px solid rgba(147,130,255,0.12)', marginBottom:'28px' }}>
            {TABS.map((t, i) => (
              <button key={i} onClick={() => setActiveTab(i)} style={{ background:'none', border:'none', borderBottom: activeTab===i ? '2px solid #9382FF' : '2px solid transparent', cursor:'pointer', fontFamily:'var(--font-instrument)', fontSize:'0.8rem', fontWeight: activeTab===i ? 600 : 400, color: activeTab===i ? '#F0EFF8' : 'rgba(240,239,248,0.4)', padding:'10px 20px', marginBottom:'-1px', transition:'all 0.15s' }}>{t}</button>
            ))}
          </div>
          <div style={{ background:'rgba(147,130,255,0.04)', border:'1px solid rgba(147,130,255,0.1)', borderRadius:'6px', padding:'28px 32px', maxWidth:'680px', transition:'all 0.2s' }}>
            <p style={{ fontFamily:'var(--font-newsreader)', fontSize:'0.95rem', color:'rgba(240,239,248,0.7)', lineHeight:1.75, marginBottom:'16px' }}>{TAB_CONTENT[activeTab].desc}</p>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'rgba(147,130,255,0.5)', borderLeft:'2px solid rgba(147,130,255,0.2)', paddingLeft:'12px', fontStyle:'italic' }}>{TAB_CONTENT[activeTab].vis}</div>
          </div>
        </AnimateIn>

        <div className="rule-glow" style={{ margin:'60px 0' }} />

        {/* Candidate Properties */}
        <AnimateIn>
          <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'8px' }}>Candidate Properties</div>
          <p style={{ fontFamily:'var(--font-instrument)', fontSize:'0.82rem', color:'rgba(240,239,248,0.3)', marginBottom:'28px' }}>Working hypotheses — not established truths.</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'1px', background:'rgba(147,130,255,0.08)', border:'1px solid rgba(147,130,255,0.08)', borderRadius:'8px', overflow:'hidden', marginBottom:'60px' }}>
            {PROPERTIES.map((p, i) => (
              <div key={i} className="card-hover" style={{ background:'#0C0C0E', padding:'22px 24px' }}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.62rem', color:'rgba(147,130,255,0.4)', marginBottom:'6px' }}>{p.num}</div>
                <div style={{ fontFamily:'var(--font-newsreader)', fontSize:'0.95rem', fontWeight:500, color:'#F0EFF8', marginBottom:'6px' }}>{p.name}</div>
                <div style={{ fontFamily:'var(--font-newsreader)', fontSize:'0.82rem', color:'rgba(240,239,248,0.4)', lineHeight:1.65 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Non-Examples */}
        <AnimateIn>
          <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'8px' }}>Non-Examples of Understanding</div>
          <p style={{ fontFamily:'var(--font-instrument)', fontSize:'0.82rem', color:'rgba(240,239,248,0.3)', marginBottom:'28px' }}>Phenomena that can produce the appearance of understanding without constituting it.</p>
          <div style={{ border:'1px solid rgba(147,130,255,0.1)', borderRadius:'8px', overflow:'hidden', marginBottom:'60px' }}>
            <div style={{ display:'grid', gridTemplateColumns:'160px 1fr 1fr', background:'rgba(147,130,255,0.05)', padding:'10px 20px', borderBottom:'1px solid rgba(147,130,255,0.1)' }}>
              {['Phenomenon','Why it is insufficient','Discriminating question'].map((h,i)=>(
                <div key={i} style={{ fontFamily:'var(--font-instrument)', fontSize:'0.65rem', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(240,239,248,0.3)' }}>{h}</div>
              ))}
            </div>
            {NON_EXAMPLES.map((r, i) => (
              <div key={i} style={{ display:'grid', gridTemplateColumns:'160px 1fr 1fr', padding:'14px 20px', borderBottom: i<NON_EXAMPLES.length-1 ? '1px solid rgba(147,130,255,0.06)' : 'none', transition:'background 0.15s' }}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background='rgba(147,130,255,0.04)'}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background='transparent'}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'rgba(147,130,255,0.7)' }}>{r.phenomenon}</div>
                <div style={{ fontFamily:'var(--font-newsreader)', fontSize:'0.85rem', color:'rgba(240,239,248,0.45)', lineHeight:1.6, paddingRight:'20px' }}>{r.why}</div>
                <div style={{ fontFamily:'var(--font-newsreader)', fontStyle:'italic', fontSize:'0.85rem', color:'rgba(240,239,248,0.35)', lineHeight:1.6 }}>{r.q}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Confidence Levels */}
        <AnimateIn>
          <div style={{ background:'rgba(147,130,255,0.04)', border:'1px solid rgba(147,130,255,0.1)', borderRadius:'8px', padding:'32px 36px', maxWidth:'680px', marginBottom:'60px' }}>
            <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'20px' }}>Current Confidence Levels</div>
            {[
              { claim:'The research problem is genuine', level:'High', color:'#2DD4BF' },
              { claim:'Correctness alone is insufficient (starting premise)', level:'High', color:'#2DD4BF' },
              { claim:'Relational organization matters', level:'Moderate', color:'#F0C060' },
              { claim:'Transfer is important', level:'Moderate', color:'#F0C060' },
              { claim:'Understanding is graded/partial', level:'Moderate', color:'#F0C060' },
              { claim:'Transfer is necessary', level:'Low', color:'rgba(240,239,248,0.4)' },
              { claim:'Explanation is necessary', level:'Low', color:'rgba(240,239,248,0.4)' },
              { claim:'Calibration is constitutive', level:'Low', color:'rgba(240,239,248,0.4)' },
              { claim:'Exact wording of the current definition', level:'Low-to-moderate', color:'rgba(240,239,248,0.4)' },
            ].map((c,i)=>(
              <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 0', borderBottom: i<8 ? '1px solid rgba(147,130,255,0.06)' : 'none' }}>
                <span style={{ fontFamily:'var(--font-newsreader)', fontSize:'0.85rem', color:'rgba(240,239,248,0.5)' }}>{c.claim}</span>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:c.color, fontWeight:500, whiteSpace:'nowrap', marginLeft:'16px' }}>{c.level}</span>
              </div>
            ))}
            <p style={{ fontFamily:'var(--font-instrument)', fontSize:'0.75rem', color:'rgba(240,239,248,0.25)', marginTop:'16px' }}>Research-management judgments, not statistical estimates.</p>
          </div>
        </AnimateIn>

        <AnimateIn>
          <button className="btn-ghost" onClick={() => navigate('collaborate')}>Think the theory is wrong? Challenge it →</button>
        </AnimateIn>
        <div style={{ height:'100px' }} />
      </div>
    </div>
  )
}
