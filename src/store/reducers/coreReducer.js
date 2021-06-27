const initialData = {
  authenticated: null,
  accData: null,
  showFooterMenu: true,
};

const coreReducer = (state = initialData, actions) => {
  switch (actions.type) {
    case "UPDATE_PROFILE_PIC_LINK":
      return {
        ...state,
        accData: {
          ...state.accData,
          profilepic: actions.payload,
        },
      };
    case "UPDATE_YOS_N_DEG":
      return {
        ...state,
        accData: {
          ...state.accData,
          degree: actions.payload.degree,
          yearOfStudy: actions.payload.yearOfStudy,
        },
      };
    case "UPDATE_UNICOLL":
      return {
        ...state,
        accData: {
          ...state.accData,
          university: actions.payload.university,
        },
      };
    case "UPDATE_SOr":
      return {
        ...state,
        accData: {
          ...state.accData,
          show_sorientation: actions.payload.show_sorientation,
          s_orientation: actions.payload.s_orientation,
        },
      };
    case "UPDATE_GENDER":
      return {
        ...state,
        accData: {
          ...state.accData,
          gender: actions.payload.gender,
        },
      };
    case "UPDATE_DOB":
      return {
        ...state,
        accData: {
          ...state.accData,
          age: actions.payload.age,
          dob: actions.payload.dob,
        },
      };
    case "UPDATE_PI":
      return {
        ...state,
        accData: {
          ...state.accData,
          firstname: actions.payload.firstname,
          surname: actions.payload.surname,
        },
      };
    case "SET_ACC_DATA":
      return {
        ...state,
        accData: actions.payload,
      };

    case "SET_AUTH_STATE":
      return {
        ...state,
        authenticated: actions.payload,
      };
    case "FOOTER_ENABLED":
      return {
        ...state,
        showFooterMenu: actions.payload,
      };
    default:
      return state;
  }
};

export default coreReducer;
