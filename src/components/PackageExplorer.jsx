import React, { useState, useMemo } from 'react';
import { INSP_COURSES } from '../services/apiMock';
import { Search, Tag, Check, ArrowRight, Video, FileText, Gift, Calculator, Sparkles, Shield, X } from 'lucide-react';

export default function PackageExplorer({ targetRef }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [couponCode, setCouponCode] = useState('FLAT10');
  const [couponApplied, setCouponApplied] = useState(true);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);

  // Categories list
  const categories = [
    { id: 'all', label: 'All Courses (10)' },
    { id: 'foundation', label: 'Foundation Olympiad (9th & 10th)' },
    { id: '2year', label: '2-Year Batches (11th Moving)' },
    { id: '1year', label: '1-Year & Droppers (12th)' },
    { id: 'crash', label: 'Crash Course (2027)' },
    { id: 'pass', label: 'Test Pass / Premium (Diamond/Platinum)' },
  ];

  // Calculate discount rate
  const discountMultiplier = useMemo(() => {
    if (!couponApplied || !couponCode.trim()) return 0;
    const cleanCode = couponCode.trim().toUpperCase();
    if (cleanCode === 'FLAT10') return 0.10; // 10%
    if (cleanCode.length >= 4) return 0.11; // 11% for student referral codes
    return 0;
  }, [couponCode, couponApplied]);

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return INSP_COURSES.filter(course => {
      const matchCat = activeCategory === 'all' || course.category === activeCategory;
      const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section ref={targetRef} style={{ padding: '3.5rem 0', minHeight: '80vh' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge-tag badge-blue" style={{ marginBottom: '0.75rem' }}>
            OFFICIAL SUBSCRIPTION PACKAGES
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            INSP Premium Courses & Test Series
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', fontSize: '0.95rem' }}>
            Select your targeted academic year for JEE Mains, JEE Advanced, and Physics Olympiads (INPhO). All packages include complete video portal access & exam portal practice tests.
          </p>
        </div>

        {/* Discount Bar & Calculator */}
        <div className="glass-card" style={{ padding: '1.25rem 1.75rem', marginBottom: '2.5rem', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(59, 130, 246, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(245, 158, 11, 0.15)', padding: '0.5rem', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.3)' }}>
                <Calculator size={20} color="var(--accent-gold)" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>Dynamic Discount & Referral Calculator</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Enter code <code style={{ color: 'var(--accent-gold)' }}>FLAT10</code> for 10% instant off, or any Student Referral Code for 11% OFF + Referral Coins.
                </div>
              </div>
            </div>

            {/* Input & Apply Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  value={couponCode}
                  onChange={(e) => { setCouponCode(e.target.value); setCouponApplied(true); }}
                  placeholder="Enter Coupon / Referral Code"
                  style={{
                    background: '#070b14',
                    border: '1px solid var(--border-dim)',
                    color: '#ffffff',
                    padding: '0.6rem 1rem 0.6rem 2.2rem',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    width: '240px'
                  }}
                />
                <Tag size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
              </div>

              <button 
                onClick={() => setCouponApplied(!couponApplied)}
                style={{
                  background: couponApplied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                  color: couponApplied ? '#34d399' : '#60a5fa',
                  border: couponApplied ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(59, 130, 246, 0.4)',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {couponApplied ? '✓ Code Applied' : 'Apply Code'}
              </button>
            </div>

          </div>
        </div>

        {/* Category Navigation & Search */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  background: activeCategory === cat.id ? 'var(--primary-blue)' : 'rgba(255,255,255,0.04)',
                  color: activeCategory === cat.id ? '#ffffff' : 'var(--text-sub)',
                  border: activeCategory === cat.id ? 'none' : '1px solid var(--border-dim)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '240px' }}>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course title..."
              style={{
                background: '#070b14',
                border: '1px solid var(--border-dim)',
                color: '#ffffff',
                padding: '0.5rem 1rem 0.5rem 2.2rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                width: '100%'
              }}
            />
            <Search size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>

        </div>

        {/* Course Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(540px, 1fr))', gap: '1.75rem' }}>
          {filteredCourses.map((course) => {
            const finalPrice = Math.round(course.price * (1 - discountMultiplier));
            const savedAmount = course.price - finalPrice;

            return (
              <CourseCard 
                key={course.id}
                course={course}
                finalPrice={finalPrice}
                savedAmount={savedAmount}
                discountRate={discountMultiplier * 100}
                onBuy={() => setSelectedCourseForModal({ ...course, finalPrice, savedAmount })}
              />
            );
          })}
        </div>

      </div>

      {/* Checkout Modal */}
      {selectedCourseForModal && (
        <CheckoutModal 
          course={selectedCourseForModal} 
          couponCode={couponCode}
          onClose={() => setSelectedCourseForModal(null)} 
        />
      )}
    </section>
  );
}

// Course Card Sub-Component
function CourseCard({ course, finalPrice, savedAmount, discountRate, onBuy }) {
  const [activePortalTab, setActivePortalTab] = useState('video');

  return (
    <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      
      {/* Top Header */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <span className="badge-tag badge-blue">{course.badge}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Target: {course.targetAudience}
          </span>
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.35rem', lineHeight: 1.3, color: '#ffffff' }}>
          {course.title}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--primary-cyan)', marginBottom: '1.25rem', fontWeight: 600 }}>
          {course.subtitle}
        </p>

        {/* Pricing Block */}
        <div style={{ 
          background: 'rgba(7, 11, 20, 0.7)', 
          borderRadius: '12px', 
          padding: '1rem 1.25rem', 
          border: '1px solid var(--border-dim)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.25rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
                ₹{finalPrice.toLocaleString('en-IN')}
              </span>
              {discountRate > 0 && (
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ₹{course.price.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-green)', fontWeight: 600 }}>
              Price includes 18% GST {discountRate > 0 && `• You save ₹${savedAmount.toLocaleString('en-IN')} (${discountRate}%)`}
            </div>
          </div>

          <button 
            className="btn-primary" 
            onClick={onBuy}
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
          >
            Buy Now <ArrowRight size={15} />
          </button>
        </div>

        {/* Dual Portal Switcher Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-dim)', marginBottom: '1rem' }}>
          <button
            onClick={() => setActivePortalTab('video')}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              borderBottom: activePortalTab === 'video' ? '2px solid var(--primary-blue)' : '2px solid transparent',
              color: activePortalTab === 'video' ? '#60a5fa' : 'var(--text-muted)',
              padding: '0.5rem',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}
          >
            <Video size={15} /> Video Portal Features
          </button>
          
          <button
            onClick={() => setActivePortalTab('exam')}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              borderBottom: activePortalTab === 'exam' ? '2px solid var(--primary-cyan)' : '2px solid transparent',
              color: activePortalTab === 'exam' ? 'var(--primary-cyan)' : 'var(--text-muted)',
              padding: '0.5rem',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}
          >
            <FileText size={15} /> Exam Portal & Tests
          </button>
        </div>

        {/* Tab Content */}
        {activePortalTab === 'video' ? (
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginBottom: '0.6rem', fontWeight: 600 }}>
              📅 Validity: {course.videoPortal.validity}
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {course.videoPortal.features.map((feat, idx) => (
                <li key={idx} style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginBottom: '0.4rem', display: 'flex', alignItems: 'flex-start', gap: '0.4rem', lineHeight: 1.4 }}>
                  <Check size={14} color="var(--primary-blue)" style={{ minWidth: '14px', marginTop: '2px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--primary-cyan)', marginBottom: '0.6rem', fontWeight: 600 }}>
              📊 Validity: {course.examPortal.validity} • {course.examPortal.practiceExams} Practice Exams
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {course.examPortal.features.map((feat, idx) => (
                <li key={idx} style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginBottom: '0.4rem', display: 'flex', alignItems: 'flex-start', gap: '0.4rem', lineHeight: 1.4 }}>
                  <Check size={14} color="var(--primary-cyan)" style={{ minWidth: '14px', marginTop: '2px' }} />
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

// Checkout Invoice Modal
function CheckoutModal({ course, couponCode, onClose }) {
  const gstRate = 0.18;
  const basePriceBeforeGst = Math.round(course.finalPrice / (1 + gstRate));
  const gstAmount = course.finalPrice - basePriceBeforeGst;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1.5rem'
    }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '520px', padding: '2rem', background: '#0d1322', border: '1px solid var(--primary-blue)' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Checkout Summary</h3>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ background: '#070b14', padding: '1rem', borderRadius: '10px', marginBottom: '1.25rem', border: '1px solid var(--border-dim)' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--primary-cyan)', fontFamily: 'var(--font-mono)' }}>COURSE PACKAGE</div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginTop: '0.2rem' }}>{course.title}</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{course.subtitle}</div>
        </div>

        {/* Invoice Items */}
        <div style={{ borderTop: '1px solid var(--border-dim)', borderBottom: '1px solid var(--border-dim)', padding: '1rem 0', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--text-sub)', marginBottom: '0.5rem' }}>
            <span>Original Package Price:</span>
            <span>₹{course.price.toLocaleString('en-IN')}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: 'var(--accent-green)', marginBottom: '0.5rem' }}>
            <span>Applied Coupon ({couponCode || 'FLAT10'}):</span>
            <span>- ₹{course.savedAmount.toLocaleString('en-IN')}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
            <span>Net Taxable Amount:</span>
            <span>₹{basePriceBeforeGst.toLocaleString('en-IN')}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <span>Includes 18% GST:</span>
            <span>₹{gstAmount.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Total Payable */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Amount Payable</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>₹{course.finalPrice.toLocaleString('en-IN')}</div>
          </div>
          <div className="badge-tag badge-green">GST Included</div>
        </div>

        {/* Payment CTA */}
        <button 
          className="btn-primary" 
          onClick={() => alert(`Proceeding to Razorpay Gateway for ₹${course.finalPrice.toLocaleString('en-IN')}... (In real app, backend API executes payment token)`)}
          style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', fontSize: '1rem' }}
        >
          <Shield size={18} /> Proceed to Secure Payment
        </button>

        <p style={{ textAlign: 'center', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.85rem' }}>
          🔒 Encrypted SSL Payment • Instant Course Activation on INSP Portal
        </p>

      </div>
    </div>
  );
}
