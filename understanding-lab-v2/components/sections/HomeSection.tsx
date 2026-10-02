'use client'
import { useEffect, useRef, useState } from 'react'
import type { PageId } from '@/app/page'
import AnimateIn from '@/components/ui/AnimateIn'
import ArchDiagram from '@/components/ui/ArchDiagram'

const QUESTION = "What does it mean to truly understand something?"

export default function HomeSection({ navigate }: { navigate: (p: PageId) => void }) {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [phase, setPhase] = useState<'typing'|'done'>('typing')
  const [heroVisible, setHeroVisible] = useState(false)

  // Typewriter for hero question
  useEffect(() => {
    setHeroVisible(true)
    let i = 0
    const interval = setInterval(() => {
      if (i <= QUESTION.length) {
        setDisplayed(QUESTION.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        setPhase('done')
        setTimeout(() => setShowCursor(false), 1200)
      }
    }, 38)
    return () => clearInterval(interval)
  }, [])

  // Cursor blink
  useEffect(() => {
    if (phase !== 'typing') return
    const t = setInterval(() => setShowCursor(c => !c), 530)
    return () => clearInterval(t)
  }, [phase])

  const P = { maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(16px,4vw,60px)' }

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={P}>
          <AnimateIn delay={0}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
              <span className="badge badge-working">Working Theory v0.2</span>
              <span className="badge badge-preprint">1 Preprint Published</span>
              <span className="badge badge-planned">Same Mind Project · Protocol Phase</span>
            </div>
          </AnimateIn>

          <AnimateIn delay={80}>
            <div style={{ fontFamily: 'var(--font-instrument)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(147,130,255,0.6)', marginBottom: '24px' }}>
              The Understanding Lab · Independent Research Program · Est. 2026
            </div>
          </AnimateIn>

          <AnimateIn delay={160}>
            <h1 style={{ fontFamily: 'var(--font-newsreader)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.4rem,5.5vw,4.6rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: '#F0EFF8', marginBottom: '32px', maxWidth: '860px' }}>
              {displayed}
              {showCursor && <span style={{ display: 'inline-block', width: '3px', height: '0.85em', background: '#9382FF', marginLeft: '4px', verticalAlign: 'text-bottom', borderRadius: '1px' }} />}
            </h1>
          </AnimateIn>

          <AnimateIn delay={300}>
            <p style={{ fontFamily: 'var(--font-newsreader)', fontSize: '1.1rem', color: 'rgba(240,239,248,0.55)', lineHeight: 1.75, maxWidth: '540px', marginBottom: '44px' }}>
              An independent research program investigating the nature, measurement, and development of understanding across humans and intelligent systems.
            </p>
          </AnimateIn>

          <AnimateIn delay={420}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}>
              <button className="btn-primary" onClick={() => navigate('theory')}>Explore the Theory</button>
              <button className="btn-secondary" onClick={() => navigate('experiments')}>View Research</button>
              <button className="btn-ghost" onClick={() => navigate('collaborate')}>Challenge it →</button>
            </div>
          </AnimateIn>

          {/* Scroll indicator */}
          <AnimateIn delay={600}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(147,130,255,0.5), transparent)', animation: 'float 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(147,130,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Scroll to explore</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── THE QUESTION ── */}
      <section style={{ padding: '100px 0' }}>
        <div style={P}>
          <div className="rule-glow" style={{ marginBottom: '80px' }} />
          <AnimateIn>
            <div style={{ fontFamily: 'var(--font-instrument)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(147,130,255,0.5)', marginBottom: '32px' }}>The Question</div>
          </AnimateIn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <AnimateIn delay={100}>
              <blockquote style={{ fontFamily: 'var(--font-newsreader)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.4rem,2.8vw,2rem)', lineHeight: 1.4, color: '#F0EFF8', borderLeft: '2px solid #9382FF', paddingLeft: '24px', marginBottom: '28px' }}>
                What does it mean to truly understand something?
              </blockquote>
              <div className="prose-serif">
                <p>Conventional assessment can tell us whether an answer is correct. But correctness alone may not reveal the structure, stability, transferability, or limits of the knowledge that produced it.</p>
                <p style={{ marginTop: '1em' }}>A person can produce a correct answer through memorization, guessing, imitation, or deep conceptual comprehension. These are fundamentally different cognitive processes — yet they frequently produce the same observable output.</p>
              </div>
              <button onClick={() => navigate('theory')} className="btn-ghost" style={{ marginTop: '32px' }}>Read the working theory →</button>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div style={{ background: 'rgba(147,130,255,0.04)', border: '1px solid rgba(147,130,255,0.12)', borderRadius: '8px', padding: '36px 32px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(147,130,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>The core problem</div>
                {[
                  { label: 'Memorization', sym: '≠', color: 'rgba(240,192,96,0.7)' },
                  { label: 'Pattern matching', sym: '≠', color: 'rgba(240,192,96,0.7)' },
                  { label: 'Guessing', sym: '≠', color: 'rgba(240,192,96,0.7)' },
                  { label: 'Imitation', sym: '≠', color: 'rgba(240,192,96,0.7)' },
                ].map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: 'none', gap: '16px' }}>
                    <span style={{ fontFamily: 'var(--font-newsreader)', fontSize: '0.95rem', color: 'rgba(240,239,248,0.55)' }}>{r.label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: r.color }}>{r.sym}</span>
                    <span style={{ fontFamily: 'var(--font-newsreader)', fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(147,130,255,0.7)' }}>Understanding</span>
                  </div>
                ))}
                <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(147,130,255,0.08)', borderRadius: '5px', border: '1px solid rgba(147,130,255,0.15)' }}>
                  <span style={{ fontFamily: 'var(--font-newsreader)', fontSize: '0.9rem', color: 'rgba(240,239,248,0.7)', fontStyle: 'italic' }}>...but all can produce the same observable output: a correct answer.</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CURRENT THEORY ── */}
      <section style={{ padding: '100px 0', background: 'rgba(147,130,255,0.02)' }}>
        <div style={P}>
          <AnimateIn>
            <div style={{ fontFamily: 'var(--font-instrument)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(147,130,255,0.5)', marginBottom: '32px' }}>Current Theory</div>
          </AnimateIn>
          <AnimateIn delay={80}>
            <div style={{ border: '1px solid rgba(147,130,255,0.2)', borderLeft: '3px solid #9382FF', background: 'rgba(147,130,255,0.05)', borderRadius: '0 8px 8px 0', padding: '32px 36px', marginBottom: '24px', maxWidth: '760px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(147,130,255,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>Working Definition · v0.2 · September 2026</div>
              <p style={{ fontFamily: 'var(--font-newsreader)', fontStyle: 'italic', fontSize: 'clamp(1rem,1.8vw,1.2rem)', lineHeight: 1.7, color: '#F0EFF8' }}>
                "Understanding is an organized, relational capacity through which an agent can make meaningful use of what it knows, including by explaining, reasoning, predicting, transferring, adapting, or revising its knowledge when relevant conditions change."
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={160}>
            <div style={{ background: 'rgba(240,192,96,0.05)', border: '1px solid rgba(240,192,96,0.15)', borderRadius: '5px', padding: '16px 20px', marginBottom: '32px', maxWidth: '760px' }}>
              <span style={{ fontFamily: 'var(--font-instrument)', fontSize: '0.82rem', color: 'rgba(240,192,96,0.8)' }}><strong style={{ color: '#F0C060' }}>This is a working definition, not a final scientific claim.</strong> Revised after a formal adversarial stress test in September 2026.</span>
            </div>
          </AnimateIn>
          {/* Three level distinction */}
          <AnimateIn delay={240}>
            <div style={{ maxWidth: '600px', marginBottom: '40px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(240,239,248,0.3)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>A crucial three-level distinction:</div>
              {[
                { tag: 'WHAT IT IS', content: 'Understanding', color: '#9382FF', bg: 'rgba(147,130,255,0.08)' },
                { tag: 'HOW IT MAY MANIFEST', content: 'Explanation · Reasoning · Prediction · Transfer · Adaptation · Revision', color: '#2DD4BF', bg: 'rgba(45,212,191,0.06)' },
                { tag: 'HOW WE OBSERVE IT', content: 'Tasks · Responses · Behavior · Confidence · Consistency', color: '#F0C060', bg: 'rgba(240,192,96,0.05)' },
              ].map((l, i) => (
                <div key={i}>
                  <div style={{ background: l.bg, border: `1px solid ${l.color}22`, borderRadius: '5px', padding: '14px 18px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: l.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>{l.tag}</div>
                    <div style={{ fontFamily: 'var(--font-newsreader)', fontSize: '0.92rem', color: 'rgba(240,239,248,0.75)' }}>{l.content}</div>
                  </div>
                  {i < 2 && <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'rgba(147,130,255,0.3)', padding: '4px 0' }}>↓</div>}
                </div>
              ))}
              <div style={{ marginTop: '12px', fontFamily: 'var(--font-instrument)', fontSize: '0.78rem', color: 'rgba(240,239,248,0.3)' }}>These levels must not be collapsed. A measurement framework is strongest when it makes their relationships explicit.</div>
            </div>
          </AnimateIn>
          <AnimateIn delay={320}>
            <button className="btn-secondary" onClick={() => navigate('theory')}>Read the full theory →</button>
          </AnimateIn>
        </div>
      </section>

      {/* ── RESEARCH ARCHITECTURE ── */}
      <section style={{ padding: '100px 0' }}>
        <div style={P}>
          <div className="rule-glow" style={{ marginBottom: '80px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <AnimateIn>
              <div style={{ fontFamily: 'var(--font-instrument)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(147,130,255,0.5)', marginBottom: '20px' }}>Research Architecture</div>
              <h2 style={{ fontFamily: 'var(--font-newsreader)', fontWeight: 300, fontSize: 'clamp(1.6rem,3vw,2.4rem)', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#F0EFF8', marginBottom: '20px' }}>How the Lab investigates understanding</h2>
              <p className="prose-serif" style={{ marginBottom: '16px' }}>The Lab treats theories as things to test, not beliefs to protect. Every project connects to the same cycle — from question to revision.</p>
              <p className="prose-serif" style={{ marginBottom: '32px' }}>HCMS is one instrument within this architecture. The Same Mind Project is the first empirical test. Neither is the destination.</p>
              <button className="btn-secondary" onClick={() => navigate('experiments')}>View current research →</button>
            </AnimateIn>
            <AnimateIn delay={200}>
              <ArchDiagram />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── RESEARCH PROGRAMS ── */}
      <section style={{ padding: '100px 0', background: 'rgba(147,130,255,0.02)' }}>
        <div style={P}>
          <div className="rule-glow" style={{ marginBottom: '80px' }} />
          <AnimateIn>
            <div style={{ fontFamily: 'var(--font-instrument)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(147,130,255,0.5)', marginBottom: '20px' }}>Research Programs</div>
            <h2 style={{ fontFamily: 'var(--font-newsreader)', fontWeight: 300, fontSize: 'clamp(1.6rem,3vw,2.4rem)', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#F0EFF8', marginBottom: '40px' }}>Active and planned investigations</h2>
          </AnimateIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1px', background: 'rgba(147,130,255,0.1)', border: '1px solid rgba(147,130,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
            {[
              { id: 'EXP-001', title: 'Human Cognition Measurement System', badge: <span className="badge badge-preprint">Preprint</span>, desc: 'The first experimental instrument. Explores whether multiple observable signals can provide a more informative picture than correctness alone. DOI: 10.5281/zenodo.18269740', page: 'experiments' as PageId },
              { id: 'EXP-002', title: 'Same Mind Project', badge: <span className="badge badge-planned">Protocol Phase</span>, desc: 'Can people who answer the same question correctly demonstrate different structures of understanding? The first empirical study.', page: 'experiments' as PageId },
              { id: 'EXP-003', title: 'AI Audit #1', badge: <span className="badge badge-planned">Future Research</span>, desc: 'Can the Same Mind framework apply to AI systems? Do AI systems exhibit the same observable patterns as human understanders?', page: 'experiments' as PageId },
            ].map((card, i) => (
              <AnimateIn key={card.id} delay={i * 80}>
                <div className="card-hover" onClick={() => navigate(card.page)} style={{ background: '#0C0C0E', padding: '32px 28px', cursor: 'pointer', border: '1px solid transparent', borderRadius: 0 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'rgba(147,130,255,0.4)', marginBottom: '10px' }}>{card.id}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <div style={{ fontFamily: 'var(--font-newsreader)', fontSize: '1rem', fontWeight: 500, color: '#F0EFF8', lineHeight: 1.3 }}>{card.title}</div>
                    {card.badge}
                  </div>
                  <p style={{ fontFamily: 'var(--font-newsreader)', fontSize: '0.88rem', color: 'rgba(240,239,248,0.45)', lineHeight: 1.7 }}>{card.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENDING ── */}
      <section style={{ padding: '120px 0' }}>
        <div style={P}>
          <div className="rule-glow" style={{ marginBottom: '80px' }} />
          <AnimateIn>
            <blockquote style={{ fontFamily: 'var(--font-newsreader)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', lineHeight: 1.35, color: '#F0EFF8', maxWidth: '600px', marginBottom: '24px' }}>
              The question remains open.
            </blockquote>
            <p className="prose-serif" style={{ maxWidth: '540px', marginBottom: '40px' }}>The Lab does not claim to have solved the problem of understanding. It exists to make the problem more precise, test possible answers, discover where they fail, and gradually build better ones.</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => navigate('theory')}>Explore the research</button>
              <button className="btn-ghost" onClick={() => navigate('collaborate')}>Challenge the theory →</button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
