import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div style={{ backgroundColor: "#111827", minHeight: "100vh" }}>
      <Navbar />

      {/* Sections with IDs for Smooth Scrolling */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* Footer sederhana */}
      <footer
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          color: "#4b5563",
          borderTop: "1px solid #1f2937",
        }}
      >
        <p>
          © {new Date().getFullYear()} Azfar Arafi Shofyan. Built with React &
          Framer Motion.
        </p>
      </footer>
    </div>
  );
}

export default App;
