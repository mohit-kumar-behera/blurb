import React from 'react';

import inputComponents from './InputOptions.js';

const FormField = formProps => {
  const { input: inputProps, meta, type, label } = formProps;

  const renderInput = (inputType, meta) => {
    const { error, touched } = meta;
    const fakeInput = Object.assign({}, inputComponents[inputType]);

    fakeInput.props = {
      ...fakeInput.props,
      ...inputProps,
      dataerror: touched ? (error ? 'true' : 'false') : '',
    };
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

export default FormField;
