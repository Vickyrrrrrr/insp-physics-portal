import React, { useState } from 'react';
import { INSP_VIDEO_LECTURES } from '../services/apiMock';
import { Play, Clock, BookOpen, User, Tag, Sparkles, CheckCircle, FileText, X } from 'lucide-react';

export default function VideoPortalPreview() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section style={{ padding: '3.5rem 0', background: '#070b14', borderTop: '1px solid var(--border-dim)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge-tag badge-gold" style={{ marginBottom: '0.75rem' }}>
            DEMO VIDEO PORTAL
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            INSP High-Level Problem Solving Masterclasses
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem' }}>
            Preview actual video lecture streams available inside the Video Portal. Master unseen methods for Pathfinder, Irodov, Krotov, and INPhO problems.
          </p>
        </div>

        {/* Video Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {INSP_VIDEO_LECTURES.map((video) => (
            <div 
              key={video.id} 
              className="glass-card" 
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail Container */}
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'rgba(0,0,0,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'rgba(37, 99, 235, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.5)'
                  }}>
                    <Play size={20} style={{ marginLeft: '3px' }} />
                  </div>
                </div>

                <span style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,0.8)', color: 'white', fontSize: '0.72rem', padding: '2px 6px', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                  {video.duration}
                </span>

                <span className="badge-tag badge-blue" style={{ position: 'absolute', top: '8px', left: '8px' }}>
                  {video.level}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary-cyan)', fontWeight: 600, marginBottom: '0.2rem' }}>
                    {video.chapter}
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.35, color: '#ffffff' }}>
                    {video.title}
                  </h4>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    <span>👨‍🏫 {video.teacher}</span>
                    <span>🧩 {video.problemsSolved} Problems</span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {video.tags.map((tag, tIdx) => (
                      <span key={tIdx} style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-sub)', padding: '2px 6px', borderRadius: '4px' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.9)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1.5rem'
        }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '840px', padding: '1.5rem', background: '#0a0f1d' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <span className="badge-tag badge-gold">{selectedVideo.level}</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginTop: '0.25rem' }}>{selectedVideo.title}</h3>
              </div>
              <button onClick={() => setSelectedVideo(null)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
                <X size={22} />
              </button>
            </div>

            {/* Simulated Video Player Box */}
            <div style={{
              width: '100%',
              height: '380px',
              background: '#000000',
              borderRadius: '12px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-dim)',
              marginBottom: '1rem'
            }}>
              <img src={selectedVideo.thumbnailUrl} alt="player" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--primary-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  boxShadow: '0 0 30px rgba(59,130,246,0.6)'
                }}>
                  <Play size={28} color="white" style={{ marginLeft: '4px' }} />
                </div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem' }}>Playing Stream Demo</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--primary-cyan)' }}>INSP Encrypted Video Portal Player • 1080p 60fps</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Educator: <strong>{selectedVideo.teacher}</strong> • Chapter: <strong>{selectedVideo.chapter}</strong>
              </div>
              <button 
                className="btn-secondary" 
                onClick={() => alert("Downloading lecture PDF problem set & solution notes...")}
                style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
              >
                <FileText size={14} /> Download Solution Notes
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
