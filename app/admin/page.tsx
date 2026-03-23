'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
    const branch = 'main';
    const returnUrl = window.location.origin;

    if (!clientId) {
      console.error("Client ID is missing");
      return;
    }

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
          Taking you to the TinaCMS admin panel.
        </p>
      </div>
    </div>
  );
}
