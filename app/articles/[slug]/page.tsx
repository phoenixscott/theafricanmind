export const revalidate = 60

import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Masthead from '@/components/Masthead'
import Footer from '@/components/Footer'
import Comments from '@/components/Comments'
import { client } from '@/lib/sanity'
import { articleBySlugQuery } from '@/lib/queries'

const portableComponents = {
  block: {
    h2: ({ children }: any) => <h2>{children}</h2>,
    h3: ({ children }: any) => <h3>{children}</h3>,
    blockquote: ({ children }: any) => <blockquote><p>{children}</p></blockquote>,
    normal: ({ children }: any) => <p>{children}</p>,
  },
  marks: {
    em: ({ children }: any) => <em>{children}</em>,
    strong: ({ children }: any) => <strong>{children}</strong>,
    link: ({ value, children }: any) => <a href={value?.href} target="_blank" rel="noopener noreferrer">{children}</a>,
  },
}

// Fallback article for the demo essay (not yet in Sanity)
const fallbackArticle = {
  category: 'Nigeria · Oil · Governance',
  title: "Who Is Drinking The Balance? The Truth Behind Nigeria's Fuel Subsidy Fraud",
  standfirst: "Pakistan has the same population as Nigeria, more roads, and more vehicles — yet consumes a third of the fuel Nigeria claimed to. So who was drinking the balance?",
  author: 'Jeremiah Nome',
  publishedAt: '2026-06-01',
  readTime: '12 min read',
  body: null,
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await client.fetch(articleBySlugQuery, { slug }).catch(() => null) ?? fallbackArticle

  if (!article) notFound()

  const date = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
    : ''

  return (
    <>
      <Masthead />

      {/* ARTICLE HERO */}
      <div style={{ background: 'var(--black)', padding: '5rem 2rem 4rem', color: 'var(--cream)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>
            {article.category}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--cream)', marginBottom: '1.2rem' }}>
            {article.title}
          </h1>
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1.1rem', lineHeight: 1.65, color: 'rgba(245,240,232,0.72)', fontStyle: 'italic', marginBottom: '2rem', maxWidth: '600px' }}>
            {article.standfirst}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', fontStyle: 'italic' }}>J</div>
            <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--cream)' }}>Jeremiah Nome</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(245,240,232,0.45)', marginTop: '0.1rem' }}>{date} · {article.readTime}</div>
            </div>
          </div>
        </div>
      </div>
      <span className="gold-line" style={{ display: 'block', width: '100%' }} />

      {/* ARTICLE BODY */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3.5rem 2rem 5rem' }} className="prose-tam">
        {article.body ? (
          <PortableText value={article.body} components={portableComponents} />
        ) : (
          <>
            <p>Nigeria was claiming to consume 66 million litres of petrol per day. Pakistan — a country with a similar population, more roads, and arguably more vehicles — consumes roughly 20 million litres. The gap between these two numbers is not explained by Nigerian driving habits, generator usage, or industrial activity. It is explained by theft.</p>
            <p>Peter Obi said it plainly on Trust TV: <em>&ldquo;We are about the same as Pakistan; they have more roads, and we probably have the same number of vehicles, or they have even more, yet their fuel consumption is a third of ours, so who is drinking the balance?&rdquo;</em> It was not a rhetorical question. It had a specific, documentable answer that Nigerian governments across multiple administrations chose not to pursue.</p>
            <h2>How The Fraud Actually Worked</h2>
            <p>Nigeria imported virtually all of its refined petrol because its government refineries — despite $25 billion in &ldquo;maintenance&rdquo; spending — never worked. The fraud was embedded in this import dependency and operated with industrial precision.</p>
            <blockquote>
              <p>They were not just stealing the subsidy. They were using Nigerian citizens as the justification to claim it, then selling the fuel those citizens never received to neighbouring countries at premium prices.</p>
            </blockquote>
            <h2>The Refineries Were Deliberately Broken</h2>
            <p>Nigeria&apos;s three government refineries — Port Harcourt, Warri, and Kaduna — have a combined capacity of 445,000 barrels per day. Between 1999 and 2023, the Nigerian government spent over $25 billion on turnaround maintenance for these facilities. They never consistently worked. This was not incompetence. Working refineries would have made the import fraud structurally impossible.</p>
            <h2>What The Subsidy Removal Actually Fixed — And What It Didn&apos;t</h2>
            <p>When Tinubu removed the fuel subsidy on May 29, 2023, the mechanism for that specific fraud was dismantled. But the removal was implemented without the steps that would have made it genuinely transformative: independent verification of consumption figures, prosecution of the fraudulent importers, closure of smuggling routes, and repair of the domestic refineries.</p>
          </>
        )}
      </div>

      <Comments articleSlug={slug} />
      <Footer />
    </>
  )
}
