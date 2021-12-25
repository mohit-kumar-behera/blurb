import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { addMessage } from '../../redux/actions/messageAction';

const ProtectedRoute = ({ auth, children, addMessage }) => {
  const location = useLocation();

  if (!auth.user) {
    // Attach Message
    const message = {
      id: Date.now(),
      content: 'Please Login to your account to access Profile Page',
    };
    addMessage(message);

    return (
      <Navigate
        to={`/auth/login/?next=${location.pathname}`}
        state={{ from: location }}
      />
    );
  }

  return children;
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { addMessage })(ProtectedRoute);
