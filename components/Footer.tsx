import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#222', color: '#ccc', padding: '3rem 5% 2rem', marginTop: '5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', maxWidth: '1400px', margin: '0 auto 2rem' }}>
        
        {/* Quick Links */}
        <div>
          <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/about" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>
                About Us
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/faq" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>
                FAQ
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/blog" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>
                Blog
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/affiliate" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>
                Affiliate Program
              </Link>
            </li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>Shop</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>
                All Products
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/ebooks" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>
                Ebooks
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/journals" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>
                Journals
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/planners" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>
                Planners
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>Connect</h3>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
            <a href="#" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} aria-label="Facebook">
              📘
            </a>
            <a href="#" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} aria-label="Instagram">
              📷
            </a>
            <a href="#" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} aria-label="Twitter">
              🐦
            </a>
            <a href="#" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} aria-label="Pinterest">
              📌
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>Legal</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/privacy" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>
                Privacy Policy
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/terms" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>
                Terms of Service
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/refund" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #444', color: '#888', fontSize: '0.9rem' }}>
        <p style={{ margin: 0 }}>© 2025 B-earners. All rights reserved.</p>
      </div>
    </footer>
  );
}
