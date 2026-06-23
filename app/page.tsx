import Link from 'next/link'
import Masthead from '@/components/Masthead'
import Footer from '@/components/Footer'
import { client } from '@/lib/sanity'
import { allArticlesQuery, featuredArticleQuery } from '@/lib/queries'

export const revalidate = 60

const recentArticles = [
  {
    slug: 'government-is-the-mafia',
    category: 'Nigeria · Governance',
    title: 'The Government Is The Mafia: Why Nigerian Oil Corruption Has Never Been Prosecuted',
    excerpt: "When a crime this large, this consistent, and this well-documented produces zero prosecutions across 25 years of democracy, the only logical conclusion is that the state isn't failing to catch the criminals — the state IS the criminals.",
    date: 'June 2026',
    readTime: '15 min read',
  },
  {
    slug: 'paper-economy',
    category: 'Nigeria · Economy',
    title: "Paper Economy: Why Nigeria's Macroeconomic Improvements Mean Nothing For Ordinary Nigerians",
    excerpt: 'GDP is growing at its fastest rate in a decade. The stock market has tripled. Reserves have recovered. And eleven million Nigerian children under five are in severe food poverty.',
    date: 'May 2026',
    readTime: '10 min read',
  },
  {
    slug: 'africa-contribution-deficit',
    category: 'Africa · Civilisation',
    title: "Africa's Contribution Deficit: Why Our Problems Are Humanity's Problem",
    excerpt: "Africa is 17% of the world's population and less than 3% of global scientific output. This is not a natural state. It is a produced one.",
    date: 'May 2026',
    readTime: '8 min read',
  },
  {
    slug: 'peter-obi-anambra',
    category: 'Nigeria · Education',
    title: 'What Peter Obi Actually Did In Anambra: Separating Record From Myth',
    excerpt: 'From 26th to 1st in national WAEC rankings. A World Bank study. A Commissioner who closed 486 miracle centres. The record is documented.',
    date: 'April 2026',
    readTime: '11 min read',
  },
  {
    slug: 'subsidy-alternative',
    category: 'Nigeria · Oil',
    title: "What We Should Have Done: A Sequenced Alternative To Nigeria's Subsidy Removal",
    excerpt: 'Remove it temporarily. Verify actual consumption independently. Fight smuggling. Fix the refineries. Refine locally. Then make permanent decisions based on real data.',
    date: 'April 2026',
    readTime: '9 min read',
  },
  {
    slug: 'caption-that-lied',
    category: 'Fact Check',
    title: 'The Caption That Lied: Deconstructing Anti-Obi Propaganda On Nnamdi Kanu And Bandits',
    excerpt: 'A viral caption claims Peter Obi said he would free Nnamdi Kanu and negotiate with bandits. He said neither. Here is what he actually said.',
    date: 'March 2026',
    readTime: '7 min read',
  },
]

const pillarCards = [
  { num: '01', title: 'Collective Ownership', desc: 'Resources belong to the people — not the government, not private monopolies. The distinction is foundational.' },
  { num: '02', title: 'Merit-Based Access', desc: "Benefits are tiered by contribution and competence — solving communism's core incentive failure without reproducing capitalism's inequality." },
  { num: '03', title: 'No Political Parties', desc: 'Party structures are the primary vehicle for elite capture in the African context. Their elimination is not radical — it is logical.' },
  { num: '04', title: 'Bounded Transition', desc: "Constitutional limits on transitional leadership, modelled on Singapore's governance arc — power with an expiry date built in." },
]

