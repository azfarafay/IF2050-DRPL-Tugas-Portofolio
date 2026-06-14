import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerStyle = {
    padding: "6rem 2rem",
    background: "#f0f0f0", // Clean Light background
    color: "#2D3748", // Dark text
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    minHeight: "100vh",
  };

  const sectionStyle = {
    maxWidth: "1000px",
    margin: "0 auto 6rem auto",
  };

  const titleStyle = {
    fontSize: "2.8rem",
    fontWeight: "800",
    marginBottom: "2rem",
    color: "#38B2AC", // Teal accent
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const lineStyle = {
    height: "2px",
    flexGrow: 1,
    background: "linear-gradient(to right, #38B2AC, transparent)",
  };

  const textStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    color: "#4A5568", // Secondary text
    backgroundColor: "#EDF2F7", // Card background
    padding: "2.5rem",
    borderRadius: "16px",
    border: "1px solid #CBD5E1", // Light border
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: "1.25rem",
    marginTop: "2rem",
  };

  const skillCardStyle = {
    background: "#EDF2F7",
    padding: "1.2rem",
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid #CBD5E1",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#4A5568",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
  };

  const listItemStyle = {
    background: "#EDF2F7",
    padding: "1.5rem 2rem",
    borderRadius: "16px",
    marginBottom: "1.25rem",
    borderLeft: "6px solid #38B2AC",
    color: "#4A5568",
    border: "1px solid #CBD5E1",
    borderLeftWidth: "6px",
  };

  const roleStyle = {
    fontWeight: "700",
    display: "block",
    fontSize: "1.25rem",
    color: "#38B2AC",
    marginBottom: "0.5rem",
  };

  const orgStyle = {
    color: "#4A5568",
    fontSize: "1rem",
    fontWeight: "500",
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div style={containerStyle} id="about">
      {/* Profil Section */}
      <motion.section
        style={sectionStyle}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={titleStyle}>
          About Me <div style={lineStyle}></div>
        </div>
        <p style={textStyle}>
          Mahasiswa Sistem dan Teknologi Informasi dengan kemampuan dasar dalam
          analisis sistem, pemrograman, dan visualisasi data. Terbiasa bekerja
          dalam tim untuk menyelesaikan tantangan teknis dan mencapai tujuan
          bersama secara efisien.
        </p>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        style={sectionStyle}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={titleStyle}>
          Tech Stack <div style={lineStyle}></div>
        </div>
        <div style={gridStyle}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              style={skillCardStyle}
              whileHover={{
                scale: 1.05,
                borderColor: "#38B2AC",
                color: "#38B2AC",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pengalaman Organisasi Section */}
      <motion.section
        style={sectionStyle}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={titleStyle}>
          Pengalaman Organisasi <div style={lineStyle}></div>
        </div>
        <div style={{ padding: 0 }}>
          {experience.map((item, index) => (
            <motion.div
              key={index}
              style={listItemStyle}
              whileHover={{ x: 10, borderColor: "#38B2AC" }}
            >
              <span style={roleStyle}>{item.role}</span>
              <span style={orgStyle}>{item.org}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
