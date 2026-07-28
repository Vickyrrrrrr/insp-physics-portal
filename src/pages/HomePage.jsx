import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Video, FileText, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import heroShowcaseImg from '../assets/hero_showcase.jpg';
import nitinSirImg from '../assets/nitin_sir.jpg';

export default function HomePage({ setPage }) {
  const [showMoreAbout, setShowMoreAbout] = useState(false);

  const go = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main style={{ paddingTop: 84, minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{ padding: '4rem 0 3rem', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          
          <Badge variant="accent" style={{ marginBottom: '1.25rem' }}>
            Founded 2020 • Nitin Sachan Sir (IIT Madras)
          </Badge>

          <h1 className="display-xl" style={{ marginBottom: '1.25rem', maxWidth: 1100 }}>
            Master Physics.<br />
            <span style={{ color: 'var(--c-accent)' }}>Conquer JEE Advanced & Olympiads.</span>
          </h1>

          {/* Desktop Full Subtext */}
          <p className="body-lg desktop-only-text" style={{ maxWidth: 880, marginBottom: '2.5rem' }}>
            The official portal of Nitin Sachan Sir (B.Tech IIT Madras). Built for serious aspirants moving into Class 9th, 10th, 11th, 12th & Droppers with 20,000+ handpicked problem exposures, Irodov & Pathfinder masterclasses, and AITS mock exams.
          </p>

          {/* Mobile Concise Subtext */}
          <p className="body-lg mobile-only-text" style={{ marginBottom: '1.5rem' }}>
            Official portal of Nitin Sachan Sir (IIT Madras). 20,000+ curated problems, Irodov & Pathfinder masterclasses, and AITS mock exams.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Button variant="primary" size="lg" onClick={() => go('packages')}>
              Explore Premium Packages <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" size="lg" className="desktop-only-btn" onClick={() => go('video')}>
              <Video size={16} /> Video Portal Masterclasses
            </Button>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', borderTop: '1px solid var(--c-border)', paddingTop: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--c-text-muted)' }}>
              <CheckCircle2 size={15} color="var(--c-green)" />
              <span><strong>20,000+</strong> Problems</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--c-text-muted)' }}>
              <CheckCircle2 size={15} color="var(--c-green)" />
              <span><strong>AIR 1, 14, 32</strong> Ranks</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--c-text-muted)' }}>
              <CheckCircle2 size={15} color="var(--c-green)" />
              <span><strong>INPhO & IPhO</strong> Medals</span>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Row */}
      <section style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)', padding: '1.75rem 0' }}>
        <div className="container">
          <div className="grid-4">
            <div className="card-inset" style={{ padding: '1rem', textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--c-text)' }}>20,000+</div>
              <div className="caption">Problems</div>
            </div>
            <div className="card-inset" style={{ padding: '1rem', textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--c-text)' }}>1,600+</div>
              <div className="caption">Mock Exams</div>
            </div>
            <div className="card-inset" style={{ padding: '1rem', textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--c-text)' }}>15 Yrs</div>
              <div className="caption">Experience</div>
            </div>
            <div className="card-inset" style={{ padding: '1rem', textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--c-text)' }}>100+</div>
              <div className="caption">INPhO Medals</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview with Mobile Expandable Subtext */}
      <section style={{ padding: '3.5rem 0', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            
            <div>
              <Badge variant="subtle" style={{ marginBottom: '0.75rem' }}>Faculty & Philosophy</Badge>
              <h2 className="display-md" style={{ marginBottom: '0.85rem' }}>
                Problem-first learning by an IIT Madras alumnus.
              </h2>
              
              <p className="body-sm" style={{ marginBottom: '0.85rem' }}>
                Founded in 2020 by Nitin Sachan Sir (B.Tech IIT Madras), INSP evolved from YouTube into India's premier physics portal.
              </p>

              {/* Progressive Mobile Expandable Content */}
              <div className={!showMoreAbout ? "mobile-hide" : ""}>
                <p className="body-sm" style={{ marginBottom: '1rem' }}>
                  At INSP, physics transforms into guided discovery. Active problem solving builds deeper conceptual clarity than passive lecture consumption.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                <Button variant="secondary" onClick={() => go('about')}>
                  Read Story <ArrowRight size={14} />
                </Button>
                
                <button 
                  onClick={() => setShowMoreAbout(!showMoreAbout)} 
                  className="mobile-only-btn btn btn-ghost"
                  style={{ fontSize: '0.8rem', color: 'var(--c-accent)' }}
                >
                  {showMoreAbout ? "Show less ↑" : "More details ↓"}
                </button>
              </div>
            </div>

            <Card style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'var(--c-surface-subtle)',
                  border: '2px solid var(--c-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '1rem', color: 'var(--c-accent)'
                }}>
                  NS
                </div>
                <div>
                  <h3 className="heading" style={{ fontSize: '1.05rem' }}>Nitin Sachan Sir</h3>
                  <p className="caption">Founder & Chief Educator</p>
                  <p className="mono caption text-accent" style={{ fontWeight: 600 }}>B.Tech • IIT Madras (IITM)</p>
                </div>
              </div>

              <div className="card-inset" style={{ padding: '0.85rem', fontStyle: 'italic', color: 'var(--c-text-muted)', fontSize: '0.82rem' }}>
                "Physics isn't inherently complex. It becomes complex when taught through memory shortcuts rather than first principles."
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section style={{ padding: '3.5rem 0', borderBottom: '1px solid var(--c-border)', background: 'var(--c-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Badge variant="accent" style={{ marginBottom: '0.5rem' }}>Ecosystem</Badge>
            <h2 className="display-md">Physics & Chemistry Suite</h2>
          </div>

          <div className="grid-3">
            <Card style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <Video size={18} color="var(--c-accent)" strokeWidth={1.5} style={{ marginBottom: '0.75rem' }} />
                <CardTitle style={{ marginBottom: '0.35rem' }}>Video Portal</CardTitle>
                <p className="body-sm" style={{ marginBottom: '1rem' }}>
                  Pathfinder, Irodov, Krotov, and INPhO level problem solving masterclasses.
                </p>
              </div>
              <div>
                <Badge variant="subtle" style={{ marginBottom: '0.75rem' }}>All Subscribers</Badge>
                <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => go('video')}>
                  View Video Portal
                </Button>
              </div>
            </Card>

            <Card style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <FileText size={18} color="var(--c-green)" strokeWidth={1.5} style={{ marginBottom: '0.75rem' }} />
                <CardTitle style={{ marginBottom: '0.35rem' }}>AITS Exam Portal</CardTitle>
                <p className="body-sm" style={{ marginBottom: '1rem' }}>
                  1,600+ JEE Advanced mock tests, Grand Test series (GTs), and percentile analytics.
                </p>
              </div>
              <div>
                <Badge variant="green" style={{ marginBottom: '0.75rem' }}>AITS Included</Badge>
                <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => go('packages')}>
                  View Test Series
                </Button>
              </div>
            </Card>

            <Card style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <BookOpen size={18} color="var(--c-amber)" strokeWidth={1.5} style={{ marginBottom: '0.75rem' }} />
                <CardTitle style={{ marginBottom: '0.35rem' }}>INSP COPs Books</CardTitle>
                <p className="body-sm" style={{ marginBottom: '1rem' }}>
                  Proprietary Concepts & Problems books authored by Nitin Sachan Sir (IITM).
                </p>
              </div>
              <div>
                <Badge variant="gold" style={{ marginBottom: '0.75rem' }}>COPs Bundle</Badge>
                <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => go('packages')}>
                  Explore Book Sets
                </Button>
              </div>
            </Card>
          </div>

        </div>
      </section>

      {/* Discount Bar */}
      <section style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="card-inset" style={{ padding: '0.85rem 1.15rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="mono" style={{ background: 'var(--c-surface)', padding: '0.25rem 0.55rem', borderRadius: 6, border: '1px solid var(--c-border)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--c-amber)' }}>
                FLAT10
              </span>
              <span className="body-sm">
                Use code <strong>FLAT10</strong> for 10% OFF, or referral codes for 11% OFF.
              </span>
            </div>
            <Button variant="ghost" onClick={() => go('packages')}>
              Apply at Checkout <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </section>

      {/* Leaderboard Teaser */}
      <section style={{ padding: '3.5rem 0', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <Badge variant="gold" style={{ marginBottom: '0.35rem' }}>Rankings</Badge>
              <h2 className="display-md">Compete with India's Best</h2>
            </div>
            <Button variant="secondary" onClick={() => go('leaderboard')}>
              Full Leaderboard <ArrowRight size={14} />
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {[
              { rank: "01", name: "Aditya", score: "238,010 pts", tier: "Lord of Circinus" },
              { rank: "02", name: "Kartikay Agrawal", score: "229,087 pts", tier: "Lord of Circinus" },
              { rank: "03", name: "Satyendu Kar", score: "206,471 pts", tier: "Lord of Circinus" },
              { rank: "04", name: "HK", score: "177,170 pts", tier: "Lord of Centaurus" },
              { rank: "05", name: "Nakshatra Yadav", score: "157,930 pts", tier: "Lord of Centaurus" }
            ].map(row => (
              <Card key={row.rank} style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                  <span className="mono text-dim" style={{ fontSize: '0.82rem', fontWeight: 600, flexShrink: 0 }}>#{row.rank}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.88rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
                  <span className="badge badge-subtle desktop-only-text">{row.tier}</span>
                  <span className="mono text-accent" style={{ fontWeight: 600, fontSize: '0.85rem', flexShrink: 0 }}>{row.score}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-md" style={{ marginBottom: '0.5rem' }}>
            Ready to elevate your physics preparation?
          </h2>
          <p className="body-sm" style={{ maxWidth: 460, margin: '0 auto 1.5rem' }}>
            Join thousands of JEE Advanced and Physics Olympiad aspirants training on INSP.
          </p>
          <Button variant="primary" size="lg" onClick={() => go('packages')}>
            Get Started with Premium
          </Button>
        </div>
      </section>

    </main>
  );
}
