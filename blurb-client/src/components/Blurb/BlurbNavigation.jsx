import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// import components
import ProtectedComponent from '../Authentication/ProtectedComponent';
import Avataar from '../Avataar/Avataar';
import BlurbMeta from './BlurbMeta';
import BlurbModify from './BlurbModify';

// import stylesheets
import './Blurb.css';

// import images
import blurb_icon from '../../static/blurb-icon.png';

const BlurbNavigation = () => {
  return (
    <div className="blurb-navigation">
      <div className="avataar-wrapper">
        <Avataar
          src={blurb_icon}
          alt_text="Blurb Logo"
          avataar_classes={['blurb-navicon']}
          rounded={true}
        />
      </div>
      <div className="user-detail-wrapper">
        <BlurbMeta
          user="Mohit Kumar"
          createdAt="12-12-2021"
          updatedAt="24-12-2021"
        />
      </div>
      <div className="modify-detail-wrapper">
        <ProtectedComponent>
          <BlurbModify />
        </ProtectedComponent>
      </div>
    </div>
  );
};

export default BlurbNavigation;
