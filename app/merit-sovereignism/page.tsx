import Masthead from '@/components/Masthead'
import Footer from '@/components/Footer'

const principles = [
  { roman: 'I', title: 'Collective Ownership ≠ Government Ownership', body: "Natural resources and public wealth belong to the people collectively — not to the state as an institution, and certainly not to the political elite that controls the state. The distinction is foundational. Government is the manager of collective wealth, not its owner." },
  { roman: 'II', title: 'Merit-Based Benefit Tiers', body: "Access to collective resources is tiered by contribution and competence. This preserves the incentive mechanism that communism destroyed — people are rewarded proportionally to what they contribute — while preventing the winner-takes-all extraction that capitalism enables without institutional constraints." },
  { roman: 'III', title: 'No Political Parties', body: "Political party structures in the African context have become the primary vehicle for elite capture, ethnic mobilisation, and the conversion of public office into private wealth. Their elimination is not the removal of democracy — it is the removal of the mechanism through which democracy has been systematically corrupted." },
  { roman: 'IV', title: 'Constitutionally Bounded Transitional Leadership', body: "Modelled loosely on Singapore's governance arc — transitional leadership with constitutional time limits, specific mandates, and pre-defined transfer of power mechanisms built in from the start. Power with an expiry date is not a weakness. It is a design feature that distinguishes reform from the mere replacement of one elite with another." },
]

export default function MeritSovereignismPage() {
  return (
    <>
      <Masthead />

      <section style={{ background: 'var(--black)', color: 'var(--cream)', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>The Philosophy</p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--cream)', marginBottom: '0.6rem' }}>
            Merit-<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Sovereignism</em>
          </h1>
          <span className="gold-line" style={{ width: '80px', margin: '1.8rem auto', display: 'block' }} />
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,240,232,0.72)', maxWidth: '520px', margin: '0 auto 2.5rem', fontStyle: 'italic' }}>
            A governance philosophy designed for the African context — solving communism&apos;s incentive failure and capitalism&apos;s inequality through merit-based collective sovereignty.
          </p>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)' }}>Developed by Jeremiah Nome</p>
        </div>
      </section>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2rem' }}>

        {/* THE PROBLEM */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>The Problem It Solves</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.8rem', fontWeight: 700, color: 'var(--black)', lineHeight: 1.2, marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>Why existing systems have failed Africa</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333', marginBottom: '1rem' }}>Communism failed because it destroyed the incentive to contribute — if outcome is equal regardless of effort, effort eventually collapses. Capitalism failed Africa because without the institutional infrastructure to prevent monopoly capture, it simply reproduced colonial extraction under new management.</p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#333' }}>Merit-Sovereignism is designed from the specific conditions of the African governance failure — not imported from Western political philosophy, but built from the observed realities of what has gone wrong and what structural changes would correct it.</p>
        </div>

        {/* CORE PRINCIPLES */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem', marginBottom: '3rem' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Core Principles</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
            {principles.map(p => (
              <div key={p.roman} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '1.5rem', alignItems: 'start' }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2.5rem', fontWeight: 900, color: 'var(--gold)', opacity: 0.5, lineHeight: 1 }}>{p.roman}</div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--black)', marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#444' }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOUNDING DOCUMENT CTA */}
        <div style={{ background: 'var(--black)', padding: '2.5rem', borderRadius: '2px', marginBottom: '3rem' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Read The Founding Document</p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.65)', marginBottom: '1.5rem' }}>The full Merit-Sovereignism founding document — its philosophical foundations, structural proposals, and implementation framework — is available for download.</p>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: '2px', textDecoration: 'none' }}>
            Download the founding document →
          </a>
        </div>
      </div>

      <Footer />
    </>
  )
}
