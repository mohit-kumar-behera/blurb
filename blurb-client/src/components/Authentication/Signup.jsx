import React from 'react';

// import custom hooks
import useDocumentTitle from '../../CustomHook/useDocumentTitle';

const Signup = props => {
  useDocumentTitle(props.title);

  return <h2>Signup Page</h2>;
};

export default Signup;
