const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    //setting rule for number of characters for name field
    errors.name = "Name must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.name)) {
    // setting rule to make name field compulsory
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.email)) {
    // setting rule to make email field compulsory
    errors.email = "Email field is required";
  }
  if (!Validator.isEmail(data.email)) {
    // setting rule to check email validity
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.password)) {
    // setting rule to make password field compulsory
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    //setting rule for number of characters for password field
    errors.password = "Password must be atleast 6 characters";
  }
  if (Validator.isEmpty(data.password2)) {
    // setting rule to make password2 field compulsory
    errors.password2 = "Confirm your password";
  }
  if (!Validator.equals(data.password, data.password2)) {
    //setting rule to check if password matches
    errors.password2 = "passwords must match ";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
