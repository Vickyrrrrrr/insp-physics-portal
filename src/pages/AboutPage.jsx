import React from 'react';
import { Award, BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage({ setPage }) {
  const go = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main style={{ paddingTop: 60, minHeight: '100vh' }}>
      
      {/* Page Header */}
      <div style={{ padding: '4rem 0 3rem', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="badge badge-accent" style={{ marginBottom: '1rem' }}>Our Story</div>
          <h1 className="display-lg" style={{ marginBottom: '0.75rem' }}>
            Physics taught through first principles.<br />
            <span style={{ color: 'var(--c-accent)' }}>Not memory shortcuts.</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 640 }}>
            The Indian School of Physics (INSP) was founded in 2020 by Nitin Sachan Sir (B.Tech IIT Madras). What started as a YouTube initiative during academic disruptions evolved into India's premier physics learning ecosystem.
          </p>
        </div>
      </div>

      {/* Story Timeline */}
      <section style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <h2 className="display-md" style={{ marginBottom: '2.5rem' }}>The Genesis of INSP</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '2px solid var(--c-border)', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
            
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.05rem', top: 4, width: 14, height: 14, borderRadius: '50%', background: 'var(--c-accent)', border: '3px solid var(--c-bg)' }}></div>
              <span className="mono text-accent" style={{ fontWeight: 600, fontSize: '0.85rem' }}>2020</span>
              <h3 className="heading" style={{ marginTop: '0.2rem', marginBottom: '0.35rem' }}>YouTube Launch During Academic Disruptions</h3>
              <p className="body-sm">
                Nitin Sachan Sir (B.Tech IIT Madras) initiated YouTube lectures to support students facing academic disruptions. The channel quickly gained traction for its unmatched problem quality and conceptual depth.
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.05rem', top: 4, width: 14, height: 14, borderRadius: '50%', background: 'var(--c-text-muted)', border: '3px solid var(--c-bg)' }}></div>
              <span className="mono text-muted" style={{ fontWeight: 600, fontSize: '0.85rem' }}>2021</span>
              <h3 className="heading" style={{ marginTop: '0.2rem', marginBottom: '0.35rem' }}>Building the Dedicated Web & Exam Portal</h3>
              <p className="body-sm">
                To serve gifted aspirants across India, INSP established its proprietary Video and Exam Portals, offering structured problem banks for Pathfinder, Irodov, Krotov, and INPhO level practice.
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2.05rem', top: 4, width: 14, height: 14, borderRadius: '50%', background: 'var(--c-green)', border: '3px solid var(--c-bg)' }}></div>
              <span className="mono text-green" style={{ fontWeight: 600, fontSize: '0.85rem' }}>2022 - Present</span>
              <h3 className="heading" style={{ marginTop: '0.2rem', marginBottom: '0.35rem' }}>Proven AIR 1, 14, 32 Alumni Track</h3>
              <p className="body-sm">
                INSP students consistently secure top single-digit and double-digit ranks in JEE Advanced, alongside medals in the Indian National Physics Olympiad (INPhO) and International Physics Olympiad (IPhO).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--c-border)', background: 'var(--c-surface)' }}>
        <div className="container">
          <h2 className="display-md" style={{ marginBottom: '2rem' }}>Faculty Profiles</h2>

          <div className="grid-2">
            
            <div className="card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--c-surface-subtle)', border: '1px solid var(--c-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', color: 'var(--c-accent)' }}>
                  NS
                </div>
                <div>
                  <h3 className="heading" style={{ fontSize: '1.1rem' }}>Nitin Sachan Sir</h3>
                  <p className="caption">Founder & Chief Physics Educator</p>
                  <p className="mono caption text-accent" style={{ fontWeight: 600 }}>B.Tech • IIT Madras (IITM)</p>
                </div>
              </div>

              <p className="body-sm" style={{ marginBottom: '1.25rem' }}>
                With 15+ years of experience mentoring top JEE Advanced and Physics Olympiad performers, Nitin Sachan Sir pioneered the graded problem-solving methodology that powers the INSP ecosystem.
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-accent">Physics Master</span>
                <span className="badge badge-subtle">15+ Yrs Exp</span>
                <span className="badge badge-subtle">IIT Madras Alumnus</span>
              </div>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--c-surface-subtle)', border: '1px solid var(--c-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', color: 'var(--c-green)' }}>
                  DD
                </div>
                <div>
                  <h3 className="heading" style={{ fontSize: '1.1rem' }}>Devesh Dixit Sir</h3>
                  <p className="caption">Senior Chemistry Faculty</p>
                  <p className="mono caption text-green" style={{ fontWeight: 600 }}>B.Tech • IIT BHU • 17+ Yrs Exp</p>
                </div>
              </div>

              <p className="body-sm" style={{ marginBottom: '1.25rem' }}>
                Ex-faculty at FIITJEE and Bansal Classes with 17+ years of experience. Devesh Dixit Sir leads complete Organic, Inorganic, and Physical Chemistry coverage for JEE Advanced.
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-green">Chemistry Lead</span>
                <span className="badge badge-subtle">17+ Yrs Exp</span>
                <span className="badge badge-subtle">Ex-FIITJEE & Bansal</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COPs Books Section */}
      <section style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>Proprietary Books</div>
              <h2 className="display-md" style={{ marginBottom: '1rem' }}>
                INSP COPs (Concepts & Problems)
              </h2>
              <p className="body-sm" style={{ marginBottom: '1rem' }}>
                INSP COPs are specialized physics books authored by Nitin Sachan Sir (IIT Madras). Unlike standard market guidebooks, COPs focus strictly on graded multi-conceptual problem sequences.
              </p>
              <p className="body-sm" style={{ marginBottom: '1.5rem' }}>
                All INSP Premium packages include full online access to COPs books and practice exercise solutions.
              </p>
              <button className="btn btn-primary" onClick={() => go('packages')}>
                View Packages with COPs Books <ArrowRight size={14} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div className="card-inset" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <BookOpen size={20} color="var(--c-amber)" />
                <div>
                  <h4 className="heading" style={{ fontSize: '0.9rem' }}>Graded Problem Sets</h4>
                  <p className="caption">Structured from JEE Mains to ADV++ and INPhO level</p>
                </div>
              </div>

              <div className="card-inset" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Layers size={20} color="var(--c-accent)" />
                <div>
                  <h4 className="heading" style={{ fontSize: '0.9rem' }}>Multi-Concept Integration</h4>
                  <p className="caption">Combines Mechanics, Electrodynamics & Thermodynamics in single problems</p>
                </div>
              </div>

              <div className="card-inset" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Award size={20} color="var(--c-green)" />
                <div>
                  <h4 className="heading" style={{ fontSize: '0.9rem' }}>Written by Nitin Sachan Sir (IITM)</h4>
                  <p className="caption">Direct insights from 15+ years of top-ranker mentorship</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-md" style={{ marginBottom: '0.75rem' }}>
            Start your preparation with INSP
          </h2>
          <p className="body-sm" style={{ maxWidth: 500, margin: '0 auto 2rem' }}>
            Explore subscription packages for Class 9th, 10th, 11th, 12th & Droppers.
          </p>
          <button className="btn btn-primary btn-lg" onClick={() => go('packages')}>
            Explore Premium Plans
          </button>
        </div>
      </section>

    </main>
  );
}
