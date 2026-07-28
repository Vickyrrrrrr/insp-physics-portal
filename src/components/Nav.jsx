import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'home',        label: 'Home' },
  { id: 'about',       label: 'About' },
  { id: 'packages',    label: 'Premium' },
  { id: 'video',       label: 'Video Portal' },
  { id: 'forum',       label: 'Forum' },
  { id: 'leaderboard', label: 'Leaderboard' },
  { id: 'merch',       label: 'Merch' },
  { id: 'contact',     label: 'Contact' },
];

export default function Nav({ activePage, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setPage(id);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 200,
        background: scrolled ? 'rgba(7, 13, 25, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--c-border)' : '1px solid transparent',
        transition: 'background var(--t-base), border-color var(--t-base)',
      }}
    >
      <div className="container" style={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Wordmark */}
        <button onClick={() => go('home')} style={{
          background: 'none', border: 'none', padding: 0,
          display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'
        }}>
          <div style={{
            width: 26, height: 26, borderRadius: 6,
            background: 'var(--c-accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.7rem', fontWeight: 800, color: '#ffffff',
          }}>IN</div>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--c-text)', letterSpacing: '-0.02em' }}>
            INSP
          </span>
          <span className="caption text-dim" style={{ marginLeft: -2 }}>
            • Indian School of Physics
          </span>
        </button>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              style={{
                background: activePage === link.id ? 'var(--c-surface-subtle)' : 'transparent',
                border: 'none',
                padding: '0.35rem 0.75rem',
                borderRadius: 6,
                fontSize: '0.85rem',
                fontWeight: activePage === link.id ? 600 : 400,
                color: activePage === link.id ? 'var(--c-text)' : 'var(--c-text-muted)',
                cursor: 'pointer',
                transition: 'color var(--t-fast), background var(--t-fast)',
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={() => go('login')} className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '0.35rem 0.75rem' }}>
            Sign in
          </button>
          <button onClick={() => go('packages')} className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '0.35rem 0.85rem' }}>
            Get Premium
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: 'var(--c-text)', padding: 4, display: 'none' }}
            className="mobile-toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, bottom: 0,
          background: 'var(--c-bg)',
          padding: '1.25rem',
          display: 'flex', flexDirection: 'column', gap: 4,
          borderTop: '1px solid var(--c-border)',
        }}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              style={{
                background: activePage === link.id ? 'var(--c-surface-subtle)' : 'none',
                border: 'none',
                textAlign: 'left',
                padding: '0.75rem 1rem',
                borderRadius: 8,
                fontSize: '0.9rem',
                fontWeight: activePage === link.id ? 500 : 400,
                color: activePage === link.id ? 'var(--c-text)' : 'var(--c-text-muted)',
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ marginTop: 'auto', display: 'flex', gap: 8 }}>
            <button onClick={() => go('login')} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>Sign in</button>
            <button onClick={() => go('packages')} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Get Premium</button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
