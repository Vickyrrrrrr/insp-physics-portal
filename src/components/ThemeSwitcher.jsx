import React from 'react';
import { Layers } from 'lucide-react';

export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <div
      className="theme-switcher-pill"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        borderRadius: 9999,
        padding: '0.4rem 0.6rem 0.4rem 0.85rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.2s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <Layers size={14} color="var(--c-accent)" />
        <span className="caption" style={{ fontWeight: 600, color: 'var(--c-text-muted)', fontSize: '0.75rem' }}>
          Preview Theme:
        </span>
      </div>

      <div style={{ display: 'flex', background: 'var(--c-surface-subtle)', borderRadius: 9999, padding: 2 }}>
        <button
          onClick={() => setTheme('v1')}
          style={{
            background: theme === 'v1' ? 'var(--c-accent)' : 'transparent',
            color: theme === 'v1' ? '#ffffff' : 'var(--c-text-dim)',
            border: 'none',
            borderRadius: 9999,
            padding: '0.2rem 0.65rem',
            fontSize: '0.72rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s',
            fontFamily: 'var(--font-sans)',
          }}
        >
          v1 Minimal
        </button>
        <button
          onClick={() => setTheme('v2')}
          style={{
            background: theme === 'v2' ? 'var(--c-accent)' : 'transparent',
            color: theme === 'v2' ? '#ffffff' : 'var(--c-text-dim)',
            border: 'none',
            borderRadius: 9999,
            padding: '0.2rem 0.65rem',
            fontSize: '0.72rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s',
            fontFamily: 'var(--font-sans)',
          }}
        >
          v2 INSP Cobalt
        </button>
      </div>
    </div>
  );
}
