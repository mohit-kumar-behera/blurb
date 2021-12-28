import React from 'react';
import { Field, reduxForm } from 'redux-form';

// import components
import FormField from '../Authentication/Fields/FormField';
import SubmitBtn from '../Authentication/Fields/SubmitBtn';

// import validators
import requiredFieldValidation from '../Authentication/Validators/requiredField';

const BlurbForm = props => {
  const submitHandler = formValues => {
    console.log('Submitted', formValues);
  };

  return (
    <>
      <form
        method="post"
        className="form"
        onSubmit={props.handleSubmit(submitHandler)}
      >
        <Field
          name="blurbTitle"
          component={FormField}
          label="Title of Blurb"
          type="text"
        />
        <Field
          name="blurbContent"
          component={FormField}
          label="Content for Blurb"
          type="textarea"
        />
        <SubmitBtn />
      </form>
    </>
  );
};

const validate = formValues => {
  const errors = {};
  const requiredFields = ['blurbTitle', 'blurbContent'];
  requiredFieldValidation(requiredFields, formValues, errors);
  return errors;
};

const FormComponentWrapped = reduxForm({
  form: 'BlurbForm',
  validate,
})(BlurbForm);

export default FormComponentWrapped;
