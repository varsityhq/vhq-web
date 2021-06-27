import { combineReducers } from "redux";
import core from "../reducers/coreReducer";
import menuNav from "../reducers/menuNav";

const rootReducer = combineReducers({
  core,
  menuNav,
});

export default rootReducer;
