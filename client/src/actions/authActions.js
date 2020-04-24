// import React from "react";
import axios from "axios";
// import Loading from "../components/common/Loading";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/users/register`, userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Login - Get User Token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/users/login`, userData)
    .then((res) => {
      //Save to Local Storage
      const { token } = res.data;
      //Set token to local Storage
      localStorage.setItem("jwtToken", token);
      //Set token to AuthHeader
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Set logged in User
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//Log User out
export const logoutUser = () => (dispatch) => {
  //Remove token from local storage
  localStorage.removeItem("jwtToken");
  //Remove auth header for future requests
  setAuthToken(false);
  //set current user to {} which will also set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
