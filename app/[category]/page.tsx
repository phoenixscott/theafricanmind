import { notFound } from 'next/navigation'
import Link from 'next/link'
import Masthead from '@/components/Masthead'
import Footer from '@/components/Footer'
import { client } from '@/lib/sanity'
import { articlesByCategoryQuery } from '@/lib/queries'

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  nigeria: {
    title: 'Nigeria',
    description: 'Essays on Nigerian governance, politics, economy, and the structural questions that define the country\'s trajectory.',
  },
  africa: {
    title: 'Africa',
    description: 'On the broader African civilisational project — what the continent is becoming, and what it must become.',
  },
  solutions: {
    title: 'Solutions',
    description: 'Not just diagnosis. Concrete proposals, alternative frameworks, and actionable thinking on Africa\'s most pressing problems.',
  },
  'merit-sovereignism': {
    title: 'Merit-Sovereignism',
    description: 'Essays developing and applying the Merit-Sovereignism governance philosophy to real-world African contexts.',
  },
  'fact-checks': {
    title: 'Fact Checks',
    description: 'Rigorous verification of claims, narratives, and statistics circulating in Nigerian and African public discourse.',
  },
}

export const revalidate = 60

const VALID_CATEGORIES = Object.keys(CATEGORY_META)

// Placeholder articles per category for when Sanity is empty
const PLACEHOLDERS: Record<string, any[]> = {
  nigeria: [
    { slug: { current: 'government-is-the-mafia' }, category: 'nigeria', subcategory: 'Governance', title: 'The Government Is The Mafia: Why Nigerian Oil Corruption Has Never Been Prosecuted', standfirst: "When a crime this large produces zero prosecutions across 25 years of democracy, the state isn't failing to catch the criminals — the state IS the criminals.", publishedAt: '2026-06-01', readTime: '15 min read' },
    { slug: { current: 'paper-economy' }, category: 'nigeria', subcategory: 'Economy', title: "Paper Economy: Why Nigeria's Macroeconomic Improvements Mean Nothing For Ordinary Nigerians", standfirst: 'GDP is growing. The stock market has tripled. And eleven million Nigerian children under five are in severe food poverty.', publishedAt: '2026-05-01', readTime: '10 min read' },
    { slug: { current: 'peter-obi-anambra' }, category: 'nigeria', subcategory: 'Education', title: 'What Peter Obi Actually Did In Anambra: Separating Record From Myth', standfirst: 'From 26th to 1st in national WAEC rankings. The record is documented — and the people attacking it are counting on you not checking.', publishedAt: '2026-04-01', readTime: '11 min read' },
  ],
  africa: [
    { slug: { current: 'africa-contribution-deficit' }, category: 'africa', subcategory: 'Civilisation', title: "Africa's Contribution Deficit: Why Our Problems Are Humanity's Problem", standfirst: "Africa is 17% of the world's population and less than 3% of global scientific output. This is not a natural state.", publishedAt: '2026-05-01', readTime: '8 min read' },
  ],
  solutions: [
    { slug: { current: 'subsidy-alternative' }, category: 'solutions', subcategory: 'Oil', title: "What We Should Have Done: A Sequenced Alternative To Nigeria's Subsidy Removal", standfirst: 'Remove it temporarily. Verify actual consumption. Fight smuggling. Fix the refineries. Then make permanent decisions based on real data.', publishedAt: '2026-04-01', readTime: '9 min read' },
  ],
  'fact-checks': [
    { slug: { current: 'caption-that-lied' }, category: 'fact-checks', subcategory: 'Disinformation', title: 'The Caption That Lied: Deconstructing Anti-Obi Propaganda On Nnamdi Kanu And Bandits', standfirst: 'A viral caption claims Peter Obi said he would free Nnamdi Kanu and negotiate with bandits. He said neither.', publishedAt: '2026-03-01', readTime: '7 min read' },
  ],
  'merit-sovereignism': [],
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params

  if (!VALID_CATEGORIES.includes(category)) notFound()

  const meta = CATEGORY_META[category]

  const sanityArticles = await client
    .fetch(articlesByCategoryQuery, { category })
    .catch(() => [])

  const articles = sanityArticles.length > 0 ? sanityArticles : (PLACEHOLDERS[category] ?? [])

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })

  return (
    <>
      <Masthead />

      {/* CATEGORY HERO */}
      <div style={{ background: 'var(--black)', padding: '4rem 2rem 5rem', color: 'var(--cream)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>
            The African Mind
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--cream)', marginBottom: '0.8rem' }}>
            {meta.title}
          </h1>
          <span className="gold-line" style={{ width: '60px', display: 'block', margin: '1.5rem 0' }} />
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1rem', fontWeight: 300, lineHeight: 1.75, color: 'rgba(245,240,232,0.65)', fontStyle: 'italic', maxWidth: '560px' }}>
            {meta.description}
          </p>
        </div>
      </div>

      {/* ARTICLES */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        {articles.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', color: 'var(--muted)', fontStyle: 'italic' }}>
              No essays published here yet.
            </p>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.8rem' }}>
              Check back soon — or <Link href="/" style={{ color: 'var(--gold)', textDecoration: 'none' }}>return home</Link>.
            </p>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2.5rem' }}>
              <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
                {articles.length} essay{articles.length !== 1 ? 's' : ''}
              </span>
              <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            </div>

            <div className="articles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
              {articles.map((article: any) => {
                const slug = article.slug?.current ?? article.slug
                const categoryLabel = article.subcategory
                  ? `${meta.title} · ${article.subcategory}`
                  : meta.title
                return (
                  <article key={slug} style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.6rem' }}>
                      {categoryLabel}
                    </p>
                    <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', color: 'var(--black)', marginBottom: '0.7rem' }}>
                      <Link href={`/articles/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {article.title}
                      </Link>
                    </h2>
                    <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: '#555', marginBottom: '1rem' }}>
                      {article.standfirst}
                    </p>
                    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                      <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', color: 'var(--muted)' }}>
                        {formatDate(article.publishedAt)}
                      </span>
                      <span style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>·</span>
                      <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', color: 'var(--muted)' }}>
                        {article.readTime}
                      </span>
                    </div>
                  </article>
                )
              })}
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  )
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_META).map(category => ({ category }))
}
