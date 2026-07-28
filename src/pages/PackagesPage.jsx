import React, { useState, useMemo } from 'react';
import { INSP_COURSES } from '../services/apiMock';
import { Search, ArrowRight, Video, FileText, Check } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

function PackageCard({ course, discountRate, onBuy }) {
  const [activeTab, setActiveTab] = useState('video');

  const finalPrice = Math.round(course.price * (1 - discountRate));
  const savedAmount = course.price - finalPrice;
  const isFlagship = course.id === 'crash-2027-adv' || course.id === 'found-4yr-9th';

  return (
    <div 
      className="card" 
      style={{ 
        padding: '1.25rem', 
        display: 'flex', 
        flexDirection: 'column', 
        justify: 'space-between',
        border: isFlagship ? '1px solid var(--c-accent)' : '1px solid var(--c-border)',
        background: isFlagship ? 'var(--c-surface-hover)' : 'var(--c-surface)',
        position: 'relative'
      }}
    >
      <div>
        {/* Top Badges */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="badge badge-subtle">{course.badge}</span>
            {isFlagship && (
              <span className="badge badge-accent" style={{ background: 'var(--c-accent-dim)', padding: '0.15rem 0.5rem', borderRadius: 4 }}>
                Flagship Program
              </span>
            )}
          </div>
          <span className="caption mono text-dim">{course.targetAudience}</span>
        </div>

        {/* Title */}
        <h3 className="heading" style={{ fontSize: '1.1rem', marginBottom: '0.25rem', lineHeight: 1.3 }}>
          {course.title}
        </h3>
        <p className="caption" style={{ color: 'var(--c-accent)', fontWeight: 600, marginBottom: '1.15rem' }}>
          {course.subtitle}
        </p>

        {/* Responsive Pricing Box */}
        <div className="card-inset" style={{ padding: '0.85rem 1rem', marginBottom: '1.15rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span className="mono" style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--c-text)' }}>
                  ₹{finalPrice.toLocaleString('en-IN')}
                </span>
                {discountRate > 0 && (
                  <span className="mono caption" style={{ textDecoration: 'line-through', color: 'var(--c-text-dim)', fontSize: '0.85rem' }}>
                    ₹{course.price.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              <div className="caption text-green" style={{ fontWeight: 600, marginTop: 2, fontSize: '0.76rem' }}>
                GST Included {discountRate > 0 && `• Save ₹${savedAmount.toLocaleString('en-IN')}`}
              </div>
            </div>
          </div>

          <button className="btn btn-primary" onClick={onBuy} style={{ fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}>
            Enroll Now <ArrowRight size={14} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--c-border)', marginBottom: '0.85rem' }}>
          <button
            onClick={() => setActiveTab('video')}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'video' ? '2px solid var(--c-accent)' : '2px solid transparent',
              color: activeTab === 'video' ? 'var(--c-accent)' : 'var(--c-text-dim)',
              padding: '0.4rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              gap: '0.35rem',
              fontFamily: 'var(--font-sans)'
            }}
          >
            <Video size={13} /> Video Portal
          </button>

          <button
            onClick={() => setActiveTab('exam')}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'exam' ? '2px solid var(--c-green)' : '2px solid transparent',
              color: activeTab === 'exam' ? 'var(--c-green)' : 'var(--c-text-dim)',
              padding: '0.4rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              gap: '0.35rem',
              fontFamily: 'var(--font-sans)'
            }}
          >
            <FileText size={13} /> AITS Exam Portal
          </button>
        </div>

        {/* Tab Feature Items */}
        {activeTab === 'video' ? (
          <div>
            <div className="caption mono text-amber" style={{ marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.76rem' }}>
              Validity: {course.videoPortal.validity}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {course.videoPortal.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="body-sm" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.8rem' }}>
                  <Check size={13} color="var(--c-accent)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <div className="caption mono text-green" style={{ marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.76rem' }}>
              Exams Included: {course.examPortal.totalExams || course.examPortal.practiceExams || 100}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {course.examPortal.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="body-sm" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.8rem' }}>
                  <Check size={13} color="var(--c-green)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PackagesPage({ setPage }) {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [couponCode, setCouponCode] = useState('FLAT10');
  const [appliedDiscount, setAppliedDiscount] = useState(0.10);
  const [couponStatus, setCouponStatus] = useState({ type: 'success', msg: 'FLAT10 applied (10% OFF)' });

  const categories = ['All', 'Crash Course', 'Foundation', 'JEE Mains+Adv', 'Physics+Chemistry', 'Exam Pass'];

  const filteredCourses = useMemo(() => {
    return INSP_COURSES.filter(c => {
      let matchCat = true;
      if (category === 'Crash Course') matchCat = c.category === 'crash';
      else if (category === 'Foundation') matchCat = c.category === 'foundation';
      else if (category === 'JEE Mains+Adv') matchCat = c.category === '2year' || c.category === '1year';
      else if (category === 'Physics+Chemistry') matchCat = c.title.toLowerCase().includes('chemistry') || c.badge.toLowerCase().includes('chemistry') || c.id.startsWith('pc-');
      else if (category === 'Exam Pass') matchCat = c.category === 'pass';

      const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || 
                          c.subtitle.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [category, search]);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (!code) {
      setAppliedDiscount(0);
      setCouponStatus({ type: '', msg: '' });
      return;
    }
    if (code === 'FLAT10') {
      setAppliedDiscount(0.10);
      setCouponStatus({ type: 'success', msg: 'FLAT10 applied (10% OFF)' });
    } else if (code.length >= 4) {
      setAppliedDiscount(0.11);
      setCouponStatus({ type: 'success', msg: `Referral code ${code} applied (11% OFF + Referral Coins)` });
    } else {
      setAppliedDiscount(0);
      setCouponStatus({ type: 'error', msg: 'Invalid coupon code' });
    }
  };

  const handleEnroll = (course) => {
    const finalPrice = Math.round(course.price * (1 - appliedDiscount));
    alert(`Enrolling in ${course.title} for ₹${finalPrice.toLocaleString('en-IN')}. Redirecting to INSP Secure Checkout...`);
  };

  return (
    <main style={{ paddingTop: 84, minHeight: '100vh' }}>
      
      {/* Header */}
      <section style={{ padding: '3.5rem 0 2rem', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <Badge variant="gold" style={{ marginBottom: '0.75rem' }}>Enrollment Programs</Badge>
          <h1 className="display-lg" style={{ marginBottom: '0.85rem' }}>
            INSP Premium Packages
          </h1>
          <p className="body-lg" style={{ maxWidth: 760 }}>
            Every plan includes full Video Portal masterclass access, INSP COPs books, and AITS exam series.
          </p>
        </div>
      </section>

      {/* Filter & Coupon Strip */}
      <section style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--c-border)', background: 'var(--c-surface)' }}>
        <div className="container">
          
          {/* Coupon Input Box */}
          <div className="card-inset" style={{ padding: '1rem 1.15rem', marginBottom: '1.25rem' }}>
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="caption" style={{ fontWeight: 600, minWidth: 100 }}>Promo / Referral:</span>
              <input 
                type="text" 
                className="input" 
                value={couponCode} 
                onChange={(e) => setCouponCode(e.target.value)} 
                placeholder="Enter FLAT10 or referral code"
                style={{ flex: 1, minWidth: 180, textTransform: 'uppercase' }}
              />
              <button type="submit" className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>
                Apply
              </button>
            </form>
            {couponStatus.msg && (
              <div className={`caption ${couponStatus.type === 'success' ? 'text-green' : 'text-amber'}`} style={{ marginTop: '0.45rem', fontWeight: 600 }}>
                {couponStatus.msg}
              </div>
            )}
          </div>

          {/* Smooth Horizontal Category Bar */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem', scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  background: category === cat ? 'var(--c-accent)' : 'var(--c-surface-subtle)',
                  color: category === cat ? '#ffffff' : 'var(--c-text-muted)',
                  border: '1px solid ' + (category === cat ? 'var(--c-accent)' : 'var(--c-border)'),
                  padding: '0.35rem 0.85rem',
                  borderRadius: 9999,
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Package Cards Grid */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="grid-2">
            {filteredCourses.map(course => (
              <PackageCard 
                key={course.id} 
                course={course} 
                discountRate={appliedDiscount}
                onBuy={() => handleEnroll(course)}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
