import React, { useState } from 'react';
import { ShoppingBag, Coins, ArrowRight } from 'lucide-react';

const MERCHANDISE_ITEMS = [
  {
    id: "m1",
    name: "INSP Engraved Apple iPad Pro (11-inch)",
    category: "Electronics",
    coins: 99900,
    inr: "₹99,900",
    badge: "Grand Prize",
    image: "https://www.inspedu.in/assets/images/redeem_products/ipad.PNG",
    description: "Official 11-inch Apple iPad Pro with laser-engraved INSP logo. Designed for digital problem solving & COP book reading."
  },
  {
    id: "m2",
    name: "INSP Adidas Performance Jacket",
    category: "Clothing",
    coins: 3499,
    inr: "₹3,499",
    badge: "JEE ADV Ranker Edition",
    image: "https://www.inspedu.in/assets/images/redeem_products/photo_2024-06-12_16-14-11.jpg",
    description: "Official Adidas athletic jacket featuring INSP Physics emblem. Exclusively redeemable by top rankers & coin holders."
  },
  {
    id: "m3",
    name: "INSP Heavyweight Physics Hoodie",
    category: "Clothing",
    coins: 2499,
    inr: "₹2,499",
    badge: "Apparel",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
    description: "Premium fleece hoodie with subtle quantum equations print and INSP chest monogram."
  },
  {
    id: "m4",
    name: "INSP Physics Masterclass T-Shirt",
    category: "Clothing",
    coins: 999,
    inr: "₹999",
    badge: "Apparel",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    description: "Combed cotton black crewneck t-shirt with Nitin Sachan Sir signature quote on back."
  },
  {
    id: "m5",
    name: "INSP COPs Hardcover Book Bundle",
    category: "Books",
    coins: 4500,
    inr: "₹4,500",
    badge: "Books",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    description: "Hardcover printed bundle of Concepts & Problems (COPs) Volume 1-4 for JEE Advanced and INPhO."
  },
  {
    id: "m6",
    name: "Apple iPhone 16 Pro (INSP Custom)",
    category: "Electronics",
    coins: 79900,
    inr: "₹79,900",
    badge: "Grand Prize",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    description: "Custom engraved space black iPhone 16 Pro with pre-loaded INSP offline exam suite."
  }
];

export default function MerchandisePage({ setPage }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [imgErrors, setImgErrors] = useState({});

  const filteredItems = MERCHANDISE_ITEMS.filter(item => 
    activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <main style={{ paddingTop: 60, minHeight: '100vh' }}>
      
      {/* Page Header */}
      <div style={{ padding: '4rem 0 3rem', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="badge badge-gold" style={{ marginBottom: '1rem' }}>
            INSP Store
          </div>
          <h1 className="display-lg" style={{ marginBottom: '0.75rem' }}>
            Earn Coins. Claim Rewards.
          </h1>
          <p className="body-lg" style={{ maxWidth: 620, marginBottom: '1.5rem' }}>
            Every physics problem solved and AITS test completed earns INSP Coins. Redeem directly for Apple hardware, Adidas apparel, and COPs hardcover books.
          </p>

          <div className="card-inset" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', padding: '0.75rem 1.25rem' }}>
            <Coins color="var(--c-amber)" size={20} />
            <div>
              <span className="mono text-amber" style={{ fontSize: '1rem', fontWeight: 700 }}>
                1 INSP Coin = ₹1 INR
              </span>
              <span className="caption" style={{ display: 'block', color: 'var(--c-text-dim)' }}>
                Direct 1:1 redemption value with zero conversion fee
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* How it works banner */}
      <div style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)', padding: '2rem 0' }}>
        <div className="container">
          <div className="grid-3">
            {[
              { step: '01', title: 'Solve & Attempt Tests', desc: 'Complete AITS test series and solve Pathfinder & Irodov problems.' },
              { step: '02', title: 'Accumulate Coins', desc: 'Coins credit automatically to your INSP wallet upon verification.' },
              { step: '03', title: 'Claim Doorstep Rewards', desc: 'Redeem rewards at 1 Coin = ₹1 with free India-wide shipping.' }
            ].map(s => (
              <div key={s.step} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <span className="mono caption text-dim" style={{ fontWeight: 700, fontSize: '0.9rem' }}>{s.step}</span>
                <div>
                  <h4 className="heading" style={{ fontSize: '0.9rem', marginBottom: 2 }}>{s.title}</h4>
                  <p className="body-sm" style={{ fontSize: '0.8rem' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ borderBottom: '1px solid var(--c-border)', padding: '0.85rem 0' }}>
        <div className="container" style={{ display: 'flex', gap: '0.4rem' }}>
          {['All', 'Electronics', 'Clothing', 'Books'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? 'btn btn-secondary' : 'btn btn-ghost'}
              style={{ fontSize: '0.82rem', padding: '0.35rem 0.85rem' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div style={{ padding: '3rem 0 5rem' }}>
        <div className="container">
          <div className="grid-3">
            {filteredItems.map(item => (
              <div key={item.id} className="card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                
                <div>
                  <div style={{ height: 200, position: 'relative', background: 'var(--c-surface-subtle)', overflow: 'hidden' }}>
                    {!imgErrors[item.id] ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        onError={() => setImgErrors(p => ({ ...p, [item.id]: true }))}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ShoppingBag size={32} color="var(--c-text-dim)" />
                      </div>
                    )}
                    <span className="badge badge-gold" style={{ position: 'absolute', top: 10, left: 10 }}>
                      {item.badge}
                    </span>
                  </div>

                  <div style={{ padding: '1.25rem' }}>
                    <div className="caption" style={{ color: 'var(--c-text-dim)', marginBottom: 2 }}>
                      {item.category}
                    </div>
                    <h3 className="heading" style={{ fontSize: '0.98rem', marginBottom: '0.4rem', lineHeight: 1.35 }}>
                      {item.name}
                    </h3>
                    <p className="body-sm" style={{ fontSize: '0.82rem', marginBottom: '1rem' }}>
                      {item.description}
                    </p>
                  </div>
                </div>

                <div style={{ padding: '0 1.25rem 1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                    <span className="mono text-amber" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                      {item.coins.toLocaleString('en-IN')} Coins
                    </span>
                    <span className="caption" style={{ color: 'var(--c-text-dim)' }}>
                      ({item.inr} value)
                    </span>
                  </div>

                  <button 
                    className="btn btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}
                    onClick={() => alert(`Log in to your INSP student account to redeem ${item.name}.`)}
                  >
                    Redeem Reward
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Referral Coins Section */}
      <div style={{ background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)', padding: '4rem 0' }}>
        <div className="container">
          <div className="card-inset" style={{ padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Referral Payouts</div>
              <h3 className="display-md" style={{ marginBottom: '0.5rem' }}>Earn 11% INSP Coins on Referrals</h3>
              <p className="body-sm" style={{ maxWidth: 500 }}>
                When a new student uses your referral code, they receive 11% instant discount, and 11% of the subscription value is credited as INSP Coins to your account.
              </p>
            </div>
            <button 
              className="btn btn-primary"
              onClick={() => { setPage('login'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Get Referral Code <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

    </main>
  );
}
