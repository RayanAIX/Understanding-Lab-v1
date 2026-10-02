'use client'
import type { PageId } from '@/app/page'
import AnimateIn from '@/components/ui/AnimateIn'
const P = { maxWidth:'1100px', margin:'0 auto', padding:'0 clamp(16px,4vw,60px)' }
const ENTRIES = [
  { date:'September 2026', version:'Theory v0.2', title:'Theory Audit and Revision', body:'The adversarial stress test exposed three problems in the working definition. The definition implied necessity of the full indicator set, uniform reliability, and blurred the distinction between construct and evidence. The revision replaced "enables an agent to reliably explain, reason, predict, transfer, adapt, and revise" with "through which an agent can make meaningful use of what it knows" — a weaker but more defensible formulation. The core research program survived the stress test intact.', changed:'Working definition revised. Transfer downgraded from "strongest evidence" to "candidate diagnostic dimension." Calibration explicitly separated from construct. Three-level distinction formally adopted.' },
  { date:'September 2026', version:'Stress Test v0.1', title:'Theory Stress Test — Adversarial Analysis', body:'Performed a deliberate attempt to falsify the working theory. Identified 25 adversarial cases in which the observable evidence could be explained without understanding. Most significant findings: transfer is not a simple construct (context, similarity, and prior knowledge all modulate its evidential value), and coherence is not sufficient (a coherent false model is a major challenge for any theory treating coherence as understanding).', changed:'Adversarial Cases Matrix (v0.1) completed. Theory identified as strong enough to move into empirical research but not strong enough to freeze without revision. Revision initiated.' },
  { date:'September 2026', version:'Indicators v0.1', title:'Operational Indicators Framework', body:'Developed a provisional measurement architecture: candidate observable indicators, task families, evidence types, confounds, and interpretation rules. Central principle established: an operational indicator is not understanding itself — it is an observable consequence that may increase or decrease the credibility of an inference about understanding.', changed:'Core methodological shift: from "what behaviors correlate with understanding" to "what tests discriminate understanding from plausible alternative explanations." This is a stronger scientific position.' },
  { date:'August 2026', version:'Theory v0.1', title:'Initial Theoretical Package — v0.1', body:'Completed the first full theoretical package: The Question, Assumptions, Criteria for a Good Theory, Working Definition, Properties of Understanding (12 candidate properties), Non-Examples (organized into 5 families), Taxonomy, Operational Indicators. This represents the Lab\'s first attempt to state its theoretical commitments in a testable form.', changed:'Theory moved from informal thinking to a structured, version-controlled research object with explicit assumptions, hypotheses, and falsification criteria.' },
  { date:'2026', version:'The Question', title:'The Central Question Formalized', body:"The founding observation: conventional assessment systems evaluate whether an answer is correct, but correctness alone does not reveal the structure, stability, or limits of the knowledge that produced it. A correct answer may arise through memorization, guessing, imitation, or deep understanding — these are different cognitive processes producing the same observable output.", changed:'The question was adopted as the permanent organizing principle of the Lab. All future research must connect to this question.' },
]
export default function LogSection({ navigate }: { navigate: (p: PageId) => void }) {
  return (
    <div style={{ position:'relative', zIndex:1, paddingTop:'100px' }}>
      <div style={P}>
        <AnimateIn>
          <div style={{ display:'flex', gap:'8px', alignItems:'center', marginBottom:'48px', fontFamily:'var(--font-instrument)', fontSize:'0.78rem', color:'rgba(240,239,248,0.3)' }}>
            <button onClick={() => navigate('home')} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(240,239,248,0.3)', fontFamily:'var(--font-instrument)', fontSize:'0.78rem' }}>The Lab</button>
            <span>›</span><span style={{ color:'rgba(240,239,248,0.6)' }}>Research Log</span>
          </div>
          <h1 style={{ fontFamily:'var(--font-newsreader)', fontWeight:300, fontSize:'clamp(2rem,4vw,3.2rem)', lineHeight:1.15, letterSpacing:'-0.02em', color:'#F0EFF8', marginBottom:'16px' }}>Research Log</h1>
          <p className="prose-serif" style={{ maxWidth:'560px', marginBottom:'60px' }}>A chronological record of the Lab's intellectual progress. Each entry documents a question, what changed, and why. Not a blog — a research record.</p>
        </AnimateIn>

        {ENTRIES.map((e, i) => (
          <AnimateIn key={i} delay={i * 60}>
            <div style={{ display:'grid', gridTemplateColumns:'clamp(100px,18vw,180px) 1fr', gap:'0 clamp(20px,4vw,48px)', padding:'40px 0', borderBottom: i<ENTRIES.length-1 ? '1px solid rgba(147,130,255,0.08)' : 'none' }}>
              <div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'rgba(240,239,248,0.3)', lineHeight:1.5 }}>{e.date}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'#9382FF', marginTop:'6px' }}>{e.version}</div>
              </div>
              <div>
                <div style={{ fontFamily:'var(--font-newsreader)', fontSize:'1.05rem', fontWeight:500, color:'#F0EFF8', marginBottom:'10px' }}>{e.title}</div>
                <div className="prose-serif" style={{ fontSize:'0.9rem', marginBottom:'16px' }}>{e.body}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'rgba(240,239,248,0.3)', borderLeft:'2px solid rgba(147,130,255,0.2)', paddingLeft:'14px', lineHeight:1.65 }}>
                  <span style={{ color:'rgba(147,130,255,0.5)', display:'block', marginBottom:'4px' }}>WHAT CHANGED</span>
                  {e.changed}
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}

        <AnimateIn delay={300}>
          <div style={{ margin:'48px 0 0', padding:'24px 28px', background:'rgba(147,130,255,0.04)', borderRadius:'6px', border:'1px solid rgba(147,130,255,0.1)' }}>
            <p style={{ fontFamily:'var(--font-instrument)', fontSize:'0.82rem', color:'rgba(240,239,248,0.3)' }}>Future entries will be added as research progresses. A log entry recording a failed prediction is as valuable as one recording a successful experiment.</p>
          </div>
        </AnimateIn>
        <div style={{ height:'100px' }} />
      </div>
    </div>
  )
}
