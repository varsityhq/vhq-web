import axios from "axios";
import { setCookie } from "../../util/cookies";

export const updatetotalproducts = () => ({
  type: "UPDATE_TOTAL_PRODUCTS_AA",
});

export const handleMenuNav = (payload) => ({
  type: "SHOW_MENU_NAV",
  payload,
});
export const overlayLoader = (payload) => ({
  type: "SET_OVERLAY_LOADER",
  payload,
});

export const footerEnabled = (state) => (dispatch) => {
  dispatch({
    type: "FOOTER_ENABLED",
    payload: state,
  });
};

// Authentication Actions

export const changePPLink = (n) => {
  return {
    type: "UPDATE_PROFILE_PIC_LINK",
    payload: n,
  };
};
export const Yosndegree = (n) => {
  return {
    type: "UPDATE_YOS_N_DEG",
    payload: n,
  };
};
export const updateUniColl = (n) => {
  return {
    type: "UPDATE_UNICOLL",
    payload: n,
  };
};
export const updateSOrientation = (n) => {
  return {
    type: "UPDATE_SOr",
    payload: n,
  };
};
export const updateGender = (n) => {
  return {
    type: "UPDATE_GENDER",
    payload: n,
  };
};
export const updateDOB = (n) => {
  return {
    type: "UPDATE_DOB",
    payload: n,
  };
};

export const updatePinfor = (n) => {
  return {
    type: "UPDATE_PI",
    payload: n,
  };
};

export const getAccount = () => (dispatch) => {
  axios
    .get("/get/account")
    .then((data) => {
      console.log(data.data);
      dispatch({
        type: "SET_ACC_DATA",
        payload: data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setAuthState = (state) => (dispatch) => {
  dispatch({
    type: "SET_AUTH_STATE",
    payload: state,
  });
};

export const userCreated = (data) => (dispatch) => {
  setAuthorizationHeader(data);
  window.location.href = "/";
  console.log(data);
};

export const logOutUser = () => (dispatch) => {
  localStorage.removeItem(`vhqat`);
  delete axios.defaults.headers.common[`Authorization`];
  dispatch({ type: "SET_UNAUTHENTICATED" });
};

const setAuthorizationHeader = (token) => {
  const vhqat = `Bearer ${token}`;
  setCookie("vhqat", token.token, 365);
  axios.defaults.headers.common["Authorization"] = vhqat;
};
