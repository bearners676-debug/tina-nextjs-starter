import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RefundPage() {
  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#222' }}>30-Day Money-Back Guarantee</h1>
            <p style={{ fontSize: '1.2rem', color: '#666' }}>
              We stand behind the quality of our products. If you're not satisfied, get a full refund within 30 days.
            </p>
          </div>

          <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', marginBottom: '2rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>Our Refund Policy</h2>
            
            <Section 
              title="30-Day Guarantee"
              content="We offer a full refund on all purchases within 30 days of your order date. No questions asked. If you're not completely satisfied with your purchase, simply contact our support team."
            />

            <Section 
              title="How to Request a Refund"
              content="To request a refund, email us at support@blearners.com with your order number and the reason for your refund request (optional but helpful for improving our products). We'll process your refund within 5-7 business days."
            />

            <Section 
              title="What Happens After"
              content="Once we receive your refund request, we'll send you a confirmation email. Your refund will be processed to the original payment method within 5-7 business days. You'll receive an email notification once the refund is complete."
            />

            <Section 
              title="Exceptions"
              content="Refund requests must be made within 30 days of purchase. After 30 days, we cannot process refunds. However, if you're experiencing technical issues with a product, please contact us regardless of the timeframe - we're here to help!"
            />
          </div>

          <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', marginBottom: '2rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>Refund Process Timeline</h2>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <TimelineStep 
                step="1"
                title="Submit Request"
                description="Email support@blearners.com with your order number"
                time="Day 1"
              />
              <TimelineStep 
                step="2"
                title="Confirmation"
                description="Receive confirmation that your refund is being processed"
                time="Within 24 hours"
              />
              <TimelineStep 
                step="3"
                title="Processing"
                description="Refund is processed to your original payment method"
                time="3-5 business days"
              />
              <TimelineStep 
                step="4"
                title="Completion"
                description="You receive your refund and confirmation email"
                time="5-7 business days"
              />
            </div>
          </div>

          <div style={{ background: '#f0f9ea', border: '1px solid #7CB342', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>Still Have Questions?</h3>
            <p style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem' }}>
              Our support team is here to help with any refund inquiries.
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

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#333', fontWeight: 600 }}>{title}</h3>
      <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.8 }}>{content}</p>
    </div>
  );
}

function TimelineStep({ step, title, description, time }: { step: string; title: string; description: string; time: string }) {
  return (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
      <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#7CB342', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', fontWeight: 700, flexShrink: 0 }}>
        {step}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333' }}>{title}</h4>
          <span style={{ fontSize: '0.85rem', color: '#999', fontWeight: 600 }}>{time}</span>
        </div>
        <p style={{ fontSize: '0.95rem', color: '#666' }}>{description}</p>
      </div>
    </div>
  );
}
