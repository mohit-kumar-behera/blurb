import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

// import components
import Modal from '../Modal/Modal';

// import actions
import { logout } from '../../redux/actions/authAction';

const loaderStyle = {
  width: '55px',
  height: '55px',
  position: 'relative',
  left: '50%',
  transform: 'translateX(-50%)',
  border: '10px solid #0072bb',
  borderBottom: 'none',
  borderRadius: '50%',
};

const Logout = props => {
  const navigate = useNavigate();

  const cancelAction = () => navigate(-1);

  const logoutAction = () => {
    props.logout();
    navigate('/');
  };

  const renderContent = () => {
    return <p>Are you sure you want to log out from your account?</p>;
  };

  const renderActions = () => {
    return (
      <>
        <button
          className="modal-action-btn light cancel"
          onClick={cancelAction}
        >
          Cancel
        </button>
        <button
          className="modal-action-btn danger logout"
          onClick={logoutAction}
        >
          Logout
        </button>
      </>
    );
  };

  return (
    <>
      <div className="loader" style={loaderStyle}></div>
      <Modal
        title="Logout from your Account"
        content={renderContent()}
        actions={renderActions()}
      />
    </>
  );
};

export default connect(null, { logout })(Logout);
