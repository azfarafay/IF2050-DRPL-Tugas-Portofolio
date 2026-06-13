import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [hoveredPath, setHoveredPath] = useState(null);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
  ];

  const navbarStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 50,
    backgroundColor: "rgba(17, 24, 39, 0.7)", // Semi-transparent Dark Slate
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    display: "flex",
    justifyContent: "center",
    padding: "1rem 0",
  };

  const menuContainerStyle = {
    display: "flex",
    gap: "2.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const itemStyle = {
    position: "relative",
    cursor: "pointer",
    color: "#9ca3af",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
    padding: "0.5rem 0",
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      style={navbarStyle}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ul style={menuContainerStyle}>
        {navItems.map((item) => (
          <motion.li
            key={item.id}
            style={{
              ...itemStyle,
              color: hoveredPath === item.id ? "#10b981" : "#9ca3af",
            }}
            onClick={() => scrollToSection(item.id)}
            onMouseEnter={() => setHoveredPath(item.id)}
            onMouseLeave={() => setHoveredPath(null)}
            whileHover={{ scale: 1.05 }}
          >
            {item.name}
            <AnimatePresence>
              {hoveredPath === item.id && (
                <motion.div
                  layoutId="underline"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    backgroundColor: "#10b981",
                    borderRadius: "2px",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
