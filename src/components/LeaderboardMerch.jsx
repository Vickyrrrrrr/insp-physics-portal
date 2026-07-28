import React from 'react';
import { INSP_LEADERBOARD, INSP_MERCHANDISE } from '../services/apiMock';
import { Award, ShoppingBag, Coins, Flame, ShieldAlert, ArrowUpRight } from 'lucide-react';

export default function LeaderboardMerch() {
  return (
    <section style={{ padding: '3.5rem 0', background: 'var(--bg-main)', borderTop: '1px solid var(--border-dim)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
          
          {/* Left Column: Leaderboard */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(245, 158, 11, 0.15)', padding: '0.5rem', borderRadius: '8px' }}>
                <Award size={20} color="var(--accent-gold)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>INSP AITS Leaderboard</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Top percentile rankers in JEE Advanced Mock Series</p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1rem', background: '#0a0f1d' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-dim)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '0.6rem' }}>Rank</th>
                    <th style={{ padding: '0.6rem' }}>Student Name</th>
                    <th style={{ padding: '0.6rem' }}>Score</th>
                    <th style={{ padding: '0.6rem' }}>INSP Coins</th>
                  </tr>
                </thead>
                <tbody>
                  {INSP_LEADERBOARD.map((item) => (
                    <tr key={item.rank} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                      <td style={{ padding: '0.75rem 0.6rem', fontWeight: 800 }}>
                        {item.rank === 1 ? '🥇 #1' : item.rank === 2 ? '🥈 #2' : item.rank === 3 ? '🥉 #3' : `#${item.rank}`}
                      </td>
                      <td style={{ padding: '0.75rem 0.6rem', fontWeight: 600, color: '#ffffff' }}>
                        {item.name}
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.target}</div>
                      </td>
                      <td style={{ padding: '0.75rem 0.6rem', color: 'var(--primary-cyan)', fontWeight: 700 }}>
                        {item.score}
                      </td>
                      <td style={{ padding: '0.75rem 0.6rem' }}>
                        <span className="badge-tag badge-gold">
                          🪙 {item.coins.toLocaleString()} Coins
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Merchandise & Coin Exchange */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(6, 182, 212, 0.15)', padding: '0.5rem', borderRadius: '8px' }}>
                <ShoppingBag size={20} color="var(--primary-cyan)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>INSP Store & Merchandise</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Redeem INSP Coins at 1 Coin = ₹1 INR</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {INSP_MERCHANDISE.map((merch) => (
                <div key={merch.id} className="glass-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ height: '110px', borderRadius: '8px', overflow: 'hidden', marginBottom: '0.75rem', position: 'relative' }}>
                      <img src={merch.image} alt={merch.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <span className="badge-tag badge-blue" style={{ position: 'absolute', top: '6px', left: '6px' }}>
                        {merch.tag}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
                      {merch.name}
                    </h4>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, marginBottom: '0.6rem' }}>
                      🪙 {merch.costCoins.toLocaleString()} Coins <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({merch.inrValue})</span>
                    </div>

                    <button 
                      className="btn-secondary" 
                      onClick={() => alert(`Redeem request created for ${merch.name}! Log in with your INSP student ID to claim.`)}
                      style={{ width: '100%', justifyContent: 'center', padding: '0.45rem', fontSize: '0.78rem' }}
                    >
                      Redeem with Coins
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
