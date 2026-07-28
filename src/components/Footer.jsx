import React from 'react';
import { PlayCircle, Share2, Globe } from 'lucide-react';

export default function Footer({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer style={{
      borderTop: '1px solid var(--c-border)',
      background: 'var(--c-surface)',
      marginTop: 'auto',
    }}>
      <div className="container" style={{ padding: '3rem 1.25rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '2.5rem', marginBottom: '2.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.85rem' }}>
              <div style={{ width: 24, height: 24, borderRadius: 5, background: 'var(--c-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, color: 'var(--c-bg)' }}>IN</div>
              <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Indian School of Physics</span>
            </div>
            <p className="body-sm" style={{ maxWidth: 260, marginBottom: '1.25rem', fontSize: '0.8rem' }}>
              Founded in 2020 by Nitin Sachan Sir (B.Tech IIT Madras). Designed for serious JEE Advanced and Physics Olympiad aspirants.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <a href="https://www.youtube.com/c/INDIANSCHOOLOFPHYSICSnitin" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}>
                <PlayCircle size={14} /> YouTube
              </a>
              <a href="https://twitter.com/nitin_INSP" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}>
                <Share2 size={14} /> Twitter
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="caption" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem' }}>Platform</p>
            {[
              { label: 'Video Portal', id: 'video' },
              { label: 'AITS Test Series', id: 'packages' },
              { label: 'Forum & Concepts', id: 'forum' },
              { label: 'Leaderboard', id: 'leaderboard' },
              { label: 'Premium Plans', id: 'packages' },
            ].map(l => (
              <button key={l.label} onClick={() => go(l.id)} style={{ display: 'block', background: 'none', border: 'none', textAlign: 'left', padding: '0.25rem 0', fontSize: '0.82rem', color: 'var(--c-text-muted)', cursor: 'pointer', width: '100%' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--c-text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--c-text-muted)'}
              >{l.label}</button>
            ))}
          </div>

          {/* Store */}
          <div>
            <p className="caption" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem' }}>Store & Info</p>
            {[
              { label: 'Merchandise Store', id: 'merch' },
              { label: 'INSP Coins Program', id: 'merch' },
              { label: 'About INSP', id: 'about' },
              { label: 'Student Sign In', id: 'login' },
            ].map(l => (
              <button key={l.label} onClick={() => go(l.id)} style={{ display: 'block', background: 'none', border: 'none', textAlign: 'left', padding: '0.25rem 0', fontSize: '0.82rem', color: 'var(--c-text-muted)', cursor: 'pointer', width: '100%' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--c-text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--c-text-muted)'}
              >{l.label}</button>
            ))}
          </div>

          {/* Support */}
          <div>
            <p className="caption" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem' }}>Support & Contact</p>
            <div className="card-inset" style={{ padding: '0.85rem' }}>
              <p className="caption" style={{ color: 'var(--c-text-dim)' }}>Student Helpline</p>
              <p className="mono" style={{ fontSize: '0.88rem', fontWeight: 600, marginTop: 2 }}>+91 70935 23751</p>
              <p className="caption" style={{ marginTop: 2 }}>info@inspedu.in</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--c-border)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p className="caption">
            © {new Date().getFullYear()} Indian School of Physics (INSP). All rights reserved.
          </p>
          <p className="caption">
            Nitin Sachan Sir (B.Tech IIT Madras) • INSP Learning Platform
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer div[style*="grid-template-columns"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