export default async function HomePage() {
  const [sanityArticles, featuredArticle] = await Promise.all([
    client.fetch(allArticlesQuery).catch(() => []),
    client.fetch(featuredArticleQuery).catch(() => null),
  ])

  const articles = sanityArticles.length > 0 ? sanityArticles : recentArticles
  const featured = featuredArticle ?? {
    slug: { current: 'fuel-subsidy-fraud' },
    category: 'Nigeria · Oil · Governance',
    title: "Who Is Drinking The Balance? The Truth Behind Nigeria's Fuel Subsidy Fraud",
    standfirst: "Pakistan has the same population as Nigeria, more roads, and more vehicles — yet consumes a third of the fuel Nigeria claimed to.",
    date: 'June 2026',
    readTime: '12 min read',
  }
  return (
    <>
      <Masthead />

      {/* HERO */}
      <section style={{ background: 'var(--black)', color: 'var(--cream)', padding: '5rem 2rem 6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>
            An African Intellectual Publication
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--cream)', marginBottom: '0.6rem' }}>
            The <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>African</em><br />Mind
          </h1>
          <span className="gold-line" style={{ width: '80px', margin: '1.8rem auto', display: 'block' }} />
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.7, color: 'rgba(245,240,232,0.72)', maxWidth: '520px', margin: '0 auto 2.5rem', fontStyle: 'italic' }}>
            Rigorous thinking on Nigeria, Africa, and the civilisational project that defines our century.
          </p>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)' }}>
            By Jeremiah Nome
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <div style={{ background: 'var(--white)', borderTop: '3px solid var(--gold)' }}>
        <div className="featured-grid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Featured Essay</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--black)', marginBottom: '1.2rem' }}>
              <Link href={`/articles/${featured.slug?.current ?? featured.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {featured.title}
              </Link>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.8rem' }}>
              <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', color: 'var(--muted)' }}>Jeremiah Nome</span>
              <span style={{ color: 'var(--border)' }}>·</span>
              <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', color: 'var(--muted)' }}>{featured.readTime}</span>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#444', marginBottom: '1.5rem' }}>
              {featured.standfirst}
            </p>
            <Link href={`/articles/${featured.slug?.current ?? featured.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: '2px', textDecoration: 'none' }}>
              Read the essay →
            </Link>
          </div>
          <div className="featured-image-box" style={{ aspectRatio: '4/3', borderRadius: '2px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)' }}>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '4rem', fontWeight: 900, color: 'var(--gold)', opacity: 0.3, fontStyle: 'italic' }}>TAM</span>
          </div>
        </div>
      </div>

      {/* RECENT ARTICLES */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2.5rem' }}>
          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>Recent Writing</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>
        <div className="articles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
          {articles.map((article: any) => {
            const slug = article.slug?.current ?? article.slug
            const date = article.publishedAt
              ? new Date(article.publishedAt).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
              : article.date
            return (
              <article key={slug} style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.6rem' }}>{article.category}</p>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--black)', marginBottom: '0.7rem' }}>
                  <Link href={`/articles/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>{article.title}</Link>
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: '#555', marginBottom: '1rem' }}>{article.standfirst ?? article.excerpt}</p>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', color: 'var(--muted)' }}>{date}</span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>·</span>
                  <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', color: 'var(--muted)' }}>{article.readTime}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* MERIT-SOVEREIGNISM PILLAR */}
      <div style={{ background: 'var(--black)', color: 'var(--cream)', padding: '5rem 2rem' }}>
        <div className="pillar-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>The Philosophy</p>
            <span className="gold-line" style={{ width: '60px', display: 'block', marginBottom: '2rem' }} />
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: '1rem' }}>
              Merit-<br />Sovereignism
            </h2>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'rgba(245,240,232,0.65)', marginBottom: '2rem' }}>
              A governance philosophy designed to solve communism&apos;s incentive failure and capitalism&apos;s inequality — built specifically for Nigeria and the African context.
            </p>
            <Link href="/merit-sovereignism" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: '2px', textDecoration: 'none' }}>
              Explore the philosophy →
            </Link>
          </div>
          <div className="pillar-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {pillarCards.map(card => (
              <div key={card.num} style={{ border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem', borderRadius: '2px' }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', fontWeight: 900, color: 'var(--gold)', opacity: 0.4, lineHeight: 1, marginBottom: '0.8rem' }}>{card.num}</div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '0.95rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.5rem' }}>{card.title}</div>
                <div style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(245,240,232,0.5)' }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT STRIP */}
      <div style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '3.5rem 2rem' }}>
        <div className="about-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '3rem', alignItems: 'center' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.8rem', fontWeight: 900, color: 'var(--gold)', fontStyle: 'italic', flexShrink: 0 }}>J</div>
          <div>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem' }}>The Writer</p>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--black)', marginBottom: '0.4rem' }}>Jeremiah Nome</p>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--muted)', maxWidth: '500px' }}>
              Writing on Nigerian governance, African political economy, and the civilisational questions that define what this continent becomes.
            </p>
          </div>
          <Link href="/about" className="about-link-desktop" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: '2px', whiteSpace: 'nowrap', textDecoration: 'none' }}>About & Mission →</Link>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div style={{ background: 'var(--gold)', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.6)', marginBottom: '1rem' }}>Join The Conversation</p>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--black)', lineHeight: 1.2, marginBottom: '0.8rem' }}>Think with The African Mind</h2>
          <p style={{ fontSize: '0.9rem', color: 'rgba(10,10,10,0.7)', marginBottom: '2rem', lineHeight: 1.6 }}>New essays on Nigeria, African governance, and civilisational thinking — directly to your inbox.</p>
          <form className="newsletter-form" style={{ display: 'flex', maxWidth: '480px', margin: '0 auto', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
            <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '0.9rem 1.2rem', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem', border: 'none', outline: 'none', background: 'white', color: 'var(--charcoal)' }} />
            <button type="submit" style={{ padding: '0.9rem 1.5rem', background: 'var(--black)', color: 'var(--cream)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>Subscribe</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}
