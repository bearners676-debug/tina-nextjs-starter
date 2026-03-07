'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

const planners = [
  { id: 'planner-1', title: 'Vision & Goals Planner', price: 22.99, category: 'Goal Setting', image: '🎯' },
  { id: 'planner-2', title: 'Complete Productivity Planner', price: 24.99, category: 'Daily', image: '📋' },
  { id: 'planner-3', title: 'Daily Habits Planner', price: 19.99, category: 'Daily', image: '✅' },
  { id: 'planner-4', title: 'Weekly Success Organizer', price: 18.99, category: 'Weekly', image: '📆' },
  { id: 'planner-5', title: 'Project Management Planner', price: 26.99, category: 'Goal Setting', image: '📊' },
  { id: 'planner-6', title: 'Monthly Goal Tracker', price: 16.50, category: 'Monthly', image: '📅' },
  { id: 'planner-7', title: 'Financial Goals Planner', price: 21.50, category: 'Goal Setting', image: '💰' },
  { id: 'planner-8', title: 'Academic Year Planner', price: 20.99, category: 'Monthly', image: '🎓' },
];

export default function PlannersPage() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('newest');

  const filteredPlanners = planners.filter(planner => 
    filter === 'All' ? true : planner.category === filter
  );

  const sortedPlanners = [...filteredPlanners].sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price;
    if (sort === 'price-high') return b.price - a.price;
    return 0; // newest - keep original order
  });

  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Page Header */}
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#222' }}>Planners</h1>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Organize your life with planners that help you achieve your goals efficiently.
            </p>
          </div>

          {/* Filters & Sort */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            
            {/* Category Filter */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['All', 'Daily', 'Weekly', 'Monthly', 'Goal Setting'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  style={{
                    padding: '0.6rem 1.5rem',
                    background: filter === category ? '#7CB342' : 'white',
                    color: filter === category ? 'white' : '#555',
                    border: filter === category ? 'none' : '1px solid #ddd',
                    borderRadius: '25px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#666', fontSize: '0.95rem' }}>Sort by:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                style={{
                  padding: '0.6rem 1rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {sortedPlanners.map((planner) => (
              <ProductCard key={planner.id} product={planner} />
            ))}
          </div>

          {/* No Results */}
          {sortedPlanners.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '12px' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📅</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>No planners found</h3>
              <p style={{ color: '#666' }}>Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

function ProductCard({ product }: { product: typeof planners[0] }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      type: 'planner',
      category: product.category
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div style={{ width: '100%', height: '300px', background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
        {product.image}
      </div>
      <div style={{ padding: '1.5rem' }}>
        <div style={{ fontSize: '0.85rem', color: '#999', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
          {product.category}
        </div>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#333', minHeight: '60px' }}>{product.title}</h3>
        <p style={{ fontSize: '1.5rem', color: '#7CB342', fontWeight: 700, marginBottom: '1rem' }}>${product.price.toFixed(2)}</p>
        
        <button
          onClick={handleAddToCart}
          style={{ 
            width: '100%',
            padding: '0.8rem', 
            background: added ? '#FFB300' : '#7CB342', 
            color: 'white', 
            border: 'none',
            borderRadius: '6px', 
            fontSize: '1rem', 
            fontWeight: 600, 
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          {added ? '✓ Added to Cart!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
