import { createStore, combineReducers } from "redux";
import counterReducer from "./counter";

const reducer = combineReducers({
  //key: value
  counter: counterReducer,
});

const store = createStore(reducer);

export default store;

// UI --> trigger --> Action --> sendto --> Reducer --> Update --> Store (contains State) --> define --> UI
