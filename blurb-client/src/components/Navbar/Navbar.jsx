import React from 'react';
import { Link } from 'react-router-dom';

import Avataar from '../Avataar/Avataar';
import blurb_icon from '../../static/blurb-icon.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="link navlink">
          blurbs
        </Link>
      </div>
      <div className="middle">
        <Avataar
          avataar={{
            classes: ['navicon'],
          }}
          img={{
            src: blurb_icon,
            alt: 'blurb icon',
            classes: [],
            cover: false,
          }}
        />
      </div>
      <div className="right">
        {/* <Link to="/comp2" className="link navlink">
          Login
        </Link>
        <Link to="/comp3" className="link navlink">
          signup
        </Link> */}
        <Link to="/comp2" className="link navlink">
          Logout
        </Link>
        <Link to="/comp3" className="link navlink">
          Mohit
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
