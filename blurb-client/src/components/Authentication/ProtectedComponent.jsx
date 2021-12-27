import { connect } from 'react-redux';

const ProtectedComponent = ({ auth, children }) => {
  if (!auth.user) return null;
  return children;
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ProtectedComponent);
