import React from 'react';
import { ArrowRight, CheckCircle2, Video, FileText, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export default function HomePage({ setPage }) {
  const go = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main style={{ paddingTop: 60, minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{ padding: '5rem 0 4rem', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          
          <Badge variant="accent" style={{ marginBottom: '1.25rem' }}>
            Founded 2020 • Nitin Sachan Sir (IIT Madras)
          </Badge>

          <h1 className="display-xl" style={{ marginBottom: '1.25rem', maxWidth: 1100 }}>
            Master Physics.<br />
            <span style={{ color: 'var(--c-accent)' }}>Conquer JEE Advanced & Olympiads.</span>
          </h1>

          <p className="body-lg" style={{ maxWidth: 880, marginBottom: '2.5rem' }}>
            The official portal of Nitin Sachan Sir (B.Tech IIT Madras). Built for serious aspirants moving into Class 9th, 10th, 11th, 12th & Droppers with 20,000+ handpicked problem exposures, Irodov & Pathfinder masterclasses, and AITS mock exams.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Button variant="primary" size="lg" onClick={() => go('packages')}>
              Explore Premium Packages <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => go('video')}>
              <Video size={16} /> Video Portal Masterclasses
            </Button>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid var(--c-border)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--c-text-muted)' }}>
              <CheckCircle2 size={16} color="var(--c-green)" />
              <span><strong>20,000+</strong> Curated Problems</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--c-text-muted)' }}>
              <CheckCircle2 size={16} color="var(--c-green)" />
              <span><strong>AIR 1, 14, 32</strong> Alumni Track</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--c-text-muted)' }}>
              <CheckCircle2 size={16} color="var(--c-green)" />
              <span><strong>INPhO & IPhO</strong> Medal Track</span>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Row */}
      <section style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)', padding: '2rem 0' }}>
        <div className="container">
          <div className="grid-4">
            <div className="card-inset" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--c-text)' }}>20,000+</div>
              <div className="caption">Curated Physics Problems</div>
            </div>
            <div className="card-inset" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--c-text)' }}>1,600+</div>
              <div className="caption">Practice & AITS Mock Exams</div>
            </div>
            <div className="card-inset" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--c-text)' }}>15 Yrs</div>
              <div className="caption">Competitive Physics Experience</div>
            </div>
            <div className="card-inset" style={{ padding: '1.25rem', textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--c-text)' }}>100+</div>
              <div className="caption">INPhO Selection Track</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            
            <div>
              <Badge variant="subtle" style={{ marginBottom: '1rem' }}>Faculty & Philosophy</Badge>
              <h2 className="display-md" style={{ marginBottom: '1rem' }}>
                Problem-first learning. Built by an IIT Madras alumnus.
              </h2>
              <p className="body-sm" style={{ marginBottom: '1rem' }}>
                Founded in 2020 during academic disruptions by Nitin Sachan Sir (B.Tech IIT Madras), INSP evolved from a YouTube channel into India's premier online learning environment for advanced physics.
              </p>
              <p className="body-sm" style={{ marginBottom: '1.5rem' }}>
                At INSP, physics transforms from a daunting subject into a guided discovery. Studies confirm that active problem solving builds deeper conceptual clarity than passive lecture consumption.
              </p>
              <Button variant="secondary" onClick={() => go('about')}>
                Read Our Story <ArrowRight size={14} />
              </Button>
            </div>

            <Card style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'var(--c-surface-subtle)',
                  border: '1px solid var(--c-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '1.1rem', color: 'var(--c-accent)'
                }}>
                  NS
                </div>
                <div>
                  <h3 className="heading">Nitin Sachan Sir</h3>
                  <p className="caption" style={{ color: 'var(--c-text-muted)' }}>Founder & Chief Educator, INSP</p>
                  <p className="mono caption" style={{ color: 'var(--c-accent)' }}>B.Tech • IIT Madras (IITM)</p>
                </div>
              </div>

              <div className="card-inset" style={{ padding: '1rem', fontStyle: 'italic', color: 'var(--c-text-muted)', fontSize: '0.85rem' }}>
                "Physics isn't inherently complex. It becomes complex when taught through memory shortcuts rather than first-principles analytical reasoning."
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--c-border)', background: 'var(--c-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Badge variant="accent" style={{ marginBottom: '0.75rem' }}>Ecosystem</Badge>
            <h2 className="display-md">Complete Physics & Chemistry Suite</h2>
          </div>

          <div className="grid-3">
            <Card style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <Video size={20} color="var(--c-accent)" strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
                <CardTitle style={{ marginBottom: '0.5rem' }}>Video Portal</CardTitle>
                <p className="body-sm" style={{ marginBottom: '1.25rem' }}>
                  Topicwise problem-solving masterclasses covering Pathfinder, Irodov, Krotov, and INPhO level problems. Live and recorded streams.
                </p>
              </div>
              <div>
                <Badge variant="subtle" style={{ marginBottom: '0.85rem' }}>All Subscribers</Badge>
                <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => go('video')}>
                  View Video Portal
                </Button>
              </div>
            </Card>

            <Card style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <FileText size={20} color="var(--c-green)" strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
                <CardTitle style={{ marginBottom: '0.5rem' }}>AITS Exam Portal</CardTitle>
                <p className="body-sm" style={{ marginBottom: '1.25rem' }}>
                  Up to 1,600 self-created JEE Advanced mock tests, Grand Test series (GTs), and instant detailed percentile analytics.
                </p>
              </div>
              <div>
                <Badge variant="green" style={{ marginBottom: '0.85rem' }}>AITS Included</Badge>
                <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => go('packages')}>
                  View Test Series
                </Button>
              </div>
            </Card>

            <Card style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <BookOpen size={20} color="var(--c-amber)" strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
                <CardTitle style={{ marginBottom: '0.5rem' }}>INSP COPs Books</CardTitle>
                <p className="body-sm" style={{ marginBottom: '1.25rem' }}>
                  Proprietary Concepts & Problems books written by Nitin Sachan Sir (IITM) specifically for JEE Advanced and Olympiads.
                </p>
              </div>
              <div>
                <Badge variant="gold" style={{ marginBottom: '0.85rem' }}>COPs Bundle</Badge>
                <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => go('packages')}>
                  Explore Book Sets
                </Button>
              </div>
            </Card>
          </div>

        </div>
      </section>

      {/* Discount Bar */}
      <section style={{ padding: '2rem 0', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="card-inset" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <span className="mono" style={{ background: 'var(--c-surface)', padding: '0.3rem 0.65rem', borderRadius: 6, border: '1px solid var(--c-border)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--c-amber)' }}>
                FLAT10
              </span>
              <span className="body-sm">
                Use coupon code <strong>FLAT10</strong> for 10% discount, or any Student Referral Code for 11% OFF + Referral Coins.
              </span>
            </div>
            <Button variant="ghost" onClick={() => go('packages')}>
              Apply Code at Checkout <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </section>

      {/* Leaderboard Teaser */}
      <section style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <Badge variant="gold" style={{ marginBottom: '0.5rem' }}>Rankings</Badge>
              <h2 className="display-md">Compete with India's Best</h2>
            </div>
            <Button variant="secondary" onClick={() => go('leaderboard')}>
              Full Leaderboard <ArrowRight size={14} />
            </Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { rank: "01", name: "Aditya", score: "238,010 pts", tier: "Lord of Circinus" },
              { rank: "02", name: "Kartikay Agrawal", score: "229,087 pts", tier: "Lord of Circinus" },
              { rank: "03", name: "Satyendu Kar", score: "206,471 pts", tier: "Lord of Circinus" },
              { rank: "04", name: "HK", score: "177,170 pts", tier: "Lord of Centaurus" },
              { rank: "05", name: "Nakshatra Yadav", score: "157,930 pts", tier: "Lord of Centaurus" }
            ].map(row => (
              <Card key={row.rank} style={{ padding: '0.85rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <span className="mono text-dim" style={{ fontSize: '0.85rem', fontWeight: 600 }}>#{row.rank}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{row.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Badge variant="subtle">{row.tier}</Badge>
                  <span className="mono text-accent" style={{ fontWeight: 600, fontSize: '0.88rem' }}>{row.score}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-md" style={{ marginBottom: '0.75rem' }}>
            Ready to elevate your physics preparation?
          </h2>
          <p className="body-sm" style={{ maxWidth: 500, margin: '0 auto 2rem' }}>
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
