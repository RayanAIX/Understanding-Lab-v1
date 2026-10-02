'use client'
import type { PageId } from '@/app/page'

export default function Footer({ navigate }: { navigate: (p: PageId) => void }) {
  return (
    <footer style={{ background: '#0C0C0E', borderTop: '1px solid rgba(147,130,255,0.1)', padding: '60px 0 40px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(16px,4vw,60px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '40px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-instrument)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F0EFF8', marginBottom: '8px' }}>The Understanding Lab</div>
            <div style={{ fontFamily: 'var(--font-newsreader)', fontStyle: 'italic', fontSize: '0.85rem', color: 'rgba(240,239,248,0.4)', lineHeight: 1.6, maxWidth: '260px' }}>What does it mean to truly understand something?</div>
            <div style={{ marginTop: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(240,239,248,0.25)' }}>Muhammad Rayan Shahid · Independent researcher</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-instrument)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,239,248,0.3)', marginBottom: '16px' }}>Research</div>
            {(['theory','experiments','publications','log'] as PageId[]).map(p => (
              <button key={p} onClick={() => navigate(p)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-instrument)', fontSize: '0.82rem', color: 'rgba(240,239,248,0.45)', marginBottom: '10px', padding: 0, textTransform: 'capitalize', transition: 'color 0.15s' }}
                onMouseEnter={e=>(e.target as HTMLElement).style.color='rgba(240,239,248,0.8)'}
                onMouseLeave={e=>(e.target as HTMLElement).style.color='rgba(240,239,248,0.45)'}
              >{p === 'log' ? 'Research Log' : p.charAt(0).toUpperCase()+p.slice(1)}</button>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-instrument)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,239,248,0.3)', marginBottom: '16px' }}>Lab</div>
            {(['about','collaborate'] as PageId[]).map(p => (
              <button key={p} onClick={() => navigate(p)} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-instrument)', fontSize: '0.82rem', color: 'rgba(240,239,248,0.45)', marginBottom: '10px', padding: 0, textTransform: 'capitalize', transition: 'color 0.15s' }}
                onMouseEnter={e=>(e.target as HTMLElement).style.color='rgba(240,239,248,0.8)'}
                onMouseLeave={e=>(e.target as HTMLElement).style.color='rgba(240,239,248,0.45)'}
              >{p.charAt(0).toUpperCase()+p.slice(1)}</button>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-instrument)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,239,248,0.3)', marginBottom: '16px' }}>Elsewhere</div>
            {[
              { label: 'GitHub', href: 'https://github.com/RayanAIX' },
              { label: 'Zenodo', href: 'https://zenodo.org/records/18269740' },
              { label: 'Substack', href: 'https://substack.com/@muhammedrayanshahid' },
              { label: 'X / Twitter', href: 'https://x.com/MRayanShahid' },
              { label: 'Portfolio', href: 'https://muhammadrayanshahid.vercel.app' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', fontFamily: 'var(--font-instrument)', fontSize: '0.82rem', color: 'rgba(240,239,248,0.45)', marginBottom: '10px', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e=>(e.target as HTMLElement).style.color='rgba(240,239,248,0.8)'}
                onMouseLeave={e=>(e.target as HTMLElement).style.color='rgba(240,239,248,0.45)'}
              >{l.label} ↗</a>
            ))}
          </div>
        </div>
        <div className="rule-glow" style={{ marginBottom: '28px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(240,239,248,0.2)' }}>© 2026 Muhammad Rayan Shahid · Independent Research</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'rgba(147,130,255,0.4)' }}>Version 0.1 · Theory: Working · Sep 2026</span>
        </div>
      </div>
    </footer>
  )
}
