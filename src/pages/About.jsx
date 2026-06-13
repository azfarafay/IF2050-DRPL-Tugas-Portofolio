import React from "react";

const About = () => {
  const containerStyle = {
    padding: "4rem 2rem",
    background: "#0f172a",
    color: "#f8fafc",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    minHeight: "100vh",
  };

  const sectionStyle = {
    maxWidth: "900px",
    margin: "0 auto 4rem auto",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    background: "linear-gradient(to right, #38bdf8, #818cf8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };

  const textStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#cbd5e1",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem",
  };

  const skillCardStyle = {
    background: "#1e293b",
    padding: "1rem",
    borderRadius: "8px",
    textAlign: "center",
    border: "1px solid #334155",
    fontSize: "0.95rem",
    fontWeight: "500",
    color: "#38bdf8",
    transition: "transform 0.2s",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const listItemStyle = {
    background: "#1e293b",
    padding: "1.25rem",
    borderRadius: "12px",
    marginBottom: "1rem",
    borderLeft: "4px solid #818cf8",
    color: "#e2e8f0",
  };

  const roleStyle = {
    fontWeight: "700",
    display: "block",
    fontSize: "1.1rem",
    color: "#f8fafc",
    marginBottom: "0.25rem",
  };

  const orgStyle = {
    color: "#94a3b8",
    fontSize: "0.9rem",
  };

  const skills = [
    "JavaScript",
    "Python",
    "Java",
    "C",
    "SQL",
    "React.js",
    "Express.js",
    "Node.js",
    "Git",
  ];

  const experience = [
    { role: "Vice Chairman of Operational", org: "KAT ITB 2026" },
    {
      role: "Staff of Accommodation and Transportation",
      org: "KAT ITB 2025 & IMPACT 5.0",
    },
    { role: "Staff of Creative Event", org: "BPA STEI-K ITB 2024" },
  ];

  return (
    <div style={containerStyle}>
      {/* Profil Section */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Profil</h2>
        <p style={textStyle}>
          Mahasiswa aktif dengan kemampuan dasar dalam analisis sistem,
          pemrograman, dan visualisasi data. Terbiasa bekerja dalam tim untuk
          menyelesaikan tantangan teknis dan mencapai tujuan bersama secara
          efisien.
        </p>
      </section>

      {/* Tech Stack Section */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Tech Stack</h2>
        <div style={gridStyle}>
          {skills.map((skill) => (
            <div key={skill} style={skillCardStyle}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Pengalaman Organisasi Section */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Pengalaman Organisasi</h2>
        <ul style={listStyle}>
          {experience.map((item, index) => (
            <li key={index} style={listItemStyle}>
              <span style={roleStyle}>{item.role}</span>
              <span style={orgStyle}>{item.org}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
