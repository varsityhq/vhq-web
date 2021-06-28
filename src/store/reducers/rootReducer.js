import { combineReducers } from "redux";
import core from "../reducers/coreReducer";
import menuNav from "../reducers/menuNav";
import navDrawer from "./navDrawer";
import dataReducer from "../reducers/dataReducer";

const rootReducer = combineReducers({
  core,
  menuNav,
  drawerData: navDrawer,
  data: dataReducer,
});

export default rootReducer;
