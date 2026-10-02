import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Understanding Lab — What does it mean to truly understand something?',
  description: 'An independent research program investigating the nature, measurement, and development of understanding across humans and intelligent systems. Researcher: Muhammad Rayan Shahid.',
  keywords: ['understanding', 'cognitive measurement', 'HCMS', 'Muhammad Rayan Shahid', 'AI evaluation', 'learning science'],
  openGraph: {
    title: 'The Understanding Lab',
    description: 'What does it mean to truly understand something? An independent research program investigating the nature, measurement, and development of understanding.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%230C0C0E'/><text x='16' y='22' font-size='16' text-anchor='middle' fill='%239382FF' font-family='serif' font-style='italic'>U</text><circle cx='24' cy='8' r='3' fill='%232DD4BF'/></svg>" />
      </head>
      <body>{children}</body>
    </html>
  )
}
