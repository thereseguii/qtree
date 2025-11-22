import React from 'react';

const HomePage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#D1E2C6'
    }}>
      <h1 style={{ color: '#507D48', fontSize: '2.5rem', fontWeight: 'bold' }}>Welcome to QTree Home!</h1>
      <p style={{ color: '#507D48', fontSize: '1.2rem', marginTop: '1rem' }}>You are now logged in.</p>
    </div>
  );
};

export default HomePage;