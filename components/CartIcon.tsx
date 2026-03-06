'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function CartIcon() {
  const { cartCount } = useCart();

  return (
    <Link 
      href="/cart"
      style={{ 
        position: 'relative', 
        padding: '0.6rem 1.5rem', 
        background: '#7CB342', 
        color: 'white', 
        borderRadius: '6px', 
        fontWeight: 600, 
        textDecoration: 'none', 
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      🛒 Cart
      {cartCount > 0 && (
        <span style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          background: '#FFB300',
          color: 'white',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75rem',
          fontWeight: 700,
          boxShadow: '0 2px 8px rgba(255, 179, 0, 0.4)'
        }}>
          {cartCount}
        </span>
      )}
    </Link>
  );
}
