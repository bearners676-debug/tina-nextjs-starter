import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#222' }}>Terms of Service</h1>
          <p style={{ fontSize: '0.95rem', color: '#999', marginBottom: '3rem' }}>Last updated: March 7, 2026</p>

          <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            
            <Section 
              title="Acceptance of Terms"
              content="By accessing and using B-earners, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
            />

            <Section 
              title="Use of Products"
              content="All digital products purchased from B-earners are licensed for personal use only. You may not redistribute, resell, or share our products with others. Each license is valid for a single user."
            />

            <Section 
              title="Intellectual Property"
              content="All content, designs, graphics, and materials on B-earners are protected by copyright and other intellectual property laws. You may not reproduce, modify, or create derivative works without our express written permission."
            />

            <Section 
              title="Payment and Refunds"
              content="All purchases are processed securely through our payment partners. We offer a 30-day money-back guarantee on all products. To request a refund, please see our Refund Policy or contact our support team."
            />

            <Section 
              title="Account Responsibility"
              content="You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Please notify us immediately of any unauthorized use."
            />

            <Section 
              title="Prohibited Activities"
              content="You may not use our services for any unlawful purpose, to violate any laws, to infringe on others' rights, to distribute malware or harmful code, or to attempt to gain unauthorized access to our systems."
            />

            <Section 
              title="Disclaimer of Warranties"
              content="Our products and services are provided 'as is' without warranties of any kind. While we strive for quality, we do not guarantee that our products will meet all your specific requirements or be error-free."
            />

            <Section 
              title="Limitation of Liability"
              content="B-earners shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our products or services."
            />

            <Section 
              title="Changes to Terms"
              content="We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms."
            />

            <Section 
              title="Contact Information"
              content="For questions about these Terms of Service, please contact us at legal@blearners.com or visit our contact page."
            />
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
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>{title}</h2>
      <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.8 }}>{content}</p>
    </div>
  );
}
