import React from 'react';
import { Field, reduxForm } from 'redux-form';

// import components
import FormField from '../Authentication/Fields/FormField';
import SubmitBtn from '../Authentication/Fields/SubmitBtn';

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

const FormComponentWrapped = reduxForm({
  form: 'BlurbForm',
})(BlurbForm);

export default FormComponentWrapped;
