import React from 'react';
import { useNavigate } from 'react-router-dom';

// import components
import BlurbForm from '../Blurb/BlurbForm';

// import custom Hook
import useDocumentTitle from '../../CustomHook/useDocumentTitle';

// import stylesheets
import '../Layout/OvenLayout.css';

const backBtnStyle = {
  fontSize: '1.2rem',
  cursor: 'pointer',
  backgroundColor: 'var(--orange-amber)',
  border: 'none',
  color: 'var(--white)',
  padding: '0.2rem 1rem',
  borderRadius: '4px',
};

const ProfileBlurbCreate = props => {
  const navigate = useNavigate();
  useDocumentTitle(props.title);

  return (
    <div className="ovenlayout-detail-wrapper">
      <div
        className="ovenlayout-detail-body"
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <button onClick={() => navigate(-1)} style={backBtnStyle}>
          &larr;
        </button>
      </div>
      <div className="ovenlayout-detail-header">
        <h1 className="profile-header">Create Blurb</h1>
      </div>
      <div className="ovenlayout-detail-body">
        <BlurbForm />
      </div>
    </div>
  );
};

export default ProfileBlurbCreate;
