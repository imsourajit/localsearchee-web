import ApiManager from "../Managers/ApiManager";

export const VALIDATE_USER = "VALIDATE_USER"


export const authenticate = (params, onSuccess, onFailure) => dispatch =>
  ApiManager.apiCall(
    dispatch,
    "GET",
    "VALIDATE_USER",
    "",
    "/login",
    params,
    onSuccess,
    onFailure,
  );



export const registerUser = (params, onSuccess, onFailure) => dispatch =>
  ApiManager.apiCall(
    dispatch,
    "POST",
    "REGISTER_USER",
    "",
    "/signup",
    params,
    onSuccess,
    onFailure,
  );



export const verifyPhoneNumber = (params, onSuccess, onFailure) => dispatch =>
  ApiManager.apiCall(
    dispatch,
    "POST",
    "VERIFY_PHONE",
    "",
    "/sendOtp",
    params,
    onSuccess,
    onFailure,
  );


export const validateOtp = (params, onSuccess, onFailure) => dispatch =>
  ApiManager.apiCall(
    dispatch,
    "POST",
    "VALIDATE_OTP",
    "",
    "/validateOtp",
    params,
    onSuccess,
    onFailure,
  );
