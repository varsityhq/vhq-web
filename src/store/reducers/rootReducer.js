import { combineReducers } from "redux";
import core from "../reducers/coreReducer";
import menuNav from "../reducers/menuNav";
import dataReducer from "../reducers/dataReducer";

const rootReducer = combineReducers({
  core,
  menuNav,
  data: dataReducer,
});

export default rootReducer;
