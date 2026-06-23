'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Masthead() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/nigeria', label: 'Nigeria' },
    { href: '/africa', label: 'Africa' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/merit-sovereignism', label: 'Merit-Sovereignism' },
  ]

  return (
    <header style={{ background: 'var(--black)', color: 'var(--cream)', padding: '0 1.5rem' }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        padding: '1.2rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        {/* LOGO */}
        <Link href="/" style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.4rem', fontWeight: 700, letterSpacing: '-0.01em',
          color: 'var(--cream)', textDecoration: 'none', flexShrink: 0
        }}>
          The <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>African</em> Mind
        </Link>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: pathname === href ? 'var(--gold)' : 'rgba(245,240,232,0.65)',
              textDecoration: 'none'
            }}>{label}</Link>
          ))}
          <Link href="/subscribe" style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            background: 'var(--gold)', color: 'var(--black)',
            padding: '0.45rem 1rem', borderRadius: '2px', textDecoration: 'none'
          }}>Subscribe</Link>
        </nav>

        {/* HAMBURGER (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem', display: 'none', flexDirection: 'column', gap: '5px' }}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'var(--gold)' : 'var(--cream)', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: 'var(--cream)', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? 'var(--gold)' : 'var(--cream)', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '0.9rem 0',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '0.85rem', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: pathname === href ? 'var(--gold)' : 'rgba(245,240,232,0.75)',
              textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>{label}</Link>
          ))}
          <Link href="/subscribe" onClick={() => setMenuOpen(false)} style={{
            display: 'inline-block', marginTop: '1rem',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            background: 'var(--gold)', color: 'var(--black)',
            padding: '0.6rem 1.4rem', borderRadius: '2px', textDecoration: 'none'
          }}>Subscribe</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
