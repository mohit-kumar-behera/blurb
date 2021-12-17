import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const UnAutheticatedRoute = props => {
  if (props.user) return <Navigate to="/" />;
  return props.children;
};

const mapStateToProps = state => {
  return state.auth;
};

export default connect(mapStateToProps)(UnAutheticatedRoute);
