import React from 'react';
import { Award, Zap, BookOpen, ShieldCheck, CheckCircle2, ArrowRight, Star } from 'lucide-react';

export default function HeroBanner({ onExploreClick }) {
  return (
    <section style={{ 
      position: 'relative', 
      padding: '4rem 0 3rem', 
      background: 'radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.15) 0%, rgba(10, 15, 29, 0) 70%)',
      borderBottom: '1px solid var(--border-dim)'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Column: Heading & Authentic Messaging */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '0.35rem 0.85rem', borderRadius: '9999px', marginBottom: '1.25rem' }}>
              <Zap size={14} color="var(--primary-cyan)" />
              <span style={{ fontSize: '0.8rem', color: 'var(--primary-cyan)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                ADV++ & INPhO PHYSICS OLYMPIAD PORTAL
              </span>
            </div>

            <h1 style={{ fontSize: '2.75rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
              Master Physics for <span style={{ background: 'linear-gradient(135deg, #60a5fa, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>JEE Advanced & Olympiads</span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-sub)', marginBottom: '1.75rem', maxWidth: '620px' }}>
              Official platform of <strong>Nitin Sachan Sir (IIT BHU)</strong>. Designed for top-rank aspirants moving into Class 9th, 10th, 11th, 12th & Droppers with 20,000+ handpicked problem exposures, Irodov & Pathfinder masterclasses, and AITS mock exams.
            </p>

            {/* Quick Metrics Bar */}
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} color="var(--accent-green)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}><strong>20,000+</strong> Problems Covered</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} color="var(--accent-green)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}><strong>100+</strong> INPhO Selection Track</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} color="var(--accent-green)" />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>INSP COPs Books Included</span>
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={onExploreClick} style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}>
                Explore All Packages <ArrowRight size={16} />
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => alert("Code FLAT10 gives 10% OFF. Referral code gives 11% OFF + 11% INSP Coins.")}
                style={{ padding: '0.85rem 1.5rem', fontSize: '0.95rem' }}
              >
                <Zap size={16} color="var(--accent-gold)" /> Referral & Discount Policy
              </button>
            </div>
          </div>

          {/* Right Column: Faculty & Ranker Card */}
          <div className="glass-card" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #1e293b, #334155)',
                border: '2px solid var(--primary-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                color: '#60a5fa',
                fontSize: '1.2rem'
              }}>
                NS
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Nitin Sachan Sir</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--primary-cyan)', fontFamily: 'var(--font-mono)' }}>Founder & Chief Educator, INSP</p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>B.Tech IIT BHU • Renowned Physics Master</p>
              </div>
            </div>

            <div style={{ background: '#0a0f1d', borderRadius: '10px', padding: '1rem', border: '1px solid var(--border-dim)', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                <Star size={14} fill="currentColor" /> INSP COIN & REFERRAL BENEFITS
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)', lineHeight: 1.5 }}>
                Use student referral code to get <strong>11% Instant Discount</strong>. Referrer earns <strong>11% INSP Coins</strong> (1 Coin = ₹1 INR) redeemable for T-shirts, Hoodies, iPads, and INSP books!
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', textAlign: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-dim)' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>AIR 1, 14, 32</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Top JEE Adv Rankers</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-dim)' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-cyan)' }}>1200+</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Mock Exam Papers</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
