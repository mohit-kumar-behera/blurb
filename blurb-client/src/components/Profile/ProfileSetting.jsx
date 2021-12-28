import React from 'react';

// import customHook
import useDocumentTitle from '../../CustomHook/useDocumentTitle';

const ProfileSetting = props => {
  useDocumentTitle(props.title);

  return (
    <div className="ovenlayout-detail-wrapper">
      <div className="ovenlayout-detail-header">
        <h1 className="profile-header">My Settings</h1>
      </div>
      <div className="horizontal-line md"></div>

      <div className="ovenlayout-detail-body">
        <div className="ovenlayout-detail-header">
          <h1 className="profile-header">Edit Personal Info</h1>
        </div>
      </div>

      <div className="horizontal-line sm"></div>

      <div className="ovenlayout-detail-body">
        <div className="ovenlayout-detail-header">
          <h1 className="profile-header">Change Profile Photo</h1>
        </div>
      </div>

      <div className="horizontal-line sm"></div>

      <div className="ovenlayout-detail-body">
        <div className="ovenlayout-detail-header">
          <h1 className="profile-header">Change Password</h1>
        </div>
      </div>

      <div className="horizontal-line sm"></div>

      <div className="ovenlayout-detail-body">
        <div className="ovenlayout-detail-header">
          <h1 className="profile-header">Delete Account</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
