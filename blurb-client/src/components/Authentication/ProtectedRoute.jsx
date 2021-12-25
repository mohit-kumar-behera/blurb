import { Navigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ auth, children }) => {
  const location = useLocation();

  if (!auth.user)
    return (
      <Navigate
        to={`/auth/login/?next=${location.pathname}`}
        state={{ from: location }}
      />
    );

  return children;
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
