import React from 'react';

// import Components
import Avataar from '../Avataar/Avataar';

// import customHook
import useDocumentTitle from '../../CustomHook/useDocumentTitle';

// import images
import default_pfpic from '../../static/default-pfpic.jpg';

const Profile = props => {
  useDocumentTitle(props.title);

  return (
    <div className="ovenlayout-detail-wrapper">
      <div className="ovenlayout-detail-header">
        <h1 className="profile-header">Profile Page</h1>
      </div>
      {/* <div className="ovenlayout-detail-header">
        <Avataar
          src={default_pfpic}
          alt_text="Default Profile Picture"
          avataar_classes={['profile-pic']}
          rounded={true}
        />
      </div>
      <div className="ovenlayout-detail-header user-detail-wrapper">
        <div className="user-detail">
          <strong className="detail-key">First Name</strong>
          <p className="detail-value">Mohit</p>
        </div>
        <div className="user-detail">
          <strong className="detail-key">Last Name</strong>
          <p className="detail-value">Kumar</p>
        </div>
        <div className="user-detail">
          <strong className="detail-key">Email</strong>
          <p className="detail-value">mohit@mail.com</p>
        </div>
        <div className="user-detail">
          <strong className="detail-key">Name</strong>
          <p className="detail-value">Mohit Kumar</p>
        </div>
      </div> */}

      <div className="ovenlayout-detail-body user-detail-wrapper">
        <div className="user-detail__left">
          <Avataar
            src={default_pfpic}
            alt_text="Default Profile Picture"
            avataar_classes={['profile-pic']}
            rounded={true}
          />
        </div>
        <div className="user-detail__right">
          <div className="user-detail">
            <strong className="detail-key">First Name</strong>
            <p className="detail-value">Mohit</p>
          </div>
          <div className="user-detail">
            <strong className="detail-key">Last Name</strong>
            <p className="detail-value">Kumar</p>
          </div>
          <div className="user-detail">
            <strong className="detail-key">Email</strong>
            <p className="detail-value">mohit@mail.com</p>
          </div>
          <div className="user-detail">
            <strong className="detail-key">Username</strong>
            <p className="detail-value">mohitkumar72846</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
