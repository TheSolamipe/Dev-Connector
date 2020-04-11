const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.website = !isEmpty(data.website) ? data.website : "";
  data.youtube = !isEmpty(data.youtube) ? data.youtube : "";
  data.twitter = !isEmpty(data.twitter) ? data.twitter : "";
  data.facebook = !isEmpty(data.facebook) ? data.facebook : "";
  data.instagram = !isEmpty(data.instagram) ? data.instagram : "";
  data.linkedin = !isEmpty(data.linkedin) ? data.linkedin : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    // setting rule to check handle length
    errors.handle = "Handle needs between 2 to 40 characters";
  }
  if (Validator.isEmpty(data.handle)) {
    // setting rule to make handle field compulsory
    errors.handle = "Profile handle is required";
  }
  if (Validator.isEmpty(data.status)) {
    // setting rule to make status field compulsory
    errors.status = "status field is required";
  }
  if (Validator.isEmpty(data.skills)) {
    // setting rule to make skills field compulsory
    errors.skills = "skills field is required";
  }
  // if (Validator.isEmpty(data.company)) {
  //   // setting rule to make company field compulsory
  //   errors.company = "company field is required";
  // }
  if (!Validator.isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }
  if (!Validator.isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }
  if (!Validator.isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }
  if (!Validator.isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }
  if (!Validator.isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }
  if (!Validator.isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
