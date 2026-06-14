import React from "react";
import { motion } from "framer-motion";
import fotoProfil from "../assets/foto_profil.jpg";

const Hero = () => {
  // 1. Container Utama
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "85vh",
    padding: "6rem 5%",
    backgroundColor: "#f0f0f0", // Light background
    color: "#2D3748", // Dark text
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    gap: "3rem",
    flexWrap: "wrap",
  };

  // 2. Kolom Kiri (Foto) - Proporsi 40%
  const imageContainerStyle = {
    flex: "0 0 40%",
    display: "flex",
    justifyContent: "center",
    minWidth: "300px",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "480px",
    aspectRatio: "4/5",
    objectFit: "cover",
    borderRadius: "24px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)", // Softer shadow
    border: "2px solid rgba(56, 178, 172, 0.3)", // Teal accent border
  };

  // 3. Kolom Kanan (Teks) - Proporsi 60%
  const textContainerStyle = {
    flex: "1 1 50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    minWidth: "320px",
  };

  // 4. Style Teks & Tombol
  const greetingStyle = {
    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
    color: "#4A5568", // Secondary text color
    fontWeight: "600",
    marginBottom: "1rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  };

  const nameStyle = {
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
    fontWeight: "800",
    marginBottom: "0.5rem",
    color: "#2D3748", // Dark text
    lineHeight: "1.1",
    letterSpacing: "-0.02em",
  };

  const subTitleStyle = {
    fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
    fontWeight: "600",
    color: "#4A5568",
    marginBottom: "1.5rem",
    lineHeight: "1.4",
  };

  const descriptionStyle = {
    fontSize: "1.125rem",
    lineHeight: "1.8",
    maxWidth: "600px",
    color: "#4A5568",
    marginBottom: "2.5rem",
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "1.25rem",
    flexWrap: "wrap",
  };

  const primaryBtnStyle = {
    padding: "0.875rem 2rem",
    backgroundColor: "#38B2AC", // Teal accent
    color: "#ffffff",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)",
  };

  const secondaryBtnStyle = {
    padding: "0.875rem 2rem",
    backgroundColor: "transparent",
    color: "#38B2AC", // Teal accent
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "1rem",
    border: "2px solid #38B2AC",
    cursor: "pointer",
  };

  // 5. Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section style={containerStyle} id="home">
      {/* KIRI: FOTO */}
      <motion.div
        style={imageContainerStyle}
        initial={{ opacity: 0, scale: 0.9, x: -30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={fotoProfil} alt="Azfar Arafi Shofyan" style={imageStyle} />
      </motion.div>

      {/* KANAN: TEKS */}
      <motion.div
        style={textContainerStyle}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.span style={greetingStyle} variants={itemVariants}>
          Halo, perkenalkan saya
        </motion.span>

        <motion.h1 style={nameStyle} variants={itemVariants}>
          Azfar Arafi Shofyan
        </motion.h1>

        <motion.h2 style={subTitleStyle} variants={itemVariants}>
          Mahasiswa Sistem dan Teknologi Informasi di <br />
          <span style={{ color: "#38B2AC" }}>Institut Teknologi Bandung</span>
        </motion.h2>

        <motion.p style={descriptionStyle} variants={itemVariants}>
          Memiliki ketertarikan mendalam pada Keamanan Siber, Integrasi Sistem,
          dan Pengembangan Full-Stack. Berdedikasi untuk membangun solusi
          digital yang efisien dan aman.
        </motion.p>

        <motion.div style={buttonGroupStyle} variants={itemVariants}>
          <motion.button
            style={primaryBtnStyle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Proyek
          </motion.button>
          <motion.button
            style={secondaryBtnStyle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hubungi Saya
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
