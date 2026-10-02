'use client'
import { useEffect, useRef, useState } from 'react'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import Background from '@/components/ui/Background'
import HomeSection from '@/components/sections/HomeSection'
import TheorySection from '@/components/sections/TheorySection'
import ExperimentsSection from '@/components/sections/ExperimentsSection'
import PublicationsSection from '@/components/sections/PublicationsSection'
import LogSection from '@/components/sections/LogSection'
import AboutSection from '@/components/sections/AboutSection'
import CollaborateSection from '@/components/sections/CollaborateSection'

export type PageId = 'home'|'theory'|'experiments'|'publications'|'log'|'about'|'collaborate'

export default function Page() {
  const [page, setPage] = useState<PageId>('home')
  const mainRef = useRef<HTMLDivElement>(null)

  const navigate = (p: PageId) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (typeof window !== 'undefined') history.replaceState(null,'','#'+p)
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#','') as PageId
    const valid: PageId[] = ['home','theory','experiments','publications','log','about','collaborate']
    if (valid.includes(hash)) setPage(hash)
  }, [])

  // Progress bar
  useEffect(() => {
    const bar = document.getElementById('progress-bar')
    const onScroll = () => {
      if (!bar) return
      const h = document.documentElement.scrollHeight - window.innerHeight
      const pct = h > 0 ? window.scrollY / h : 0
      bar.style.transform = `scaleX(${pct})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div id="progress-bar" style={{position:'fixed',top:0,left:0,height:'2px',width:'100%',background:'linear-gradient(90deg,#9382FF,#2DD4BF)',zIndex:9999,transformOrigin:'left',transform:'scaleX(0)',transition:'transform 0.1s linear'}} />
      <Background />
      <Nav current={page} navigate={navigate} />
      <main ref={mainRef} style={{minHeight:'100vh',position:'relative',zIndex:1}}>
        {page === 'home' && <HomeSection navigate={navigate} />}
        {page === 'theory' && <TheorySection navigate={navigate} />}
        {page === 'experiments' && <ExperimentsSection navigate={navigate} />}
        {page === 'publications' && <PublicationsSection navigate={navigate} />}
        {page === 'log' && <LogSection navigate={navigate} />}
        {page === 'about' && <AboutSection navigate={navigate} />}
        {page === 'collaborate' && <CollaborateSection navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </>
  )
}
