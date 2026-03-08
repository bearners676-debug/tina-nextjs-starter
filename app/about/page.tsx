import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Hero */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#222' }}>About B-earners</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              We believe in the power of intentional living. Our digital products help you organize, create, and grow.
            </p>
          </div>

          {/* Our Story */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', marginBottom: '3rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>Our Story</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.8, marginBottom: '1rem' }}>
              B-earners started with a simple idea: everyone deserves access to high-quality tools that help them become their best selves. What began as a small collection of personal planners has grown into a comprehensive library of digital products designed for creators, professionals, and dreamers.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.8 }}>
              Today, we serve thousands of customers worldwide, helping them organize their days, pursue their passions, and achieve their goals. Every product we create is thoughtfully designed with real people and real needs in mind.
            </p>
          </div>

          {/* Core Values */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', marginBottom: '3rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>Our Core Values</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <ValueCard icon="🎯" title="Quality First" text="Every product is meticulously designed and tested to ensure it truly helps you succeed." />
              <ValueCard icon="💚" title="Customer-Centric" text="Your success is our success. We listen, improve, and evolve based on your feedback." />
              <ValueCard icon="🌱" title="Sustainable Growth" text="We believe in building habits that last, not quick fixes that fade away." />
              <ValueCard icon="✨" title="Creative Innovation" text="We constantly explore new ways to help you organize, create, and thrive." />
            </div>
          </div>

          {/* Impact Stats */}
          <div style={{ background: 'linear-gradient(135deg, #7CB342 0%, #689F38 100%)', borderRadius: '12px', padding: '3rem', marginBottom: '3rem', color: 'white' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Our Impact</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <StatCard number="10,000+" label="Happy Customers" />
              <StatCard number="50+" label="Digital Products" />
              <StatCard number="98%" label="Satisfaction Rate" />
              <StatCard number="24/7" label="Customer Support" />
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Ready to Start Your Journey?</h3>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
              Join thousands of satisfied customers who have transformed their lives with our products.
            </p>
            <a 
              href="/"
              style={{ display: 'inline-block', padding: '1rem 3rem', background: '#7CB342', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}
            >
              Browse Our Products
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function ValueCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{number}</div>
      <div style={{ fontSize: '1rem', opacity: 0.9 }}>{label}</div>
    </div>
  );
}
