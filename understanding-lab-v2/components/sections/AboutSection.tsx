'use client'
import type { PageId } from '@/app/page'
import AnimateIn from '@/components/ui/AnimateIn'
const P = { maxWidth:'1100px', margin:'0 auto', padding:'0 clamp(16px,4vw,60px)' }
export default function AboutSection({ navigate }: { navigate: (p: PageId) => void }) {
  return (
    <div style={{ position:'relative', zIndex:1, paddingTop:'100px' }}>
      <div style={P}>
        <AnimateIn>
          <div style={{ display:'flex', gap:'8px', alignItems:'center', marginBottom:'48px', fontFamily:'var(--font-instrument)', fontSize:'0.78rem', color:'rgba(240,239,248,0.3)' }}>
            <button onClick={() => navigate('home')} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(240,239,248,0.3)', fontFamily:'var(--font-instrument)', fontSize:'0.78rem' }}>The Lab</button>
            <span>›</span><span style={{ color:'rgba(240,239,248,0.6)' }}>About</span>
          </div>
          <h1 style={{ fontFamily:'var(--font-newsreader)', fontWeight:300, fontSize:'clamp(2rem,4vw,3.2rem)', lineHeight:1.15, letterSpacing:'-0.02em', color:'#F0EFF8', marginBottom:'12px' }}>About the Lab</h1>
          <p style={{ fontFamily:'var(--font-newsreader)', fontStyle:'italic', fontSize:'1.05rem', color:'rgba(240,239,248,0.4)', marginBottom:'60px' }}>The question comes before the person. But someone must ask it.</p>
        </AnimateIn>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'60px', alignItems:'start', marginBottom:'80px' }}>
          <AnimateIn delay={80}>
            <h2 style={{ fontFamily:'var(--font-newsreader)', fontWeight:400, fontSize:'1.4rem', color:'#F0EFF8', marginBottom:'24px' }}>Muhammad Rayan Shahid</h2>
            <div className="prose-serif">
              <p>I study how understanding can be defined, measured, and distinguished from correct performance. That question has been central to philosophy, education, cognitive science, and AI research — yet it remains surprisingly open.</p>
              <p style={{ marginTop:'1em' }}>The question originated from a simple observation: every assessment system I had encountered assumed that a correct answer was evidence of understanding. But a correct answer can come from memorization, guessing, pattern-matching, or deep conceptual comprehension — and these are fundamentally different processes.</p>
              <p style={{ marginTop:'1em' }}>The work began with theory. It will eventually require empirical data, which is why the Same Mind Project is the next step. The goal is not to defend the current theory but to discover where it fails — and what would replace it.</p>
              <p style={{ marginTop:'1em' }}>I am an independent researcher. The Understanding Lab is not affiliated with any institution. Its findings should stand on their own.</p>
            </div>
            <div style={{ marginTop:'32px' }}>
              <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'14px' }}>Research Interests</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                {['Philosophy of understanding','Cognitive measurement','Educational assessment','AI evaluation','Human-AI comparison','Epistemology','Learning science'].map(t => (
                  <span key={t} style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', padding:'4px 12px', border:'1px solid rgba(147,130,255,0.15)', borderRadius:'20px', color:'rgba(240,239,248,0.45)', background:'rgba(147,130,255,0.04)' }}>{t}</span>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={160}>
            <div style={{ borderLeft:'1px solid rgba(147,130,255,0.12)', paddingLeft:'40px' }}>
              {[
                { label:'Role', value:'Independent researcher' },
                { label:'Location', value:'Karachi, Pakistan' },
                { label:'Lab founded', value:'2026' },
                { label:'Theory version', value:'v0.2 · Working', mono:true },
                { label:'Personal website', value:'muhammadrayanshahid.vercel.app', link:'https://muhammadrayanshahid.vercel.app' },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom:'28px' }}>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'rgba(240,239,248,0.25)', marginBottom:'4px', textTransform:'uppercase', letterSpacing:'0.08em' }}>{item.label}</div>
                  {item.link
                    ? <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily:'var(--font-instrument)', fontSize:'0.85rem', color:'#9382FF', textDecoration:'none' }}>{item.value} ↗</a>
                    : <div style={{ fontFamily: item.mono ? 'var(--font-mono)' : 'var(--font-instrument)', fontSize:'0.88rem', color:'rgba(240,239,248,0.6)' }}>{item.value}</div>
                  }
                </div>
              ))}
              <div style={{ marginTop:'8px', paddingTop:'24px', borderTop:'1px solid rgba(147,130,255,0.1)' }}>
                <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(147,130,255,0.4)', marginBottom:'16px' }}>Links</div>
                {[
                  { label:'GitHub', href:'https://github.com/RayanAIX' },
                  { label:'Zenodo', href:'https://zenodo.org/records/18269740' },
                  { label:'Substack', href:'https://substack.com/@muhammedrayanshahid' },
                  { label:'X / Twitter', href:'https://x.com/MRayanShahid' },
                  { label:'LinkedIn', href:'https://linkedin.com/in/muhammadrayanshahid' },
                ].map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                    style={{ display:'block', fontFamily:'var(--font-instrument)', fontSize:'0.84rem', color:'rgba(240,239,248,0.4)', marginBottom:'10px', textDecoration:'none', transition:'color 0.15s' }}
                    onMouseEnter={e=>(e.target as HTMLElement).style.color='rgba(240,239,248,0.8)'}
                    onMouseLeave={e=>(e.target as HTMLElement).style.color='rgba(240,239,248,0.4)'}
                  >{l.label} ↗</a>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={200}>
          <div style={{ background:'rgba(147,130,255,0.04)', border:'1px solid rgba(147,130,255,0.1)', borderRadius:'8px', padding:'32px 36px' }}>
            <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'16px' }}>Two presences, one researcher</div>
            <p className="prose-serif" style={{ marginBottom:'20px' }}>The Understanding Lab is the canonical home for research on the central question. Technical work — AI projects, deployed systems, services — lives at <a href="https://muhammadrayanshahid.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color:'#9382FF', textDecoration:'none' }}>muhammadrayanshahid.vercel.app</a>.</p>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'rgba(240,239,248,0.25)', lineHeight:2 }}>
              Muhammad Rayan Shahid<br/>
              {'    '}├── Understanding Lab <span style={{ color:'rgba(147,130,255,0.4)' }}>(research identity)</span><br/>
              {'    '}│{'      '}├── Theory · Experiments · Publications<br/>
              {'    '}└── Personal portfolio <span style={{ color:'rgba(45,212,191,0.4)' }}>(technical work, services)</span>
            </div>
          </div>
        </AnimateIn>
        <div style={{ height:'100px' }} />
      </div>
    </div>
  )
}
