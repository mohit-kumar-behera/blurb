const emailPasswordValidation = (fieldValObj, errors) => {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  if (fieldValObj.email && !fieldValObj.email.match(EMAIL_REGEX))
    errors.email = 'Email entered is not a valid email';

  if (fieldValObj.password && !fieldValObj.password.match(PASSWORD_REGEX))
    errors.password =
      'Password must be 8 characters long which contain atleast one numeric digit, one special character (!@#$%^&*), one uppercase and lowercase letter';
};

export default emailPasswordValidation;
