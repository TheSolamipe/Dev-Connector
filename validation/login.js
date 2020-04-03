const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    // setting rule to check email validity
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    // setting rule to make email field compulsory
    errors.email = "Email field is required";
  }
  if (Validator.isEmpty(data.password)) {
    // setting rule to make password field compulsory
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
