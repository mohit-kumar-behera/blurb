import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedUserRoute = ({ auth, children }) => {
  /*
  TODO: 
  1) Fetch data of the authenticated user and check whether the user is allowed to access this route
  2) Do Above search based on TYPE like is it blurb or profile page bcoz params will be different in different case
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
