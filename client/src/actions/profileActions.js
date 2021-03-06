import axios from "axios";

import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER,
  GET_PROFILES,
} from "./types";

//Get current profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/profile`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    );
};

//Create Profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/profile`, profileData)
    .then((res) => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Add Experience
export const addExperience = (expData, history) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/profile/experience`, expData)
    .then((res) => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Add Education
export const addEducation = (expData, history) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/profile/education`, expData)
    .then((res) => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Delete Experience
export const deleteExperience = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_BASE_URL}/api/profile/experience/${id}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Delete Education
export const deleteEducation = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_BASE_URL}/api/profile/education/${id}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Delete Account & profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm("Are you sure? This CAN NOT be undone!")) {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/api/profile`)
      .then((res) =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

//Get All Profiles
export const getProfiles = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/profile/all`)
    .then((res) =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILES,
        payload: null,
      })
    );
};

//Get Profile by handle
export const getProfileByHandle = (handle) => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/profile/handle/${handle}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: null,
      })
    );
};

//Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

//Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};
