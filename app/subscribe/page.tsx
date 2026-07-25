import Masthead from '@/components/Masthead'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata = {
  title: 'Subscribe — The African Mind',
  description: 'Join The African Mind. New essays on Nigeria, African governance, and civilisational thinking, directly to your inbox.',
}

export default function SubscribePage() {
  return (
    <>
      <Masthead />

      {/* HERO */}
      <div style={{ background: 'var(--black)', padding: '5rem 2rem 4rem', color: 'var(--cream)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>
            The African Mind
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--cream)', marginBottom: '1rem' }}>
            Think with us.
          </h1>
          <span className="gold-line" style={{ width: '60px', display: 'block', margin: '1.5rem auto' }} />
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', fontStyle: 'italic', maxWidth: '500px', margin: '0 auto' }}>
            Essays on Nigerian governance, African political economy, and the civilisational questions that define what this continent becomes. No noise. No filler. Just serious thinking.
          </p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div style={{ background: 'var(--gold)', padding: '5rem 2rem' }}>
        <NewsletterForm />
      </div>

      {/* WHAT TO EXPECT */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '5rem 2rem' }}>
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '2rem', textAlign: 'center' }}>What You Will Read</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            { label: 'Nigeria', text: 'Governance, economy, corruption, and the structural questions that define the country\'s trajectory. Argued with evidence, not sentiment.' },
            { label: 'Africa', text: 'The broader civilisational project. What the continent is becoming, what it must become, and what stands in the way.' },
            { label: 'Solutions', text: 'Not only diagnosis. Concrete proposals and alternative frameworks for Africa\'s most pressing problems.' },
            { label: 'Merit-Sovereignism', text: 'A governance philosophy built from the observed realities of African failure. Essays developing and applying its principles to real contexts.' },
          ].map(item => (
            <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1.5rem', alignItems: 'start', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: 'var(--black)' }}>{item.label}</p>
              <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.95rem', lineHeight: 1.75, color: '#444' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}
