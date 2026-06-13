import React from 'react';

const Projects = () => {
  const containerStyle = {
    padding: '4rem 2rem',
    background: '#0f172a',
    color: '#f8fafc',
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    minHeight: '100vh',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '4rem',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: '800',
    background: 'linear-gradient(to right, #38bdf8, #818cf8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1rem',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem',
    maxWidth: '1100px',
    margin: '0 auto',
  };

  const cardStyle = {
    background: '#1e293b',
    borderRadius: '16px',
    padding: '2rem',
    border: '1px solid #334155',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
  };

  const projectTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#38bdf8',
    marginBottom: '0.5rem',
  };

  const roleStyle = {
    fontSize: '0.9rem',
    color: '#818cf8',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.25rem',
  };

  const dateStyle = {
    fontSize: '0.85rem',
    color: '#94a3b8',
    marginBottom: '1.5rem',
  };

  const descStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#cbd5e1',
  };

  const tagContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: 'auto',
    paddingTop: '1.5rem',
  };

  const tagStyle = {
    background: '#0f172a',
    color: '#94a3b8',
    padding: '0.25rem 0.75rem',
    borderRadius: '999px',
    fontSize: '0.75rem',
    border: '1px solid #334155',
  };

  const projects = [
    {
      title: 'B2B Roastery Management Platform',
      role: 'Full Stack Developer',
      date: 'Februari 2026 - Juni 2026',
      desc: 'Mendigitalisasi manajemen inventaris dan transaksi antara Roastery kopi dan Coffee Shop. Membangun arsitektur decoupled dengan keamanan tingkat lanjut (JWT, Cloudflare Zero Trust) dan dashboard analitik interaktif.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Recharts', 'JWT']
    },
    {
      title: 'Program Manajemen Rumah Sakit',
      role: 'Developer',
      date: 'April 2025 - Juni 2025',
      desc: 'Mengembangkan program berbasis C untuk manajemen data medis terpadu. Menerapkan struktur data kompleks seperti array dan struct, serta algoritma sorting dan searching untuk efisiensi pengolahan data pasien.',
      tags: ['C Language', 'Algorithms', 'Data Structures', 'Modular Programming']
    }
  ];

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Proyek Saya</h1>
        <p style={{ color: '#94a3b8' }}>Kumpulan karya dan kontribusi teknis pilihan.</p>
      </header>

      <div style={gridStyle}>
        {projects.map((project, index) => (
          <div key={index} style={cardStyle}>
            <span style={roleStyle}>{project.role}</span>
            <h2 style={projectTitleStyle}>{project.title}</h2>
            <span style={dateStyle}>{project.date}</span>
            <p style={descStyle}>{project.desc}</p>
            <div style={tagContainerStyle}>
              {project.tags.map(tag => (
                <span key={tag} style={tagStyle}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
