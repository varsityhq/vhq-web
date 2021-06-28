import axios from "axios";
import { setCookie } from "../../util/cookies";

export const setUniColl = (n) => (dispatch) => {
  dispatch({
    type: "SET_OVERLAY_LOADER",
    payload: true,
  });

  axios
    .post(`/account/update/university`, {
      university: n,
    })
    .then((data) => {
      dispatch({
        type: "UPDATE_UNICOLL",
        payload: { university: n },
      });

      dispatch({
        type: "SET_OVERLAY_LOADER",
        payload: false,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: "SET_OVERLAY_LOADER",
        payload: false,
      });
    });
};
export const setAudience = (n) => (dispatch) => {
  dispatch({
    type: "SET_OVERLAY_LOADER",
    payload: true,
  });

  axios
    .get(`/settings/setaudience/${n}`)
    .then((data) => {
      dispatch({
        type: "SET_POST_AUDIENCE",
        payload: n,
      });

      dispatch({
        type: "SET_OVERLAY_LOADER",
        payload: false,
      });
    })
    .catch((err) => {
      dispatch({
        type: "SET_OVERLAY_LOADER",
        payload: false,
      });
    });
};
export const getMyPosts = () => (dispatch) => {
  axios
    .get("/profile/posts")
    .then((data) => {
      dispatch({
        type: "SET_MY_POSTS",
        payload: data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updatetotalproducts = () => ({
  type: "UPDATE_TOTAL_PRODUCTS_AA",
});

export const handleMenuNav = (payload) => ({
  type: "SHOW_MENU_NAV",
  payload,
});
export const handleNavDrawer = (payload) => ({
  type: "SHOW_NAV_DRAWER",
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
