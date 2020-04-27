import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import { TextFieldGroup } from "../common/TextFieldGroup";
// import { TextAreaGroup } from "../common/TextAreaGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      fieldofstudy: "",
      degree: "",
      location: "",
      to: "",
      from: "",
      current: false,
      description: "",
      errors: {},
      disabled: false,
    };
  }
  render() {
    // const { errors } = this.state;
    return (
      <div className="add-education">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go back
              </Link>
              <h1 className="display-4 text-center">Add Education</h1>
              <p className="lead text-center">
                Add academic experience that you have had in the past or current
              </p>
              <small className="d-block-pb-3">* = required fields</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEducation.propTypes = {
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  profile: state.profile,
});

export default connect(mapStateToProps)(withRouter(AddEducation));
