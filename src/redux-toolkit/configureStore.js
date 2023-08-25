import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import toggleSlice from "./toggleSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    toggleStatus: toggleSlice,
    users: usersSlice,
  },
});

export default store;
