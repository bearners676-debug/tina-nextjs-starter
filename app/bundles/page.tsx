'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/lib/cart-context';
import { useState } from 'react';

const bundles = [
  { 
    id: 'bundle-1', 
    title: 'Complete Productivity Bundle', 
    price: 64.99, 
    originalPrice: 99.99,
    savings: 35,
    category: 'Productivity',
    items: ['Daily Planner', 'Time Management Ebook', 'Habit Tracker'],
    image: '🚀'
  },
  { 
    id: 'bundle-2', 
    title: 'Creative Starter Pack', 
    price: 47.99, 
    originalPrice: 79.99,
    savings: 40,
    category: 'Creative',
    items: ['Sketching Journal', 'Creative Writing Guide', 'Design Workbook'],
    image: '🎨'
  },
  { 
    id: 'bundle-3', 
    title: 'Wellness & Mindfulness Bundle', 
    price: 52.49, 
    originalPrice: 74.99,
    savings: 30,
    category: 'Wellness',
    items: ['Mindfulness Journal', 'Wellness Rituals Ebook', 'Gratitude Diary'],
    image: '🧘'
  },
  { 
    id: 'bundle-4', 
    title: 'Business Growth Bundle', 
    price: 67.99, 
    originalPrice: 109.99,
    savings: 38,
    category: 'Business',
    items: ['Freelance Playbook', 'Leadership Guide', 'Business Planner'],
    image: '💼'
  },
  { 
    id: 'bundle-5', 
    title: 'Student Success Bundle', 
    price: 49.99, 
    originalPrice: 73.99,
    savings: 32,
    category: 'Education',
    items: ['Academic Planner', 'Study Guide', 'Goal Tracker'],
    image: '🎓'
  },
  { 
    id: 'bundle-6', 
    title: 'Travel & Adventure Bundle', 
    price: 38.99, 
    originalPrice: 59.99,
    savings: 35,
    category: 'Travel',
    items: ['Travel Memory Book', 'Adventure Log', 'Travel Planning Guide'],
    image: '✈️'
  },
];

export default function BundlesPage() {
  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Page Header */}
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#222' }}>Product Bundles</h1>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Save big with our carefully curated bundles. Everything you need in one package.
            </p>
          </div>

          {/* Bundles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
            {bundles.map((bundle) => (
              <BundleCard key={bundle.id} bundle={bundle} />
            ))}
          </div>

          {/* Bundle Benefits */}
          <div style={{ marginTop: '4rem', background: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#222' }}>Why Choose Bundles?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <BenefitCard icon="💰" title="Save More" text="Get up to 40% off compared to buying items individually" />
              <BenefitCard icon="📦" title="Complete Solutions" text="Everything you need in one convenient package" />
              <BenefitCard icon="⚡" title="Instant Access" text="Download all items immediately after purchase" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function BundleCard({ bundle }: { bundle: typeof bundles[0] }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: bundle.id,
      title: bundle.title,
      price: bundle.price,
      type: 'bundle',
      category: bundle.category
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', transition: 'all 0.3s', position: 'relative' }}>
      
      {/* Savings Badge */}
      <div style={{ 
        position: 'absolute', 
        top: '1rem', 
        right: '1rem', 
        background: '#FFB300', 
        color: 'white', 
        padding: '0.5rem 1rem', 
        borderRadius: '25px', 
        fontWeight: 700, 
        fontSize: '0.9rem',
        zIndex: 10,
        boxShadow: '0 2px 10px rgba(255, 179, 0, 0.3)'
      }}>
        Save {bundle.savings}%
      </div>

      {/* Bundle Image */}
      <div style={{ width: '100%', height: '200px', background: 'linear-gradient(135deg, #7CB342 0%, #689F38 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'white' }}>
        {bundle.image}
      </div>

      <div style={{ padding: '1.5rem' }}>
        {/* Category */}
        <div style={{ fontSize: '0.85rem', color: '#999', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
          {bundle.category}
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#333', fontWeight: 700 }}>{bundle.title}</h3>

        {/* What's Included */}
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#555', marginBottom: '0.5rem' }}>What's included:</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {bundle.items.map((item, index) => (
              <li key={index} style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.3rem', paddingLeft: '1.2rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#7CB342' }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <span style={{ fontSize: '1.1rem', color: '#999', textDecoration: 'line-through' }}>
              ${bundle.originalPrice.toFixed(2)}
            </span>
            <span style={{ fontSize: '1.8rem', color: '#7CB342', fontWeight: 700 }}>
              ${bundle.price.toFixed(2)}
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#7CB342', fontWeight: 600 }}>
            You save ${(bundle.originalPrice - bundle.price).toFixed(2)}!
          </p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          style={{ 
            width: '100%',
            padding: '1rem', 
            background: added ? '#FFB300' : '#7CB342', 
            color: 'white', 
            border: 'none',
            borderRadius: '8px', 
            fontSize: '1.1rem', 
            fontWeight: 700, 
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          {added ? '✓ Added to Cart!' : 'Add Bundle to Cart'}
        </button>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#333' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}
