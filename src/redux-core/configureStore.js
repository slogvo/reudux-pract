import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import toggleReducer from "./toggleReducer";

const reducer = combineReducers({
  toggleStatus: toggleReducer,
  counter: counterReducer,
});

const store = createStore(reducer);

export default store;
