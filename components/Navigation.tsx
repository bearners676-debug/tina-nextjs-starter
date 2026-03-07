import Link from 'next/link';
import CartIcon from './CartIcon';

export default function Navigation() {
  return (
    <nav style={{ background: 'white', padding: '1.2rem 5%', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#333', textDecoration: 'none' }}>
        B-<span style={{ color: '#7CB342' }}>earners</span>
      </Link>
      
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center', margin: 0 }}>
        <li><Link href="/" style={{ textDecoration: 'none', color: '#555', fontWeight: 500 }}>Home</Link></li>
        <li><Link href="/ebooks" style={{ textDecoration: 'none', color: '#555', fontWeight: 500 }}>Ebooks</Link></li>
        <li><Link href="/journals" style={{ textDecoration: 'none', color: '#555', fontWeight: 500 }}>Journals</Link></li>
        <li><Link href="/planners" style={{ textDecoration: 'none', color: '#555', fontWeight: 500 }}>Planners</Link></li>
        <li><Link href="/bundles" style={{ textDecoration: 'none', color: '#555', fontWeight: 500 }}>Bundles</Link></li>
        <li><Link href="/contact" style={{ textDecoration: 'none', color: '#555', fontWeight: 500 }}>Contact</Link></li>
      </ul>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder="Search..." 
          style={{ padding: '0.6rem 1rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', width: '200px' }}
        />
        <CartIcon />
      </div>
    </nav>
  );
}
