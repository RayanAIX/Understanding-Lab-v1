'use client'
import { useState, useEffect } from 'react'
import type { PageId } from '@/app/page'

const links: { id: PageId; label: string }[] = [
  { id: 'home', label: 'The Lab' },
  { id: 'theory', label: 'Theory' },
  { id: 'experiments', label: 'Experiments' },
  { id: 'publications', label: 'Publications' },
  { id: 'log', label: 'Research Log' },
  { id: 'about', label: 'About' },
  { id: 'collaborate', label: 'Collaborate' },
]

export default function Nav({ current, navigate }: { current: PageId; navigate: (p: PageId) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? '1px solid rgba(147,130,255,0.12)' : '1px solid transparent',
      background: scrolled ? 'rgba(12,12,14,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(16px,4vw,60px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
        
        {/* Brand */}
        <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '1px', padding: 0 }}>
          <span style={{ fontFamily: 'var(--font-instrument)', fontSize: '0.82rem', fontWeight: 600, color: '#F0EFF8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            The Understanding Lab
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(147,130,255,0.7)', letterSpacing: '0.06em' }}>v0.1 · Working Theory</span>
        </button>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }} className="nav-desktop">
          {links.map(l => (
            <li key={l.id}>
              <button
                onClick={() => navigate(l.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-instrument)', fontSize: '0.8rem', fontWeight: 500,
                  color: current === l.id ? '#F0EFF8' : 'rgba(240,239,248,0.45)',
                  letterSpacing: '0.01em',
                  borderBottom: current === l.id ? '1px solid #9382FF' : '1px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.15s, border-color 0.15s',
                  padding: '2px 0',
                }}
                onMouseEnter={e => { if (current !== l.id) (e.target as HTMLElement).style.color = 'rgba(240,239,248,0.8)' }}
                onMouseLeave={e => { if (current !== l.id) (e.target as HTMLElement).style.color = 'rgba(240,239,248,0.45)' }}
              >{l.label}</button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#F0EFF8', padding: '4px' }}
          className="nav-mobile-toggle"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen
              ? <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></>
              : <><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(12,12,14,0.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(147,130,255,0.12)', padding: '16px 0' }}>
          {links.map(l => (
            <button key={l.id} onClick={() => { navigate(l.id); setMenuOpen(false) }}
              style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-instrument)', fontSize: '0.9rem', fontWeight: 500, color: current === l.id ? '#9382FF' : 'rgba(240,239,248,0.6)', padding: '14px clamp(16px,4vw,60px)', transition: 'color 0.15s' }}
            >{l.label}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
