import React from 'react';

// import components
import Input from './Fields/Input';

// import custom hooks
import useDocumentTitle from '../../CustomHook/useDocumentTitle';

const Login = props => {
  useDocumentTitle(props.title);

  return (
    <>
      <h1 className="form-head">Log into your account</h1>
      <form method="post" className="form">
        <div className="form-field">
          <label className="label">Email Address</label>
          <Input
            type="email"
            placeholder="johndoe567@gmail.com"
            className="user-input"
            spellCheck="false"
            required
          />
          <small className="error-label">This is error</small>
        </div>
        <div className="form-field">
          <label className="label">Password</label>
          <Input
            type="password"
            placeholder="************"
            className="user-input"
            spellCheck="false"
            required
          />
          <small className="error-label show">This is error</small>
        </div>
        <div className="form-field">
          <button type="button" className="form-action-btn">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
