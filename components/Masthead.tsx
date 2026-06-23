'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Masthead() {
  const pathname = usePathname()

  return (
    <header style={{ background: 'var(--black)', color: 'var(--cream)', padding: '0 2rem' }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        padding: '1.2rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <Link href="/" style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--cream)',
          textDecoration: 'none'
        }}>
          The <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>African</em> Mind
        </Link>

        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[
            { href: '/', label: 'Home' },
            { href: '/nigeria', label: 'Nigeria' },
            { href: '/africa', label: 'Africa' },
            { href: '/solutions', label: 'Solutions' },
            { href: '/merit-sovereignism', label: 'Merit-Sovereignism' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: pathname === href ? 'var(--gold)' : 'rgba(245,240,232,0.65)',
              textDecoration: 'none', transition: 'color 0.2s'
            }}>
              {label}
            </Link>
          ))}
          <Link href="/subscribe" style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            background: 'var(--gold)', color: 'var(--black)',
            padding: '0.45rem 1rem', borderRadius: '2px',
            textDecoration: 'none', transition: 'background 0.2s'
          }}>
            Subscribe
          </Link>
        </nav>
      </div>
    </header>
  )
}
