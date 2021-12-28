import React from 'react';

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
      <div className="ovenlayout-detail-header">
        <h1>All Blurbs</h1>
      </div>
    </div>
  );
};

export default ProfileBlurb;
