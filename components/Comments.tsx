'use client'
import { useState, useEffect } from 'react'

interface Comment {
  id: string
  name: string
  text: string
  created_at: string
}

export default function Comments({ articleSlug }: { articleSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  useEffect(() => {
    fetch(`/api/comments?slug=${articleSlug}`)
      .then(r => r.json())
      .then(data => Array.isArray(data) && setComments(data))
      .catch(() => {})
  }, [articleSlug])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !text.trim()) return
    setStatus('submitting')

    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ article_slug: articleSlug, name, email, text }),
    })

    if (res.ok) {
      setStatus('success')
      setName('')
      setEmail('')
      setText('')
    } else {
      setStatus('error')
    }
  }

  const initials = (n: string) => n.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 2rem 5rem' }}>
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem', marginBottom: '2rem' }}>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--black)', marginBottom: '0.3rem' }}>Discussion</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{comments.length} comment{comments.length !== 1 ? 's' : ''} · Join the conversation</p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '3rem' }}>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Share your thoughts on this essay..."
          required
          style={{ width: '100%', padding: '1rem 1.2rem', fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.9rem', lineHeight: 1.6, border: '1px solid var(--border)', borderRadius: '2px', background: 'white', color: 'var(--charcoal)', resize: 'vertical', minHeight: '120px', outline: 'none', marginBottom: '0.8rem', display: 'block' }}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
          <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your name" required style={{ padding: '0.75rem 1rem', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem', border: '1px solid var(--border)', borderRadius: '2px', background: 'white', color: 'var(--charcoal)', outline: 'none', width: '100%' }} />
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Your email (not published)" style={{ padding: '0.75rem 1rem', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem', border: '1px solid var(--border)', borderRadius: '2px', background: 'white', color: 'var(--charcoal)', outline: 'none', width: '100%' }} />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          style={{ background: status === 'submitting' ? 'var(--muted)' : 'var(--black)', color: 'var(--cream)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.8rem 1.8rem', border: 'none', borderRadius: '2px', cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
        >
          {status === 'submitting' ? 'Posting...' : 'Post Comment'}
        </button>
        {status === 'success' && (
          <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: 'var(--gold)' }}>
            Comment submitted. It will appear after moderation.
          </p>
        )}
        {status === 'error' && (
          <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: '#c00' }}>
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      {/* COMMENTS LIST */}
      {comments.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          {comments.map(comment => (
            <div key={comment.id} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem', fontWeight: 600, color: 'var(--gold)', flexShrink: 0 }}>
                {initials(comment.name)}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.82rem', fontWeight: 600, color: 'var(--black)' }}>{comment.name}</span>
                  <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.7rem', color: 'var(--muted)' }}>{formatDate(comment.created_at)}</span>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#333' }}>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ fontSize: '0.88rem', color: 'var(--muted)', fontStyle: 'italic' }}>No comments yet. Be the first to join the conversation.</p>
      )}
    </div>
  )
}
