'use client';

import { useCart } from '@/lib/cart-context';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cart, cartTotal, discount, appliedCoupon, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    country: '',
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      email: '',
      country: '',
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent, paymentMethod: string) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Store order details in localStorage for thank you page
    const orderDetails = {
      orderNumber: `ORD-${Date.now()}`,
      customerEmail: formData.email,
      customerName: formData.fullName,
      items: cart,
      subtotal,
      discount,
      total: cartTotal,
      paymentMethod,
      date: new Date().toISOString(),
    };

    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));

    // Clear cart
    clearCart();

    // Redirect to thank you page
    router.push('/thank-you');
  };

  if (cart.length === 0) {
    return (
      <>
        <Navigation />
        <div style={{ minHeight: '80vh', background: '#fafafa', padding: '5rem 5%', textAlign: 'center' }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '4rem', maxWidth: '600px', margin: '0 auto', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🛒</div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>Your cart is empty</h2>
            <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>Add some products before checking out!</p>
            <Link 
              href="/"
              style={{ display: 'inline-block', padding: '1rem 2.5rem', background: '#7CB342', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}
            >
              Browse Products
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#222' }}>Checkout</h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '2rem' }}>
            
            {/* Checkout Form */}
            <div>
              {/* Customer Information */}
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>Customer Information</h2>
                
                <form>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.95rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="John Doe"
                      style={{ width: '100%', padding: '0.9rem', border: errors.fullName ? '1px solid #ff4444' : '1px solid #ddd', borderRadius: '8px', fontSize: '0.95rem' }}
                    />
                    {errors.fullName && <span style={{ color: '#ff4444', fontSize: '0.85rem', marginTop: '0.3rem', display: 'block' }}>{errors.fullName}</span>}
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.95rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      style={{ width: '100%', padding: '0.9rem', border: errors.email ? '1px solid #ff4444' : '1px solid #ddd', borderRadius: '8px', fontSize: '0.95rem' }}
                    />
                    {errors.email && <span style={{ color: '#ff4444', fontSize: '0.85rem', marginTop: '0.3rem', display: 'block' }}>{errors.email}</span>}
                    <span style={{ fontSize: '0.85rem', color: '#999', marginTop: '0.3rem', display: 'block' }}>Download links will be sent to this email</span>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.95rem' }}>
                      Country *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      style={{ width: '100%', padding: '0.9rem', border: errors.country ? '1px solid #ff4444' : '1px solid #ddd', borderRadius: '8px', fontSize: '0.95rem', background: 'white' }}
                    >
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="IN">India</option>
                      <option value="GB">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.country && <span style={{ color: '#ff4444', fontSize: '0.85rem', marginTop: '0.3rem', display: 'block' }}>{errors.country}</span>}
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333', fontSize: '0.95rem' }}>
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                      style={{ width: '100%', padding: '0.9rem', border: '1px solid #ddd', borderRadius: '8px', fontSize: '0.95rem' }}
                    />
                  </div>
                </form>
              </div>

              {/* Payment Methods */}
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>Payment Method</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <button
                    onClick={(e) => handleSubmit(e, 'Razorpay')}
                    disabled={isProcessing}
                    style={{ 
                      width: '100%', 
                      padding: '1.2rem', 
                      background: isProcessing ? '#ccc' : '#7CB342', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '8px', 
                      fontSize: '1.1rem', 
                      fontWeight: 600, 
                      cursor: isProcessing ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {isProcessing ? '⏳ Processing...' : '💳 Pay with Razorpay'}
                  </button>

                  <button
                    onClick={(e) => handleSubmit(e, 'Stripe')}
                    disabled={isProcessing}
                    style={{ 
                      width: '100%', 
                      padding: '1.2rem', 
                      background: isProcessing ? '#ccc' : '#635BFF', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '8px', 
                      fontSize: '1.1rem', 
                      fontWeight: 600, 
                      cursor: isProcessing ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {isProcessing ? '⏳ Processing...' : '💳 Pay with Stripe'}
                  </button>

                  <button
                    onClick={(e) => handleSubmit(e, 'PayPal')}
                    disabled={isProcessing}
                    style={{ 
                      width: '100%', 
                      padding: '1.2rem', 
                      background: isProcessing ? '#ccc' : '#0070BA', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '8px', 
                      fontSize: '1.1rem', 
                      fontWeight: 600, 
                      cursor: isProcessing ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {isProcessing ? '⏳ Processing...' : '💙 Pay with PayPal'}
                  </button>
                </div>

                <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px', fontSize: '0.85rem', color: '#666', textAlign: 'center' }}>
                  🔒 Secure payment processing. Your payment information is encrypted and secure.
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#333' }}>Order Summary</h3>
                
                {/* Cart Items */}
                <div style={{ marginBottom: '1.5rem', maxHeight: '300px', overflowY: 'auto' }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #f0f0f0' }}>
                      <div style={{ width: '60px', height: '80px', background: 'linear-gradient(135deg, #f0f9ea 0%, rgba(124, 179, 66, 0.1) 100%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                        📚
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#333', marginBottom: '0.3rem' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.3rem' }}>Qty: {item.quantity}</p>
                        <p style={{ fontSize: '0.95rem', color: '#7CB342', fontWeight: 700 }}>${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: '#666' }}>
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: '#7CB342', fontWeight: 600 }}>
                      <span>Discount ({appliedCoupon}):</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: '#666' }}>
                    <span>Tax:</span>
                    <span>$0.00</span>
                  </div>
                </div>

                <div style={{ borderTop: '2px solid #f0f0f0', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', fontWeight: 700, color: '#222' }}>
                    <span>Total:</span>
                    <span style={{ color: '#7CB342' }}>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
