'use client'
import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'duplicate'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('submitting')

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (res.ok) {
      setStatus('success')
      setEmail('')
    } else if (res.status === 409) {
      setStatus('duplicate')
    } else {
      setStatus('error')
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.6)', marginBottom: '1rem' }}>Join The Conversation</p>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--black)', lineHeight: 1.2, marginBottom: '0.8rem' }}>Think with The African Mind</h2>
      <p style={{ fontSize: '0.9rem', color: 'rgba(10,10,10,0.7)', marginBottom: '2rem', lineHeight: 1.6 }}>New essays on Nigeria, African governance, and civilisational thinking, directly to your inbox.</p>

      {status === 'success' ? (
        <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: '1rem', fontStyle: 'italic', color: 'var(--black)' }}>You are subscribed. Welcome to The African Mind.</p>
      ) : (
        <>
          <form className="newsletter-form" onSubmit={handleSubmit} style={{ display: 'flex', maxWidth: '480px', margin: '0 auto', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              style={{ flex: 1, padding: '0.9rem 1.2rem', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.85rem', border: 'none', outline: 'none', background: 'white', color: 'var(--charcoal)' }}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{ padding: '0.9rem 1.5rem', background: 'var(--black)', color: 'var(--cream)', fontFamily: "'Inter', system-ui, sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap', opacity: status === 'submitting' ? 0.6 : 1 }}
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {status === 'duplicate' && (
            <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: 'var(--black)' }}>That email is already subscribed.</p>
          )}
          {status === 'error' && (
            <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: '#c00' }}>Something went wrong. Please try again.</p>
          )}
        </>
      )}
    </div>
  )
}
