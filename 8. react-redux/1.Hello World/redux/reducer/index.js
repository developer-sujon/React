import { combineReducers } from "redux";
import counterReducer from "./counterReducer.js";
const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
