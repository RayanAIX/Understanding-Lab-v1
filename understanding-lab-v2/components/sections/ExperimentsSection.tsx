'use client'
import type { PageId } from '@/app/page'
import AnimateIn from '@/components/ui/AnimateIn'

const P = { maxWidth:'1100px', margin:'0 auto', padding:'0 clamp(16px,4vw,60px)' }

const STEPS = [
  { n:'01', label:'Theory v0.1', done:true },
  { n:'02', label:'Stress Test', done:true },
  { n:'03', label:'Theory v0.2', done:true },
  { n:'04', label:'HCMS Preprint', done:true },
  { n:'05', label:'Same Mind Protocol', current:true },
  { n:'06', label:'Same Mind Data', done:false },
  { n:'07', label:'HCMS v2', done:false },
  { n:'08', label:'AI Audit #1', done:false },
  { n:'09', label:'Paper #2', done:false },
]

export default function ExperimentsSection({ navigate }: { navigate: (p: PageId) => void }) {
  return (
    <div style={{ position:'relative', zIndex:1, paddingTop:'100px' }}>
      <div style={P}>
        <AnimateIn>
          <div style={{ display:'flex', gap:'8px', alignItems:'center', marginBottom:'48px', fontFamily:'var(--font-instrument)', fontSize:'0.78rem', color:'rgba(240,239,248,0.3)' }}>
            <button onClick={() => navigate('home')} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(240,239,248,0.3)', fontFamily:'var(--font-instrument)', fontSize:'0.78rem' }}>The Lab</button>
            <span>›</span><span style={{ color:'rgba(240,239,248,0.6)' }}>Experiments</span>
          </div>
          <h1 style={{ fontFamily:'var(--font-newsreader)', fontWeight:300, fontSize:'clamp(2rem,4vw,3.2rem)', lineHeight:1.15, letterSpacing:'-0.02em', color:'#F0EFF8', marginBottom:'16px' }}>Experiments</h1>
          <p className="prose-serif" style={{ maxWidth:'560px', marginBottom:'48px' }}>Research programs designed to test the Lab's theoretical claims. Each experiment is a deliberate attempt to produce evidence that could strengthen, weaken, or force revision of the theory.</p>
        </AnimateIn>

        {/* Roadmap */}
        <AnimateIn delay={80}>
          <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'16px' }}>Research Roadmap</div>
          <div style={{ display:'flex', gap:0, overflowX:'auto', border:'1px solid rgba(147,130,255,0.1)', borderRadius:'8px', overflow:'hidden', marginBottom:'60px' }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ flex:'1 0 100px', padding:'16px 14px', background: s.current ? 'rgba(147,130,255,0.1)' : s.done ? 'rgba(45,212,191,0.05)' : 'rgba(12,12,14,0.8)', borderRight: i<STEPS.length-1 ? '1px solid rgba(147,130,255,0.1)' : 'none', opacity: !s.done && !s.current ? 0.45 : 1 }}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.6rem', color: s.current ? '#9382FF' : s.done ? '#2DD4BF' : 'rgba(240,239,248,0.25)', marginBottom:'6px' }}>
                  {s.done ? '✓' : s.current ? '●' : '○'} {s.n}
                </div>
                <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.72rem', fontWeight:600, color: s.current ? '#F0EFF8' : s.done ? 'rgba(240,239,248,0.7)' : 'rgba(240,239,248,0.3)', lineHeight:1.3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* EXP-001 HCMS */}
        <div className="rule-glow" style={{ marginBottom:'48px' }} />
        <AnimateIn>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'rgba(147,130,255,0.4)', marginBottom:'12px' }}>EXP-001</div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'20px', flexWrap:'wrap', marginBottom:'20px' }}>
            <h2 style={{ fontFamily:'var(--font-newsreader)', fontWeight:300, fontSize:'clamp(1.6rem,3vw,2.2rem)', color:'#F0EFF8', lineHeight:1.2 }}>Human Cognition Measurement System</h2>
            <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
              <span className="badge badge-preprint">Preprint Published</span>
              <span className="badge badge-frozen">v0.1 Frozen</span>
            </div>
          </div>
          <p className="prose-serif" style={{ maxWidth:'680px', marginBottom:'16px' }}>The first experimental instrument developed within the Understanding Lab. HCMS explores whether multiple observable signals — beyond correctness alone — can provide a more informative picture of human understanding.</p>
          <p className="prose-serif" style={{ maxWidth:'680px', marginBottom:'20px' }}>HCMS is not the destination. It is an instrument developed to investigate the central question. If future evidence demonstrates that HCMS is incomplete, the framework will be revised or replaced. The question survives regardless.</p>
          <div style={{ background:'rgba(240,192,96,0.05)', border:'1px solid rgba(240,192,96,0.15)', borderRadius:'5px', padding:'16px 20px', maxWidth:'680px', marginBottom:'28px' }}>
            <span style={{ fontFamily:'var(--font-instrument)', fontSize:'0.82rem', color:'rgba(240,192,96,0.7)' }}><strong style={{ color:'#F0C060' }}>HCMS should not be confused with the theory of understanding.</strong> The direction is: Theory → Experiment → Evidence → Measurement Revision. Not: Measurement System → Evidence Selection → Theory Protection.</span>
          </div>

          <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.78rem', fontWeight:600, color:'rgba(240,239,248,0.5)', marginBottom:'12px' }}>Candidate observable indicators under investigation:</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'28px' }}>
            {['Explanation quality','Confidence calibration','Answer consistency','Transfer performance','Prediction accuracy','Adaptation to feedback','Model revision','Misconception detection'].map(t => (
              <span key={t} style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', padding:'4px 12px', border:'1px solid rgba(147,130,255,0.15)', borderRadius:'20px', color:'rgba(240,239,248,0.45)', background:'rgba(147,130,255,0.04)' }}>{t}</span>
            ))}
          </div>

          <div style={{ display:'flex', gap:'12px', alignItems:'center', flexWrap:'wrap', marginBottom:'16px', fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'rgba(240,239,248,0.3)' }}>
            <span>DOI: 10.5281/zenodo.18269740</span>
            <span>·</span><span>Published 2026 · Zenodo</span>
          </div>
          <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'80px' }}>
            <a href="https://zenodo.org/records/18269740" target="_blank" rel="noopener noreferrer" className="btn-secondary">Read preprint ↗</a>
            <a href="https://github.com/RayanAIX/HCMS-Human-Cognition-Measurement-System" target="_blank" rel="noopener noreferrer" className="btn-secondary">View repository ↗</a>
          </div>
        </AnimateIn>

        {/* EXP-002 Same Mind */}
        <div className="rule-glow" style={{ marginBottom:'48px' }} />
        <AnimateIn>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'rgba(147,130,255,0.4)', marginBottom:'12px' }}>EXP-002</div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'20px', flexWrap:'wrap', marginBottom:'20px' }}>
            <h2 style={{ fontFamily:'var(--font-newsreader)', fontWeight:300, fontSize:'clamp(1.6rem,3vw,2.2rem)', color:'#F0EFF8', lineHeight:1.2 }}>Same Mind Project</h2>
            <span className="badge badge-planned">Protocol Development</span>
          </div>
          <p className="prose-serif" style={{ maxWidth:'680px', marginBottom:'20px' }}>The first empirical study designed by the Understanding Lab. Investigates whether people who produce comparable correct answers can exhibit substantially different patterns of understanding.</p>

          <div style={{ border:'1px solid rgba(147,130,255,0.2)', borderLeft:'3px solid #9382FF', background:'rgba(147,130,255,0.04)', borderRadius:'0 8px 8px 0', padding:'24px 28px', maxWidth:'600px', marginBottom:'24px' }}>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'rgba(147,130,255,0.5)', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'10px' }}>Core Research Question</div>
            <p style={{ fontFamily:'var(--font-newsreader)', fontStyle:'italic', fontSize:'1.05rem', lineHeight:1.65, color:'#F0EFF8' }}>Can people who answer the same question correctly demonstrate different structures of understanding?</p>
          </div>

          <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.78rem', fontWeight:600, color:'rgba(240,239,248,0.5)', marginBottom:'12px' }}>Planned evidence dimensions:</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'24px' }}>
            {['Explanation depth','Confidence ratings','Prediction under novel conditions','Transfer to changed contexts','Adaptation after perturbation','Misconception detection','Model revision after evidence','Consistency across framings'].map(t => (
              <span key={t} style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', padding:'4px 12px', border:'1px solid rgba(45,212,191,0.15)', borderRadius:'20px', color:'rgba(240,239,248,0.45)', background:'rgba(45,212,191,0.04)' }}>{t}</span>
            ))}
          </div>

          <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.72rem', color:'rgba(240,239,248,0.3)', marginBottom:'24px', lineHeight:1.8 }}>
            <span>Status: Research protocol in development</span><span style={{ margin:'0 12px' }}>·</span>
            <span>Participants: Students, teachers, domain experts, AI systems</span><span style={{ margin:'0 12px' }}>·</span>
            <span>Dataset: Same Mind Dataset #1 (planned)</span>
          </div>

          <div style={{ background:'rgba(240,239,248,0.03)', border:'1px solid rgba(240,239,248,0.08)', borderRadius:'5px', padding:'16px 20px', maxWidth:'600px', marginBottom:'80px' }}>
            <span style={{ fontFamily:'var(--font-instrument)', fontSize:'0.82rem', color:'rgba(240,239,248,0.35)', fontStyle:'italic' }}>No results yet. The Lab does not claim outcomes before evidence exists.</span>
          </div>
        </AnimateIn>

        {/* EXP-003 */}
        <div className="rule-glow" style={{ marginBottom:'48px' }} />
        <AnimateIn>
          <div style={{ opacity:0.55 }}>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'rgba(147,130,255,0.4)', marginBottom:'12px' }}>EXP-003 · Planned</div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'20px', flexWrap:'wrap', marginBottom:'20px' }}>
              <h2 style={{ fontFamily:'var(--font-newsreader)', fontWeight:300, fontSize:'clamp(1.6rem,3vw,2.2rem)', color:'rgba(240,239,248,0.6)', lineHeight:1.2 }}>AI Audit #1</h2>
              <span className="badge badge-planned">Future Research</span>
            </div>
            <p className="prose-serif" style={{ maxWidth:'680px', marginBottom:'20px' }}>Can the Same Mind framework apply to AI systems? Do language models exhibit the same observable patterns as human understanders, novices, or memorizers? What does the evidence suggest about the relationship between AI behavior and understanding?</p>
            <p style={{ fontFamily:'var(--font-instrument)', fontSize:'0.82rem', color:'rgba(240,192,96,0.5)', fontStyle:'italic' }}>This experiment depends on results from the Same Mind Project. Design will be informed by what EXP-002 finds.</p>
          </div>
        </AnimateIn>

        {/* Failure Archive */}
        <div className="rule-glow" style={{ margin:'80px 0 48px' }} />
        <AnimateIn>
          <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'12px' }}>Failure Archive</div>
          <p className="prose-serif" style={{ maxWidth:'600px', marginBottom:'24px' }}>Scientific progress is not only a record of successful hypotheses. The Lab preserves failed predictions, broken assumptions, and discarded models — because they explain how the theory evolves.</p>
          <div style={{ textAlign:'center', padding:'60px 40px', border:'1px dashed rgba(147,130,255,0.15)', borderRadius:'8px', maxWidth:'600px' }}>
            <p style={{ fontFamily:'var(--font-newsreader)', fontStyle:'italic', color:'rgba(240,239,248,0.25)', fontSize:'0.95rem' }}>No public entries yet.<br/>The first failures will be recorded here when the Same Mind Project produces evidence.</p>
          </div>
        </AnimateIn>

        <div style={{ height:'100px' }} />
      </div>
    </div>
  )
}
