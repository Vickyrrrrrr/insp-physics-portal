import React, { useState, useMemo } from 'react';
import { INSP_COURSES } from '../services/apiMock';
import { Search, ArrowRight, Video, FileText, Shield, X, Check, Sparkles, BookOpen, UserCheck, HelpCircle } from 'lucide-react';

function PackageCard({ course, discountRate, onBuy }) {
  const [activeTab, setActiveTab] = useState('video');

  const finalPrice = Math.round(course.price * (1 - discountRate));
  const savedAmount = course.price - finalPrice;
  const isFlagship = course.id === 'crash-2027-adv' || course.id === 'found-4yr-9th';

  return (
    <div 
      className="card" 
      style={{ 
        padding: '1.75rem', 
        display: 'flex', 
        flexDirection: 'column', 
        justify: 'space-between',
        border: isFlagship ? '1px solid var(--c-accent)' : '1px solid var(--c-border)',
        background: isFlagship ? 'var(--c-surface-hover)' : 'var(--c-surface)',
        position: 'relative'
      }}
    >
      {isFlagship && (
        <span className="badge badge-accent" style={{ position: 'absolute', top: -11, right: 20, background: 'var(--c-bg) !important', padding: '0.15rem 0.6rem' }}>
          Flagship Program
        </span>
      )}

      <div>
        {/* Top Badges */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
          <span className="badge badge-subtle">{course.badge}</span>
          <span className="caption mono text-dim">{course.targetAudience}</span>
        </div>

        {/* Title */}
        <h3 className="heading" style={{ fontSize: '1.15rem', marginBottom: '0.35rem', lineHeight: 1.3 }}>
          {course.title}
        </h3>
        <p className="caption" style={{ color: 'var(--c-accent)', fontWeight: 600, marginBottom: '1.5rem' }}>
          {course.subtitle}
        </p>

        {/* Pricing Box */}
        <div className="card-inset" style={{ padding: '1.1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
              <span className="mono" style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--c-text)' }}>
                ₹{finalPrice.toLocaleString('en-IN')}
              </span>
              {discountRate > 0 && (
                <span className="mono caption" style={{ textDecoration: 'line-through', color: 'var(--c-text-dim)', fontSize: '0.9rem' }}>
                  ₹{course.price.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <div className="caption text-green" style={{ fontWeight: 600, marginTop: 2 }}>
              GST Included {discountRate > 0 && `• Save ₹${savedAmount.toLocaleString('en-IN')}`}
            </div>
          </div>

          <button className="btn btn-primary" onClick={onBuy} style={{ fontSize: '0.85rem' }}>
            Enroll Now <ArrowRight size={14} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--c-border)', marginBottom: '1rem' }}>
          <button
            onClick={() => setActiveTab('video')}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'video' ? '2px solid var(--c-accent)' : '2px solid transparent',
              color: activeTab === 'video' ? 'var(--c-accent)' : 'var(--c-text-dim)',
              padding: '0.45rem',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-sans)'
            }}
          >
            <Video size={14} /> Video Portal
          </button>

          <button
            onClick={() => setActiveTab('exam')}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'exam' ? '2px solid var(--c-green)' : '2px solid transparent',
              color: activeTab === 'exam' ? 'var(--c-green)' : 'var(--c-text-dim)',
              padding: '0.45rem',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-sans)'
            }}
          >
            <FileText size={14} /> AITS Exam Portal
          </button>
        </div>

        {/* Tab Feature Items */}
        {activeTab === 'video' ? (
          <div>
            <div className="caption mono text-amber" style={{ marginBottom: '0.65rem', fontWeight: 600 }}>
              Validity: {course.videoPortal.validity}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {course.videoPortal.features.slice(0, 4).map((feat, idx) => (
                <div key={idx} className="body-sm" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <Check size={14} color="var(--c-accent)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="caption mono text-green" style={{ marginBottom: '0.65rem', fontWeight: 600 }}>
              Validity: {course.examPortal.validity} • {course.examPortal.practiceExams} Practice Exams
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {course.examPortal.features.map((feat, idx) => (
                <div key={idx} className="body-sm" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <Check size={14} color="var(--c-green)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default function PackagesPage({ setPage }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [couponCode, setCouponCode] = useState('FLAT10');
  const [couponApplied, setCouponApplied] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'foundation', label: 'Foundation (9th-10th)' },
    { id: '2year', label: '2-Year (Class 11th)' },
    { id: '1year', label: '1-Year (Class 12th & Droppers)' },
    { id: 'crash', label: 'Crash Course' },
    { id: 'pass', label: 'AITS Test Passes' },
  ];

  const discountRate = useMemo(() => {
    if (!couponApplied || !couponCode.trim()) return 0;
    const clean = couponCode.trim().toUpperCase();
    if (clean === 'FLAT10') return 0.10;
    if (clean.length >= 4) return 0.11;
    return 0;
  }, [couponCode, couponApplied]);

  const filteredCourses = useMemo(() => {
    return INSP_COURSES.filter(course => {
      const matchCat = activeCategory === 'all' || course.category === activeCategory;
      const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main style={{ paddingTop: 60, minHeight: '100vh' }}>
      
      {/* Hero Header */}
      <div style={{ padding: '4.5rem 0 3.5rem', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="badge badge-accent" style={{ marginBottom: '1.25rem' }}>INSP Premium Admissions</div>
          <h1 className="display-lg" style={{ marginBottom: '0.85rem' }}>
            Structured Physics & Chemistry Programs
          </h1>
          <p className="body-lg" style={{ maxWidth: 640 }}>
            Every subscription includes complete Video Portal access, AITS mock test series, and online reader access to INSP COPs books by Nitin Sachan Sir (B.Tech IIT Madras).
          </p>
        </div>
      </div>

      {/* Interactive Coupon Calculator Bar */}
      <div style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)', padding: '1.25rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span className="mono text-amber" style={{ background: 'var(--c-surface-subtle)', padding: '0.3rem 0.75rem', borderRadius: 6, border: '1px solid var(--c-border)', fontWeight: 700, fontSize: '0.88rem' }}>
              FLAT10
            </span>
            <span className="body-sm">
              Use code <strong>FLAT10</strong> for 10% instant discount, or a Student Referral code for 11% OFF + Referral Coins.
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <input 
              className="input"
              value={couponCode}
              onChange={(e) => { setCouponCode(e.target.value); setCouponApplied(true); }}
              placeholder="Enter Coupon Code"
              style={{ width: 170, fontSize: '0.85rem' }}
            />
            <button 
              className={couponApplied ? "btn btn-secondary" : "btn btn-primary"}
              onClick={() => setCouponApplied(!couponApplied)}
              style={{ fontSize: '0.85rem' }}
            >
              {couponApplied ? "✓ Discount Applied" : "Apply Code"}
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div style={{ borderBottom: '1px solid var(--c-border)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? "btn btn-secondary" : "btn btn-ghost"}
                style={{ fontSize: '0.85rem', padding: '0.45rem 0.95rem' }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', width: 220 }}>
            <input 
              className="input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter course..."
              style={{ paddingLeft: '2.1rem', fontSize: '0.85rem' }}
            />
            <Search size={14} color="var(--c-text-dim)" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div style={{ padding: '3.5rem 0 5rem' }}>
        <div className="container">
          <div className="grid-2">
            {filteredCourses.map(course => (
              <PackageCard 
                key={course.id}
                course={course}
                discountRate={discountRate}
                onBuy={() => setSelectedCourse(course)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Why INSP Premium Comparison Table */}
      <div style={{ background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)', borderBottom: '1px solid var(--c-border)', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>Comparison Matrix</div>
            <h2 className="display-md">Why Aspirants Choose INSP Premium</h2>
          </div>

          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '1rem 1.5rem', background: 'var(--c-surface-subtle)', borderBottom: '1px solid var(--c-border)' }}>
              <span className="caption" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Feature</span>
              <span className="caption" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center' }}>Free YouTube</span>
              <span className="caption text-accent" style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center' }}>INSP Premium</span>
            </div>

            {[
              { feature: "Pathfinder & Irodov Masterclasses", free: "Selected videos", premium: "Full 20,000+ Problem Archive" },
              { feature: "Nitin Sachan Sir (IITM) Mentorship", free: "No", premium: "Personal Mentorship & Backlog Tracker" },
              { feature: "AITS Grand Test Series (GTs)", free: "No", premium: "Up to 1,600 Practice Mock Tests" },
              { feature: "INSP COPs Hardcover Book Reader", free: "No", premium: "Full Online Access Included" },
              { feature: "Ranker Private Forum & Coin Rewards", free: "Read-only", premium: "Post Threads & Redeem Hardware Rewards" }
            ].map((row, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '1rem 1.5rem', borderBottom: '1px solid var(--c-border)', alignItems: 'center' }}>
                <span className="body-sm" style={{ fontWeight: 500, color: 'var(--c-text)' }}>{row.feature}</span>
                <span className="caption text-dim" style={{ textAlign: 'center' }}>{row.free}</span>
                <span className="body-sm text-accent" style={{ fontWeight: 600, textAlign: 'center' }}>✓ {row.premium}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Checkout Invoice */}
      {selectedCourse && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: '1.25rem'
        }}>
          <div className="card" style={{ width: '100%', maxWidth: 480, padding: '1.75rem', background: '#09090b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 className="heading" style={{ fontSize: '1.1rem' }}>Order Invoice Summary</h3>
              <button onClick={() => setSelectedCourse(null)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            <div className="card-inset" style={{ padding: '0.85rem 1rem', marginBottom: '1rem' }}>
              <div className="caption mono text-accent">PACKAGE</div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: 2 }}>{selectedCourse.title}</div>
              <div className="caption">{selectedCourse.subtitle}</div>
            </div>

            <div style={{ borderTop: '1px solid var(--c-border)', borderBottom: '1px solid var(--c-border)', padding: '0.85rem 0', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem', color: 'var(--c-text-muted)' }}>
                <span>Package List Price:</span>
                <span className="mono">₹{selectedCourse.price.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem', color: 'var(--c-green)' }}>
                <span>Discount ({couponCode || 'FLAT10'}):</span>
                <span className="mono">- ₹{Math.round(selectedCourse.price * discountRate).toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--c-text-dim)' }}>
                <span>18% GST (Included):</span>
                <span className="mono">₹{Math.round(selectedCourse.price * (1 - discountRate) * 0.18 / 1.18).toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <span className="caption">Total Amount Payable</span>
                <div className="mono" style={{ fontSize: '1.6rem', fontWeight: 800 }}>
                  ₹{Math.round(selectedCourse.price * (1 - discountRate)).toLocaleString('en-IN')}
                </div>
              </div>
              <span className="badge badge-green">GST Included</span>
            </div>

            <button 
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
              onClick={() => alert(`Redirecting to Razorpay Gateway for ₹${Math.round(selectedCourse.price * (1 - discountRate)).toLocaleString('en-IN')}... (Connected via backend API)`)}
            >
              <Shield size={16} /> Proceed to Secure Payment
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
