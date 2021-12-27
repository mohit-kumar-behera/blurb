import { connect } from 'react-redux';

const ProtectedUserComponent = ({ auth, children, componentByUser }) => {
  if (componentByUser !== auth.user) return null;
  return children;
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(ProtectedUserComponent);
