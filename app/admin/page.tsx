'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to TinaCMS Cloud editor
    const clientId = '4dfb9c3f-42f0-491d-b780-55ae88ef4ba3';
    const branch = 'main';
    const returnUrl = window.location.origin;
    
    window.location.href = `https://app.tina.io/projects/${clientId}/edit?branch=${branch}&returnUrl=${returnUrl}`;
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      backgroundColor: '#fafafa'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: '500px'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
        
        <h1 style={{ 
          color: '#7CB342', 
          marginBottom: '0.5rem',
          fontSize: '1.8rem',
          fontWeight: 600
        }}>
          Redirecting to Editor...
        </h1>
        
        <p style={{ 
          color: '#666', 
          marginBottom: '1.5rem',
          lineHeight: 1.6
        }}>
          Taking you to the TinaCMS admin panel where you can edit your content.
        </p>
        
        <div style={{
          display: 'inline-block',
          width: '40px',
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #7CB342',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        
        <p style={{ 
          color: '#999', 
          fontSize: '0.85rem',
          marginTop: '1.5rem'
        }}>
          If not redirected, <a 
            href={`https://app.tina.io/projects/4dfb9c3f-42f0-491d-b780-55ae88ef4ba3/edit?branch=main`}
            style={{ color: '#7CB342', textDecoration: 'underline' }}
          >
            click here
          </a>
        </p>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
