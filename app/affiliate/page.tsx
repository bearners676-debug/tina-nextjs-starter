import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AffiliatePage() {
  return (
    <>
      <Navigation />

      <div style={{ minHeight: '80vh', background: '#fafafa', padding: '3rem 5%' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#222' }}>Affiliate Program</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              Earn 25% commission by sharing products you love with your audience.
            </p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #7CB342 0%, #689F38 100%)', borderRadius: '12px', padding: '3rem', color: 'white', marginBottom: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Earn 25% Per Sale</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.95 }}>
              Plus monthly bonuses for top performers
            </p>
          </div>

          <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', marginBottom: '3rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>Program Benefits</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <BenefitCard icon="💵" title="High Commissions" text="Earn 25% on every sale you refer - one of the highest rates in the industry." />
              <BenefitCard icon="🎯" title="90-Day Cookies" text="Get credit for sales up to 90 days after the initial click." />
              <BenefitCard icon="📊" title="Real-Time Tracking" text="Monitor your earnings and performance with our dashboard." />
              <BenefitCard icon="🎁" title="Exclusive Resources" text="Get access to banners, links, and promotional materials." />
              <BenefitCard icon="⚡" title="Fast Payments" text="Receive your commissions monthly via PayPal or bank transfer." />
              <BenefitCard icon="🏆" title="Bonus Incentives" text="Top affiliates earn extra bonuses and rewards." />
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', marginBottom: '3rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333', textAlign: 'center' }}>How It Works</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <StepCard number="1" title="Sign Up" text="Join our affiliate program for free in minutes." />
              <StepCard number="2" title="Share" text="Promote our products using your unique link." />
              <StepCard number="3" title="Earn" text="Get 25% commission on every sale you generate." />
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#333' }}>Frequently Asked Questions</h2>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <FAQItem 
                question="Who can join the affiliate program?"
                answer="Anyone with a website, blog, social media following, or email list can join. We welcome bloggers, influencers, educators, and content creators."
              />
              <FAQItem 
                question="How much can I earn?"
                answer="There's no limit! You earn 25% commission on every sale. Top affiliates earn thousands of dollars per month."
              />
              <FAQItem 
                question="When do I get paid?"
                answer="Commissions are paid monthly, 30 days after the end of each month. Minimum payout is $50."
              />
              <FAQItem 
                question="What promotional materials do you provide?"
                answer="We provide banners, text links, product images, email templates, and social media graphics to help you succeed."
              />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '3rem', background: '#f9f9f9', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>Ready to Get Started?</h3>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
              Join hundreds of successful affiliates earning passive income.
            </p>
            <button style={{ padding: '1rem 3rem', background: '#7CB342', color: 'white', border: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer' }}>
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

function BenefitCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

function StepCard({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#7CB342', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 700, margin: '0 auto 1rem' }}>
        {number}
      </div>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: '#666' }}>{text}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #f0f0f0' }}>
      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#333' }}>{question}</h4>
      <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{answer}</p>
    </div>
  );
}
