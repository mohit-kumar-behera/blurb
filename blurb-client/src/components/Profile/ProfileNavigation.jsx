import React from 'react';
import { NavLink } from 'react-router-dom';

// import components

// import stylesheets
import './Profile.css';

// import images

const ProfileNavigation = () => {
  return (
    <div className="profile-navigation">
      <NavLink
        to="/profile/judy/"
        className={({ isActive }) =>
          isActive ? 'profile-navlink active' : 'profile-navlink'
        }
      >
        User
      </NavLink>
      <NavLink
        to="blurb"
        className={({ isActive }) =>
          isActive ? 'profile-navlink active' : 'profile-navlink'
        }
      >
        User Blurbs
      </NavLink>
      <NavLink
        to="settings"
        className={({ isActive }) =>
          isActive ? 'profile-navlink active' : 'profile-navlink'
        }
      >
        User Settings
      </NavLink>
    </div>
  );
};

export default ProfileNavigation;
