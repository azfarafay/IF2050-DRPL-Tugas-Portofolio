import React from 'react';

const Hero = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '2rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    color: '#f8fafc',
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
  };

  const nameStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
    fontWeight: '800',
    marginBottom: '0.5rem',
    background: 'linear-gradient(to right, #38bdf8, #818cf8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.02em',
  };

  const educationStyle = {
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    color: '#94a3b8',
    marginBottom: '2rem',
    maxWidth: '600px',
  };

  const taglineStyle = {
    fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
    lineHeight: '1.6',
    maxWidth: '800px',
    color: '#e2e8f0',
    fontWeight: '400',
    borderLeft: '4px solid #38bdf8',
    paddingLeft: '1.5rem',
    textAlign: 'left',
    marginTop: '1rem',
  };

  return (
    <section style={containerStyle}>
      <h1 style={nameStyle}>Azfar Arafi Shofyan</h1>
      <p style={educationStyle}>
        S1 Sistem dan Teknologi Informasi <br />
        Institut Teknologi Bandung (2024 - sekarang)
      </p>
      <div style={taglineStyle}>
        "Mengintegrasikan pengembangan sistem informasi dengan manajemen proyek IT strategis untuk menghadirkan solusi teknologi digital yang transformatif."
      </div>
    </section>
  );
};

export default Hero;
