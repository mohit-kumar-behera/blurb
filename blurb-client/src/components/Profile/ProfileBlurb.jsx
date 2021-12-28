import React from 'react';
import { Link } from 'react-router-dom';

// import components
import ProtectedComponent from '../Authentication/ProtectedComponent';
import ProtectedUserComponent from '../Authentication/ProtectedUserComponent';
import Blurb from '../Blurb/Blurb';

// import customHook
import useDynamicTitle from '../../CustomHook/useDynamicTitle';

// import stylesheets
import '../Layout/OvenLayout.css';
import './Profile.css';

import URL_TYPE from '../../CustomHook/urlType';

const ProfileBlurb = props => {
  useDynamicTitle(props.title, URL_TYPE.PROFILE);

  return (
    <div className="ovenlayout-detail-wrapper">
      <ProtectedComponent>
        <ProtectedUserComponent componentByUser="mohit">
          <div className="ovenlayout-detail-body">
            <div className="create-blurb-link-container">
              <div className="hr" style={{ width: '95%' }}></div>
              <div className="create-blurb-link">
                <Link to="create" className="link">
                  <button className="form-action-btn">Create Blurb</button>
                </Link>
              </div>
            </div>
          </div>
        </ProtectedUserComponent>
      </ProtectedComponent>

      <div className="ovenlayout-detail-header">
        <h1 className="profile-header">All Blurbs</h1>
      </div>
      <div className="ovenlayout-detail-body">
        <Blurb />
      </div>
    </div>
  );
};

export default ProfileBlurb;
