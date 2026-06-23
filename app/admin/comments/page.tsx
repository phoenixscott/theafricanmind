'use client'
import { useState, useEffect } from 'react'

interface Comment {
  id: string
  article_slug: string
  name: string
  email: string
  text: string
  created_at: string
  approved: boolean
}

export default function AdminComments() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('pending')

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      setAuthed(true)
      loadComments()
    } else {
      setLoginError('Wrong password')
    }
  }

  const loadComments = async () => {
    setLoading(true)
    const res = await fetch('/api/admin/comments')
    if (res.ok) setComments(await res.json())
    setLoading(false)
  }

  useEffect(() => {
    // Try loading comments — if it succeeds, we're already authed
    fetch('/api/admin/comments').then(r => {
      if (r.ok) { setAuthed(true); r.json().then(setComments) }
    })
  }, [])

  const approve = async (id: string, approved: boolean) => {
    await fetch('/api/admin/comments', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, approved }),
    })
    setComments(prev => prev.map(c => c.id === id ? { ...c, approved } : c))
  }

  const remove = async (id: string) => {
    if (!confirm('Delete this comment?')) return
    await fetch('/api/admin/comments', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setComments(prev => prev.filter(c => c.id !== id))
  }

  const filtered = comments.filter(c => {
    if (filter === 'pending') return !c.approved
    if (filter === 'approved') return c.approved
    return true
  })

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={login} style={{ background: 'var(--charcoal)', padding: '3rem', borderRadius: '4px', width: '360px' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.4rem' }}>
            The <span style={{ color: 'var(--gold)' }}>African</span> Mind
          </h1>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Admin · Comments</p>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            style={{ width: '100%', padding: '0.85rem 1rem', background: 'var(--black)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2px', color: 'var(--cream)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.9rem', outline: 'none', marginBottom: '0.8rem' }}
          />
          {loginError && <p style={{ color: '#f87171', fontSize: '0.8rem', marginBottom: '0.8rem' }}>{loginError}</p>}
          <button type="submit" style={{ width: '100%', padding: '0.85rem', background: 'var(--gold)', color: 'var(--black)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>
            Sign In
          </button>
        </form>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8f8f8' }}>
      {/* HEADER */}
      <div style={{ background: 'var(--black)', padding: '1.2rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--cream)' }}>
          The <span style={{ color: 'var(--gold)' }}>African</span> Mind <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.9rem' }}>· Comments</span>
        </h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: 'var(--muted)' }}>
            {comments.filter(c => !c.approved).length} pending
          </span>
          <a href="/" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: 'var(--gold)', textDecoration: 'none' }}>← Back to site</a>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        {/* FILTER TABS */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {(['pending', 'approved', 'all'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '0.5rem 1.2rem', background: filter === f ? 'var(--black)' : 'white', color: filter === f ? 'var(--cream)' : 'var(--muted)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid var(--border)', borderRadius: '2px', cursor: 'pointer' }}>
              {f} {f === 'pending' ? `(${comments.filter(c => !c.approved).length})` : f === 'approved' ? `(${comments.filter(c => c.approved).length})` : `(${comments.length})`}
            </button>
          ))}
          <button onClick={loadComments} style={{ marginLeft: 'auto', padding: '0.5rem 1rem', background: 'white', color: 'var(--muted)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', border: '1px solid var(--border)', borderRadius: '2px', cursor: 'pointer' }}>
            ↻ Refresh
          </button>
        </div>

        {/* COMMENTS */}
        {loading ? (
          <p style={{ color: 'var(--muted)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem' }}>Loading...</p>
        ) : filtered.length === 0 ? (
          <p style={{ color: 'var(--muted)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem' }}>No {filter} comments.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filtered.map(comment => (
              <div key={comment.id} style={{ background: 'white', border: `1px solid ${comment.approved ? '#d1fae5' : 'var(--border)'}`, borderLeft: `3px solid ${comment.approved ? '#10b981' : 'var(--gold)'}`, borderRadius: '2px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <div>
                    <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem', fontWeight: 600, color: 'var(--black)' }}>{comment.name}</span>
                    {comment.email && <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: 'var(--muted)', marginLeft: '0.8rem' }}>{comment.email}</span>}
                    <span style={{ display: 'inline-block', marginLeft: '0.8rem', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.7rem', color: 'var(--muted)' }}>{formatDate(comment.created_at)}</span>
                  </div>
                  <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    /{comment.article_slug}
                  </span>
                </div>
                <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.95rem', lineHeight: 1.7, color: '#333', marginBottom: '1.2rem' }}>{comment.text}</p>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  {!comment.approved ? (
                    <button onClick={() => approve(comment.id, true)} style={{ padding: '0.5rem 1.2rem', background: '#10b981', color: 'white', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>
                      ✓ Approve
                    </button>
                  ) : (
                    <button onClick={() => approve(comment.id, false)} style={{ padding: '0.5rem 1.2rem', background: 'var(--muted)', color: 'white', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>
                      Unapprove
                    </button>
                  )}
                  <button onClick={() => remove(comment.id)} style={{ padding: '0.5rem 1.2rem', background: 'white', color: '#ef4444', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #ef4444', borderRadius: '2px', cursor: 'pointer' }}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
