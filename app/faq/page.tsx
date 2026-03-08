'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I download my purchased products?',
    answer: 'After completing your purchase, you\'ll receive an email with download links for all your products. You can also access them from the confirmation page immediately after checkout.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Razorpay. All payments are processed securely through encrypted gateways.'
  },
  {
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not completely satisfied with your purchase, contact us within 30 days for a full refund, no questions asked.'
  },
  {
    question: 'Are the products compatible with my device?',
    answer: 'All our digital products are in PDF format and work on any device - computers, tablets, smartphones, and e-readers. You can download and use them immediately on your preferred device.'
  },
  {
    question: 'Do you offer discounts for bulk purchases?',
    answer: 'Yes! Check out our Bundle section for pre-made bundles with savings up to 40%. For custom bulk orders (10+ products), contact our support team for special pricing.'
  },
  {
    question: 'How often do you add new products?',
    answer: 'We release new products monthly! Subscribe to our newsletter to be the first to know about new releases and exclusive discounts.'
  },
  {
    question: 'Can I share the products with others?',
    answer: 'Our products are for personal use only. Each purchase is licensed to a single user. For team or organizational use, please contact us for volume licensing options.'
  },
  {
    question: 'What if I lose my download link?',
    answer: 'No worries! Contact our support team with your order number or email address, and we\'ll resend your download links within 24 hours.'
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center', color: '#222' }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', textAlign: 'center', marginBottom: '3rem' }}>
            Find answers to common questions about our products and services.
          </p>

          <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{ 
                  borderBottom: index !== faqs.length - 1 ? '1px solid #f0f0f0' : 'none',
                  paddingBottom: '1.5rem',
                  marginBottom: '1.5rem'
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    padding: '0',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <h3 style={{ fontSize: '1.2rem', color: '#333', fontWeight: 600, paddingRight: '1rem' }}>
                    {faq.question}
                  </h3>
                  <span style={{ fontSize: '1.5rem', color: '#7CB342', flexShrink: 0 }}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {openIndex === index && (
                  <p style={{ 
                    fontSize: '1rem', 
                    color: '#666', 
                    lineHeight: 1.8, 
                    marginTop: '1rem',
                    paddingRight: '2rem'
                  }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Still have questions?</h3>
            <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem' }}>
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a 
              href="/contact"
              style={{ display: 'inline-block', padding: '0.8rem 2rem', background: '#7CB342', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 600 }}
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
