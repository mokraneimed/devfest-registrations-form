export const requiredInput = (value, inputName) => {
  let valid = true;
  let errorMesage = null;
  if (value.length === 0 || value === null) {
    valid = false;
    errorMesage = inputName + " is required !";
  }

  return {
    errorMesage: errorMesage,
    valid: valid,
  };
};

export const textLength = (value, inputName) => {
  let valid = true;
  let errorMesage = null;
  if (value.length < 5) {
    valid = false;
    errorMesage = inputName + " must have at least 5 characters !";
  }

  return {
    errorMesage: errorMesage,
    valid: valid,
  };
};

export const validateEmail = (email) => {
  let valid = true;
  let errorMesage = null;
  if (email.length < 5) {
    valid = false;
    errorMesage = "email not valid !";
  }

  return {
    errorMesage: errorMesage,
    valid: valid,
  };
};

export const validatePhoneNumber = (number) => {
  let valid = true;
  let errorMesage = null;
  if (number.length != 10) {
    valid = false;
    errorMesage = "phoneNumber must have 10 digits !";
  }

  return {
    errorMesage: errorMesage,
    valid: valid,
  };
};

export const validatetextInput = (inputValue, inputName, inputType) => {
  const isRequired = requiredInput(inputValue, inputName);
  if (!isRequired.valid)
    return { valid: false, errorMesage: isRequired.errorMesage };
  if (inputType === "email") {
    const isValidEmail = validateEmail(inputValue);
    if (!isValidEmail.valid)
      return { valid: false, errorMesage: isValidEmail.errorMesage };
  }
  if (inputType === "phonenumber") {
    const isValidNumber = validatePhoneNumber(inputValue);
    if (!isValidNumber.valid)
      return { valid: false, errorMesage: isValidNumber.errorMesage };
  }
  const isLong = textLength(inputValue, inputName);
  if (!isLong.valid) return { valid: false, errorMesage: isLong.errorMesage };


  return { valid: true, errorMesage: null };
};
