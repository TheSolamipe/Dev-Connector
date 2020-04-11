const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  const errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    // setting rule to check text length
    errors.text = "Post needs between 10 to 300 characters";
  }
  if (Validator.isEmpty(data.text)) {
    // setting rule to make text field compulsory
    errors.text = "Post text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
