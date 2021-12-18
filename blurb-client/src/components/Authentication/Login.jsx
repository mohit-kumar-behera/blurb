import React from 'react';
import { Field, reduxForm } from 'redux-form';

// import components
import Input from './Fields/Input';

// import custom hooks
import useDocumentTitle from '../../CustomHook/useDocumentTitle';

const inputComponents = {
  email: (
    <Input
      type="email"
      placeholder="johndoe567@gmail.com"
      className="user-input"
      spellCheck="false"
      required
    />
  ),
  password: (
    <Input
      type="password"
      placeholder="************"
      className="user-input"
      spellCheck="false"
      required
    />
  ),
};

const FormField = formProps => {
  const { input: inputProps, meta, type, label } = formProps;

  const renderInput = (inputType, meta) => {
    const fakeInput = Object.assign({}, inputComponents[inputType]);
    fakeInput.props = { ...fakeInput.props, ...inputProps };
    return fakeInput;
  };

  const renderError = ({ error, touched }) => {
    let errorObj = { errMsg: '', errCls: '' };

    if (touched && error)
      errorObj = { ...errorObj, errMsg: error, errCls: 'show' };
    else errorObj = { ...errorObj, errMsg: '', errCls: '' };

    return (
      <small className={`error-label ${errorObj.errCls}`}>
        {errorObj.errMsg}
      </small>
    );
  };

  return (
    <div className="form-field">
      <label className="label">{label}</label>
      {renderInput(type.toLowerCase(), meta)}
      {renderError(meta)}
    </div>
  );
};

const Login = props => {
  useDocumentTitle(props.title);

  const submitHandler = formValues => {
    console.log('values', formValues);
  };

  return (
    <>
      <h1 className="form-head">Log into your account</h1>
      <form
        method="post"
        className="form"
        onSubmit={props.handleSubmit(submitHandler)}
      >
        <Field
          name="email"
          component={FormField}
          label="Email Address"
          type="email"
        />
        <Field
          name="password"
          component={FormField}
          label="Password"
          type="password"
        />
        <div className="form-field">
          <button type="submit" className="form-action-btn">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

const validate = formValues => {
  const errors = {};
  const requiredFields = ['email', 'password'];

  requiredFields.forEach(requiredField => {
    if (!formValues[requiredField])
      errors[
        requiredField
      ] = `${requiredField.toUpperCase()} field can't be left empty.`;
  });

  return errors;
};

export default reduxForm({
  form: 'LoginForm',
  validate,
})(Login);
