import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '10 Productivity Habits That Changed My Life',
    excerpt: 'Discover the simple daily habits that can transform your productivity and help you achieve your goals faster.',
    category: 'Productivity',
    date: 'March 5, 2026',
    readTime: '5 min read',
    image: '⚡'
  },
  {
    id: 2,
    title: 'The Art of Mindful Journaling',
    excerpt: 'Learn how to use journaling as a tool for self-reflection, stress relief, and personal growth.',
    category: 'Wellness',
    date: 'March 1, 2026',
    readTime: '7 min read',
    image: '📝'
  },
  {
    id: 3,
    title: 'How to Set Goals You'll Actually Achieve',
    excerpt: 'Stop setting goals that fizzle out. Here's a proven framework for creating and achieving meaningful goals.',
    category: 'Personal Growth',
    date: 'February 28, 2026',
    readTime: '6 min read',
    image: '🎯'
  },
  {
    id: 4,
    title: 'Building a Creative Morning Routine',
    excerpt: 'Start your day with intention. Create a morning routine that fuels your creativity and sets you up for success.',
    category: 'Creativity',
    date: 'February 25, 2026',
    readTime: '4 min read',
    image: '🌅'
  },
  {
    id: 5,
    title: 'Digital Minimalism: Declutter Your Digital Life',
    excerpt: 'Reduce digital overwhelm and reclaim your time with these practical tips for digital organization.',
    category: 'Productivity',
    date: 'February 20, 2026',
    readTime: '5 min read',
    image: '💻'
  },
  {
    id: 6,
    title: 'The Power of Gratitude Practice',
    excerpt: 'Scientific research shows gratitude can improve your mental health, relationships, and overall happiness.',
    category: 'Wellness',
    date: 'February 15, 2026',
    readTime: '6 min read',
    image: '🙏'
  }
];

export default function BlogPage() {
  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#222' }}>Blog</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '3rem' }}>
            Tips, insights, and inspiration to help you live your best life.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                style={{ 
                  background: 'white', 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: '100%', height: '200px', background: 'linear-gradient(135deg, #7CB342 0%, #689F38 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: 'white' }}>
                  {post.image}
                </div>
                
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', color: '#7CB342', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {post.category}
                  </div>
                  
                  <h2 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#333', fontWeight: 700 }}>
                    {post.title}
                  </h2>
                  
                  <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {post.excerpt}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#999' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Want more content?</h3>
            <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem' }}>
              Subscribe to our newsletter for weekly tips and exclusive content.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', maxWidth: '500px', margin: '0 auto' }}>
              <input 
                type="email" 
                placeholder="Enter your email"
                style={{ flex: 1, padding: '0.8rem 1rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem' }}
              />
              <button style={{ padding: '0.8rem 2rem', background: '#7CB342', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
