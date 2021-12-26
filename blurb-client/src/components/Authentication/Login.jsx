import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

// import custom hooks
import useDocumentTitle from '../../CustomHook/useDocumentTitle';

// import components
import FormField from './Fields/FormField';

// import validators
import emailPasswordValidation from './Validators/emailPassword';
import requiredFieldValidation from './Validators/requiredField';

// import actions
import { login } from '../../redux/actions/authAction';

const actionBtnWrapperStyle = {
  display: 'flex',
  justifyContent: 'end',
};

const Login = props => {
  const navigate = useNavigate();
  const location = useLocation();

  let fromPage = location.state?.from?.pathname || '/';

  useDocumentTitle(props.title);

  const submitHandler = formValues => {
    // Check if values isn't empty for some fields
    Object.entries(formValues).forEach(([_, value]) => {
      if (!value) return;
    });

    let fakeUsername = formValues.email.split('@')[0];

    props.login(fakeUsername);

    navigate(fromPage, { replace: true });
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
        <div className="form-field" style={actionBtnWrapperStyle}>
          <button type="submit" className="form-action-btn">
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

const validate = formValues => {
  const errors = {};
  const requiredFields = ['email', 'password'];
  requiredFieldValidation(requiredFields, formValues, errors);
  // emailPasswordValidation(formValues, errors);
  return errors;
};

const FormComponentWrapped = reduxForm({
  form: 'LoginForm',
  validate,
})(Login);

export default connect(null, { login })(FormComponentWrapped);
