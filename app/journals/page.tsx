'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

const journals = [
  { id: 'journal-1', title: 'Morning Pages Journal', price: 14.99, category: 'Mindfulness', image: '🌅' },
  { id: 'journal-2', title: 'Daily Mindfulness Journal', price: 19.99, category: 'Mindfulness', image: '🧘' },
  { id: 'journal-3', title: 'Gratitude & Joy Diary', price: 15.99, category: 'Gratitude', image: '💖' },
  { id: 'journal-4', title: 'Bullet Journal Pro', price: 18.99, category: 'Creative', image: '🎨' },
  { id: 'journal-5', title: 'Creative Sketching Journal', price: 17.50, category: 'Creative', image: '✏️' },
  { id: 'journal-6', title: 'Thankful Every Day', price: 12.99, category: 'Gratitude', image: '🙏' },
  { id: 'journal-7', title: 'Travel Memory Book', price: 21.99, category: 'Travel', image: '✈️' },
  { id: 'journal-8', title: 'Adventure Log', price: 16.50, category: 'Travel', image: '🗺️' },
];

export default function JournalsPage() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('newest');

  const filteredJournals = journals.filter(journal => 
    filter === 'All' ? true : journal.category === filter
  );

  const sortedJournals = [...filteredJournals].sort((a, b) => {
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
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#222' }}>Journals</h1>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Express yourself with beautifully designed journals for every mood and purpose.
            </p>
          </div>

          {/* Filters & Sort */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            
            {/* Category Filter */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['All', 'Mindfulness', 'Gratitude', 'Creative', 'Travel'].map((category) => (
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
            {sortedJournals.map((journal) => (
              <ProductCard key={journal.id} product={journal} />
            ))}
          </div>

          {/* No Results */}
          {sortedJournals.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '12px' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📔</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>No journals found</h3>
              <p style={{ color: '#666' }}>Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

function ProductCard({ product }: { product: typeof journals[0] }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      type: 'journal',
      category: product.category
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div style={{ width: '100%', height: '300px', background: 'linear-gradient(135deg, #fff8e1 0%, #ffe082 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
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
