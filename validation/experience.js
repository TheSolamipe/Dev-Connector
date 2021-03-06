const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    // setting rule to make title field compulsory
    errors.title = "Job title is required";
  }
  if (Validator.isEmpty(data.company)) {
    // setting rule to make company field compulsory
    errors.company = "experience company field is required";
  }
  if (Validator.isEmpty(data.from)) {
    // setting rule to make from field compulsory
    errors.from = "from date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
