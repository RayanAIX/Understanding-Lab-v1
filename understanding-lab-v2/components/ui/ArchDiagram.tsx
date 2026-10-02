'use client'
import { useEffect, useRef } from 'react'

export default function ArchDiagram() {
  const ref = useRef<SVGSVGElement>(null)
  useEffect(() => {
    const lines = ref.current?.querySelectorAll('.arch-line')
    lines?.forEach((l, i) => {
      const el = l as SVGLineElement
      el.style.strokeDasharray = '400'
      el.style.strokeDashoffset = '400'
      el.style.transition = `stroke-dashoffset 1s ease ${i * 0.18}s`
      setTimeout(() => { el.style.strokeDashoffset = '0' }, 100)
    })
  }, [])

  const nodes = [
    { label: 'QUESTION', y: 40, fill: 'rgba(147,130,255,0.18)', stroke: 'rgba(147,130,255,0.5)', textColor: '#9382FF', note: 'The founding question' },
    { label: 'THEORY', y: 130, fill: 'rgba(12,12,14,0.8)', stroke: 'rgba(147,130,255,0.2)', textColor: '#F0EFF8', note: 'v0.1 frozen · v0.2 working' },
    { label: 'TEST', y: 220, fill: 'rgba(12,12,14,0.8)', stroke: 'rgba(147,130,255,0.2)', textColor: '#F0EFF8', note: 'Adversarial + empirical' },
    { label: 'EVIDENCE', y: 310, fill: 'rgba(12,12,14,0.8)', stroke: 'rgba(147,130,255,0.2)', textColor: '#F0EFF8', note: 'Same Mind Project →' },
    { label: 'MEASUREMENT', y: 400, fill: 'rgba(45,212,191,0.1)', stroke: 'rgba(45,212,191,0.3)', textColor: '#2DD4BF', note: 'HCMS instrument' },
    { label: 'REVISION', y: 490, fill: 'rgba(240,192,96,0.08)', stroke: 'rgba(240,192,96,0.25)', textColor: '#F0C060', note: 'Theory evolves with evidence' },
  ]

  return (
    <svg ref={ref} viewBox="0 0 560 580" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '480px', display: 'block', margin: '0 auto' }}>

      {/* Revision loop */}
      <path d="M 420 490 Q 500 490 500 265 Q 500 40 420 40" stroke="rgba(147,130,255,0.15)" strokeWidth="1.5" strokeDasharray="5 4" fill="none"/>
      <path d="M 422 36 L 414 44 M 422 36 L 430 44" stroke="rgba(147,130,255,0.3)" strokeWidth="1.5"/>
      <text x="512" y="270" fontFamily="var(--font-mono)" fontSize="10" fill="rgba(147,130,255,0.4)" textAnchor="middle" style={{writingMode:'vertical-lr'}}>revision loop</text>

      {/* Connector lines */}
      {nodes.slice(0,-1).map((n,i) => (
        <line key={i} className="arch-line" x1="220" y1={n.y+42} x2="220" y2={nodes[i+1].y} stroke="rgba(147,130,255,0.25)" strokeWidth="1.5"/>
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x="80" y={n.y} width="280" height="42" rx="5" fill={n.fill} stroke={n.stroke} strokeWidth="1"/>
          <text x="220" y={n.y+26} fontFamily="var(--font-mono)" fontSize="12" fontWeight="500" fill={n.textColor} textAnchor="middle" letterSpacing="0.08em">{n.label}</text>
          <text x="380" y={n.y+26} fontFamily="var(--font-mono)" fontSize="9" fill="rgba(240,239,248,0.25)" textAnchor="start">{n.note}</text>
          <line x1="360" y1={n.y+21} x2="378" y2={n.y+21} stroke="rgba(240,239,248,0.1)" strokeWidth="1"/>
        </g>
      ))}

      {/* Arrow at top of loop */}
      <text x="220" y="546" fontFamily="var(--font-mono)" fontSize="9" fill="rgba(147,130,255,0.35)" textAnchor="middle">↺ theory revises when evidence demands it</text>
    </svg>
  )
}
