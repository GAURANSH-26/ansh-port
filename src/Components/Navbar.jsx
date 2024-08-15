import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  
  return (
    <header>
      <div className="navbar">
        <h3>ANSH SINGH</h3>
        <nav>
          <Link smooth to="/#home">Home</Link>
          <Link smooth to="/#services">Services</Link>
          <Link smooth to="/#projects">Projects</Link>
          <Link smooth to="/#contact">Contact</Link>
          <Link smooth to="/#about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
