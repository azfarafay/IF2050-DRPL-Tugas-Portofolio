import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerStyle = {
    padding: "6rem 2rem",
    background: "#0f172a", // Dark Slate
    color: "#f8fafc",
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
    color: "#fbbf24", // Amber accent
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const lineStyle = {
    height: "2px",
    flexGrow: 1,
    background: "linear-gradient(to right, #fbbf24, transparent)",
  };

  const textStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    color: "#cbd5e1",
    backgroundColor: "#1e293b",
    padding: "2.5rem",
    borderRadius: "16px",
    border: "1px solid #334155",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: "1.25rem",
    marginTop: "2rem",
  };

  const skillCardStyle = {
    background: "#1e293b",
    padding: "1.2rem",
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid #334155",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#e2e8f0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  };

  const listItemStyle = {
    background: "#1e293b",
    padding: "1.5rem 2rem",
    borderRadius: "16px",
    marginBottom: "1.25rem",
    borderLeft: "6px solid #fbbf24",
    color: "#e2e8f0",
    border: "1px solid #334155",
    borderLeftWidth: "6px",
  };

  const roleStyle = {
    fontWeight: "700",
    display: "block",
    fontSize: "1.25rem",
    color: "#fbbf24",
    marginBottom: "0.5rem",
  };

  const orgStyle = {
    color: "#94a3b8",
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
    <div style={containerStyle}>
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
                borderColor: "#fbbf24",
                color: "#fbbf24",
                boxShadow: "0 10px 15px -3px rgba(251, 191, 36, 0.2)",
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
              whileHover={{ x: 10, borderColor: "#fbbf24" }}
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
