'use client'
import { useEffect, useRef } from 'react'

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = window.innerWidth, h = window.innerHeight
    canvas.width = w; canvas.height = h

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight
      canvas.width = w; canvas.height = h
    }
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', e => { mouseRef.current = { x: e.clientX, y: e.clientY } })

    // Particles
    const count = Math.min(120, Math.floor(w * h / 12000))
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
    }))

    let frame = 0
    const animate = () => {
      frame++
      ctx.clearRect(0, 0, w, h)
      const mx = mouseRef.current.x, my = mouseRef.current.y

      particles.forEach(p => {
        // Mouse repulsion
        const dx = p.x - mx, dy = p.y - my
        const dist = Math.sqrt(dx*dx + dy*dy)
        if (dist < 120) {
          const force = (120 - dist) / 120 * 0.6
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }
        p.vx *= 0.98; p.vy *= 0.98
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147,130,255,${p.opacity})`
        ctx.fill()
      })

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx*dx + dy*dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(147,130,255,${(1 - d/110) * 0.1})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }
    animate()
    return () => { window.removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      {/* Canvas particles */}
      <canvas ref={canvasRef} style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none' }} />
      {/* Ambient orbs */}
      <div style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden' }}>
        <div className="animate-orb1" style={{ position:'absolute', top:'-20%', left:'-10%', width:'700px', height:'700px', borderRadius:'50%', background:'radial-gradient(circle, rgba(147,130,255,0.06) 0%, transparent 70%)', filter:'blur(40px)' }} />
        <div className="animate-orb2" style={{ position:'absolute', bottom:'-20%', right:'-10%', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle, rgba(45,212,191,0.05) 0%, transparent 70%)', filter:'blur(40px)' }} />
        <div className="animate-orb3" style={{ position:'absolute', top:'40%', right:'20%', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(240,192,96,0.03) 0%, transparent 70%)', filter:'blur(30px)' }} />
      </div>
    </>
  )
}
