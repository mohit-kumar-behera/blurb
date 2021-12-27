import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import components
import Avataar from '../Avataar/Avataar';

// import images
import blurb_icon from '../../static/blurb-icon.png';

// import stylesheets
import './Navbar.css';

const ProtectedNavLink = ({ auth }) => {
  if (!auth.user)
    return (
      <>
        <Link to="/auth/login" className="link navlink">
          Login
        </Link>
        <Link to="/auth/signup" className="link navlink">
          signup
        </Link>
      </>
    );

  return (
    <>
      <Link to="/auth/logout" className="link navlink">
        Log out
      </Link>
      <Link to={`user/${auth.user}`} className="link navlink">
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
        <ProtectedNavLink auth={props.auth} logout={props.logout} />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
