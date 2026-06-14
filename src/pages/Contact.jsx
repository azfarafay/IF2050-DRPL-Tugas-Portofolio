import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const containerStyle = {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    padding: "2rem",
  };

  const secondaryTextStyle = {
    color: "#4A5568",
    fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
    fontWeight: "600",
    marginBottom: "1rem",
  };

  const emailStyle = {
    fontSize: "clamp(2rem, 5vw, 4rem)",
    fontWeight: "800",
    color: "#2D3748",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <section id="contact" style={containerStyle}>
      <motion.p
        style={secondaryTextStyle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Tertarik untuk berkolaborasi?
      </motion.p>
      <motion.a
        href="mailto:azfarafay@gmail.com"
        style={emailStyle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ color: "#38B2AC" }}
      >
        azfarafay@gmail.com
      </motion.a>
    </section>
  );
};

export default Contact;
