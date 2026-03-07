'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface OrderDetails {
  orderNumber: string;
  customerEmail: string;
  customerName: string;
  items: Array<{
    id: string;
    title: string;
    price: number;
    quantity: number;
  }>;
  subtotal: number;
  discount: number;
  total: number;
  paymentMethod: string;
  date: string;
}

export default function ThankYouPage() {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
    }
  }, []);

  if (!orderDetails) {
    return (
      <>
        <Navigation />
        <div style={{ minHeight: '80vh', background: '#fafafa', padding: '5rem 5%', textAlign: 'center' }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '4rem', maxWidth: '600px', margin: '0 auto', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🛒</div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#333' }}>No order found</h2>
            <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1.1rem' }}>It looks like you haven't placed an order yet.</p>
            <Link 
              href="/"
              style={{ display: 'inline-block', padding: '1rem 2.5rem', background: '#7CB342', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}
            >
              Start Shopping
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
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Success Message */}
          <div style={{ background: 'linear-gradient(135deg, #7CB342 0%, #689F38 100%)', borderRadius: '12px', padding: '3rem', textAlign: 'center', color: 'white', marginBottom: '2rem' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>✅</div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Thank You for Your Purchase!</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.95 }}>Your order has been successfully processed.</p>
          </div>

          {/* Order Details */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>Order Details</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.3rem' }}>Order Number</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#333' }}>{orderDetails.orderNumber}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.3rem' }}>Date</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#333' }}>
                  {new Date(orderDetails.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.3rem' }}>Email</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#333' }}>{orderDetails.customerEmail}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.3rem' }}>Payment Method</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#333' }}>{orderDetails.paymentMethod}</p>
              </div>
            </div>

            {/* Email Notification */}
            <div style={{ padding: '1rem', background: '#f0f9ea', border: '1px solid #7CB342', borderRadius: '8px', marginBottom: '2rem' }}>
              <p style={{ color: '#7CB342', fontWeight: 600, marginBottom: '0.3rem' }}>📧 Confirmation Email Sent</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                A confirmation email with your download links has been sent to <strong>{orderDetails.customerEmail}</strong>
              </p>
            </div>

            {/* Order Items */}
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>Your Digital Products</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              {orderDetails.items.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: '#fafafa', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flex: 1 }}>
                    <div style={{ width: '60px', height: '80px', background: 'linear-gradient(135deg, #f0f9ea 0%, rgba(124, 179, 66, 0.1) 100%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                      📚
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#333', marginBottom: '0.3rem' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: '#999' }}>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', marginRight: '1rem' }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#7CB342' }}>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button 
                    style={{ padding: '0.8rem 1.5rem', background: '#7CB342', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}
                    onClick={() => alert('Download link will be sent to your email!')}
                  >
                    📥 Download
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div style={{ borderTop: '2px solid #f0f0f0', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: '#666' }}>
                <span>Subtotal:</span>
                <span>${orderDetails.subtotal.toFixed(2)}</span>
              </div>
              
              {orderDetails.discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', color: '#7CB342', fontWeight: 600 }}>
                  <span>Discount:</span>
                  <span>-${orderDetails.discount.toFixed(2)}</span>
                </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#666' }}>
                <span>Tax:</span>
                <span>$0.00</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', fontWeight: 700, paddingTop: '1rem', borderTop: '2px solid #f0f0f0' }}>
                <span style={{ color: '#222' }}>Total Paid:</span>
                <span style={{ color: '#7CB342' }}>${orderDetails.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>What's Next?</h2>
            
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <span style={{ fontSize: '2rem' }}>📧</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.3rem', color: '#333' }}>Check Your Email</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>We've sent your download links and receipt to {orderDetails.customerEmail}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <span style={{ fontSize: '2rem' }}>📥</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.3rem', color: '#333' }}>Download Your Products</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>Click the download buttons above or use the links in your email</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <span style={{ fontSize: '2rem' }}>💡</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.3rem', color: '#333' }}>Need Help?</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>Contact our support team at support@blearners.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ textAlign: 'center' }}>
            <Link 
              href="/"
              style={{ display: 'inline-block', padding: '1rem 2.5rem', background: '#7CB342', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', marginRight: '1rem' }}
            >
              Continue Shopping
            </Link>
            <Link 
              href="/contact"
              style={{ display: 'inline-block', padding: '1rem 2.5rem', background: 'white', color: '#7CB342', border: '2px solid #7CB342', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
