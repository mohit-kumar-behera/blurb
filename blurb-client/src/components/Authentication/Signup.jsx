import React from 'react';
import { Field, reduxForm } from 'redux-form';

// import custom hooks
import useDocumentTitle from '../../CustomHook/useDocumentTitle';

// import components
import FormField from './Fields/FormField';
import SubmitBtn from './Fields/SubmitBtn';

// import validators
import emailPasswordValidation from './Validators/emailPassword';
import requiredFieldValidation from './Validators/requiredField';

const Signup = props => {
  useDocumentTitle(props.title);

  const submitHandler = formValues => {
    // Check if values isn't empty for some fields
    Object.entries(formValues).forEach(([_, value]) => {
      if (!value) return;
    });
    // console.log(formValues);
  };

  return (
    <>
      <h1 className="form-head">Create an Account</h1>
      <form
        method="post"
        className="form"
        onSubmit={props.handleSubmit(submitHandler)}
      >
        <Field
          name="firstName"
          component={FormField}
          label="First Name"
          type="firstname"
        />
        <Field
          name="lastName"
          component={FormField}
          label="Last Name"
          type="lastname"
        />
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
        <Field
          name="confirmPassword"
          component={FormField}
          label="Confirm Password"
          type="password"
        />
        <SubmitBtn text="sign up" />
      </form>
    </>
  );
};

const validate = formValues => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'password',
    'confirmPassword',
  ];
  requiredFieldValidation(requiredFields, formValues, errors);
  emailPasswordValidation(formValues, errors);

  if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword =
      "Confirm Password Doesn't match with above password";
  }

  return errors;
};

const FormComponentWrapped = reduxForm({
  form: 'SignupForm',
  validate,
})(Signup);

export default FormComponentWrapped;
