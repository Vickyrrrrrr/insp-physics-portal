import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Plus, X, Search, BookOpen, Lock } from 'lucide-react';
import { MathText } from '../components/ui/MathText';

const INITIAL_THREADS = [
  {
    id: "t1",
    title: "Irodov 3.274 — Current loop in non-uniform B field — torque derivation issue",
    category: "Electromagnetism",
    votes: 42,
    author: "Aditya",
    time: "2h ago",
    replies: 8,
    solved: true,
    preview: "When integrating $d\\vec{F} = I (d\\vec{l} \\times \\vec{B})$ along the elliptical boundary, the radial component vanishes but the z-torque term seems to depend on the field gradient..."
  },
  {
    id: "t2",
    title: "Prove that entropy is a state function for non-quasi-static processes — Pathfinder approach",
    category: "Thermodynamics",
    votes: 38,
    author: "Kartikay Agrawal",
    time: "4h ago",
    replies: 12,
    solved: true,
    preview: "Using Clausius Inequality $\\oint \\frac{dQ}{T} \\le 0$, we can construct a reversible path between the initial and final equilibrium states..."
  },
  {
    id: "t3",
    title: "JEE ADV 2024 Paper 1 Q17 — String tension derivation discrepancy in standard solutions",
    category: "JEE ADV Discussions",
    votes: 71,
    author: "Nakshatra Yadav",
    time: "1d ago",
    replies: 23,
    solved: false,
    preview: "The mass per unit length varies as $\\lambda(x) = \\lambda_0 (1 + x/L)$. Standard keys assume uniform linear mass density in the boundary conditions..."
  },
  {
    id: "t4",
    title: "Coupled pendulum normal modes — Lagrangian vs Newton-Euler for fast ADV solving",
    category: "Mechanics",
    votes: 29,
    author: "Inesh Sahoo",
    time: "5h ago",
    replies: 6,
    solved: true,
    preview: "For small oscillations, writing $T = \\frac{1}{2} m (\\dot{x}_1^2 + \\dot{x}_2^2)$ and solving $|K - \\omega^2 M| = 0$ saves 4 minutes compared to torque balancing."
  },
  {
    id: "t5",
    title: "Krotov 2.11 — Van der Waals gas adiabatic expansion temperature calculation",
    category: "Thermodynamics",
    votes: 33,
    author: "Satyendu Kar",
    time: "7h ago",
    replies: 9,
    solved: true,
    preview: "Remember that internal energy for a real gas includes the potential energy term $-a/V$. Thus $C_v dT + \\left(\\frac{a}{V^2}\\right) dV = 0$..."
  },
  {
    id: "t6",
    title: "INPhO 2023 Q4 — Relativistic elastic collision in Center-of-Momentum frame",
    category: "Olympiad Special",
    votes: 56,
    author: "ARYAN",
    time: "2d ago",
    replies: 15,
    solved: true,
    preview: "Transforming 4-momenta to CM frame simplifies the 4D scattering matrix into pure spatial rotation..."
  }
];

