import React from 'react';

import h from '../../components/icon.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="one">
        <span>ALL</span>
      </div>
      <div className="two">
        <img
          src={h}
          width="30"
          height="30"
          style={{ transform: 'scale(2.5)' }}
        />
      </div>
      <div className="three">
        <div>Log in</div>
        <div>Log out</div>
      </div>
    </nav>
  );
};

export default Navbar;
