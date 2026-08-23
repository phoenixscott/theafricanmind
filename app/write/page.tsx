'use client'
import { useState } from 'react'
import Masthead from '@/components/Masthead'
import Footer from '@/components/Footer'

const CATEGORIES = [
  { label: 'Nigeria', value: 'nigeria' },
  { label: 'Africa', value: 'africa' },
  { label: 'Solutions', value: 'solutions' },
  { label: 'Merit-Sovereignism', value: 'merit-sovereignism' },
  { label: 'Fact Check', value: 'fact-checks' },
]

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: '0.9rem',
  border: '1px solid var(--border)',
  borderRadius: '2px',
  background: 'white',
  color: 'var(--charcoal)',
  outline: 'none',
  display: 'block',
}

const labelStyle = {
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: 'var(--muted)',
  display: 'block',
  marginBottom: '0.4rem',
}

export default function WritePage() {
  const [form, setForm] = useState({
    author_name: '', author_email: '', title: '', category: '',
    subcategory: '', standfirst: '', body: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    const res = await fetch('/api/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <>
      <Masthead />

      <div style={{ background: 'var(--black)', padding: '5rem 2rem 4rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.2rem' }}>
            Contribute
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.08, color: 'var(--cream)', marginBottom: '1rem' }}>
            Submit an Article
          </h1>
          <span className="gold-line" style={{ width: '60px', display: 'block', margin: '1.5rem 0' }} />
          <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1rem', lineHeight: 1.75, color: 'rgba(245,240,232,0.65)', fontStyle: 'italic', maxWidth: '560px' }}>
            Rigorous arguments, honestly examined, without sentiment or excuse. If that describes your writing, submit it here.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>
        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--black)', marginBottom: '1rem' }}>Submission received.</p>
            <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75 }}>
              Your article has been submitted for review. It will be published on The African Mind once approved.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Your Name / Moniker *</label>
                <input value={form.author_name} onChange={set('author_name')} required placeholder="e.g. Amara Nwosu" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Your Email (not published)</label>
                <input type="email" value={form.author_email} onChange={set('author_email')} placeholder="for correspondence only" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Article Title *</label>
              <input value={form.title} onChange={set('title')} required placeholder="The title of your essay" style={inputStyle} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Category *</label>
                <select value={form.category} onChange={set('category')} required style={{ ...inputStyle, appearance: 'auto' }}>
                  <option value="">Select a category</option>
                  {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Subcategory (optional)</label>
                <input value={form.subcategory} onChange={set('subcategory')} placeholder="e.g. Economy, Education" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Standfirst / Summary *</label>
              <textarea value={form.standfirst} onChange={set('standfirst')} required rows={3} placeholder="2-3 sentences that summarise the argument. Shown under the headline." style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
            </div>

            <div>
              <label style={labelStyle}>Article Body *</label>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>
                Separate paragraphs with a blank line. Minimum 400 words.
              </p>
              <textarea value={form.body} onChange={set('body')} required rows={20} placeholder="Write your article here..." style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.75, fontFamily: "'Source Serif 4', Georgia, serif" }} />
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{ padding: '0.9rem 2.5rem', background: 'var(--black)', color: 'var(--cream)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', borderRadius: '2px', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', opacity: status === 'submitting' ? 0.6 : 1 }}
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Article'}
              </button>
              {status === 'error' && (
                <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: '#c00' }}>Something went wrong. Please try again.</p>
              )}
            </div>

          </form>
        )}
      </div>

      <Footer />
    </>
  )
}
