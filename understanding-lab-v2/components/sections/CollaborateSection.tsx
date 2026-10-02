'use client'
import { useState } from 'react'
import type { PageId } from '@/app/page'
import AnimateIn from '@/components/ui/AnimateIn'
const P = { maxWidth:'1100px', margin:'0 auto', padding:'0 clamp(16px,4vw,60px)' }
export default function CollaborateSection({ navigate }: { navigate: (p: PageId) => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', claim:'The working definition (v0.2)', objection:'', revision:'' })
  const handle = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }
  const areas = ['Experimental Design','Theoretical Critique','AI Evaluation Research','Dataset and Replication','Something else']
  return (
    <div style={{ position:'relative', zIndex:1, paddingTop:'100px' }}>
      <div style={P}>
        <AnimateIn>
          <div style={{ display:'flex', gap:'8px', alignItems:'center', marginBottom:'48px', fontFamily:'var(--font-instrument)', fontSize:'0.78rem', color:'rgba(240,239,248,0.3)' }}>
            <button onClick={() => navigate('home')} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(240,239,248,0.3)', fontFamily:'var(--font-instrument)', fontSize:'0.78rem' }}>The Lab</button>
            <span>›</span><span style={{ color:'rgba(240,239,248,0.6)' }}>Collaborate</span>
          </div>
          <h1 style={{ fontFamily:'var(--font-newsreader)', fontWeight:300, fontSize:'clamp(2rem,4vw,3.2rem)', lineHeight:1.15, letterSpacing:'-0.02em', color:'#F0EFF8', marginBottom:'12px' }}>Collaborate</h1>
          <p className="prose-serif" style={{ maxWidth:'540px', marginBottom:'60px' }}>The Lab actively seeks contradiction, not confirmation. The most productive form of engagement is a well-argued challenge.</p>
        </AnimateIn>

        {/* Challenge box */}
        <AnimateIn delay={80}>
          <div style={{ border:'1px solid rgba(147,130,255,0.2)', borderRadius:'10px', padding:'clamp(24px,5vw,52px)', marginBottom:'60px', background:'rgba(147,130,255,0.03)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'16px', flexWrap:'wrap' }}>
              <span style={{ fontFamily:'var(--font-newsreader)', fontStyle:'italic', fontWeight:300, fontSize:'clamp(1.4rem,2.5vw,1.9rem)', color:'#F0EFF8' }}>Think the theory is wrong?</span>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'rgba(147,130,255,0.5)', border:'1px solid rgba(147,130,255,0.2)', padding:'3px 10px', borderRadius:'3px' }}>CHALLENGE IT</span>
            </div>
            <p className="prose-serif" style={{ maxWidth:'580px', marginBottom:'8px' }}>The Understanding Lab does not seek to protect its current theory. It seeks evidence that improves it. A strong challenge should identify: (1) a specific claim, (2) a case in which it appears to fail, (3) an alternative explanation, and (4) what revision the Lab should consider.</p>
            <p className="prose-serif" style={{ maxWidth:'580px', marginBottom:'32px' }}>Vague disagreement is less useful than a precise objection.</p>

            {submitted ? (
              <div style={{ textAlign:'center', padding:'40px', background:'rgba(45,212,191,0.08)', borderRadius:'8px', border:'1px solid rgba(45,212,191,0.2)' }}>
                <div style={{ fontSize:'1.5rem', marginBottom:'8px' }}>✓</div>
                <div style={{ fontFamily:'var(--font-newsreader)', fontSize:'1.05rem', color:'#2DD4BF' }}>Challenge submitted. Thank you.</div>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
                  {[{ label:'Name (optional)', key:'name', type:'text', ph:'Your name' }, { label:'Email (optional)', key:'email', type:'email', ph:'your@email.com' }].map(f => (
                    <div key={f.key}>
                      <label style={{ display:'block', fontFamily:'var(--font-instrument)', fontSize:'0.75rem', fontWeight:600, color:'rgba(240,239,248,0.4)', marginBottom:'8px', letterSpacing:'0.04em' }}>{f.label}</label>
                      <input type={f.type} placeholder={f.ph} value={(form as any)[f.key]} onChange={e => handle(f.key, e.target.value)}
                        style={{ width:'100%', background:'rgba(147,130,255,0.04)', border:'1px solid rgba(147,130,255,0.15)', borderRadius:'5px', padding:'10px 14px', fontFamily:'var(--font-instrument)', fontSize:'0.9rem', color:'#F0EFF8', outline:'none', transition:'border-color 0.15s' }}
                        onFocus={e=>(e.target as HTMLElement).style.borderColor='rgba(147,130,255,0.5)'}
                        onBlur={e=>(e.target as HTMLElement).style.borderColor='rgba(147,130,255,0.15)'} />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ display:'block', fontFamily:'var(--font-instrument)', fontSize:'0.75rem', fontWeight:600, color:'rgba(240,239,248,0.4)', marginBottom:'8px', letterSpacing:'0.04em' }}>Which claim are you challenging?</label>
                  <select value={form.claim} onChange={e => handle('claim', e.target.value)}
                    style={{ width:'100%', background:'rgba(147,130,255,0.04)', border:'1px solid rgba(147,130,255,0.15)', borderRadius:'5px', padding:'10px 14px', fontFamily:'var(--font-instrument)', fontSize:'0.9rem', color:'#F0EFF8', outline:'none' }}>
                    {['The working definition (v0.2)','A specific candidate property','The three-level distinction','A testable hypothesis','The non-examples taxonomy','The research methodology','Something else'].map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                {['Describe the counterexample or objection','What revision would you suggest?'].map((label, i) => (
                  <div key={i}>
                    <label style={{ display:'block', fontFamily:'var(--font-instrument)', fontSize:'0.75rem', fontWeight:600, color:'rgba(240,239,248,0.4)', marginBottom:'8px', letterSpacing:'0.04em' }}>{label}</label>
                    <textarea placeholder={i===0 ? 'A specific case, argument, or evidence that creates a problem for the theory...' : 'What should the theory say instead, or what additional evidence would clarify this?'}
                      value={i===0 ? form.objection : form.revision} onChange={e => handle(i===0 ? 'objection' : 'revision', e.target.value)} rows={i===0 ? 5 : 3}
                      style={{ width:'100%', background:'rgba(147,130,255,0.04)', border:'1px solid rgba(147,130,255,0.15)', borderRadius:'5px', padding:'10px 14px', fontFamily:'var(--font-newsreader)', fontSize:'0.9rem', color:'#F0EFF8', outline:'none', resize:'vertical', lineHeight:1.65, transition:'border-color 0.15s' }}
                      onFocus={e=>(e.target as HTMLElement).style.borderColor='rgba(147,130,255,0.5)'}
                      onBlur={e=>(e.target as HTMLElement).style.borderColor='rgba(147,130,255,0.15)'} />
                  </div>
                ))}
                <div><button type="submit" className="btn-primary">Submit challenge</button></div>
              </form>
            )}
          </div>
        </AnimateIn>

        {/* Collaboration areas */}
        <AnimateIn delay={120}>
          <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'24px' }}>Other ways to engage</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:'1px', background:'rgba(147,130,255,0.08)', border:'1px solid rgba(147,130,255,0.08)', borderRadius:'8px', overflow:'hidden', marginBottom:'48px' }}>
            {[
              { title:'Experimental Design', desc:'Researchers with experience in psychometrics, educational measurement, cognitive psychology, or AI evaluation. The Same Mind Project needs rigorous experimental design.' },
              { title:'Theoretical Critique', desc:'Philosophers of mind, epistemologists, or cognitive scientists who work on understanding or related constructs. The Lab\'s working theory should be examined critically.' },
              { title:'AI Evaluation Research', desc:'Researchers applying evaluation frameworks to AI systems. The question of whether AI systems "understand" is explicitly within the Lab\'s scope.' },
              { title:'Dataset and Replication', desc:'Once the Same Mind dataset exists, independent replication and analysis strengthens the evidence base far more than a single study.' },
            ].map((c, i) => (
              <div key={i} className="card-hover" style={{ background:'#0C0C0E', padding:'24px' }}>
                <div style={{ fontFamily:'var(--font-newsreader)', fontSize:'0.95rem', fontWeight:500, color:'#F0EFF8', marginBottom:'8px' }}>{c.title}</div>
                <div style={{ fontFamily:'var(--font-newsreader)', fontSize:'0.84rem', color:'rgba(240,239,248,0.4)', lineHeight:1.65 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={160}>
          <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'12px' }}>Direct contact</div>
          <p className="prose-serif" style={{ maxWidth:'500px', marginBottom:'24px' }}>If you are working on a problem connected to understanding, measurement, learning, cognition, or AI evaluation — reach out. The Lab reads everything.</p>
          <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
            {[{l:'LinkedIn',h:'https://linkedin.com/in/muhammadrayanshahid'},{l:'X',h:'https://x.com/MRayanShahid'},{l:'Substack',h:'https://substack.com/@muhammedrayanshahid'}].map(({l,h})=>(
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="btn-secondary">{l} ↗</a>
            ))}
          </div>
        </AnimateIn>
        <div style={{ height:'100px' }} />
      </div>
    </div>
  )
}
