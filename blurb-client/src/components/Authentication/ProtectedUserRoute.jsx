import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { addMessage } from '../../redux/actions/messageAction';

const ProtectedUserRoute = ({ auth, children, addMessage }) => {
  const location = useLocation();
  /*
  TODO: Fetch data of the authenticated user and check whether the user is allowed to access this route
  */
  const routeSpecificUser = 'mohit';

  if (auth.user !== routeSpecificUser) {
    // Attach Message
    const message = {
      id: Date.now(),
      content: `Sorry, You are not allowed to access route (${location.pathname})`,
    };
    addMessage(message);

    return <Navigate to="/" />;
  }

  return children;
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { addMessage })(ProtectedUserRoute);
