import React from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/"><li>About me</li></Link>
        <Link to="/education"><li>Education</li></Link>
        <Link to="/experience"><li>Experience</li></Link>
        <Link to="/more"><li>More information</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
