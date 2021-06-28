const initialState = {
  state: {
    post: false,
  },
  anchor: "",
};

const navDrawer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_NAV_DRAWER":
      let newState;
      const { event, anchor, open } = action.payload;
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      newState = {
        state: {
          ...state.state,
          [anchor]: open,
        },
        anchor,
      };
      console.log(newState);

      return Object.assign({}, newState);
    default:
      return state;
  }
};

export default navDrawer;
