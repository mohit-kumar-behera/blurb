import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Avataar from '../Avataar/Avataar';
import blurb_icon from '../../static/blurb-icon.png';
import './Navbar.css';

import { login, logout } from '../../redux/actions/authAction';

const ProtectedNavLink = ({ auth, login, logout }) => {
  if (!auth.user)
    return (
      <>
        <Link to="/auth/login" className="link navlink">
          Login
        </Link>
        <button onClick={() => login('Karan')}>Login</button>
        <Link to="/auth/signup" className="link navlink">
          signup
        </Link>
      </>
    );

  return (
    <>
      {/* <Link to="/comp2" className="link navlink">
        Log out
      </Link> */}
      <button onClick={() => logout()}>Logout</button>
      <Link to="/auth/login" className="link navlink">
        {auth.user}
      </Link>
    </>
  );
};

const Navbar = props => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="link navlink">
          blurbs
        </Link>
      </div>
      <div className="middle">
        <Avataar
          src={blurb_icon}
          alt_text="Blurb Logo"
          avataar_classes={['navicon']}
        />
      </div>
      <div className="right">
        <ProtectedNavLink
          auth={props.auth}
          login={props.login}
          logout={props.logout}
        />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login, logout })(Navbar);
