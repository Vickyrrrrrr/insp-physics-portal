import React, { useState } from 'react';
import { INSP_VIDEO_LECTURES } from '../services/apiMock';
import { Play, Search, X, FileText, Video, Radio, MessageSquare, CheckCircle2, Shield, ArrowRight, Download, Monitor, Users, Target, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { MathText } from '../components/ui/MathText';

const FEATURED_SPOTLIGHT = {
  id: "v-spotlight",
  title: "Rigid Body Dynamics — Advanced Rotational Motion & Inertia Tensor",
  chapter: "Mechanics • Chapter 04",
  level: "JEE ADV++ / INPhO",
  duration: "1h 45m",
  teacher: "Nitin Sachan Sir (IIT Madras)",
  thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
  problemsSolved: 14,
  description: "Master complex rotational dynamics with Nitin Sachan Sir (IITM). Covers instantaneous axis of rotation, rolling without slipping on moving inclined planes, and Pathfinder Chapter 3 advanced problems.",
  timestamps: [
    { time: "00:00", title: "Kinematics of Rigid Bodies & Instantaneous Center" },
    { time: "18:40", title: "Pathfinder Q12: Moving Inclined Plane Analysis" },
    { time: "42:15", title: "Irodov 1.254 Solution via Tensor Shortcuts" },
    { time: "1:15:30", title: "JEE ADV++ Combined Rotation & Translation Strategy" }
  ],
  tags: ["Pathfinder Ch-3", "Irodov 1.254", "Moment of Inertia"]
};

const CHAPTER_TRACKS = [
  { id: 'all', name: 'All Masterclass Modules (24)' },
  { id: 'mechanics', name: 'Mechanics (8)' },
  { id: 'electromagnetism', name: 'Electrodynamics (6)' },
  { id: 'thermo', name: 'Thermodynamics (4)' },
  { id: 'optics', name: 'Optics & Waves (3)' },
  { id: 'chemistry', name: 'Organic Chemistry (3)' },
];

export default function VideoPortalPage({ setPage }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeTrack, setActiveTrack] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [playerSpeed, setPlayerSpeed] = useState('1.0x');
  const [modalTab, setModalTab] = useState('timestamps');
  const [imgErrors, setImgErrors] = useState({});

  const filteredLectures = INSP_VIDEO_LECTURES.filter(v => {
    const matchCat = activeTrack === 'all' || v.chapter.toLowerCase().includes(activeTrack);
    const matchSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase()) || v.chapter.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main style={{ paddingTop: 60, minHeight: '100vh' }}>
      
      {/* Hero Header */}
      <div style={{ padding: '4rem 0 2.5rem', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <Badge variant="accent" style={{ marginBottom: '1rem' }}>INSP Video Portal</Badge>
              <h1 className="display-lg" style={{ marginBottom: '0.75rem' }}>
                Interactive Live Classes & Video Masterclass Vault
              </h1>
              <p className="body-lg" style={{ maxWidth: 880 }}>
                The core learning platform of Nitin Sachan Sir (B.Tech IIT Madras) and Devesh Dixit Sir (B.Tech IIT BHU). Delivering live interactive physics classes, one-on-one doubt resolution, and 300+ hours of problem-solving masterclasses.
              </p>
            </div>

            <Card style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Radio size={14} color="var(--c-accent)" />
                <span className="caption mono text-accent" style={{ fontWeight: 700 }}>Direct Doubt Support</span>
              </div>
              <span className="body-sm" style={{ fontSize: '0.85rem' }}>Telegram: <strong>@INSP_NITIN</strong></span>
              <span className="caption text-dim">Helpline: +91 70935 23751</span>
            </Card>
          </div>
        </div>
      </div>

      {/* Flagship Spotlight Video Banner */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--c-border)', background: 'var(--c-surface)' }}>
        <div className="container">
          <Card style={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.2fr 1fr' }}>
            
            <div 
              style={{ 
                height: 320, 
                position: 'relative', 
                background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #030712 100%)', 
                cursor: 'pointer' 
              }} 
              onClick={() => setSelectedVideo(FEATURED_SPOTLIGHT)}
            >
              {!imgErrors['spotlight'] ? (
                <img 
                  src={FEATURED_SPOTLIGHT.thumbnailUrl} 
                  alt="spotlight" 
                  onError={() => setImgErrors(p => ({ ...p, spotlight: true }))}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }} 
                />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Video size={48} color="var(--c-accent)" strokeWidth={1.5} />
                </div>
              )}

              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#09090b', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                  <Play size={22} style={{ marginLeft: 3 }} />
                </div>
              </div>

              <Badge variant="gold" style={{ position: 'absolute', top: 16, left: 16 }}>
                Masterclass Spotlight
              </Badge>

              <span className="mono caption" style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.85)', padding: '0.2rem 0.5rem', borderRadius: 4, color: '#fff' }}>
                {FEATURED_SPOTLIGHT.duration}
              </span>
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <Badge variant="accent">{FEATURED_SPOTLIGHT.level}</Badge>
                  <span className="caption text-dim">• {FEATURED_SPOTLIGHT.chapter}</span>
                </div>

                <h2 className="display-md" style={{ fontSize: '1.3rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {FEATURED_SPOTLIGHT.title}
                </h2>

                <p className="body-sm" style={{ fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                  {FEATURED_SPOTLIGHT.description}
                </p>
              </div>

              <div>
                <div className="caption text-dim" style={{ marginBottom: '0.85rem' }}>
                  Educator: <strong>{FEATURED_SPOTLIGHT.teacher}</strong> • {FEATURED_SPOTLIGHT.problemsSolved} Pathfinder Problems Solved
                </div>

                <Button variant="primary" onClick={() => setSelectedVideo(FEATURED_SPOTLIGHT)}>
                  Watch Spotlight Video <Play size={14} strokeWidth={1.5} />
                </Button>
              </div>

            </div>

          </Card>
        </div>
      </section>

      {/* 6 Core Pillars of INSP Video Portal */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <Badge variant="accent" style={{ marginBottom: '0.5rem' }}>The INSP Advantage</Badge>
            <h2 className="display-md">Built Specifically for JEE Advanced & Olympiad Supremacy</h2>
          </div>

          <div className="grid-3">
            <Card style={{ padding: '1.5rem' }}>
              <Video size={20} color="var(--c-accent)" strokeWidth={1.5} style={{ marginBottom: '0.85rem' }} />
              <CardTitle style={{ marginBottom: '0.35rem' }}>Interactive Live Classes</CardTitle>
              <p className="body-sm">
                Real-time interactive physics sessions with Nitin Sachan Sir (IITM). Collaborate, ask questions live, and gain deep insights directly from experienced faculty.
              </p>
            </Card>

            <Card style={{ padding: '1.5rem' }}>
              <Target size={20} color="var(--c-green)" strokeWidth={1.5} style={{ marginBottom: '0.85rem' }} />
              <CardTitle style={{ marginBottom: '0.35rem' }}>Tailored Curriculum</CardTitle>
              <p className="body-sm">
                Structured 1-year, 2-year, 3-year, and 4-year programs covering Class 9th to 12th & Droppers for JEE ADV++ and INPhO/IPhO Medal tracks.
              </p>
            </Card>

            <Card style={{ padding: '1.5rem' }}>
              <Users size={20} color="var(--c-amber)" strokeWidth={1.5} style={{ marginBottom: '0.85rem' }} />
              <CardTitle style={{ marginBottom: '0.35rem' }}>One-on-One Doubt Support</CardTitle>
              <p className="body-sm">
                Personalized instructors provide direct Telegram doubt-solving (@INSP_NITIN), customized study plans, and continuous performance feedback.
              </p>
            </Card>

            <Card style={{ padding: '1.5rem' }}>
              <BookOpen size={20} color="var(--c-accent)" strokeWidth={1.5} style={{ marginBottom: '0.85rem' }} />
              <CardTitle style={{ marginBottom: '0.35rem' }}>Unique Problem Bank</CardTitle>
              <p className="body-sm">
                20,000+ handpicked problem exposures from Pathfinder, Irodov, Krotov, and past INPhO / IPhO papers solved line-by-line from first principles.
              </p>
            </Card>

            <Card style={{ padding: '1.5rem' }}>
              <CheckCircle2 size={20} color="var(--c-green)" strokeWidth={1.5} style={{ marginBottom: '0.85rem' }} />
              <CardTitle style={{ marginBottom: '0.35rem' }}>Comprehensive Mock Exams</CardTitle>
              <p className="body-sm">
                Regular AITS Grand Test series (GTs) and online practice exams simulating exact JEE Advanced test interface and scoring environment.
              </p>
            </Card>

            <Card style={{ padding: '1.5rem' }}>
              <Monitor size={20} color="var(--c-amber)" strokeWidth={1.5} style={{ marginBottom: '0.85rem' }} />
              <CardTitle style={{ marginBottom: '0.35rem' }}>Beyond the Classroom Apps</CardTitle>
              <p className="body-sm">
                Unlimited 1080p HD recorded archives for revision. Dedicated desktop apps for Windows (.exe) and Mac (.dmg) for encrypted stream access.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Structured Course Tracks within Video Portal */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--c-border)', background: 'var(--c-surface)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <Badge variant="gold" style={{ marginBottom: '0.5rem' }}>Specialized Tracks</Badge>
            <h2 className="display-md">Courses Delivered on Video Portal</h2>
          </div>

          <div className="grid-2">
            <Card style={{ padding: '1.75rem' }}>
              <Badge variant="accent" style={{ marginBottom: '0.75rem' }}>Class 9th & 10th</Badge>
              <h3 className="heading" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                JEE ADV & INPHO Foundation Course
              </h3>
              <p className="body-sm" style={{ marginBottom: '1.25rem' }}>
                Available in 3-year and 4-year durations. Establishes early first-principles analytical reasoning in physics, preparing young minds to dominate Olympiads and competitive exams.
              </p>
              <Button variant="secondary" onClick={() => setPage('packages')}>
                View Foundation Plans <ArrowRight size={14} strokeWidth={1.5} />
              </Button>
            </Card>

            <Card style={{ padding: '1.75rem' }}>
              <Badge variant="green" style={{ marginBottom: '0.75rem' }}>Class 11th, 12th & Droppers</Badge>
              <h3 className="heading" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                JEE ADV ++ Rankers Special Course
              </h3>
              <p className="body-sm" style={{ marginBottom: '1.25rem' }}>
                Available in 1-year and 2-year durations. Advanced problem solving led by Nitin Sachan Sir (IITM) and Chemistry by Devesh Dixit Sir (IIT BHU, Ex-FIITJEE & Bansal).
              </p>
              <Button variant="secondary" onClick={() => setPage('packages')}>
                View Rankers Special Plans <ArrowRight size={14} strokeWidth={1.5} />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Masterclass Archive Filter & Search */}
      <div style={{ borderBottom: '1px solid var(--c-border)', padding: '0.85rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {CHAPTER_TRACKS.map(track => (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={activeTrack === track.id ? 'btn btn-secondary' : 'btn btn-ghost'}
                style={{ fontSize: '0.82rem', padding: '0.35rem 0.85rem' }}
              >
                {track.name}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', width: 220 }}>
            <input 
              className="input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search masterclasses..."
              style={{ paddingLeft: '2.1rem', fontSize: '0.82rem' }}
            />
            <Search size={14} color="var(--c-text-dim)" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
          </div>
        </div>
      </div>

      {/* Masterclass Video Grid */}
      <div style={{ padding: '3.5rem 0 5rem' }}>
        <div className="container">
          <div className="grid-3">
            {filteredLectures.map(video => (
              <Card 
                key={video.id} 
                style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                onClick={() => setSelectedVideo(video)}
              >
                <div>
                  <div style={{ height: 165, position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
                    {!imgErrors[video.id] ? (
                      <img 
                        src={video.thumbnailUrl} 
                        alt={video.title} 
                        onError={() => setImgErrors(p => ({ ...p, [video.id]: true }))}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Video size={36} color="var(--c-accent)" strokeWidth={1.5} />
                      </div>
                    )}
                    
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)' }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#09090b', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                        <Play size={16} style={{ marginLeft: 2 }} />
                      </div>
                    </div>

                    <Badge variant="accent" style={{ position: 'absolute', top: 10, left: 10 }}>
                      {video.level}
                    </Badge>

                    <span className="mono caption" style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.85)', padding: '0.15rem 0.45rem', borderRadius: 4, color: '#fff' }}>
                      {video.duration}
                    </span>
                  </div>

                  <div style={{ padding: '1.25rem' }}>
                    <div className="caption text-accent" style={{ fontWeight: 600, marginBottom: '0.2rem' }}>
                      {video.chapter}
                    </div>
                    <h3 className="heading" style={{ fontSize: '0.95rem', marginBottom: '0.65rem', lineHeight: 1.35 }}>
                      <MathText>{video.title}</MathText>
                    </h3>
                  </div>
                </div>

                <div style={{ padding: '0 1.25rem 1.25rem' }}>
                  <div className="caption text-dim" style={{ marginBottom: '0.65rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{video.teacher}</span>
                    <span>{video.problemsSolved} Problems</span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {video.tags.map((t, idx) => (
                      <span key={idx} className="mono caption" style={{ background: 'var(--c-surface-subtle)', padding: '0.15rem 0.45rem', borderRadius: 4, border: '1px solid var(--c-border)' }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Protected Video Player Modal */}
      {selectedVideo && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: '1.25rem'
        }}>
          <Card style={{ width: '100%', maxWidth: 840, maxHeight: '90vh', overflowY: 'auto', padding: '1.75rem', background: 'var(--c-surface)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <Badge variant="accent">{selectedVideo.level}</Badge>
                <h3 className="heading" style={{ fontSize: '1.15rem', marginTop: 4 }}>
                  <MathText>{selectedVideo.title}</MathText>
                </h3>
                <p className="caption text-dim">Educator: {selectedVideo.teacher} • {selectedVideo.chapter}</p>
              </div>
              <button onClick={() => setSelectedVideo(null)} style={{ background: 'none', border: 'none', color: 'var(--c-text)', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            {/* Video Player Frame */}
            <div style={{ width: '100%', height: 380, background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: '1px solid var(--c-border)', marginBottom: '1.25rem', overflow: 'hidden' }}>
              {!imgErrors['modal'] ? (
                <img 
                  src={selectedVideo.thumbnailUrl} 
                  alt="player" 
                  onError={() => setImgErrors(p => ({ ...p, modal: true }))}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} 
                />
              ) : null}

              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#09090b', margin: '0 auto 0.75rem', boxShadow: '0 8px 20px rgba(0,0,0,0.4)' }}>
                  <Play size={24} style={{ marginLeft: 3 }} />
                </div>
                <p className="heading" style={{ color: '#fff' }}>INSP Video Portal Encrypted Stream</p>
                <p className="mono caption text-accent">1080p 60fps • Nitin Sachan Sir (IITM)</p>
              </div>

              <div style={{ position: 'absolute', bottom: 12, right: 12, display: 'flex', gap: 4, background: 'rgba(0,0,0,0.8)', padding: 3, borderRadius: 6 }}>
                {['1.0x', '1.25x', '1.5x', '2.0x'].map(spd => (
                  <button
                    key={spd}
                    onClick={() => setPlayerSpeed(spd)}
                    style={{
                      background: playerSpeed === spd ? 'var(--c-accent)' : 'transparent',
                      color: playerSpeed === spd ? '#fff' : 'var(--c-text-dim)',
                      border: 'none',
                      borderRadius: 4,
                      padding: '0.15rem 0.4rem',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer'
                    }}
                  >
                    {spd}
                  </button>
                ))}
              </div>
            </div>

            {/* Lesson Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--c-border)', marginBottom: '1rem' }}>
              {[
                { id: 'timestamps', label: 'Timestamped Chapters' },
                { id: 'notes', label: 'PDF Solution Notes' },
                { id: 'discussion', label: 'Student Q&A' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setModalTab(tab.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderBottom: modalTab === tab.id ? '2px solid var(--c-accent)' : '2px solid transparent',
                    color: modalTab === tab.id ? 'var(--c-accent)' : 'var(--c-text-dim)',
                    padding: '0.45rem 1rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {modalTab === 'timestamps' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.25rem' }}>
                {(selectedVideo.timestamps || [
                  { time: "00:00", title: "Concept Introduction & First-Principles Derivation" },
                  { time: "15:30", title: "Pathfinder Advanced Problem Solving" },
                  { time: "38:45", title: "Irodov Shortcut & Alternative Approach" }
                ]).map((ts, idx) => (
                  <div key={idx} className="card-inset" style={{ padding: '0.6rem 0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="body-sm" style={{ fontSize: '0.85rem' }}>{ts.title}</span>
                    <span className="mono caption text-accent" style={{ fontWeight: 600 }}>{ts.time}</span>
                  </div>
                ))}
              </div>
            )}

            {modalTab === 'notes' && (
              <div style={{ padding: '1rem 0' }}>
                <p className="body-sm" style={{ marginBottom: '1rem' }}>
                  Handwritten PDF solution notes authored by Nitin Sachan Sir (IIT Madras) covering all step-by-step Pathfinder and Irodov derivations for this lecture.
                </p>
                <Button variant="secondary" onClick={() => alert("Downloading lecture solution notes PDF...")}>
                  <FileText size={15} strokeWidth={1.5} /> Download Solution Notes PDF
                </Button>
              </div>
            )}

            {modalTab === 'discussion' && (
              <div style={{ padding: '1rem 0' }}>
                <p className="body-sm" style={{ marginBottom: '1rem' }}>
                  Ask questions about this lecture. Direct answers provided by Nitin Sachan Sir and INSP rankers.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input className="input" placeholder="Type your doubt or timestamp question..." />
                  <Button variant="primary" onClick={() => alert("Doubt submitted! INSP team will review shortly.")}>
                    Post Doubt
                  </Button>
                </div>
              </div>
            )}

          </Card>
        </div>
      )}

    </main>
  );
}
