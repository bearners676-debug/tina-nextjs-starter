'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';

const ebooks = [
  { id: 'ebook-1', title: 'Design Systems in Practice', price: 19.99, category: 'Creative', image: '📐' },
  { id: 'ebook-2', title: 'Creative Sketching Guide', price: 6.50, category: 'Creative', image: '✏️' },
  { id: 'ebook-3', title: 'Mindful Leadership', price: 12.99, category: 'Business', image: '🧘' },
  { id: 'ebook-4', title: 'Guides to Habit Change', price: 5.99, category: 'Guides', image: '🎯' },
  { id: 'ebook-5', title: 'The Freelance Playbook', price: 14.00, category: 'Business', image: '💼' },
  { id: 'ebook-6', title: 'Wellness Rituals', price: 8.99, category: 'Wellness', image: '🌿' },
  { id: 'ebook-7', title: 'Slow Living Manual', price: 9.49, category: 'Wellness', image: '🍃' },
  { id: 'ebook-8', title: 'Pocket Productivity', price: 4.99, category: 'Guides', image: '⚡' },
];

export default function EbooksPage() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('newest');

  const filteredEbooks = ebooks.filter(book => 
    filter === 'All' ? true : book.category === filter
  );

  const sortedEbooks = [...filteredEbooks].sort((a, b) => {
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
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#222' }}>Ebooks</h1>
            <p style={{ fontSize: '1.1rem', color: '#666' }}>
              Discover knowledge-packed ebooks covering personal growth, business, and creativity.
            </p>
          </div>

          {/* Filters & Sort */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            
            {/* Category Filter */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['All', 'Business', 'Wellness', 'Creative', 'Guides'].map((category) => (
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
            {sortedEbooks.map((book) => (
              <ProductCard key={book.id} product={book} />
            ))}
          </div>

          {/* No Results */}
          {sortedEbooks.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '12px' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📚</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>No ebooks found</h3>
              <p style={{ color: '#666' }}>Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

function ProductCard({ product }: { product: typeof ebooks[0] }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      type: 'ebook',
      category: product.category
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div style={{ width: '100%', height: '300px', background: 'linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem' }}>
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
