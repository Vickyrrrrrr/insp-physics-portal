import React, { useState } from 'react';
import { ArrowUpRight, Coins, Star, Zap, BookOpen, Trophy } from 'lucide-react';

export default function LoginPage({ setPage }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const go = (id) => { setPage(id); window.scrollTo({ top: 0 }); };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert(mode === 'login'
        ? 'Login functionality will be connected to the INSP backend. Redirecting...'
        : 'Registration submitted! An INSP team member will activate your account.');
    }, 400);
  };

  return (
    <main style={{ minHeight: '100vh', paddingTop: 60, display: 'grid', placeItems: 'center', background: 'var(--c-bg)' }}>
      <div style={{ width: '100%', maxWidth: 960, margin: '0 auto', padding: '3rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

        {/* Left — Brand story */}
        <div>
          <div className="badge badge-accent" style={{ marginBottom: '1.5rem' }}>Student Portal</div>

          <h1 className="display-md" style={{ marginBottom: '1rem' }}>
            Your INSP<br />
            <span style={{ color: 'var(--c-accent)' }}>dashboard awaits.</span>
          </h1>

          <p className="body-lg" style={{ marginBottom: '2rem' }}>
            Access your enrolled courses, track your progress on the leaderboard, attempt AITS tests, and manage your INSP Coins — all in one place.
          </p>

          {/* Feature bullets */}
          {[
            { icon: BookOpen, text: 'Video Portal — lectures on demand' },
            { icon: Trophy,   text: 'AITS Test Series — up to 1,600 exams' },
            { icon: Coins,    text: 'INSP Coins — earn and redeem rewards' },
            { icon: Star,     text: 'Live leaderboard ranking' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--c-accent-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={14} color="var(--c-accent)" />
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--c-text-secondary)' }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Right — Auth form */}
        <div className="card" style={{ padding: '2rem' }}>
          {/* Mode switcher */}
          <div style={{ display: 'flex', background: 'var(--c-surface-2)', borderRadius: 8, padding: 3, marginBottom: '1.75rem' }}>
            {['login', 'register'].map(m => (
              <button key={m} onClick={() => setMode(m)} style={{
                flex: 1, padding: '0.5rem', border: 'none',
                borderRadius: 6,
                background: mode === m ? 'var(--c-surface)' : 'transparent',
                color: mode === m ? 'var(--c-text-primary)' : 'var(--c-text-tertiary)',
                fontWeight: mode === m ? 500 : 400,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: mode === m ? '0 1px 3px rgba(0,0,0,0.3)' : 'none',
              }}>
                {m === 'login' ? 'Sign In' : 'Register'}
              </button>
            ))}
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {mode === 'register' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--c-text-tertiary)', marginBottom: '0.35rem' }}>Full Name</label>
                  <input className="input" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Your name" required />
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--c-text-tertiary)', marginBottom: '0.35rem' }}>Email</label>
                <input className="input" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="student@example.com" required />
              </div>

              {mode === 'register' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--c-text-tertiary)', marginBottom: '0.35rem' }}>Phone</label>
                  <input className="input" type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="+91 XXXXX XXXXX" />
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--c-text-tertiary)', marginBottom: '0.35rem' }}>Password</label>
                <input className="input" type="password" value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))} placeholder="••••••••" required />
              </div>

              {mode === 'login' && (
                <div style={{ textAlign: 'right' }}>
                  <button type="button" style={{ background: 'none', border: 'none', fontSize: '0.78rem', color: 'var(--c-accent)', cursor: 'pointer', padding: 0 }} onClick={() => alert('Password reset link will be sent to your registered email.')}>
                    Forgot password?
                  </button>
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.7rem', marginTop: '0.25rem' }}>
                {mode === 'login' ? 'Sign In to INSP Portal' : 'Create Account'}
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✓</div>
              <p style={{ color: 'var(--c-text-secondary)', fontSize: '0.9rem' }}>
                {mode === 'login' ? 'Connecting to INSP backend...' : 'Registration received. Activation pending.'}
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--c-text-tertiary)', marginTop: '0.5rem' }}>
                This is a frontend prototype. Backend integration will follow after code access.
              </p>
            </div>
          )}

          <div className="divider" style={{ margin: '1.5rem 0' }} />

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.78rem', color: 'var(--c-text-tertiary)', marginBottom: '0.75rem' }}>
              {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
              <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} style={{ background: 'none', border: 'none', color: 'var(--c-accent)', cursor: 'pointer', marginLeft: 4, fontSize: '0.78rem' }}>
                {mode === 'login' ? 'Register here' : 'Sign in'}
              </button>
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--c-text-tertiary)' }}>
              Don't have a plan?{' '}
              <button onClick={() => go('packages')} style={{ background: 'none', border: 'none', color: 'var(--c-accent)', cursor: 'pointer', fontSize: '0.75rem' }}>
                View Premium Plans →
              </button>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          main > div { grid-template-columns: 1fr !important; }
          main > div > div:first-child { display: none; }
        }
      `}</style>
    </main>
  );
}
