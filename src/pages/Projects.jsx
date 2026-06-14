import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const containerStyle = {
    padding: "6rem 2rem",
    background: "#f0f0f0", // Light background
    color: "#2D3748", // Dark text
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    minHeight: "100vh",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "5rem",
  };

  const titleStyle = {
    fontSize: "3.5rem",
    fontWeight: "800",
    color: "#38B2AC", // Teal accent
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "3rem",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: "#EDF2F7", // Card background
    borderRadius: "20px",
    padding: "2.5rem",
    border: "1px solid #CBD5E1", // Light border
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
  };

  const projectTitleStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#2D3748", // Dark text
    marginBottom: "0.75rem",
  };

  const roleStyle = {
    fontSize: "0.95rem",
    color: "#38B2AC", // Teal accent
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "0.5rem",
  };

  const dateStyle = {
    fontSize: "0.9rem",
    color: "#4A5568", // Secondary text
    marginBottom: "1.5rem",
    display: "block",
  };

  const descStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.7",
    color: "#4A5568", // Secondary text
    marginBottom: "2rem",
  };

  const tagContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    marginTop: "auto",
  };

  const tagStyle = {
    background: "rgba(56, 178, 172, 0.1)", // Teal transparency
    color: "#38B2AC", // Teal accent
    padding: "0.4rem 1rem",
    borderRadius: "10px",
    fontSize: "0.85rem",
    fontWeight: "600",
    border: "1px solid rgba(56, 178, 172, 0.2)",
  };

  const projects = [
    {
      title: "B2B Roastery Management Platform",
      role: "Full Stack Developer",
      date: "Februari 2026 - Juni 2026",
      desc: "Mendigitalisasi manajemen inventaris dan transaksi antara Roastery kopi dan Coffee Shop. Membangun arsitektur decoupled dengan keamanan tingkat lanjut (JWT, Cloudflare Zero Trust) dan dashboard analitik interaktif.",
      tags: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    },
    {
      title: "Program Manajemen Rumah Sakit",
      role: "Developer",
      date: "April 2025 - Juni 2025",
      desc: "Mengembangkan program berbasis C untuk manajemen data medis terpadu. Menerapkan struktur data kompleks seperti array dan struct, serta algoritma sorting dan searching untuk efisiensi pengolahan data pasien.",
      tags: [
        "C Language",
        "Algorithms",
        "Data Structures",
        "Modular Programming",
      ],
    },
  ];

  return (
    <div style={containerStyle} id="projects">
      <motion.header
        style={headerStyle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={titleStyle}>Projects</h1>
        <p style={{ color: "#4A5568", fontSize: "1.2rem" }}>
          Eksplorasi solusi teknis dan pengembangan sistem informasi.
        </p>
      </motion.header>

      <div style={gridStyle}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={cardStyle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)", // Soft shadow
              borderColor: "#38B2AC",
            }}
          >
            <span style={roleStyle}>{project.role}</span>
            <h2 style={projectTitleStyle}>{project.title}</h2>
            <span style={dateStyle}>{project.date}</span>
            <p style={descStyle}>{project.desc}</p>
            <div style={tagContainerStyle}>
              {project.tags.map((tag) => (
                <span key={tag} style={tagStyle}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
