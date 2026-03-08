'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center', color: '#222' }}>Contact Us</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'center', marginBottom: '3rem' }}>
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '2rem' }}>
            
            {/* Contact Form */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#333' }}>Send us a Message</h2>
              
              {submitted ? (
                <div style={{ padding: '2rem', background: '#f0f9ea', border: '1px solid #7CB342', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontSize: '1.3rem', color: '#7CB342', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: '#666' }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem' }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem' }}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem' }}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>Message *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', resize: 'vertical' }}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    style={{ width: '100%', padding: '1rem', background: '#7CB342', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', marginBottom: '1.5rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#333' }}>Contact Information</h3>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📧</div>
                  <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.3rem' }}>Email</p>
                  <p style={{ fontSize: '1rem', color: '#333', fontWeight: 600 }}>support@blearners.com</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💬</div>
                  <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.3rem' }}>Live Chat</p>
                  <p style={{ fontSize: '1rem', color: '#333', fontWeight: 600 }}>Available 24/7</p>
                </div>

                <div>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⏰</div>
                  <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.3rem' }}>Response Time</p>
                  <p style={{ fontSize: '1rem', color: '#333', fontWeight: 600 }}>Within 24 hours</p>
                </div>
              </div>

              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#333' }}>Frequently Asked</h3>
                <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.8 }}>
                  <p style={{ marginBottom: '0.5rem' }}>• How do I download my products?</p>
                  <p style={{ marginBottom: '0.5rem' }}>• What payment methods do you accept?</p>
                  <p style={{ marginBottom: '0.5rem' }}>• Can I get a refund?</p>
                  <p style={{ marginBottom: '0.5rem' }}>• Do you offer bulk discounts?</p>
                </div>
                <a href="/faq" style={{ display: 'inline-block', marginTop: '1rem', color: '#7CB342', fontWeight: 600, textDecoration: 'none' }}>
                  View All FAQs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
