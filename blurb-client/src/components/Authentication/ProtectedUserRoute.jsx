import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedUserRoute = ({ auth, children }) => {
  /*
  TODO: Fetch data of the authenticated user and check whether the user is allowed to access this route
  */
  const routeSpecificUser = 'mohit';

  if (auth.user !== routeSpecificUser) return <Navigate to="/" />;
  return children;
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ProtectedUserRoute);
