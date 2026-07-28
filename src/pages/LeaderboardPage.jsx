import React, { useState } from 'react';
import { Trophy, Award, Coins, TrendingUp } from 'lucide-react';

const LEADERBOARD = [
  { rank: 1,  name: 'Aditya',                  rating: 238010, tier: 'Lord of Circinus',   photoUrl: 'https://www.inspedu.in/assets/images/students/photo_2023-07-01_13-31-44.jpg' },
  { rank: 2,  name: 'Kartikay Agrawal',         rating: 229087, tier: 'Lord of Circinus',   photoUrl: 'https://www.inspedu.in/assets/images/students/Screenshot_2023-12-18_091238.png' },
  { rank: 3,  name: 'Satyendu Kar',             rating: 206471, tier: 'Lord of Circinus',   photoUrl: '' },
  { rank: 4,  name: 'HK',                       rating: 177170, tier: 'Lord of Centaurus',  photoUrl: 'https://www.inspedu.in/assets/images/students/Pic.png' },
  { rank: 5,  name: 'Nakshatra Yadav',          rating: 157930, tier: 'Lord of Centaurus',  photoUrl: '' },
  { rank: 6,  name: 'Inesh Sahoo',              rating: 151253, tier: 'Lord of Centaurus',  photoUrl: '' },
  { rank: 7,  name: 'bhavya',                   rating: 140787, tier: 'Lord of Cygnus',     photoUrl: '' },
  { rank: 8,  name: 'SAKSHAM MADAN',            rating: 137011, tier: 'Lord of Cygnus',     photoUrl: '' },
  { rank: 9,  name: 'shreya',                   rating: 132272, tier: 'Lord of Cygnus',     photoUrl: '' },
  { rank: 10, name: 'D',                        rating: 111717, tier: 'Lord of Cygnus',     photoUrl: '' }
];

function tierBadgeClass(tier) {
  if (tier === 'Lord of Circinus')  return 'badge badge-accent';
  if (tier === 'Lord of Centaurus') return 'badge badge-gold';
  if (tier === 'Lord of Cygnus')    return 'badge badge-green';
  return 'badge badge-subtle';
}

function Avatar({ name, photoUrl, size = 36 }) {
  const [imgErr, setImgErr] = useState(false);
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  if (photoUrl && !imgErr) {
    return (
      <img
        src={photoUrl}
        alt={name}
        onError={() => setImgErr(true)}
        style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
      />
    );
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: 'var(--c-surface-subtle)',
      border: '1px solid var(--c-border)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.35 + 'px', fontWeight: 600, color: 'var(--c-text-muted)',
    }}>
      {initials}
    </div>
  );
}

