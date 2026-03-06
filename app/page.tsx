import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)', padding: '8rem 5% 6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#222', fontWeight: 700, lineHeight: 1.2 }}>
            Unlock Your Potential. Download Instantly.
          </h1>
          <p style={{ fontSize: '1.3rem', color: '#666', marginBottom: '3rem' }}>
            Curated digital products designed to inspire creativity, boost productivity, and transform your daily routine.
          </p>
          <Link 
            href="#products" 
            style={{ display: 'inline-block', background: '#7CB342', color: 'white', padding: '1rem 3rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(124, 179, 66, 0.3)' }}
          >
            Shop All Products
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '5rem 5%', maxWidth: '1400px', margin: '0 auto' }} id="products">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#222' }}>
          Featured Products
        </h2>
        <div className="products-grid">
          <ProductCard 
            title="Daily Mindfulness Journal"
            price={19.99}
            link="/journals"
          />
          <ProductCard 
            title="Complete Productivity Planner"
            price={24.99}
            link="/planners"
          />
          <ProductCard 
            title="Creative Writing Workbook"
            price={16.99}
            link="/ebooks"
          />
          <ProductCard 
            title="Goal Setting Bundle"
            price={29.99}
            link="/bundles"
          />
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: 'white', padding: '5rem 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#222' }}>
          Explore Our Collections
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', maxWidth: '1400px', margin: '0 auto' }}>
          <CategoryCard 
            title="Creative Journals"
            description="Express yourself with beautifully designed journals for every mood and purpose."
            link="/journals"
            gradient="linear-gradient(135deg, rgba(124, 179, 66, 0.15) 0%, rgba(124, 179, 66, 0.05) 100%)"
          />
          <CategoryCard 
            title="Productivity Planners"
            description="Organize your life with planners that help you achieve your goals efficiently."
            link="/planners"
            gradient="linear-gradient(135deg, rgba(255, 179, 0, 0.15) 0%, rgba(255, 179, 0, 0.05) 100%)"
          />
          <CategoryCard 
            title="Premium Ebooks"
            description="Discover knowledge-packed ebooks covering personal growth, business, and creativity."
            link="/ebooks"
            gradient="linear-gradient(135deg, rgba(51, 51, 51, 0.15) 0%, rgba(51, 51, 51, 0.05) 100%)"
          />
        </div>
      </section>

      {/* Value Props */}
      <section style={{ padding: '4rem 5%', background: '#fafafa' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap' }}>
          <ValueProp icon="⚡" title="Instant Access" text="Download immediately after purchase. No waiting, no shipping." />
          <ValueProp icon="✨" title="Expertly Designed" text="Each product is carefully crafted by professionals for maximum impact." />
          <ValueProp icon="🎯" title="Curated Quality" text="Only the best products make it to our store. Quality guaranteed." />
        </div>
      </section>

      <Footer />
    </>
  );
}

// Product Card Component
function ProductCard({ title, price, link }: { title: string; price: number; link: string }) {
  return (
    <div className="product-card">
      <div style={{ width: '100%', height: '300px', background: 'linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: '#ccc' }}>
        📚
      </div>
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#333' }}>{title}</h3>
        <p style={{ fontSize: '1.5rem', color: '#7CB342', fontWeight: 700, marginBottom: '1rem' }}>${price.toFixed(2)}</p>
        <Link 
          href={link}
          style={{ display: 'block', width: '100%', padding: '0.8rem', background: '#333', color: 'white', borderRadius: '6px', fontSize: '1rem', fontWeight: 600, textAlign: 'center', textDecoration: 'none' }}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

// Category Card Component
function CategoryCard({ title, description, link, gradient }: { title: string; description: string; link: string; gradient: string }) {
  return (
    <Link 
      href={link}
      style={{ 
        borderRadius: '12px', 
        overflow: 'hidden', 
        position: 'relative', 
        height: '300px', 
        background: gradient,
        display: 'flex', 
        alignItems: 'flex-end', 
        transition: 'all 0.3s', 
        textDecoration: 'none'
      }}
    >
      <div style={{ padding: '2rem', width: '100%', background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 100%)' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#222' }}>{title}</h3>
        <p style={{ color: '#666', fontSize: '1rem' }}>{description}</p>
      </div>
    </Link>
  );
}

// Value Prop Component
function ValueProp({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div style={{ textAlign: 'center', maxWidth: '250px' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '0.95rem' }}>{text}</p>
    </div>
  );
}
