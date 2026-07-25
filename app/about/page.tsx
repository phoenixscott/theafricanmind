import Masthead from '@/components/Masthead'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'About: The African Mind',
  description: 'The African Mind exists to think seriously about how Africa gets there.',
}

export default function AboutPage() {
  return (
    <>
      <Masthead />

      {/* HERO */}
      <div style={{ background: 'var(--black)', padding: '5rem 2rem 4rem', color: 'var(--cream)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>
            The African Mind
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--cream)', marginBottom: '0.8rem' }}>
            About
          </h1>
          <span className="gold-line" style={{ width: '60px', display: 'block', margin: '1.5rem 0' }} />
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>

        <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.15rem', lineHeight: 1.85, color: '#2a2a2a', marginBottom: '1.8rem', fontStyle: 'italic', fontWeight: 300 }}>
          The superiority complex of other races toward Africa is morally wrong. It is also, in a specific and uncomfortable sense, materially explicable.
        </p>

        <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', lineHeight: 1.85, color: '#2a2a2a', marginBottom: '1.8rem' }}>
          Africa is 17% of humanity. We produce less than 3% of global scientific output. We consume technology we didn&apos;t build, use frameworks we didn&apos;t develop, and depend on institutions we didn&apos;t design. We talk about neocolonialism, and we are right to, but neocolonialism only persists because our leaders are either too complicit or too weak to end it. The problem is not only what was done to us. The problem is what we are failing to do for ourselves.
        </p>

        <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', lineHeight: 1.85, color: '#2a2a2a', marginBottom: '1.8rem' }}>
          Racism does not dissolve by asking people to feel differently. It dissolves when the material basis for hierarchy disappears, when Africa contributes to science, technology, and human knowledge at a scale that makes superiority claims impossible to sustain. That is not optimism. That is the only strategy that has ever permanently ended a hierarchy.
        </p>

        <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', lineHeight: 1.85, color: '#2a2a2a', marginBottom: '1.8rem' }}>
          I think constantly about Nigeria&apos;s problems and Africa&apos;s place in human civilisation. I believe poverty can be eradicated. I believe humans will live on other planets. And I believe Africa must be part of that story, not as a footnote, not as a charity case, but as a genuine contributor to the civilisational project that defines what our species becomes.
        </p>

        {/* PULL QUOTE */}
        <blockquote style={{ borderLeft: '3px solid var(--gold)', padding: '0.5rem 0 0.5rem 1.8rem', margin: '2.5rem 0' }}>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--charcoal)', lineHeight: 1.75 }}>
            The African Mind exists to think seriously about how we get there. Nigeria first, because you cannot think about Africa honestly without confronting Nigeria honestly. Then the continent. Then the larger question of what African civilisation contributes to humanity at scale.
          </p>
        </blockquote>

        <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', lineHeight: 1.85, color: '#2a2a2a', marginBottom: '1.8rem' }}>
          Alongside this publication, I have developed Merit-Sovereignism, a governance philosophy designed specifically for the African context. Not imported from Western political theory, but built from the observed realities of what has failed and what structural changes would correct it. It is the architecture for what comes after the current failure.
        </p>

        <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', lineHeight: 1.85, color: '#2a2a2a', marginBottom: '3rem' }}>
          I write under the name Jeremiah Nome. The ideas are my own. The platform is built for anyone who believes Africa&apos;s problems deserve African solutions, rigorously argued, honestly examined, without sentiment or excuse.
        </p>

        {/* AUTHOR CARD */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', fontWeight: 900, color: 'var(--gold)', fontStyle: 'italic', flexShrink: 0 }}>J</div>
          <div>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--black)', marginBottom: '0.3rem' }}>Jeremiah Nome</p>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.78rem', color: 'var(--muted)' }}>Writer · The African Mind</p>
          </div>
        </div>

        {/* MERIT-SOVEREIGNISM CTA */}
        <div style={{ background: 'var(--black)', padding: '2.5rem', borderRadius: '2px', marginTop: '3rem' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.8rem' }}>The Philosophy</p>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.8rem' }}>Merit-Sovereignism</p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.65)', marginBottom: '1.5rem' }}>
            A governance philosophy built from the observed realities of African failure, not imported from Western political theory, but designed for what comes after.
          </p>
          <Link href="/merit-sovereignism" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: '2px', textDecoration: 'none' }}>
            Explore the philosophy →
          </Link>
        </div>

      </div>

      <Footer />
    </>
  )
}
