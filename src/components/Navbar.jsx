import React, { useState } from 'react';
import { Phone, Mail, Award, PlayCircle, BookOpen, ShoppingBag, User, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'packages', label: 'PREMIUM PACKAGES', icon: ShieldCheck, badge: 'Active' },
    { id: 'video_portal', label: 'VIDEO PORTAL', icon: PlayCircle },
    { id: 'leaderboard', label: 'LEADERBOARD & COINS', icon: Award },
    { id: 'merchandise', label: 'MERCHANDISE', icon: ShoppingBag },
    { id: 'forum', label: 'FORUM & CONCEPTS', icon: BookOpen },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10, 15, 29, 0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border-dim)' }}>
      {/* Top Utility Bar */}
      <div style={{ background: '#070b14', padding: '0.4rem 0', fontSize: '0.8rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Phone size={13} color="var(--primary-cyan)" /> <strong>7093523751</strong>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Mail size={13} color="var(--primary-cyan)" /> info@inspedu.in
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              ⚡ Discount Code: <code style={{ background: 'rgba(245, 158, 11, 0.15)', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(245,158,11,0.3)' }}>FLAT10</code> (10% OFF)
            </span>
            <a href="https://www.youtube.com/c/INDIANSCHOOLOFPHYSICSnitin" target="_blank" rel="noreferrer" style={{ color: '#ef4444', textDecoration: 'none', fontWeight: 600 }}>
              YouTube (100K+)
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ padding: '0.85rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('packages')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <div style={{ 
            width: '42px', 
            height: '42px', 
            borderRadius: '10px', 
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '1.2rem',
            boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)'
          }}>
            INSP
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em', color: '#ffffff', lineHeight: 1.1 }}>
              INDIAN SCHOOL OF PHYSICS
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--primary-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              BY NITIN SACHAN SIR (IIT BHU)
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                style={{
                  background: isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                  color: isActive ? '#60a5fa' : 'var(--text-sub)',
                  border: isActive ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid transparent',
                  padding: '0.55rem 0.9rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                <Icon size={15} color={isActive ? '#60a5fa' : 'var(--text-muted)'} />
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button 
            className="btn-primary" 
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
            onClick={() => alert("Redirecting to INSP Portal Student Auth Login...")}
          >
            <User size={15} /> Student Login
          </button>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', padding: '0.4rem' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: '#0d1322', borderTop: '1px solid var(--border-dim)', padding: '1rem' }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { setActiveTab(link.id); setMobileMenuOpen(false); }}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '0.75rem 1rem',
                margin: '0.25rem 0',
                background: activeTab === link.id ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                color: activeTab === link.id ? '#60a5fa' : 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <link.icon size={18} />
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
