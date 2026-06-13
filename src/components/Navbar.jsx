import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    padding: '1rem',
    background: '#333',
    color: '#fff',
    display: 'flex',
    gap: '15px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
    </nav>
  );
};

export default Navbar;