export default function ForumPage({ setPage }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [threads, setThreads] = useState(INITIAL_THREADS);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Mechanics');

  const categories = ['All', 'Mechanics', 'Electromagnetism', 'Thermodynamics', 'JEE ADV Discussions', 'Olympiad Special'];

  const filteredThreads = threads.filter(t => {
    const matchCat = activeCategory === 'All' || t.category === activeCategory;
    const matchSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleUpvote = (id) => {
    setThreads(threads.map(t => t.id === id ? { ...t, votes: t.votes + 1 } : t));
  };

  const handleCreateThread = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const created = {
      id: `t_${Date.now()}`,
      title: newTitle,
      category: newCategory,
      votes: 1,
      author: "Student (You)",
      time: "Just now",
      replies: 0,
      solved: false,
      preview: "New discussion thread created in INSP Physics Forum."
    };
    setThreads([created, ...threads]);
    setShowModal(false);
    setNewTitle('');
    alert("Thread submitted successfully! Login to your student account to edit or delete posts.");
  };

  return (
    <main style={{ paddingTop: 60, minHeight: '100vh' }}>
      
      {/* Page Header */}
      <div style={{ padding: '4rem 0 3rem', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div className="badge badge-accent" style={{ marginBottom: '1rem' }}>
              Student Community
            </div>
            <h1 className="display-lg" style={{ marginBottom: '0.75rem' }}>
              Physics Forum & Concept Exchange
            </h1>
            <p className="body-lg" style={{ maxWidth: 620 }}>
              Discuss Pathfinder, Irodov, and INPhO problems with India's top JEE Advanced aspirants. Post new problems, earn INSP Coins, and master unseen problem tricks.
            </p>
          </div>

          <button 
            className="btn btn-primary btn-lg"
            onClick={() => setShowModal(true)}
          >
            <Plus size={18} /> Post New Problem
          </button>
        </div>
      </div>

      {/* Category Pills & Search */}
      <div style={{ borderBottom: '1px solid var(--c-border)', padding: '1rem 0', background: 'var(--c-surface)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? 'btn btn-secondary' : 'btn btn-ghost'}
                style={{ fontSize: '0.82rem', padding: '0.4rem 0.9rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', width: 260 }}>
            <input 
              className="input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problem title..."
              style={{ paddingLeft: '2.2rem', fontSize: '0.85rem' }}
            />
            <Search size={14} color="var(--c-text-tertiary)" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
          </div>

        </div>
      </div>

      {/* Main Forum Threads List */}
      <div style={{ padding: '2.5rem 0 5rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {filteredThreads.map(thread => (
              <div 
                key={thread.id} 
                className="card" 
                style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
              >
                {/* Vote Counter */}
                <button 
                  onClick={() => handleUpvote(thread.id)}
                  style={{
                    background: 'var(--c-surface-2)',
                    border: '1px solid var(--c-border)',
                    borderRadius: 8,
                    padding: '0.5rem 0.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: 'var(--c-text-primary)',
                    minWidth: 46
                  }}
                >
                  <ThumbsUp size={14} color="var(--c-accent)" />
                  <span className="mono" style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: 4 }}>
                    {thread.votes}
                  </span>
                </button>

                {/* Thread Body */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-subtle">{thread.category}</span>
                    {thread.solved && <span className="badge badge-green">✓ Solved</span>}
                    <span className="caption" style={{ color: 'var(--c-text-tertiary)' }}>
                      Posted by <strong>{thread.author}</strong> • {thread.time}
                    </span>
                  </div>

                  <h3 className="heading" style={{ fontSize: '1.05rem', marginBottom: '0.4rem', cursor: 'pointer', color: '#ffffff' }}>
                    <MathText>{thread.title}</MathText>
                  </h3>

                  <p className="body-sm" style={{ fontSize: '0.85rem', color: 'var(--c-text-secondary)', marginBottom: '0.75rem' }}>
                    <MathText>{thread.preview}</MathText>
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem', color: 'var(--c-text-tertiary)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MessageSquare size={13} /> {thread.replies} Replies
                    </span>
                    <span>🪙 Earns INSP Coins</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Post Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: '1.5rem'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: 580, padding: '2rem', background: '#0c0c0f', border: '1px solid var(--c-accent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 className="heading" style={{ fontSize: '1.25rem' }}>Post New Physics Problem</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreateThread} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label className="caption" style={{ display: 'block', marginBottom: '0.4rem' }}>Problem / Question Title</label>
                <input 
                  className="input" 
                  value={newTitle} 
                  onChange={(e) => setNewTitle(e.target.value)} 
                  placeholder="e.g. Pathfinder Ch-3 Q12 — Boundary condition derivation" 
                  required 
                />
              </div>

              <div>
                <label className="caption" style={{ display: 'block', marginBottom: '0.4rem' }}>Category</label>
                <select 
                  className="input"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                >
                  <option value="Mechanics">Mechanics</option>
                  <option value="Electromagnetism">Electromagnetism</option>
                  <option value="Thermodynamics">Thermodynamics</option>
                  <option value="JEE ADV Discussions">JEE ADV Discussions</option>
                  <option value="Olympiad Special">Olympiad Special</option>
                </select>
              </div>

              <div>
                <label className="caption" style={{ display: 'block', marginBottom: '0.4rem' }}>Detailed Problem Statement (LaTeX supported in full portal)</label>
                <textarea 
                  className="input" 
                  rows={5} 
                  placeholder="Describe your equation or problem step..." 
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)} style={{ flex: 1 }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Submit Thread
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}
