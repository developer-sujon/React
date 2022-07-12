import { createStore } from "redux";
import rootReducer from "../reducer/index.js";
import { increment, decrement } from "../action/counterAction.js";
const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));
