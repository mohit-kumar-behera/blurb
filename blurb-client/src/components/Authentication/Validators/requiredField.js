const requiredFieldValidation = (requiredFields, fieldValObj, errors) => {
  requiredFields.forEach(requiredField => {
    if (!fieldValObj[requiredField])
      errors[
        requiredField
      ] = `${requiredField.toUpperCase()} field can't be left empty.`;
  });
};

export default requiredFieldValidation;
