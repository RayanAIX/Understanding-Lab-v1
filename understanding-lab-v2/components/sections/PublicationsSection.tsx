'use client'
import { useState } from 'react'
import type { PageId } from '@/app/page'
import AnimateIn from '@/components/ui/AnimateIn'
const P = { maxWidth:'1100px', margin:'0 auto', padding:'0 clamp(16px,4vw,60px)' }
const BIBTEX = `@article{shahid2026hcms,
  title={Beyond Correctness: Measuring Cognitive Stability
    and Confidence Calibration in Human Understanding},
  author={Shahid, Muhammad Rayan},
  year={2026},
  publisher={Zenodo},
  doi={10.5281/zenodo.18269740}
}`
export default function PublicationsSection({ navigate }: { navigate: (p: PageId) => void }) {
  const [bibOpen, setBibOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const copy = () => { navigator.clipboard?.writeText(BIBTEX); setCopied(true); setTimeout(() => setCopied(false), 2000) }
  return (
    <div style={{ position:'relative', zIndex:1, paddingTop:'100px' }}>
      <div style={P}>
        <AnimateIn>
          <div style={{ display:'flex', gap:'8px', alignItems:'center', marginBottom:'48px', fontFamily:'var(--font-instrument)', fontSize:'0.78rem', color:'rgba(240,239,248,0.3)' }}>
            <button onClick={() => navigate('home')} style={{ background:'none', border:'none', cursor:'pointer', color:'rgba(240,239,248,0.3)', fontFamily:'var(--font-instrument)', fontSize:'0.78rem' }}>The Lab</button>
            <span>›</span><span style={{ color:'rgba(240,239,248,0.6)' }}>Publications</span>
          </div>
          <h1 style={{ fontFamily:'var(--font-newsreader)', fontWeight:300, fontSize:'clamp(2rem,4vw,3.2rem)', lineHeight:1.15, letterSpacing:'-0.02em', color:'#F0EFF8', marginBottom:'16px' }}>Publications</h1>
          <p className="prose-serif" style={{ maxWidth:'560px', marginBottom:'60px' }}>Research outputs from the Understanding Lab. Preprints are published before peer review. Future papers will be listed here once they exist — not before.</p>
        </AnimateIn>

        {/* Paper 1 */}
        <AnimateIn delay={80}>
          <div style={{ paddingBottom:'60px', borderBottom:'1px solid rgba(147,130,255,0.1)', marginBottom:'60px' }}>
            <div style={{ display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'16px' }}>
              <span className="badge badge-preprint">Preprint · 2026</span>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'rgba(240,239,248,0.25)' }}>Paper #1</span>
            </div>
            <h2 style={{ fontFamily:'var(--font-newsreader)', fontWeight:400, fontSize:'clamp(1.3rem,2.5vw,1.8rem)', lineHeight:1.3, color:'#F0EFF8', marginBottom:'10px' }}>
              Beyond Correctness: Measuring Cognitive Stability and Confidence Calibration in Human Understanding
            </h2>
            <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.8rem', color:'rgba(240,239,248,0.35)', marginBottom:'20px' }}>Muhammad Rayan Shahid · 2026 · Zenodo</div>
            <p className="prose-serif" style={{ maxWidth:'680px', marginBottom:'8px' }}>
              This preprint introduces HCMS as an early research framework exploring whether observable signals beyond correctness — including confidence calibration, reasoning consistency, and cognitive stability — can provide a more informative picture of human understanding.
            </p>
            <p style={{ fontFamily:'var(--font-newsreader)', fontSize:'0.85rem', color:'rgba(240,192,96,0.6)', fontStyle:'italic', marginBottom:'24px' }}>
              The paper is a preprint and should be read as an early research framework, not a validated measurement instrument.
            </p>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'rgba(240,239,248,0.25)', marginBottom:'20px' }}>DOI: 10.5281/zenodo.18269740</div>
            <div style={{ display:'flex', gap:'16px', flexWrap:'wrap', marginBottom:'20px' }}>
              <a href="https://zenodo.org/records/18269740" target="_blank" rel="noopener noreferrer" style={{ fontFamily:'var(--font-instrument)', fontSize:'0.82rem', fontWeight:500, color:'#9382FF', textDecoration:'none' }}>Read on Zenodo ↗</a>
              <a href="https://github.com/RayanAIX/HCMS-Human-Cognition-Measurement-System" target="_blank" rel="noopener noreferrer" style={{ fontFamily:'var(--font-instrument)', fontSize:'0.82rem', fontWeight:500, color:'#9382FF', textDecoration:'none' }}>View repository ↗</a>
              <button onClick={() => { setBibOpen(!bibOpen); if (!bibOpen) copy() }} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-instrument)', fontSize:'0.82rem', fontWeight:500, color: copied ? '#2DD4BF' : '#9382FF', padding:0, transition:'color 0.15s' }}>
                {copied ? 'Copied! ✓' : bibOpen ? 'Hide citation' : 'Copy BibTeX'}
              </button>
            </div>
            {bibOpen && (
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', background:'rgba(147,130,255,0.05)', padding:'20px', borderRadius:'6px', border:'1px solid rgba(147,130,255,0.12)', color:'rgba(240,239,248,0.5)', whiteSpace:'pre-wrap', maxWidth:'600px' }}>{BIBTEX}</div>
            )}
          </div>
        </AnimateIn>

        {/* Future */}
        <AnimateIn delay={120}>
          <div style={{ opacity:0.5, marginBottom:'60px' }}>
            <div style={{ display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'16px' }}>
              <span className="badge badge-planned">Future · After Same Mind Project</span>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'rgba(240,239,248,0.25)' }}>Paper #2</span>
            </div>
            <h2 style={{ fontFamily:'var(--font-newsreader)', fontStyle:'italic', fontWeight:300, fontSize:'clamp(1.2rem,2.2vw,1.6rem)', lineHeight:1.3, color:'rgba(240,239,248,0.4)', marginBottom:'10px' }}>
              Empirical study of observable indicators of understanding
            </h2>
            <p style={{ fontFamily:'var(--font-newsreader)', fontSize:'0.88rem', color:'rgba(240,239,248,0.3)', fontStyle:'italic' }}>Title and venue to be determined based on actual results. This paper will be written only once Same Mind Project data and analysis exist.</p>
          </div>
        </AnimateIn>

        {/* Principles */}
        <AnimateIn delay={160}>
          <div style={{ background:'rgba(147,130,255,0.04)', border:'1px solid rgba(147,130,255,0.1)', borderRadius:'8px', padding:'32px 36px', maxWidth:'640px' }}>
            <div style={{ fontFamily:'var(--font-instrument)', fontSize:'0.68rem', fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(147,130,255,0.5)', marginBottom:'16px' }}>Publication Principles</div>
            <p className="prose-serif">The Lab publishes when evidence exists. It does not publish claims before data exists. Preprints are labeled as such. No paper should overstate its findings. Limitations should be listed explicitly. A paper that weakens a claim is not less valuable than a paper that strengthens one.</p>
          </div>
        </AnimateIn>
        <div style={{ height:'100px' }} />
      </div>
    </div>
  )
}
