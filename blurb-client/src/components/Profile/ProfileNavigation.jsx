import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

// import components
import ProtectedComponent from '../Authentication/ProtectedComponent';
import ProtectedUserComponent from '../Authentication/ProtectedUserComponent';
import Avataar from '../Avataar/Avataar';

// import stylesheets
import './Profile.css';

// import images
import blurb_icon from '../../static/blurb-icon.png';

const ProfileNavigation = () => {
  const params = useParams();

  return (
    <div className="profile-navigation">
      <div style={{ marginBottom: '2rem' }}>
        <Avataar
          src={blurb_icon}
          alt_text="Blurb Logo"
          avataar_classes={['blurb-navicon']}
          rounded={true}
        />
      </div>
      <NavLink
        to={`/profile/${params.username}/`}
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
      <ProtectedComponent>
        <ProtectedUserComponent componentByUser="mohit">
          <NavLink
            to="settings"
            className={({ isActive }) =>
              isActive ? 'profile-navlink active' : 'profile-navlink'
            }
          >
            User Settings
          </NavLink>
        </ProtectedUserComponent>
      </ProtectedComponent>
    </div>
  );
};

export default ProfileNavigation;