export default function LeaderboardPage({ setPage }) {
  const [tab, setTab] = useState('overall');
  const top3 = LEADERBOARD.slice(0, 3);
  const podium = [top3[1], top3[0], top3[2]];

  return (
    <main style={{ paddingTop: 60, minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ padding: '4rem 0 3rem', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>AITS Rankings</div>
          <h1 className="display-lg" style={{ marginBottom: '0.75rem' }}>INSP Leaderboard</h1>
          <p className="body-lg" style={{ maxWidth: 600 }}>
            Ranked by cumulative problem-solving score across all INSP AITS tests and practice exams. Updated weekly.
          </p>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)', padding: '3rem 0' }}>
        <div className="container">
          <p className="caption" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.75rem', textAlign: 'center' }}>
            Top Rankers
          </p>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            {podium.map(student => {
              const isFirst = student.rank === 1;
              return (
                <div
                  key={student.rank}
                  className="card"
                  style={{
                    width: 210,
                    padding: '1.5rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.65rem',
                    border: isFirst ? '1px solid var(--c-accent)' : '1px solid var(--c-border)',
                    background: isFirst ? 'var(--c-surface-subtle)' : 'var(--c-surface)',
                  }}
                >
                  <span className="mono caption text-dim" style={{ fontWeight: 700 }}>
                    #{String(student.rank).padStart(2, '0')}
                  </span>
                  
                  <Avatar name={student.name} photoUrl={student.photoUrl} size={isFirst ? 54 : 44} />
                  
                  <div style={{ textAlign: 'center' }}>
                    <p className="heading" style={{ fontSize: isFirst ? '1rem' : '0.9rem', marginBottom: 2 }}>
                      {student.name}
                    </p>
                    <p className="mono text-accent" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                      {student.rating.toLocaleString('en-IN')} pts
                    </p>
                  </div>

                  <span className={tierBadgeClass(student.tier)}>
                    {student.tier}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ borderBottom: '1px solid var(--c-border)', padding: '0.75rem 0' }}>
        <div className="container" style={{ display: 'flex', gap: 4 }}>
          {['overall', 'month'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? 'btn btn-secondary' : 'btn btn-ghost'}
              style={{ fontSize: '0.82rem', padding: '0.35rem 0.85rem' }}
            >
              {t === 'overall' ? 'Overall Leaderboard' : 'This Month'}
            </button>
          ))}
        </div>
      </div>

      {/* Full Rankings Table */}
      <div style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '60px 1fr 140px 150px',
            gap: '1rem',
            padding: '0.5rem 1rem',
            borderBottom: '1px solid var(--c-border)',
            marginBottom: '0.25rem',
          }}>
            {['Rank', 'Student Name', 'Rating', 'Tier'].map(h => (
              <p key={h} className="caption" style={{ textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c-text-dim)' }}>{h}</p>
            ))}
          </div>

          {LEADERBOARD.map(student => (
            <div
              key={student.rank}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr 140px 150px',
                gap: '1rem',
                padding: '0.75rem 1rem',
                borderBottom: '1px solid var(--c-border)',
                alignItems: 'center',
                transition: 'background-color var(--t-fast)',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--c-surface-subtle)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span className="mono caption text-dim" style={{ fontWeight: 600 }}>
                #{String(student.rank).padStart(2, '0')}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Avatar name={student.name} photoUrl={student.photoUrl} size={32} />
                <span className="heading" style={{ fontSize: '0.88rem' }}>
                  {student.name}
                </span>
              </div>

              <span className="mono text-accent" style={{ fontWeight: 600, fontSize: '0.88rem' }}>
                {student.rating.toLocaleString('en-IN')}
              </span>

              <span className={tierBadgeClass(student.tier)} style={{ width: 'fit-content' }}>
                {student.tier}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* INSP Coins Info */}
      <div style={{ background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)', padding: '4rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>INSP Coins Program</div>
              <h2 className="display-md" style={{ marginBottom: '1rem' }}>
                Earn coins through test performance
              </h2>
              <p className="body-sm" style={{ marginBottom: '1.5rem', maxWidth: 440 }}>
                Every AITS exam completed and Pathfinder problem solved earns INSP Coins. 1 Coin = ₹1 INR, redeemable in the INSP Store for Apple hardware, Adidas apparel, and COPs book sets.
              </p>
              <button
                onClick={() => { setPage('merch'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="btn btn-primary"
              >
                View INSP Rewards Store
              </button>
            </div>

            <div className="grid-2">
              <div className="card-inset" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <div className="mono text-gold" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 4 }}>1 Coin = ₹1</div>
                <div className="caption">Redemption Rate</div>
              </div>
              <div className="card-inset" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <div className="mono" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 4 }}>99,900</div>
                <div className="caption">Coins for Apple iPad Pro</div>
              </div>
              <div className="card-inset" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <div className="mono" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 4 }}>3,499</div>
                <div className="caption">Coins for Adidas Jacket</div>
              </div>
              <div className="card-inset" style={{ padding: '1.25rem', textAlign: 'center' }}>
                <div className="mono text-accent" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 4 }}>Weekly</div>
                <div className="caption">Rankings Reset</div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}