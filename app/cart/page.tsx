'use client';

import { useCart } from '@/lib/cart-context';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, discount, applyCoupon, removeCoupon, appliedCoupon } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState('');
  const [couponError, setCouponError] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponError(true);
      setCouponMessage('Please enter a coupon code');
      return;
    }

    const success = applyCoupon(couponCode);
    if (success) {
      setCouponError(false);
      setCouponMessage(`Coupon "${couponCode}" applied successfully!`);
      setCouponCode('');
    } else {
      setCouponError(true);
      setCouponMessage('Invalid coupon code. Please try again.');
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponMessage('');
    setCouponError(false);
  };

  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Page Title */}
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#222' }}>Shopping Cart</h1>

          {cart.length === 0 ? (
            // Empty Cart State
            <div style={{ background: 'white', borderRadius: '12px', padding: '4rem', textAlign: 'center', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🛒</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Your cart is empty</h2>
              <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>Browse our products to get started!</p>
              <Link 
                href="/"
                style={{ display: 'inline-block', padding: '1rem 2.5rem', background: '#7CB342', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}
              >
                Browse Products
              </Link>
            </div>
          ) : (
            // Cart with Items
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '2rem' }}>
              
              {/* Cart Items List */}
              <div>
                {cart.map((item) => (
                  <div key={item.id} style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', display: 'flex', gap: '1.5rem' }}>
                    
                    {/* Product Image */}
                    <div style={{ width: '120px', height: '160px', background: 'linear-gradient(135deg, #f0f9ea 0%, rgba(124, 179, 66, 0.1) 100%)', borderRadius: '8px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                      📚
                    </div>

                    {/* Product Details */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <div>
                          <h3 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '0.3rem' }}>{item.title}</h3>
                          <p style={{ color: '#999', fontSize: '0.9rem', textTransform: 'uppercase' }}>{item.type} • {item.category}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{ background: 'none', border: 'none', color: '#999', fontSize: '1.5rem', cursor: 'pointer', padding: '0.5rem' }}
                          title="Remove item"
                        >
                          ×
                        </button>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                        
                        {/* Quantity Controls */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #ddd', borderRadius: '6px', padding: '0.3rem' }}>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            style={{ background: 'none', border: 'none', color: '#555', fontSize: '1.2rem', cursor: 'pointer', padding: '0.3rem 0.8rem' }}
                          >
                            −
                          </button>
                          <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: 600 }}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{ background: 'none', border: 'none', color: '#555', fontSize: '1.2rem', cursor: 'pointer', padding: '0.3rem 0.8rem' }}
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.2rem' }}>${item.price.toFixed(2)} each</div>
                          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#7CB342' }}>${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary Sidebar */}
              <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                
                {/* Coupon Box */}
                <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#333' }}>Have a coupon?</h3>
                  
                  {appliedCoupon ? (
                    <div style={{ padding: '1rem', background: '#f0f9ea', border: '1px solid #7CB342', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ color: '#7CB342', fontWeight: 600, marginBottom: '0.3rem' }}>✓ {appliedCoupon}</div>
                        <div style={{ fontSize: '0.85rem', color: '#666' }}>You saved ${discount.toFixed(2)}</div>
                      </div>
                      <button
                        onClick={handleRemoveCoupon}
                        style={{ background: 'none', border: 'none', color: '#999', fontSize: '1.3rem', cursor: 'pointer' }}
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                          placeholder="Enter code"
                          style={{ flex: 1, padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem' }}
                        />
                        <button
                          onClick={handleApplyCoupon}
                          style={{ padding: '0.8rem 1.5rem', background: '#7CB342', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}
                        >
                          Apply
                        </button>
                      </div>
                      {couponMessage && (
                        <div style={{ padding: '0.8rem', background: couponError ? '#fff3f3' : '#f0f9ea', border: `1px solid ${couponError ? '#ff4444' : '#7CB342'}`, borderRadius: '6px', fontSize: '0.85rem', color: couponError ? '#ff4444' : '#7CB342' }}>
                          {couponMessage}
                        </div>
                      )}
                    </>
                  )}
                  
                  <div style={{ marginTop: '1rem', padding: '0.8rem', background: '#f9f9f9', borderRadius: '6px', fontSize: '0.85rem', color: '#666' }}>
                    <strong>Available coupons:</strong><br />
                    SAVE10 (10% off) • SAVE20 (20% off)<br />
                    WELCOME100 ($100 off) • NEWYEAR50 ($50 off)
                  </div>
                </div>

                {/* Order Summary */}
                <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#333' }}>Order Summary</h3>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: '#666' }}>
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: '#7CB342', fontWeight: 600 }}>
                        <span>Discount:</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: '#666' }}>
                      <span>Tax:</span>
                      <span>$0.00</span>
                    </div>
                  </div>

                  <div style={{ borderTop: '2px solid #f0f0f0', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', fontWeight: 700, color: '#222' }}>
                      <span>Total:</span>
                      <span style={{ color: '#7CB342' }}>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    style={{ display: 'block', width: '100%', padding: '1.2rem', background: '#7CB342', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 600, textAlign: 'center', textDecoration: 'none', marginBottom: '1rem' }}
                  >
                    Proceed to Checkout
                  </Link>

                  <Link
                    href="/"
                    style={{ display: 'block', width: '100%', padding: '1rem', background: 'white', color: '#7CB342', border: '1px solid #7CB342', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, textAlign: 'center', textDecoration: 'none' }}
                  >
                    Continue Shopping
                  </Link>

                  {/* Trust Badges */}
                  <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f0f0f0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', color: '#666' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>🔒</span>
                        <span>Secure Checkout</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>✓</span>
                        <span>Trusted Payment Gateways</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>⚡</span>
                        <span>Instant Digital Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
