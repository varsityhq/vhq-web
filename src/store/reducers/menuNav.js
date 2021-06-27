const initialState = {
  menuNav: { show: false },
  overlayLoader: false,
};

const menuNav = (state = initialState, action) => {
  switch (action.type) {
    case "SET_OVERLAY_LOADER":
      return {
        ...state,
        overlayLoader: action.payload,
      };
    case "SHOW_MENU_NAV":
      return Object.assign({}, action.payload);
    default:
      return state;
  }
};

export default menuNav;
