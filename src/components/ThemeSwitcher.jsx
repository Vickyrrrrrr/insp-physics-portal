import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher({ theme, setTheme }) {
  const isDark = theme === 'v1';

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
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        borderRadius: 9999,
        padding: 3,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.2s ease',
      }}
    >
      <button
        onClick={() => setTheme('v1')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: isDark ? 'var(--c-accent)' : 'transparent',
          color: isDark ? '#ffffff' : 'var(--c-text-dim)',
          border: 'none',
          borderRadius: 9999,
          padding: '0.3rem 0.75rem',
          fontSize: '0.78rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          fontFamily: 'var(--font-sans)',
        }}
      >
        <Moon size={14} strokeWidth={1.75} />
        <span>Dark</span>
      </button>

      <button
        onClick={() => setTheme('v2')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: !isDark ? 'var(--c-accent)' : 'transparent',
          color: !isDark ? '#ffffff' : 'var(--c-text-dim)',
          border: 'none',
          borderRadius: 9999,
          padding: '0.3rem 0.75rem',
          fontSize: '0.78rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          fontFamily: 'var(--font-sans)',
        }}
      >
        <Sun size={14} strokeWidth={1.75} />
        <span>Light</span>
      </button>
    </div>
  );
}
