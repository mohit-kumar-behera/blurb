import React from 'react';
import { Field, reduxForm } from 'redux-form';

// import custom hooks
import useDocumentTitle from '../../CustomHook/useDocumentTitle';

// import components
import FormField from './Fields/FormField';

// import validators
import emailPasswordValidation from './Validators/emailPassword';

const Login = props => {
  useDocumentTitle(props.title);

  const submitHandler = formValues => {
    // Check if values isn't empty for some fields
    Object.entries(formValues).forEach(([_, value]) => {
      if (!value) return;
    });

    console.log(formValues);
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
  emailPasswordValidation(formValues, errors);
  return errors;
};

export default reduxForm({
  form: 'LoginForm',
  validate,
})(Login);
