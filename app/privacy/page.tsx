import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#222' }}>Privacy Policy</h1>
          <p style={{ fontSize: '0.95rem', color: '#999', marginBottom: '3rem' }}>Last updated: March 7, 2026</p>

          <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            
            <Section 
              title="Information We Collect"
              content="We collect information you provide directly to us, such as when you create an account, make a purchase, or contact our support team. This includes your name, email address, payment information, and any other information you choose to provide."
            />

            <Section 
              title="How We Use Your Information"
              content="We use the information we collect to process your orders, send you important updates about your purchases, improve our products and services, and communicate with you about new products, promotions, and other news. We never sell your personal information to third parties."
            />

            <Section 
              title="Information Sharing"
              content="We share your information only with service providers who help us operate our business, such as payment processors and email service providers. These partners are contractually obligated to keep your information secure and use it only for the purposes we specify."
            />

            <Section 
              title="Data Security"
              content="We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment transactions are processed through secure, encrypted connections."
            />

            <Section 
              title="Your Rights"
              content="You have the right to access, update, or delete your personal information at any time. You can also opt out of marketing communications. To exercise these rights, please contact us at privacy@blearners.com."
            />

            <Section 
              title="Cookies"
              content="We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings."
            />

            <Section 
              title="Children's Privacy"
              content="Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us."
            />

            <Section 
              title="Changes to This Policy"
              content="We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the 'Last updated' date."
            />

            <Section 
              title="Contact Us"
              content="If you have any questions about this privacy policy or our data practices, please contact us at privacy@blearners.com or visit our contact page."
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
