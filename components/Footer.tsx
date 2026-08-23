import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--black)', color: 'rgba(245,240,232,0.5)', padding: '3rem 2rem' }}>
      <div className="footer-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
        <div>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.4rem' }}>
            The <span style={{ color: 'var(--gold)' }}>African</span> Mind
          </p>
          <p style={{ fontSize: '0.78rem', lineHeight: 1.5 }}>
            Rigorous thinking on Nigeria, Africa, and the civilisational project of our century.
          </p>
        </div>
        <nav className="footer-nav" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {['Nigeria', 'Africa', 'Solutions', 'Merit-Sovereignism', 'Fact Checks', 'About', 'Write for Us'].map(label => (
            <Link key={label} href={label === 'Write for Us' ? '/write' : `/${label.toLowerCase().replace(' ', '-')}`} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div style={{ maxWidth: '1200px', margin: '2rem auto 0', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.68rem', color: 'rgba(245,240,232,0.25)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span>© {new Date().getFullYear()} The African Mind · Jeremiah Nome</span>
        <span>theafricanmind.com</span>
      </div>
    </footer>
  )
}
