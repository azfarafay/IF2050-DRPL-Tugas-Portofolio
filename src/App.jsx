import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Footer sederhana */}
      <footer
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          color: "#4A5568",
          backgroundColor: "#f0f0f0",
          borderTop: "1px solid #CBD5E1",
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
