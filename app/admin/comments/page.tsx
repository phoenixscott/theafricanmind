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

interface Submission {
  id: string
  title: string
  category: string
  subcategory: string
  standfirst: string
  body: string
  author_name: string
  author_email: string
  status: string
  created_at: string
}

const btn = (color: string, text: string): React.CSSProperties => ({
  padding: '0.5rem 1.2rem',
  background: color,
  color: 'white',
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  border: 'none',
  borderRadius: '2px',
  cursor: 'pointer',
})

export default function AdminPanel() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [tab, setTab] = useState<'submissions' | 'comments'>('submissions')

  // Comments state
  const [comments, setComments] = useState<Comment[]>([])
  const [commentFilter, setCommentFilter] = useState<'pending' | 'approved' | 'all'>('pending')

  // Submissions state
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [expanded, setExpanded] = useState<string | null>(null)
  const [publishing, setPublishing] = useState<string | null>(null)

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) { setAuthed(true); loadAll() }
    else setLoginError('Wrong password')
  }

  const loadAll = async () => {
    const [cr, sr] = await Promise.all([
      fetch('/api/admin/comments'),
      fetch('/api/admin/submissions'),
    ])
    if (cr.ok) setComments(await cr.json())
    if (sr.ok) setSubmissions(await sr.json())
  }

  useEffect(() => {
    fetch('/api/admin/comments').then(r => {
      if (r.ok) { setAuthed(true); r.json().then(setComments) }
    })
    fetch('/api/admin/submissions').then(r => {
      if (r.ok) r.json().then(setSubmissions)
    })
  }, [])

  const approveComment = async (id: string, approved: boolean) => {
    await fetch('/api/admin/comments', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, approved }) })
    setComments(prev => prev.map(c => c.id === id ? { ...c, approved } : c))
  }

  const deleteComment = async (id: string) => {
    if (!confirm('Delete this comment?')) return
    await fetch('/api/admin/comments', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setComments(prev => prev.filter(c => c.id !== id))
  }

  const publish = async (id: string) => {
    setPublishing(id)
    const res = await fetch('/api/admin/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    if (res.ok) setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status: 'published' } : s))
    else alert('Failed to publish. Try again.')
    setPublishing(null)
  }

  const reject = async (id: string) => {
    if (!confirm('Reject and delete this submission?')) return
    await fetch('/api/admin/submissions', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    setSubmissions(prev => prev.filter(s => s.id !== id))
  }

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  const filteredComments = comments.filter(c => {
    if (commentFilter === 'pending') return !c.approved
    if (commentFilter === 'approved') return c.approved
    return true
  })

  const pendingSubmissions = submissions.filter(s => s.status === 'pending')

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={login} style={{ background: 'var(--charcoal)', padding: '3rem', borderRadius: '4px', width: '360px' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.4rem' }}>
            The <span style={{ color: 'var(--gold)' }}>African</span> Mind
          </h1>
          <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Admin Panel</p>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"
            style={{ width: '100%', padding: '0.85rem 1rem', background: 'var(--black)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2px', color: 'var(--cream)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.9rem', outline: 'none', marginBottom: '0.8rem' }} />
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
          The <span style={{ color: 'var(--gold)' }}>African</span> Mind <span style={{ color: 'var(--muted)', fontWeight: 400, fontSize: '0.9rem' }}>· Admin</span>
        </h1>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: 'var(--muted)' }}>
            {pendingSubmissions.length} submission{pendingSubmissions.length !== 1 ? 's' : ''} pending
          </span>
          <a href="/" style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: 'var(--gold)', textDecoration: 'none' }}>← Back to site</a>
        </div>
      </div>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>
        {/* MAIN TABS */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0' }}>
          {(['submissions', 'comments'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '0.7rem 1.5rem', background: 'none', color: tab === t ? 'var(--black)' : 'var(--muted)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.8rem', fontWeight: tab === t ? 700 : 400, letterSpacing: '0.05em', textTransform: 'uppercase', border: 'none', borderBottom: tab === t ? '2px solid var(--black)' : '2px solid transparent', cursor: 'pointer', marginBottom: '-1px' }}>
              {t === 'submissions' ? `Submissions (${pendingSubmissions.length})` : `Comments (${comments.filter(c => !c.approved).length})`}
            </button>
          ))}
          <button onClick={loadAll} style={{ marginLeft: 'auto', padding: '0.5rem 1rem', background: 'white', color: 'var(--muted)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', border: '1px solid var(--border)', borderRadius: '2px', cursor: 'pointer' }}>
            ↻ Refresh
          </button>
        </div>

        {/* SUBMISSIONS TAB */}
        {tab === 'submissions' && (
          <div>
            {submissions.length === 0 ? (
              <p style={{ color: 'var(--muted)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem' }}>No submissions yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {submissions.map(s => (
                  <div key={s.id} style={{ background: 'white', border: `1px solid ${s.status === 'published' ? '#d1fae5' : 'var(--border)'}`, borderLeft: `3px solid ${s.status === 'published' ? '#10b981' : 'var(--gold)'}`, borderRadius: '2px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                      <div>
                        <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 700, color: 'var(--black)' }}>{s.title}</span>
                        <div style={{ marginTop: '0.3rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold)' }}>{s.author_name}</span>
                          {s.author_email && <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', color: 'var(--muted)' }}>{s.author_email}</span>}
                          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.category}</span>
                          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', color: 'var(--muted)' }}>{formatDate(s.created_at)}</span>
                        </div>
                      </div>
                      <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: s.status === 'published' ? '#10b981' : 'var(--muted)', background: s.status === 'published' ? '#d1fae5' : '#f3f4f6', padding: '0.25rem 0.6rem', borderRadius: '2px' }}>
                        {s.status}
                      </span>
                    </div>
                    {s.standfirst && <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.9rem', lineHeight: 1.65, color: '#555', marginBottom: '0.8rem', fontStyle: 'italic' }}>{s.standfirst}</p>}

                    {expanded === s.id && (
                      <div style={{ background: '#f9f9f9', border: '1px solid var(--border)', borderRadius: '2px', padding: '1.2rem', marginBottom: '1rem', maxHeight: '400px', overflowY: 'auto' }}>
                        <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.9rem', lineHeight: 1.8, color: '#333', whiteSpace: 'pre-wrap' }}>{s.body}</p>
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                      {s.status === 'pending' && (
                        <>
                          <button onClick={() => publish(s.id)} disabled={publishing === s.id}
                            style={{ ...btn('#10b981', 'publish'), opacity: publishing === s.id ? 0.6 : 1 }}>
                            {publishing === s.id ? 'Publishing...' : '✓ Publish'}
                          </button>
                          <button onClick={() => reject(s.id)} style={{ padding: '0.5rem 1.2rem', background: 'white', color: '#ef4444', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #ef4444', borderRadius: '2px', cursor: 'pointer' }}>
                            Reject
                          </button>
                        </>
                      )}
                      <button onClick={() => setExpanded(expanded === s.id ? null : s.id)}
                        style={{ padding: '0.5rem 1rem', background: 'white', color: 'var(--muted)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', border: '1px solid var(--border)', borderRadius: '2px', cursor: 'pointer' }}>
                        {expanded === s.id ? 'Hide article' : 'Read article'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* COMMENTS TAB */}
        {tab === 'comments' && (
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {(['pending', 'approved', 'all'] as const).map(f => (
                <button key={f} onClick={() => setCommentFilter(f)} style={{ padding: '0.5rem 1.2rem', background: commentFilter === f ? 'var(--black)' : 'white', color: commentFilter === f ? 'var(--cream)' : 'var(--muted)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid var(--border)', borderRadius: '2px', cursor: 'pointer' }}>
                  {f} ({f === 'pending' ? comments.filter(c => !c.approved).length : f === 'approved' ? comments.filter(c => c.approved).length : comments.length})
                </button>
              ))}
            </div>
            {filteredComments.length === 0 ? (
              <p style={{ color: 'var(--muted)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem' }}>No {commentFilter} comments.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {filteredComments.map(comment => (
                  <div key={comment.id} style={{ background: 'white', border: `1px solid ${comment.approved ? '#d1fae5' : 'var(--border)'}`, borderLeft: `3px solid ${comment.approved ? '#10b981' : 'var(--gold)'}`, borderRadius: '2px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                      <div>
                        <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem', fontWeight: 600, color: 'var(--black)' }}>{comment.name}</span>
                        {comment.email && <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.75rem', color: 'var(--muted)', marginLeft: '0.8rem' }}>{comment.email}</span>}
                        <span style={{ display: 'inline-block', marginLeft: '0.8rem', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.7rem', color: 'var(--muted)' }}>{formatDate(comment.created_at)}</span>
                      </div>
                      <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>/{comment.article_slug}</span>
                    </div>
                    <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '0.95rem', lineHeight: 1.7, color: '#333', marginBottom: '1.2rem' }}>{comment.text}</p>
                    <div style={{ display: 'flex', gap: '0.6rem' }}>
                      {!comment.approved ? (
                        <button onClick={() => approveComment(comment.id, true)} style={btn('#10b981', 'approve')}>✓ Approve</button>
                      ) : (
                        <button onClick={() => approveComment(comment.id, false)} style={btn('var(--muted)', 'unapprove')}>Unapprove</button>
                      )}
                      <button onClick={() => deleteComment(comment.id)} style={{ padding: '0.5rem 1.2rem', background: 'white', color: '#ef4444', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #ef4444', borderRadius: '2px', cursor: 'pointer' }}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
