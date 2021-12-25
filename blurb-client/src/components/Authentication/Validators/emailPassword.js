const emailPasswordValidation = (field, errors) => {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  const requiredFields = ['email', 'password'];

  requiredFields.forEach(requiredField => {
    if (!field[requiredField])
      errors[
        requiredField
      ] = `${requiredField.toUpperCase()} field can't be left empty.`;
  });

  if (field.email && !field.email.match(EMAIL_REGEX))
    errors.email = 'Email entered is not a valid email';

  if (field.password && !field.password.match(PASSWORD_REGEX))
    errors.password =
      'Password must be 8 characters long which contain atleast one numeric digit, one special character (!@#$%^&*), one uppercase and lowercase letter';
};

export default emailPasswordValidation;
