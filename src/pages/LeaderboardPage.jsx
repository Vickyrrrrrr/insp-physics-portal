import React, { useState } from 'react';
import { Trophy, Award, Coins, TrendingUp } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

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

  return (
    <main style={{ paddingTop: 84, minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ padding: '3.5rem 0 2.5rem', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <Badge variant="gold" style={{ marginBottom: '0.75rem' }}>Rankings & Rewards</Badge>
          <h1 className="display-lg" style={{ marginBottom: '0.85rem' }}>
            INSP Leaderboard
          </h1>
          <p className="body-lg" style={{ maxWidth: 760 }}>
            Ranked by cumulative problem-solving score across all INSP AITS tests and practice exams. Updated weekly.
          </p>
        </div>
      </div>

      {/* Podium Top 3 */}
      <div style={{ padding: '3rem 0', borderBottom: '1px solid var(--c-border)', background: 'var(--c-surface)' }}>
        <div className="container">
          <div className="podium-grid">
            {top3.map((student) => {
              if (!student) return null;
              const isFirst = student.rank === 1;
              return (
                <div
                  key={student.rank}
                  style={{
                    background: isFirst ? 'var(--c-surface-hover)' : 'var(--c-surface)',
                    border: '1px solid ' + (isFirst ? 'var(--c-accent)' : 'var(--c-border)'),
                    borderRadius: 14,
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
                    <span className="mono" style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: isFirst ? 'var(--c-amber)' : 'var(--c-text-dim)',
                      minWidth: 24
                    }}>
                      #{student.rank}
                    </span>

                    <Avatar name={student.name} photoUrl={student.photoUrl} size={isFirst ? 48 : 40} />

                    <div style={{ minWidth: 0 }}>
                      <p className="heading" style={{ fontSize: '0.95rem', marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {student.name}
                      </p>
                      <span className={tierBadgeClass(student.tier)} style={{ fontSize: '0.72rem' }}>
                        {student.tier}
                      </span>
                    </div>
                  </div>

                  <div className="mono text-accent" style={{ fontSize: '0.95rem', fontWeight: 700, flexShrink: 0, textAlign: 'right' }}>
                    {student.rating.toLocaleString('en-IN')}
                    <div className="caption text-dim" style={{ fontSize: '0.7rem', fontWeight: 400 }}>pts</div>
                  </div>
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

      {/* Full Rankings Table with Horizontal Scroll Support */}
      <div style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <div className="table-responsive">
            <div style={{ minWidth: 540 }}>
              
              {/* Header Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '50px 1.2fr 110px 140px',
                gap: '1rem',
                padding: '0.5rem 1rem',
                borderBottom: '1px solid var(--c-border)',
                marginBottom: '0.25rem',
              }}>
                {['Rank', 'Student Name', 'Rating', 'Tier'].map(h => (
                  <p key={h} className="caption" style={{ textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c-text-dim)', fontWeight: 600 }}>{h}</p>
                ))}
              </div>

              {/* Data Rows */}
              {LEADERBOARD.map(student => (
                <div
                  key={student.rank}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '50px 1.2fr 110px 140px',
                    gap: '1rem',
                    padding: '0.75rem 1rem',
                    borderBottom: '1px solid var(--c-border)',
                    alignItems: 'center',
                    transition: 'background-color var(--t-fast)',
                  }}
                >
                  <span className="mono caption text-dim" style={{ fontWeight: 600 }}>
                    #{String(student.rank).padStart(2, '0')}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                    <Avatar name={student.name} photoUrl={student.photoUrl} size={32} />
                    <span className="heading" style={{ fontSize: '0.88rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {student.name}
                    </span>
                  </div>

                  <span className="mono text-accent" style={{ fontWeight: 600, fontSize: '0.88rem' }}>
                    {student.rating.toLocaleString('en-IN')}
                  </span>

                  <div>
                    <span className={tierBadgeClass(student.tier)} style={{ fontSize: '0.72rem' }}>
                      {student.tier}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

    </main>
  );
}