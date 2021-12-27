import React from 'react';

const actionBtnWrapperStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const SubmitBtn = props => {
  return (
    <div className="form-field" style={actionBtnWrapperStyle}>
      <button
        type="submit"
        className={`form-action-btn ${props.className}`}
        {...props.attrs}
      >
        {props.text}
      </button>
    </div>
  );
};

SubmitBtn.defaultProps = {
  text: 'Submit',
  className: '',
  attrs: {},
};

export default SubmitBtn;
