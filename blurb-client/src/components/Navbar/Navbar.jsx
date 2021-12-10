import React from 'react';
import { Link } from 'react-router-dom';

import blurb_icon from '../../static/blurb-icon.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="link navlink">
          Home
        </Link>
      </div>
      <div className="middle">
        <img
          src={blurb_icon}
          width="30"
          height="30"
          style={{ transform: 'scale(2.5)' }}
        />
      </div>
      <div className="right">
        <Link to="/comp2" className="link navlink">
          Login
        </Link>
        <Link to="/comp3" className="link navlink">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
