const initialData = {
  profilesData: [],
  myPosts: [],
  myPosts_loading: true,
};

const dataReducer = (state = initialData, actions) => {
  switch (actions.type) {
    case "SET_MY_POSTS":
      return {
        ...state,
        myPosts: actions.payload,
        myPosts_loading: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
