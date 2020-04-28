import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../common/Loading";
import { getProfileByHandle } from "../../actions/profileActions";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";

class Profile extends Component {
  componentDidMount(props) {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Loading />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-light mb-3 float-left">
                Back to Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <ProfileHeader profile={profile} />
          <ProfileAbout />
          <ProfileCreds />
          <ProfileGithub />
        </div>
      );
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);